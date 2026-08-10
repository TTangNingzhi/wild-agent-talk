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

/* ------------------------------------------------------------------------- *
 * Coding Agent Misalignment (EMNLP 2026, under submission)
 * ------------------------------------------------------------------------- */

/** Section 3.2: what counts as misalignment, and what does not. */
export const misalignScope = {
  definition:
    'An observable breakdown between a developer and a coding agent, visible only when the developer corrects or pushes back.',
  goals: [
    { name: 'Instructions', note: 'What the developer explicitly asked for' },
    { name: 'Intentions', note: 'What the developer actually wanted' },
  ],
  outOfScope:
    'Out of scope: silent rejection, off-chat edits, and the alignment goals chat logs cannot support (preferences, desires, interests, values).',
  frame: 'Alignment goals from Shen et al., 2024',
} as const

/** Section 3.2: one structured record per breakdown, extracted session-wide. */
export const misalignRecord = {
  fields: [
    { key: 'name', value: 'Introduced infinite scroll without usable page navigation' },
    { key: 'alignment_goal', value: 'intention' },
    { key: 'confidence', value: 'high' },
    {
      key: 'description',
      value:
        'The developer asked about pagination; the agent shipped infinite scroll and called it pagination.',
    },
  ],
  evidence: [
    { turn: 77, role: 'User', quote: 'could we paginate?' },
    { turn: 78, role: 'Assistant', quote: "Yes, let's add pagination... and make it scrollable" },
    { turn: 79, role: 'User', quote: 'how do i navigate to the next page!?' },
  ],
  rules: [
    'Whole session at once: pushback in turn 8 only makes sense against turn 3.',
    'Bottom-up, no prescriptive taxonomy at extraction time.',
    'Every episode anchored to verbatim quotes with turn numbers.',
    'Precision over recall.',
  ],
} as const

/** Section 3.3: the two failure patterns a single extraction pass produces. */
export const misalignValidation = {
  patterns: [
    {
      name: 'Normative prior bias',
      share: '42.28%',
      note: 'Flags deviations from its own idea of good agent behavior, with no developer complaint.',
    },
    {
      name: 'Observational blind spots',
      share: '57.72%',
      note: 'Blames the agent using context the log never shows. Invisible agent action alone is 35.68%.',
    },
  ],
  kept: '16,118 of 29,896',
  keptPct: '53.9%',
  precision: '0.93',
  precisionNote: '200 sampled records, 2 annotators, all quotes verbatim',
  recall: '1.77 / 2.00',
  recallNote: 'coverage rated over 30 full sessions',
} as const

/** Section 3.4: four axes, developed over three rounds of abductive coding. */
export const misalignAxes = [
  { code: 'Symptom', note: 'What form the misalignment took', kind: '7 categories, multi-label' },
  { code: 'Cause', note: 'Why it occurred', kind: '7 categories, multi-label' },
  { code: 'Outcome', note: 'Damage severity and where it landed', kind: 'single-label' },
  { code: 'Resolution', note: 'Whether and by whom it was resolved', kind: 'single-label' },
] as const

export const misalignCodebook = {
  rounds: [
    { n: '1', note: 'Two researchers open-code 100 records, reconcile into a first codebook.' },
    { n: '2', note: 'LLM labels everything, 10 records per subcategory reviewed. Four subcategories revised.' },
    { n: '3', note: 'Merge inconsistent instruction into underspecified instruction. Saturation.' },
  ],
  ira: '0.83',
  accuracy: '0.81',
  quality: 'Percent agreement between two researchers, and LLM judge accuracy against the adjudicated gold standard.',
} as const

/** Live record browser shipped with the paper. */
export const misalignAtlas = {
  url: 'https://coding-agent-misalignment.netlify.app/',
  note: 'Every extracted record, filterable by all four annotation axes. Permissively licensed repositories only, so its counts are a subset of the paper.',
} as const

/** Table 2: symptom distribution, all / IDE / CLI. */
export const misalignSymptoms = [
  { code: 'S3', name: 'Developer Constraint Violation', desc: 'Violates an explicit developer constraint', all: 38.33, ide: 32.26, cli: 49.49 },
  { code: 'S2', name: 'Misread Developer Intent', desc: 'Acts on a wrong interpretation of the request', all: 26.95, ide: 28.39, cli: 24.31 },
  { code: 'S7', name: 'Inaccurate Self-Reporting', desc: 'Misreports the status of its own work', all: 22.58, ide: 20.36, cli: 26.66 },
  { code: 'S5', name: 'Faulty Implementation', desc: 'Produces logically or syntactically wrong code', all: 17.82, ide: 22.89, cli: 8.49 },
  { code: 'S1', name: 'Wrong Project Diagnosis', desc: 'Misreads the codebase, state, or behavior', all: 11.56, ide: 12.78, cli: 9.3 },
  { code: 'S4', name: 'Self-Initiated Overreach', desc: 'Takes actions beyond the stated scope', all: 10.2, ide: 11.5, cli: 7.8 },
  { code: 'S6', name: 'Operational Execution Error', desc: 'Commands or tool calls are malformed', all: 2.87, ide: 2.09, cli: 4.32 },
] as const

