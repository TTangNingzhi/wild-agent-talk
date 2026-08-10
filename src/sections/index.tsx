import type { ReactNode } from 'react'

import type { Accent } from '../accents'

import Placeholder from '../components/Placeholder'
import Section from '../components/Section'
import Cover from './Cover'
import DataAccess from './DataAccess'
import DataProvenance from './DataProvenance'
import DataScale from './DataScale'
import PartDivider from './PartDivider'
import Papers from './Papers'

export type SectionEntry = {
  id: string
  /** Label shown in the section nav. */
  label: string
  /** Slide moments get a filled nav marker and no scroll offset. */
  kind: 'slide' | 'section'
  /** Outline grouping shown as a heading in the rail. */
  group?: string
  /** Brand color for this part, applied to eyebrows, rules, and the rail. */
  accent?: Accent
  /** False for supporting sections that should map to the previous outline item. */
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
    group: 'Data',
    accent: 'primary',
    render: () => <DataAccess />,
  },
  {
    id: 'data-provenance',
    label: 'Public trajectories',
    kind: 'section',
    group: 'Data',
    accent: 'primary',
    render: () => <DataProvenance />,
  },
  {
    id: 'data-scale',
    label: 'Corpus',
    kind: 'section',
    group: 'Data',
    accent: 'primary',
    render: () => <DataScale />,
  },

  // Part I: Programming by Chat (ASE 2026)
  {
    id: 'part-1',
    label: 'Programming by Chat',
    kind: 'slide',
    group: 'Part I',
    accent: 'primary',
    render: () => (
      <PartDivider
        accent="primary"
        id="part-1"
        kicker="Part I"
        title="Programming by Chat"
        venue="ASE 2026"
        question="What do developers actually say to AI coding assistants, and how do sessions unfold?"
      />
    ),
  },
  {
    id: 'chat-data',
    label: 'Dataset',
    kind: 'section',
    group: 'Part I',
    accent: 'primary',
    showInOutline: false,
    render: () => (
      <Section id="chat-data" eyebrow="Data" title="Inside the IDE conversation" accent="primary">
        <Placeholder note="11,579 sessions, 1,300 repositories, 899 developers, Cursor and GitHub Copilot. Chat histories committed to public repos: self-directed work, not researcher-assigned tasks." />
      </Section>
    ),
  },
  {
    id: 'chat-intents',
    label: 'What developers say',
    kind: 'section',
    group: 'Part I',
    accent: 'primary',
    render: () => (
      <Section id="chat-intents" eyebrow="RQ1" title="What developers ask agents to do" accent="primary">
        <Placeholder note="A multi-label taxonomy of 7 main categories and 20 subcategories, applied to all 74,998 messages by an LLM classifier validated against 400 human-annotated messages." />
      </Section>
    ),
  },
  {
    id: 'chat-archetypes',
    label: 'Session shapes',
    kind: 'section',
    group: 'Part I',
    accent: 'primary',
    render: () => (
      <Section id="chat-archetypes" eyebrow="RQ2" title="Six ways sessions unfold" accent="primary">
        <Placeholder note="Sessions as ordered intent sequences, clustered by hierarchy-aware edit distance. Plus intent dynamics: within-session transitions, session boundaries, and how openings differ from later turns." />
      </Section>
    ),
  },
  {
    id: 'chat-takeaways',
    label: 'Takeaways',
    kind: 'slide',
    group: 'Part I',
    accent: 'primary',
    render: () => (
      <Section id="chat-takeaways" eyebrow="Part I" title="Developers specify progressively" accent="primary">
        <Placeholder note="Headline claims: developers specify progressively rather than upfront, redistribute cognitive work to the assistant, and actively manage an opaque collaborator." />
      </Section>
    ),
  },

  // Part II: Developer-Agent Misalignment (EMNLP 2026, under submission)
  {
    id: 'part-2',
    label: 'Coding Agent Misalignment',
    kind: 'slide',
    group: 'Part II',
    accent: 'error',
    render: () => (
      <PartDivider
        accent="error"
        id="part-2"
        kicker="Part II"
        title="Coding Agent Misalignment"
        venue="EMNLP 2026, under submission"
        question="When the collaboration breaks down, what form does it take, why, and what does it cost?"
      />
    ),
  },
  {
    id: 'misalign-data',
    label: 'Pipeline',
    kind: 'section',
    group: 'Part II',
    accent: 'error',
    showInOutline: false,
    render: () => (
      <Section id="misalign-data" eyebrow="Method" title="From sessions to grounded failures" accent="error">
        <Placeholder note="20,574 IDE and CLI sessions across 1,639 repositories. LLM extraction with an evidence filter that drops unsupported claims, at 0.93 human-evaluated precision, then multi-axial annotation." />
      </Section>
    ),
  },
  {
    id: 'misalign-forms',
    label: 'Failure modes',
    kind: 'section',
    group: 'Part II',
    accent: 'error',
    render: () => (
      <Section id="misalign-forms" eyebrow="RQ1" title="How collaboration breaks" accent="error">
        <Placeholder note="Seven symptom categories and seven cause categories: how agents read the project, interpret intent, follow rules, bound their actions, implement and execute, and report progress." />
      </Section>
    ),
  },
  {
    id: 'misalign-outcomes',
    label: 'Cost and repair',
    kind: 'section',
    group: 'Part II',
    accent: 'error',
    render: () => (
      <Section id="misalign-outcomes" eyebrow="RQ2" title="Failure becomes developer work" accent="error">
        <Placeholder note="90.50% of episodes cost effort and trust rather than causing irreversible damage. Visible resolution in 9.33% of episodes, and 91.49% of those need explicit developer pushback." />
      </Section>
    ),
  },
  {
    id: 'misalign-modality',
    label: 'IDE vs CLI',
    kind: 'section',
    group: 'Part II',
    accent: 'error',
    render: () => (
      <Section id="misalign-modality" eyebrow="RQ3" title="Interfaces change the failure mode" accent="error">
        <Placeholder note="CLI sessions skew toward constraint violations reaching project and external state. IDE sessions skew toward faulty implementations and underspecified instructions confined to task state." />
      </Section>
    ),
  },
  {
    id: 'misalign-time',
    label: 'Across sessions',
    kind: 'section',
    group: 'Part II',
    accent: 'error',
    render: () => (
      <Section id="misalign-time" eyebrow="RQ4" title="Failures persist across sessions" accent="error">
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
      <Section id="implications" eyebrow="So what" title="Design implications" accent="success">
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
      <Section id="closing" eyebrow="Thank you" title="Questions" accent="success">
        <Placeholder note="Contact, paper links, and the data availability statement." />
      </Section>
    ),
  },
]
