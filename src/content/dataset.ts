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

/** RQ1 pipeline of the Programming by Chat paper, Section 3.2. */
export const intentMethod = [
  {
    step: '1',
    title: 'Codebook',
    detail: '4 rounds of iterative sampling and coding, 3 researchers',
    result: '7 categories, 20 subcategories',
  },
  {
    step: '2',
    title: 'LLM classification',
    detail: 'GPT-5 mini, multi-label, one turn of prior context',
    result: 'All 74,998 messages labeled',
  },
  {
    step: '3',
    title: 'Human validation',
    detail: '400 stratified messages, 2 independent annotators',
    result: 'Cohen κ = 0.669, macro F1 = 0.802',
  },
] as const

/**
 * Table 2 of the Programming by Chat paper: behavioral intent taxonomy.
 * `pct` is the percentage of the 74,998 messages carrying that label;
 * multi-labeling means categories sum to more than 100%.
 */
export const intentTaxonomy = [
  {
    name: 'Code Authoring',
    definition: 'Produce, modify, or adjust code.',
    pct: 34.53,
    subs: [
      {
        name: 'New Implementation',
        pct: 5.86,
        example: 'build a landing page with a signup form',
      },
      {
        name: 'Iterative Modification',
        pct: 24.84,
        example: 'Can we convert back to cmdliner?',
      },
      {
        name: 'Alignment Correction',
        pct: 7.21,
        example: 'Why aren\'t you following @user-preferences.mdc?',
      },
    ],
  },
  {
    name: 'Failure Reporting',
    definition: 'Report something broken or behaving unexpectedly.',
    pct: 24.0,
    subs: [
      {
        name: 'Log Paste',
        pct: 8.84,
        example: 'TypeError: cannot read properties of undefined',
      },
      {
        name: 'Symptom Description',
        pct: 14.77,
        example: 'table doesn\'t update until I refresh',
      },
      {
        name: 'Error Persistence',
        pct: 3.76,
        example: 'still stuck',
      },
    ],
  },
  {
    name: 'Inquiry',
    definition: 'Seek information or advice without requesting code.',
    pct: 19.17,
    subs: [
      {
        name: 'Planning & Consultation',
        pct: 7.81,
        example: 'should this live in the API layer or the client?',
      },
      {
        name: 'Project Comprehension',
        pct: 8.19,
        example: 'what is calling combinedUrlActions?',
      },
      {
        name: 'General Knowledge Query',
        pct: 3.56,
        example: 'what does useEffect\'s cleanup function do?',
      },
    ],
  },
  {
    name: 'Delegation',
    definition: 'Workflow actions beyond authoring code.',
    pct: 16.48,
    subs: [
      {
        name: 'Documentation',
        pct: 6.85,
        example: 'write the remaining work into TODO.md',
      },
      {
        name: 'Toolchain Operation',
        pct: 10.5,
        example: 'start the dev server and install the missing package',
      },
    ],
  },
  {
    name: 'Context Specification',
    definition: 'Shape what the agent knows or how it may act.',
    pct: 14.08,
    subs: [
      {
        name: 'Information Injection',
        pct: 8.46,
        example: 'see the attached openapi.yaml',
      },
      {
        name: 'Behavior Specification',
        pct: 6.14,
        example: 'only analyze; do not modify the code',
      },
    ],
  },
  {
    name: 'Workflow Control',
    definition: 'Manage session pace or state, no new technical content.',
    pct: 11.47,
    subs: [
      {
        name: 'Confirmation',
        pct: 2.65,
        example: 'works',
      },
      {
        name: 'Continuation',
        pct: 5.54,
        example: 'continue',
      },
      {
        name: 'Deferred Debugging',
        pct: 0.74,
        example: 'fix it',
      },
      {
        name: 'Deferred Implementation',
        pct: 0.78,
        example: 'edit it',
      },
      {
        name: 'Sentiment Expression',
        pct: 2.05,
        example: 'thank you!',
      },
    ],
  },
  {
    name: 'Validation',
    definition: 'Ask the agent to evaluate code or execution output.',
    pct: 3.99,
    subs: [
      {
        name: 'Code Review',
        pct: 2.74,
        example: 'Is the current implementation correct in this form?',
      },
      {
        name: 'Runtime Inspection',
        pct: 1.26,
        example: 'run that command and check the results',
      },
    ],
  },
] as const