/** Table 2: cause distribution, all / IDE / CLI. */
export const misalignCauses = [
  { code: 'C6', name: 'Instruction-Following Failure', desc: 'Fails to follow a clearly received instruction', all: 36.49, ide: 29.96, cli: 48.5 },
  { code: 'C7', name: 'Cannot Determine', desc: 'Root cause not inferable from the log', all: 26.85, ide: 28.97, cli: 22.94 },
  { code: 'C1', name: 'Underspecified Instruction', desc: 'Instruction is ambiguous or underspecified', all: 15.36, ide: 17.65, cli: 11.15 },
  { code: 'C3', name: 'Premature Action', desc: 'Acts before gathering enough project state', all: 11.11, ide: 11.94, cli: 9.58 },
  { code: 'C2', name: 'Scope Overreach', desc: 'Expands scope beyond what was requested', all: 9.47, ide: 10.65, cli: 7.29 },
  { code: 'C4', name: 'Context Loss', desc: 'Prior context not carried across turns', all: 4.3, ide: 4.37, cli: 4.18 },
  { code: 'C5', name: 'Default-Driven Override', desc: 'Defaults override an explicit constraint', all: 2.44, ide: 2.63, cli: 2.1 },
] as const

export const misalignLabelNote =
  'Symptom and cause are multi-label, so columns sum past 100%. S8 (Other, 0.34%) is excluded.'

/** Section 4.1 findings. */
export const misalignFormFindings = [
  {
    n: 1,
    headline: 'The top failure is not wrong code, it is an ignored instruction',
    evidence: [
      { value: '38.33%', label: 'Developer Constraint Violation, the largest symptom' },
      { value: '73.68%', label: 'of those trace to plain instruction-following failure' },
    ],
    quote: 'Constraints span collaboration style, implementation strategy, and unauthorized destructive commands.',
  },
  {
    n: 2,
    headline: 'Misread intent is a plausible guess at a vague ask',
    evidence: [
      { value: '26.95%', label: 'Misread Developer Intent' },
      { value: '44.10%', label: 'follow an underspecified instruction the agent resolved on its own' },
    ],
    quote: '"could we paginate?" became infinite scroll.',
  },
  {
    n: 3,
    headline: 'Agents report success they never verified',
    evidence: [
      { value: '22.58%', label: 'Inaccurate Self-Reporting' },
      { value: '27.56%', label: 'of those also claim a developer constraint was met' },
    ],
    quote: 'A partial or unverified state is consistently turned into a completion claim.',
  },
  {
    n: 4,
    headline: 'Faulty code is a minority symptom, but it is the one that breaks things',
    evidence: [
      { value: '17.82%', label: 'Faulty Implementation, and only 8.49% in CLI' },
      { value: '25.00%', label: 'of those reach real system damage, the highest of any symptom' },
    ],
    quote: 'Regressions, failed tests, compilation errors, API misuse.',
  },
  {
    n: 5,
    headline: 'Overreach turns a question into an edit',
    evidence: [
      { value: '10.20%', label: 'Self-Initiated Overreach, 66.99% caused by scope overreach' },
      { value: '13.33%', label: 'developer takeover rate, the highest of any symptom' },
    ],
    quote: 'Asking why slide 2 is landscape got the deck rewritten.',
  },
  {
    n: 6,
    headline: 'A quarter of failures have no cause the log can show',
    evidence: [
      { value: '26.85%', label: 'Cannot Determine' },
      { value: '49.50% / 48.17%', label: 'of faulty implementation and self-reporting episodes' },
    ],
    quote: 'The failure is visible in the conversation; its source is hidden in project or execution state.',
  },
] as const

/** Table 3: outcome and resolution. */
export const misalignOutcomes = {
  severity: [
    { code: 'DS1', name: 'Effort and trust cost only', pct: 90.5 },
    { code: 'DS2', name: 'System damage, easily reversed', pct: 8.44 },
    { code: 'DS4', name: 'Unobservable', pct: 0.91 },
    { code: 'DS0', name: 'No damage', pct: 0.08 },
    { code: 'DS3', name: 'System damage, hard to reverse', pct: 0.07 },
  ],
  locus: [
    { code: 'DL1', name: 'Code or task state', pct: 75.8 },
    { code: 'DL2', name: 'Project state', pct: 18.51 },
    { code: 'DL4', name: 'External state', pct: 3.57 },
    { code: 'DL3', name: 'Environment or config', pct: 2.11 },
  ],
  resolver: [
    { code: 'RV2', name: 'Agent, after developer pushback', pct: 91.49 },
    { code: 'RV3', name: 'Developer took over', pct: 5.52 },
    { code: 'RV1', name: 'Agent self-corrected', pct: 2.99 },
  ],
  locusNote: 'Damage locus is conditioned on system damage (n = 1,372).',
  resolverNote: 'Resolver is conditioned on resolved episodes (n = 1,504).',
} as const

