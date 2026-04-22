<div align="center">

# ai-application-roadmap

[中文](./README.md) | [English](./README_EN.md)

## 访问网站

点击即可访问：
[https://qiuner.github.io/ai-application-roadmap/zh/](https://qiuner.github.io/ai-application-roadmap/zh/)

AI 正在替代人类智能。

AGI 来临之前，希望这里能帮你少走一些弯路。

</div>

## 英文摘要

`ai-application-roadmap` is a bilingual map of AI application engineering. It tracks not only the evolution of MCP, Function Calling, Skills, Harness, and Multi-agent systems, but also practical AI usage patterns and vibe coding workflows.

If you want the full English introduction, go to [README_EN.md](./README_EN.md).

## 为什么做这个站

其实有个小故事。

今年我发了一段视频，介绍 2026 年流行的写代码方式：从古法编程到多 Agent 协同的七种方式。评论区里有人从未听说过 `multi-agent`，有人对 AI 的认知还停在“网页对话框”阶段。追踪大模型发布的网站很多，但几乎没有人在系统记录**除大模型本身之外的应用技术演进**。我们缺的不是更多“新功能快讯”，而是一张能回答“我现在在哪、下一步该往哪走”的技术地图。

`ai-application-roadmap` 就是为此而建：不记录模型参数和能力发布本身，还会记录 AI 应用工程、AI 使用方式、vibe coding 工作流如何演进、产生了什么影响、哪些节点值得标记。

这个仓库希望成为一张清晰的 AI 应用路线图，帮你判断自己现在所处的位置，以及下一步值得学习和投入的方向。

## 网站怎么用

- 首页默认按时间倒序展示时间线。
- 通过 `筛选集` 下拉切换两套筛选：
  - 基础筛选：`年份` / `落地门槛` / `推荐` / `关键`
  - 演化判断：`阶段` / `走势` / `认知校准`
- `Guide` 页面会汇总关键技术、概念和实践方法，方便快速扫读。
- 站点使用语言化路由：中文主页是 `/zh/`，英文主页是 `/en/`。

## 这个项目记录什么

- AI 应用工程技术演进：如 MCP、Function Calling、Skills、Harness、Multi-agent。
- AI 的真实使用方式：如何把 AI 用进工作流，而不是只停留在对话框。
- vibe coding 与协作范式：从单人提示词实验，到多 Agent、多工具、多上下文协作。

## 如何参与贡献

1. Fork 本仓库并创建分支。
2. 在 `docs/en/timeline/` 或 `docs/zh/timeline/` 新增节点文件，建议文件名为 `YYYY-MM-topic.md`。
3. 按规范填写 frontmatter。
4. 本地预览并构建：
   - `npm install`
   - `npm run docs:dev`
   - `npm run docs:build`
5. 提交 PR，并说明你的依据、判断和参考资料。

补充说明：

- 新增到 `docs/en/timeline/*.md` 或 `docs/zh/timeline/*.md` 的文件会自动出现在首页时间线。
- 侧边栏时间轴链接由 `docs/.vitepress/config.ts` 根据目录自动生成。

## 治理规则

- `recommended`、`key`、`key_reason` 统一在 `docs/timeline.flags.ts` 中集中维护，不在 markdown frontmatter 中填写。

## 时间轴参数释义

每个时间轴节点文件都支持以下 frontmatter 字段：

- `title`: 节点标题。
- `date`: 时间轴上显示的节点日期（如 `2026-08`）。
  - 定义：使用**应用工程采用拐点**（官方且可验证）的时间，不使用最早学术论文发表时间。
  - 优先级：应用落地相关的官方公告/文档 > 被工程实践采用的官方仓库 release/tag > 可作为工程基线的包管理器首发版本。
  - 保持单一 `date` 字段；其它里程碑时间（如 `0.1.0`、`1.0.0`）写在正文“重要时间点”中展开。
- `year`: 年份（用于年份筛选）。
- `summary`: 首页时间轴卡片上的摘要。
- `phase`: 生命周期阶段，枚举值：`emerging` / `mainstream` / `legacy`。
- `trend`: 演变方向，枚举值：`rising` / `stable` / `absorbed` / `shrinking` / `obsolete`。
- `signal`: 认知校准，枚举值：`over-hyped` / `under-rated` / `over-scoped` / `well-calibrated`。
- `adoption_effort`: 落地门槛分类，固定值三选一：
  - `ready-to-use`（即用型：安装即用或轻配置）
  - `integration-heavy`（集成型：需要明显集成与编排）
  - `engineering-heavy`（工程型：需要系统级开发与长期维护）
- `tags`: 标签数组，用于标签筛选（如 `["mcp", "protocol"]`）。
- `author`: 贡献者标识。
- `maintainer`: 该节点的长期维护者（可选，默认继承 `author`）。
- `authored_by`: 内容来源，枚举值：`human` / `ai-assisted` / `ai-generated`（可选，默认 `unknown`）。
友链:[LINUX.DO](https://linux.do)

## 感谢所有贡献者

<a href="https://github.com/Qiuner/ai-application-roadmap/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Qiuner/ai-application-roadmap" alt="ai-application-roadmap contributors" />
</a>
