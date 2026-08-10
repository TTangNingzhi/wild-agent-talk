import Stack from '@mui/material/Stack'

import PaperCard from '../components/PaperCard'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { papers } from '../content/talk'

/** Opening: what the talk is, in two papers. */
export default function Papers() {
  return (
    <Section id="papers" title="Two papers">
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 6, md: 6 }}>
        {papers.map((paper, i) => (
          <Reveal key={paper.key} delay={i * 120}>
            <PaperCard paper={paper} />
          </Reveal>
        ))}
      </Stack>
    </Section>
  )
}