/** Multi-label prevalence across the same 74,998 messages. */
export const intentMultiLabel = {
  share: '29.87%',
  mean: 1.33,
} as const

/**
 * RQ1 findings of the Programming by Chat paper, Section 4.1. Headlines are
 * shortened for the slide; every stat and quote comes from the paper.
 */
export const intentFindings = [
  {
    n: '1',
    headline: 'Developers refine, they rarely specify upfront',
    evidence: [
      {
        kind: 'stat',
        value: '24.84% vs 5.86%',
        label: 'Iterative modification against new implementation',
      },
      { kind: 'quote', value: 'Nope, still gray.', label: 'An entire correction turn' },
    ],
  },
  {
    n: '2',
    headline: 'Developers report the symptom, the agent does the diagnosis',
    evidence: [
      { kind: 'stat', value: '24.00%', label: 'of messages report a failure, the second largest category' },
      { kind: 'quote', value: "table doesn't update until I refresh", label: 'No cause, no code' },
    ],
  },
  {
    n: '3',
    headline: 'They ask what the system does, not what the code says',
    evidence: [
      { kind: 'stat', value: '8.19%', label: 'ask to understand the project' },
      {
        kind: 'quote',
        value: "I don't understand the results, does this test now invalidate the hypothesis?",
        label: 'Behavior level, not code level',
      },
    ],
  },
  {
    n: '4',
    headline: 'Checking the work is the rarest thing they ask for',
    evidence: [
      { kind: 'stat', value: '3.99%', label: 'ask the agent to review code or inspect output' },
      {
        kind: 'stat',
        value: '46.19%',
        label: 'of runtime inspections also ask the agent to run the code itself',
      },
    ],
  },
  {
    n: '5',
    headline: 'Documentation is memory, written for the next session',
    evidence: [
      { kind: 'stat', value: '6.85%', label: 'ask for docs, usually TODO.md or PROGRESS.md' },
      {
        kind: 'quote',
        value: 'create a prompt for the next chat to carry out all the next steps',
        label: 'Handoff to a future session',
      },
    ],
  },
  {
    n: '6',
    headline: 'Developers tune how much autonomy the agent gets',
    evidence: [
      {
        kind: 'quote',
        value: 'if you encounter an error, stop and ask me',
        label: 'Hard boundary, 6.14% set one',
      },
      { kind: 'quote', value: 'you decide', label: 'Oversight traded for effort' },
    ],
  },
] as const

/** RQ2 clustering design of the Programming by Chat paper, Section 3.3.1. */
export const clusterMethod = [
  {
    step: '1',
    title: 'Sessions as ordered sequences',
    detail: 'Ordered intent labels, not message text',
    result: '4,864 sessions with 4 or more messages',
  },
  {
    step: '2',
    title: 'Hierarchy-aware edit distance',
    detail: 'Swapping labels costs less inside a category than across',
    result: 'Same label 0, same category 0.5, across 1.0',
  },
  {
    step: '3',
    title: 'K-medoids clustering',
    detail: 'On the precomputed distance matrix',
    result: 'k = 6, chosen by silhouette',
  },
] as const

export const clusterCaveat =
  'Clusters overlap, so read them as prototypes rather than separate classes.'

/**
 * Section 4.2.1: the six session archetypes. Colors and cluster ids match the
 * t-SNE explorer and the paper figures.
 */
