import type { ReactNode } from 'react'

import type { Accent } from '../accents'

import Placeholder from '../components/Placeholder'
import Section from '../components/Section'
import { papers } from '../content/talk'
import ChatFindings from './ChatFindings'
import ChatIntents from './ChatIntents'
import Cover from './Cover'
import DataAccess from './DataAccess'
import DataProvenance from './DataProvenance'
import DataScale from './DataScale'
import PartDivider from './PartDivider'
import Papers from './Papers'
import SessionDynamics from './SessionDynamics'
import SessionShapes from './SessionShapes'

const chatPaper = papers.find((paper) => paper.key === 'chat')!
const misalignPaper = papers.find((paper) => paper.key === 'misalignment')!

/**
 * The middle level of the talk: a run of sections that answers one question.
 * Rendered once as a band above its first section, and once as a sub-heading
 * in the rail. Keys are also the scroll anchors.
 */
export const researchQuestions = {
  data: {
    label: 'Data',
    question: 'Where do real coding agent sessions come from?',
  },
  'chat-rq1': {
    label: 'RQ1',
    question: 'What do developers ask coding agents to do?',
  },
  'chat-rq2': {
    label: 'RQ2',
    question: 'What archetypes and dynamics shape a session?',
  },
  'misalign-method': {
    label: 'Method',
    question: 'How do you find real failures in 20,574 sessions?',
  },
  'misalign-rq1': {
    label: 'RQ1',
    question: 'What forms does misalignment take, and why?',
  },
  'misalign-rq2': {
    label: 'RQ2',
    question: 'What does it cost, and how does it get repaired?',
  },
  'misalign-rq3': {
    label: 'RQ3',
    question: 'Does the interface change the failure?',
  },
  'misalign-rq4': {
    label: 'RQ4',
    question: 'Does misalignment persist across sessions?',
  },
} as const

export type ResearchQuestion = keyof typeof researchQuestions

export type SectionEntry = {
  id: string
  /** Label shown in the section nav. */
  label: string
  /** Slide moments get a filled nav marker and no scroll offset. */
  kind: 'slide' | 'section'
  /** Part of the talk. Drives accent color and the top level of the rail. */
  group?: string
  /** Question this section answers. Consecutive sections share one marker. */
  rq?: ResearchQuestion
  /** Brand color for this part, applied to markers, badges, and the rail. */
  accent?: Accent
  /** False for part dividers and supporting sections the rail should skip. */
  showInOutline?: boolean
  render: () => ReactNode
}

/**
 * The talk, in order. App renders this list and the nav derives from it, so a
 * section only ever needs to be registered in one place.
 */
