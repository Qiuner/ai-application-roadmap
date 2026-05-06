# Commit Convention

[中文](#中文) | [English](#english)

## 中文

本项目参考 roadmap/content-first 仓库的实践来设计提交前缀规则。

核心原则：

- 本仓库的核心产物是知识内容，但提交前缀仍按“变更语义”划分，而不是按“文件类型”划分。
- 修改 `docs/` 下的文件，不代表一定要使用 `feat`。
- 是否使用 `feat`，取决于这次提交是否新增了读者可感知的新知识单元、新主题或新的内容边界。

### 推荐前缀

- `feat`: 新增一个读者可感知的知识单元、主题、节点或内容能力边界
- `fix`: 修正事实、日期、链接、翻译、示例或错误判断
- `docs`: 优化已有内容表达，不改变核心结论
- `refactor`: 重组内容结构、抽共享配置、统一 schema，不改变知识含义
- `style`: 纯格式调整，如排序、换行、空格、lint/format
- `chore`: 杂项维护，不直接影响知识内容表达
- `build`: 构建、脚本、发布流程、生成逻辑相关调整
- `test`: 测试补充、校验规则补充、测试基线调整

### Scope 建议

- `timeline`: 时间线节点、时间线 flags、时间线摘要
- `content`: 指南页、长文说明、知识内容组织
- `schema`: frontmatter 字段、校验规则、数据结构
- `i18n`: 中英文对齐、翻译、语言路由相关内容
- `readme`: 仓库说明文档
- `build`: VitePress 构建、脚本、自动生成逻辑

### 使用规则

1. 新增知识点、新主题、新节点，使用 `feat`
2. 原有内容只是改写介绍、提升清晰度、压缩废话、增强可读性，使用 `docs`
3. 原有内容存在事实、日期、来源、链接、翻译错误，使用 `fix`
4. 不改变内容结论，只调整结构、抽共享逻辑、统一中英文 schema，使用 `refactor`
5. 只有格式变化，没有信息变化，使用 `style`

### 和本仓库最相关的判断示例

- 优化 `docs/timeline.flags.ts` 中 `mcp`、`tool-use` 的介绍文案：
  - `docs(timeline): refine mcp and tool-use descriptions`
- 修正某个时间线节点的采用时间：
  - `fix(timeline): correct function-calling adoption date`
- 新增一个 MCP 相关时间线节点：
  - `feat(timeline): add MCP adoption milestone`
- 统一中英文时间线 frontmatter 结构：
  - `refactor(schema): unify timeline metadata across zh and en`
- 只做格式化：
  - `style(content): normalize markdown formatting`

### 推荐格式

```text
type(scope): short summary
```

例如：

```text
feat(timeline): add MCP adoption milestone
fix(content): update broken source links for rag article
docs(timeline): refine mcp and tool-use descriptions
refactor(schema): unify timeline metadata across zh and en
```

### 不推荐的做法

- 不要因为改的是文档，就一律使用 `feat`
- 不要把事实修正写成 `docs`
- 不要把结构整理写成 `feat`
- 不要把大范围杂项提交混成一个无法判断语义的 commit

## English

This repository follows a roadmap/content-first commit convention.

Core rule:

- The main product of this repo is knowledge content, but commit prefixes should still reflect the semantic nature of the change, not just the file type.
- Editing files under `docs/` does not automatically mean `feat`.
- Use `feat` only when the change introduces a reader-visible knowledge unit, topic, node, or content boundary expansion.

### Recommended Types

- `feat`: add a reader-visible knowledge unit, topic, node, or content capability boundary
- `fix`: correct facts, dates, links, translations, examples, or judgment errors
- `docs`: improve wording and clarity without changing the core conclusion
- `refactor`: reorganize structure, centralize shared config, or unify schema without changing meaning
- `style`: formatting-only changes such as ordering, spacing, line wrapping, lint/format
- `chore`: maintenance work that does not directly change knowledge content
- `build`: changes to build scripts, release flow, generation logic, or docs tooling
- `test`: validation coverage, tests, or baseline updates

### Suggested Scopes

- `timeline`
- `content`
- `schema`
- `i18n`
- `readme`
- `build`

### Usage Rules

1. Use `feat` for new knowledge points, new topics, or new timeline nodes
2. Use `docs` when the change only improves clarity, wording, or readability
3. Use `fix` when the existing content is wrong
4. Use `refactor` when structure or shared logic changes but meaning stays the same
5. Use `style` when only formatting changes

### Repo-Specific Examples

- Refine `mcp` and `tool-use` descriptions in `docs/timeline.flags.ts`:
  - `docs(timeline): refine mcp and tool-use descriptions`
- Correct an adoption date in a timeline node:
  - `fix(timeline): correct function-calling adoption date`
- Add a new MCP timeline node:
  - `feat(timeline): add MCP adoption milestone`
- Unify zh/en frontmatter structure:
  - `refactor(schema): unify timeline metadata across zh and en`

### Preferred Format

```text
type(scope): short summary
```