/** Section 4.2 findings. */
export const misalignOutcomeFindings = [
  {
    n: 7,
    headline: 'Misalignment mostly costs developer effort, not the system',
    evidence: [
      { value: '90.50%', label: 'cost effort and trust only: redirect, correct, reassess' },
      { value: '11 episodes', label: 'are hard to reverse, out of 16,118' },
    ],
    quote: 'The rare hard cases cross an authorization boundary: releases finalized, Git history rewritten, user pools destroyed.',
  },
  {
    n: 8,
    headline: 'When damage does land, it lands on code, unless it escapes the codebase',
    evidence: [
      { value: '75.80%', label: 'of damaged episodes hit code or task state' },
      { value: '45.45%', label: 'of the hard-to-reverse ones hit external state instead' },
    ],
    quote: 'Recovery gets harder the moment misalignment leaves the local codebase.',
  },
  {
    n: 9,
    headline: 'Almost nothing gets fixed until the developer says so',
    evidence: [
      { value: '91.49%', label: 'of resolved episodes needed explicit pushback' },
      { value: '2.99%', label: 'were self-corrected by the agent' },
    ],
    quote: 'Resolution is visible for only 9.33% of episodes: logs report failures more reliably than successes.',
  },
] as const

/** Section 4.3: IDE versus CLI. */
export const misalignModality = {
  rows: [
    { name: 'Median user turns', ide: '3', cli: '5' },
    { name: 'Misalignment per user turn', ide: '0.132', cli: '0.051' },
    { name: 'S3. Constraint violation', ide: '32.26%', cli: '49.49%' },
    { name: 'S5. Faulty implementation', ide: '22.89%', cli: '8.49%' },
    { name: 'Damage to code or task state', ide: '83.67%', cli: '58.85%' },
    { name: 'Damage to project or external state', ide: '14.30%', cli: '38.85%' },
  ],
  note: 'All differences significant at p < 0.001.',
  findings: [
    {
      n: 10,
      headline: 'IDE misaligns more often per turn, CLI misaligns further from the code',
      evidence: [
        { value: '0.132 vs 0.051', label: 'misalignment per user turn, IDE against CLI' },
        { value: '38.85% vs 14.30%', label: 'CLI damage reaching project or external state' },
      ],
      quote: 'Tight copilot-style collaboration versus broader delegated tasks with deploy and version-control reach.',
    },
    {
      n: 11,
      headline: 'CLI drifts from constraints, IDE writes wrong code',
      evidence: [
        { value: '49.49% vs 32.26%', label: 'constraint violation, CLI against IDE' },
        { value: '22.89% vs 8.49%', label: 'faulty implementation, IDE against CLI' },
      ],
      quote: 'Same models, different failure profile, driven by the interface.',
    },
  ],
} as const

/** Section 4.4: structural and temporal effects. */
export const misalignPersistence = {
  findings: [
    {
      n: 12,
      headline: 'Failures cluster inside a session',
      evidence: [
        { value: 'lift 1.39', label: 'misread intent with self-initiated overreach' },
        { value: 'lift 0.71', label: 'constraint violation with faulty implementation, a distinct mode' },
      ],
      quote: 'Faulty implementation and inaccurate self-reporting also co-occur above chance (1.20).',
    },
    {
      n: 13,
      headline: 'Misalignment carries into the next session',
      evidence: [
        { value: '0.519 vs 0.336', label: 'chance the next session in the repo also misaligns, a 54.46% increase' },
        { value: '4.10 and 1.61', label: 'self-persistence for execution errors and faulty implementation' },
      ],
      quote: 'These recur until someone fixes the source, not the symptom.',
    },
    {
      n: 14,
      headline: 'The rate is falling, the mix is shifting',
      evidence: [
        { value: 'p < 10⁻⁴⁰', label: 'misalignment per user turn declines, Feb 2025 to Apr 2026' },
        { value: 'S3 and S7 rising', label: 'while S1, S4, and S5 fall in share, within both IDE and CLI' },
      ],
      quote: 'Agents write better code than they did. They follow instructions and report honestly no better than they did.',
    },
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
