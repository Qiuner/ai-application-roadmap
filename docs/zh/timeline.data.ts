import { createTimelineLoader, type TimelineItem } from '../timeline.shared'

declare const data: TimelineItem[]
export { data }

export default createTimelineLoader('zh/timeline/*.md')