export const sessionArchetypes = [
  {
    cluster: 2,
    color: '#55A868',
    name: 'Focused Iterative Refinement',
    share: '23.81%',
    sessions: 1158,
    note: 'Refinement that never turns into debugging.',
  },
  {
    cluster: 1,
    color: '#DD8452',
    name: 'Failure-Driven Debugging',
    share: '19.90%',
    sessions: 968,
    note: 'One change, then error-resolution cycles.',
  },
  {
    cluster: 4,
    color: '#8172B3',
    name: 'Extended Iterative Co-Development',
    share: '18.42%',
    sessions: 896,
    note: 'The long ones, median 27 messages.',
  },
  {
    cluster: 0,
    color: '#4C72B0',
    name: 'Planning & Comprehension',
    share: '15.77%',
    sessions: 767,
    note: 'The agent as thinking partner.',
  },
  {
    cluster: 5,
    color: '#937860',
    name: 'Toolchain-Oriented Operations',
    share: '12.64%',
    sessions: 615,
    note: 'Servers, branches, dependencies, docs.',
  },
  {
    cluster: 3,
    color: '#C44E52',
    name: 'Continuation-Driven Delegation',
    share: '9.46%',
    sessions: 460,
    note: 'Set the task, then just say continue.',
  },
] as const

/** Live cluster explorer shipped with the paper. */
export const clusterExplorer = {
  url: 'https://conversational-programming-clusters.netlify.app/',
  note: 'Every point is a real session. Click one to read its intent sequence.',
} as const

/** Finding 7: session length, Section 4.2.1. */
export const sessionLength = {
  median: 3,
  mean: 6.48,
  max: 156,
  groups: [
    {
      key: 'short',
      title: 'Short sessions',
      range: '3 messages or fewer',
      sessions: '6,715',
      lead: 'One shot, done',
      intents: [
        { name: 'New Implementation', pair: '12.78% vs 4.71%' },
        { name: 'Documentation', pair: '9.75% vs 6.37%' },
        { name: 'Deferred Debugging', pair: '1.98% vs 0.54%' },
      ],
    },
    {
      key: 'long',
      title: 'Long sessions',
      range: '4 messages or more',
      sessions: '4,864',
      lead: 'Reacting to what came back',
      intents: [
        { name: 'Alignment Correction', pair: '7.85% vs 3.41%' },
        { name: 'Error Persistence', pair: '4.21% vs 1.06%' },
        { name: 'Confirmation', pair: '2.95% vs 0.86%' },
      ],
    },
  ],
} as const

/** Finding 9: within-session transitions, Sections 3.3.2 and 4.2.2. */
export const transitions = {
  method:
    'Markov lift: how much more likely a transition is than the target label on its own. Above 1 is reinforced.',
  selfLoop: 'Every subcategory repeats itself more than chance, lift 1.80 to 17.36.',
  longestRun: 'Iterative Modification runs longest, up to 27 consecutive turns.',
  categoryIndex: [
    '1 Code Authoring',
    '2 Failure Reporting',
    '3 Inquiry',
    '4 Context Specification',
    '5 Validation',
    '6 Delegation',
    '7 Workflow Control',
  ],
  loops: [
    {
      name: 'Debugging loop',
      from: 'Symptom Description',
      to: 'Error Persistence',
      forward: '2.87',
      back: '1.70',
    },
    {
      name: 'Validation loop',
      from: 'Toolchain Operation',
      to: 'Runtime Inspection',
      forward: '2.25',
      back: '1.88',
    },
    {
      name: 'Correction',
      from: 'Iterative Modification',
      to: 'Alignment Correction',
      forward: '1.57',
      back: null,
    },
  ],
} as const

/** Finding 10: what a session boundary preserves and what it resets. */
export const sessionBoundaries = {
  keeps: 'Task intent carries over: every subcategory still repeats across the break, lift 1.19 to 20.77.',
  resets: [
    { name: 'Confirmation', within: '6.08', across: 'near 0' },
    { name: 'Error Persistence', within: '5.19', across: '1.19' },
  ],
} as const

/** Finding 11: how opening messages differ from later turns. */
export const sessionOpenings = {
  rows: [
    { name: 'Message length', first: '1,003 chars', later: '499 chars', up: true },
    { name: 'New Implementation', first: '15.89%', later: '4.03%', up: true },
    { name: 'Information Injection', first: '11.82%', later: '7.84%', up: true },
    { name: 'Alignment Correction', first: '0.73%', later: '8.40%', up: false },
    { name: 'Continuation', first: '1.73%', later: '6.24%', up: false },
  ],
  drift:
    'After the opening, Inquiry and Context Specification fall away while Failure Reporting and Delegation rise.',
} as const