export const sections: SectionEntry[] = [
  {
    id: 'cover',
    label: 'Title',
    kind: 'slide',
    group: 'Opening',
    accent: 'primary',
    showInOutline: false,
    render: () => <Cover />,
  },
  {
    id: 'papers',
    label: 'Two papers',
    kind: 'section',
    group: 'Opening',
    accent: 'primary',
    render: () => <Papers />,
  },
  {
    id: 'data-access',
    label: 'The access gap',
    kind: 'section',
    group: 'Opening',
    rq: 'data',
    accent: 'primary',
    render: () => <DataAccess />,
  },
  {
    id: 'data-provenance',
    label: 'Public trajectories',
    kind: 'section',
    group: 'Opening',
    rq: 'data',
    accent: 'primary',
    render: () => <DataProvenance />,
  },
  {
    id: 'data-scale',
    label: 'Corpus',
    kind: 'section',
    group: 'Opening',
    rq: 'data',
    accent: 'warning',
    render: () => <DataScale />,
  },

  // Programming by Chat (ASE 2026)
  {
    id: 'part-1',
    label: 'Programming by Chat',
    kind: 'slide',
    group: 'Programming by Chat',
    accent: 'warning',
    showInOutline: false,
    render: () => (
      <PartDivider
        accent="warning"
        id="part-1"
        title="Programming by Chat"
        venue={chatPaper.venue}
        paperTitle={chatPaper.title}
        authors={chatPaper.authors}
        affiliations={chatPaper.affiliations}
      />
    ),
  },
  {
    id: 'chat-intents',
    label: 'Intent taxonomy',
    kind: 'section',
    group: 'Programming by Chat',
    rq: 'chat-rq1',
    accent: 'warning',
    render: () => <ChatIntents />,
  },
  {
    id: 'chat-findings',
    label: 'Six findings',
    kind: 'section',
    group: 'Programming by Chat',
    rq: 'chat-rq1',
    accent: 'warning',
    render: () => <ChatFindings />,
  },
  {
    id: 'chat-shapes',
    label: 'Session archetypes',
    kind: 'section',
    group: 'Programming by Chat',
    rq: 'chat-rq2',
    accent: 'warning',
    render: () => <SessionShapes />,
  },
  {
    id: 'chat-dynamics',
    label: 'Intent dynamics',
    kind: 'section',
    group: 'Programming by Chat',
    rq: 'chat-rq2',
    accent: 'warning',
    render: () => <SessionDynamics />,
  },

  // Coding Agent Misalignment (EMNLP 2026, under submission)
  {
    id: 'part-2',
    label: 'Coding Agent Misalignment',
    kind: 'slide',
    group: 'Coding Agent Misalignment',
    accent: 'error',
    showInOutline: false,
    render: () => (
      <PartDivider
        accent="error"
        id="part-2"
        title="Coding Agent Misalignment"
        venue={`${misalignPaper.venue}, ${misalignPaper.status}`}
        paperTitle={misalignPaper.title}
        authors={misalignPaper.authors}
        affiliations={misalignPaper.affiliations}
      />
    ),
  },
  {
    id: 'misalign-data',
    label: 'Pipeline',
    kind: 'section',
    group: 'Coding Agent Misalignment',
    rq: 'misalign-method',
    accent: 'error',
    render: () => (
      <Section id="misalign-data" title="From sessions to grounded failures">
        <Placeholder note="20,574 IDE and CLI sessions across 1,639 repositories. LLM extraction with an evidence filter that drops unsupported claims, at 0.93 human-evaluated precision, then multi-axial annotation." />
      </Section>
    ),
  },
  {
    id: 'misalign-forms',
    label: 'Failure modes',
    kind: 'section',
    group: 'Coding Agent Misalignment',
    rq: 'misalign-rq1',
    accent: 'error',
    render: () => (
      <Section id="misalign-forms" title="How collaboration breaks">
        <Placeholder note="Seven symptom categories and seven cause categories: how agents read the project, interpret intent, follow rules, bound their actions, implement and execute, and report progress." />
      </Section>
    ),
  },
  {
    id: 'misalign-outcomes',
    label: 'Cost and repair',
    kind: 'section',
    group: 'Coding Agent Misalignment',
    rq: 'misalign-rq2',
    accent: 'error',
    render: () => (
      <Section id="misalign-outcomes" title="Failure becomes developer work">
        <Placeholder note="90.50% of episodes cost effort and trust rather than causing irreversible damage. Visible resolution in 9.33% of episodes, and 91.49% of those need explicit developer pushback." />
      </Section>
    ),
  },
  {
    id: 'misalign-modality',
    label: 'IDE vs CLI',
    kind: 'section',
    group: 'Coding Agent Misalignment',
    rq: 'misalign-rq3',
    accent: 'error',
    render: () => (
      <Section id="misalign-modality" title="Interfaces change the failure mode">
        <Placeholder note="CLI sessions skew toward constraint violations reaching project and external state. IDE sessions skew toward faulty implementations and underspecified instructions confined to task state." />
      </Section>
    ),
  },
  {
    id: 'misalign-time',
    label: 'Across sessions',
    kind: 'section',
    group: 'Coding Agent Misalignment',
    rq: 'misalign-rq4',
    accent: 'error',
    render: () => (
      <Section id="misalign-time" title="Failures persist across sessions">
        <Placeholder note="Misalignment persists across adjacent sessions in the same repository. The overall rate falls over time, but constraint violations and inaccurate self-reporting grow in share." />
      </Section>
    ),
  },

  {
    id: 'implications',
    label: 'Implications',
    kind: 'section',
    group: 'Closing',
    accent: 'success',
    render: () => (
      <Section id="implications" title="Design implications">
        <Placeholder note="What both studies say for the people building coding agents: where to intervene, what to measure, and which failures are not fixed by better implementation accuracy." />
      </Section>
    ),
  },
  {
    id: 'closing',
    label: 'Questions',
    kind: 'slide',
    group: 'Closing',
    accent: 'success',
    render: () => (
      <Section id="closing" title="Questions">
        <Placeholder note="Contact, paper links, and the data availability statement." />
      </Section>
    ),
  },
]

/** One rendered node of the page: either an RQ band or a section. */
export type OutlineNode =
  | { kind: 'rq'; id: ResearchQuestion; accent: Accent; sections: SectionEntry[] }
  | { kind: 'section'; section: SectionEntry }

/** Sections in order, with an RQ band inserted wherever the question changes. */
export const outline: OutlineNode[] = sections.reduce<OutlineNode[]>((nodes, section, i) => {
  const previous = sections[i - 1]
  if (section.rq && section.rq !== previous?.rq) {
    nodes.push({
      kind: 'rq',
      id: section.rq,
      accent: section.accent ?? 'primary',
      sections: sections.filter((entry) => entry.rq === section.rq),
    })
  }
  nodes.push({ kind: 'section', section })
  return nodes
}, [])
