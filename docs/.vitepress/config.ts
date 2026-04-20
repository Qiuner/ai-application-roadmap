import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type DefaultTheme } from 'vitepress'
import { projectBase, projectGithubUrl, projectMeta } from './project-meta'

const docsRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const normalizeTitle = (value: string): string => value.trim().replace(/^['"]|['"]$/g, '')

const extractTitleFromFrontmatter = (content: string): string | null => {
  const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!frontmatterMatch) return null
  const titleLineMatch = frontmatterMatch[1].match(/^\s*title:\s*(.+)\s*$/m)
  if (!titleLineMatch) return null
  return normalizeTitle(titleLineMatch[1])
}

const fallbackTitleFromFilename = (stem: string): string => {
  const withoutDate = stem.replace(/^\d{4}-\d{2}(?:-\d{2})?-/, '')
  return withoutDate
    .split('-')
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ')
}

const buildTimelineSidebarItems = (
  directory: string,
  linkPrefix: '/en/timeline' | '/zh/timeline'
): DefaultTheme.SidebarItem[] => {
  const timelineDir = path.join(docsRoot, directory)
  if (!fs.existsSync(timelineDir)) return []

  return fs
    .readdirSync(timelineDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => entry.name)
    .sort((a, b) => b.localeCompare(a))
    .map((filename) => {
      const stem = filename.replace(/\.md$/, '')
      const dateLabel = stem.match(/^\d{4}-\d{2}/)?.[0] ?? ''
      const filePath = path.join(timelineDir, filename)
      const source = fs.readFileSync(filePath, 'utf-8')
      const title = extractTitleFromFrontmatter(source) ?? fallbackTitleFromFilename(stem)
      const text = dateLabel ? `${dateLabel} ${title}` : title

      return {
        text,
        link: `${linkPrefix}/${stem}`,
      }
    })
}

const timelineSidebarItems = buildTimelineSidebarItems('en/timeline', '/en/timeline')
const zhTimelineSidebarItems = buildTimelineSidebarItems('zh/timeline', '/zh/timeline')

const createHomeHero = (lang: 'en' | 'zh') =>
  lang === 'zh'
    ? {
        name: projectMeta.brandName,
        text: 'AI 应用工程时间轴',
        tagline: '我们记录 AI 替代人类智能的过程：它如何开始、如何扩张、又将把谁率先甩在身后。',
        actions: [
          { theme: 'brand', text: '指南', link: '/zh/guide/' },
          { theme: 'alt', text: '查看 GitHub', link: projectGithubUrl },
        ],
      }
    : {
        name: projectMeta.brandName,
        text: 'The Applied AI Engineering Timeline',
        tagline: 'We document AI replacing human intelligence: how it begins, how it scales, and who gets left behind first.',
        actions: [
          { theme: 'brand', text: 'Guide', link: '/en/guide/' },
          { theme: 'alt', text: 'View on GitHub', link: projectGithubUrl },
        ],
      }

export default defineConfig({
  title: projectMeta.repoName,
  description: projectMeta.siteDescription,
  base: projectBase,
  head: [
    [
      'script',
      {},
      `(() => {
  try {
    const saved = localStorage.getItem('cs-color-scheme')
    const theme = saved === 'lively' || saved === 'warm' ? saved : 'warm'
    document.documentElement.setAttribute('data-color-scheme', theme)
  } catch {
    document.documentElement.setAttribute('data-color-scheme', 'warm')
  }
})()`,
    ],
  ],
  lastUpdated: true,
  transformPageData(pageData) {
    if (pageData.relativePath === 'index.md' || pageData.relativePath === 'en/index.md') {
      pageData.frontmatter.hero = createHomeHero('en')
    }

    if (pageData.relativePath === 'zh/index.md') {
      pageData.frontmatter.hero = createHomeHero('zh')
    }
  },
  themeConfig: {
    search: {
      provider: 'local',
    },
    socialLinks: [{ icon: 'github', link: projectGithubUrl }],
    footer: {
      message: 'Released under the CC BY-SA 4.0 License.',
      copyright: `Copyright © 2026 ${projectMeta.repoName}`,
    },
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/' },
          { text: 'GitHub', link: projectGithubUrl },
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [{ text: 'Overview', link: '/en/guide/' }],
          },
          {
            text: 'Timeline',
            items: timelineSidebarItems,
          },
        ],
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide/' },
          { text: 'GitHub', link: projectGithubUrl },
        ],
        sidebar: [
          {
            text: '指南',
            items: [{ text: '概览', link: '/zh/guide/' }],
          },
          {
            text: '时间轴',
            items: zhTimelineSidebarItems,
          },
        ],
        outlineLabel: '页面导航',
        lastUpdatedText: '最后更新于',
        docFooter: {
          prev: '上一页',
          next: '下一页',
        },
      },
    },
  },
})
