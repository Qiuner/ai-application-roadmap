export type UiLang = 'en' | 'zh'
export const PHASE_VALUES = ['emerging', 'mainstream', 'legacy'] as const
export type TimelinePhase = (typeof PHASE_VALUES)[number]
export const TREND_VALUES = ['rising', 'stable', 'absorbed', 'shrinking', 'obsolete'] as const
export type TimelineTrend = (typeof TREND_VALUES)[number]
export const SIGNAL_VALUES = ['over-hyped', 'under-rated', 'over-scoped', 'well-calibrated'] as const
export type TimelineSignal = (typeof SIGNAL_VALUES)[number]
export type AuthoredBy = 'human' | 'ai-assisted' | 'ai-generated' | 'unknown'
export const ADOPTION_EFFORT_VALUES = ['ready-to-use', 'integration-heavy', 'engineering-heavy'] as const
export type AdoptionEffort = (typeof ADOPTION_EFFORT_VALUES)[number]

export const PHASE_LABELS: Record<UiLang, Record<TimelinePhase, string>> = {
  zh: {
    emerging: '萌芽期',
    mainstream: '成熟期',
    legacy: '遗留期',
  },
  en: {
    emerging: 'Emerging',
    mainstream: 'Mainstream',
    legacy: 'Legacy',
  },
}

export const TREND_LABELS: Record<UiLang, Record<TimelineTrend, string>> = {
  zh: {
    rising: '上升中',
    stable: '趋于稳定',
    absorbed: '被吸收',
    shrinking: '萎缩中',
    obsolete: '已淘汰',
  },
  en: {
    rising: 'Rising',
    stable: 'Stable',
    absorbed: 'Absorbed',
    shrinking: 'Shrinking',
    obsolete: 'Obsolete',
  },
}

export const SIGNAL_LABELS: Record<UiLang, Record<TimelineSignal, string>> = {
  zh: {
    'over-hyped': '被高估',
    'under-rated': '被低估',
    'over-scoped': '边界模糊',
    'well-calibrated': '认知准确',
  },
  en: {
    'over-hyped': 'Over-hyped',
    'under-rated': 'Under-rated',
    'over-scoped': 'Over-scoped',
    'well-calibrated': 'Well-calibrated',
  },
}

export const AUTHORED_BY_LABELS: Record<UiLang, Record<AuthoredBy, string>> = {
  zh: {
    human: '人工撰写',
    'ai-assisted': 'AI辅助生成',
    'ai-generated': 'AI生成',
    unknown: '',
  },
  en: {
    human: 'Human',
    'ai-assisted': 'AI-assisted',
    'ai-generated': 'AI-generated',
    unknown: '',
  },
}

export const ADOPTION_EFFORT_LABELS: Record<UiLang, Record<AdoptionEffort, string>> = {
  zh: {
    'ready-to-use': '安装下就能使用',
    'integration-heavy': '需要配置才能使用',
    'engineering-heavy': '需要系统级开发与长期维护',
  },
  en: {
    'ready-to-use': 'Ready-to-Use',
    'integration-heavy': 'Integration-Heavy',
    'engineering-heavy': 'Engineering-Heavy',
  },
}
