/**
 * Dataset facts, taken from the two papers. Every number on the page should
 * come from here so the slides and the papers cannot drift apart.
 */

/** The two collection tools that make public agent logs possible at all. */
export const sources = [
  {
    key: 'specstory',
    name: 'SpecStory',
    url: 'https://specstory.com/',
    path: '.specstory/history/',
    covers: 'IDE + CLI agents',
    agents: 'Cursor, GitHub Copilot, Claude Code, and others',
    note: 'Exports chat history as timestamped Markdown, committed alongside the code.',
    found: 'Found while looking for a way in',
    sessions: '14,789 sessions',
    repos: '1,441 repositories',
    window: 'Sep 2024 to Apr 2026',
    accent: 'primary',
  },
  {
    key: 'entire',
    name: 'Entire.io',
    url: 'https://entire.io/',
    path: 'entire/checkpoints/v1',
    covers: 'Mostly CLI agents',
    agents: 'Claude Code, Codex',
    note: 'Agent hooks link full CLI transcripts and code changes to Git checkpoints on a dedicated branch.',
    found: 'Arrived just after Programming by Chat shipped',
    sessions: '5,785 sessions',
    repos: '198 repositories',
    window: 'Jan to Apr 2026',
    accent: 'error',
  },
] as const

export const sweChat = {
  released: 'April 22, 2026',
} as const

/** Combined dataset behind the misalignment paper. */
export const combined = {
  sessions: '20,574',
  repos: '1,639',
  episodes: '16,118',
  crawled: 'April 30, 2026',
  note: 'No repository appears in both datasets.',
} as const

/** Table 1 of the misalignment paper: agent composition. */
export const agentTable = [
  { modality: 'IDE', agent: 'Cursor', sessions: 3234, turns: 3 },
  { modality: 'IDE', agent: 'GitHub Copilot', sessions: 366, turns: 3 },
  { modality: 'IDE', agent: 'Unknown', sessions: 8631, turns: 3 },
  { modality: 'CLI', agent: 'Claude Code', sessions: 6648, turns: 5 },
  { modality: 'CLI', agent: 'Codex', sessions: 517, turns: 1 },
  { modality: 'CLI', agent: 'OpenCode', sessions: 624, turns: 8 },
  { modality: 'CLI', agent: 'Gemini CLI', sessions: 39, turns: 2 },
  { modality: 'CLI', agent: 'Cursor CLI', sessions: 32, turns: 3 },
  { modality: 'CLI', agent: 'Unknown', sessions: 483, turns: 3 },
] as const

export const modalityTotals = {
  IDE: 12231,
  CLI: 8343,
} as const

/** What the first paper covered, for contrast with the second. */
export const chatDataset = {
  messages: '74,998',
  sessions: '11,579',
  repos: '1,300',
  developers: '899',
  crawled: 'March 4, 2026',
} as const
