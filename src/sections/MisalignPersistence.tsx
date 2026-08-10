import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import timeline from '../assets/figures/symptom-timeline.png'
import Finding from '../components/Finding'
import MisalignFinding from '../components/MisalignFinding'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { misalignPersistence } from '../content/dataset'

const [clustering, carryover, trend] = misalignPersistence.findings

/** RQ4: misalignment repeats within a session, across sessions, and over the year. */
export default function MisalignPersistence() {
  return (
    <Section id="misalign-time" title="Structure and time">
      <Stack spacing={0}>
        <MisalignFinding item={clustering} divider={false} />
        <MisalignFinding item={carryover} />

        <Finding n={trend.n} headline={trend.headline} accent="error">
          <Reveal>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1.2fr' },
                columnGap: 4,
                rowGap: 3,
                alignItems: 'start',
              }}
            >
              <Stack spacing={2}>
                {trend.evidence.map((stat) => (
                  <Stack
                    key={stat.value}
                    spacing={0.25}
                    sx={{ pl: 2, borderLeft: '3px solid', borderColor: 'grey.300' }}
                  >
                    <Typography variant="h4" component="p">
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Stack>
                ))}
                <Typography variant="body1" color="text.disabled">
                  {trend.quote}
                </Typography>
              </Stack>
              <Box
                component="img"
                src={timeline}
                alt="Monthly share of each symptom. Constraint violation and inaccurate self-reporting rise; faulty implementation falls."
                sx={{ display: 'block', width: '100%', height: 'auto' }}
              />
            </Box>
          </Reveal>
        </Finding>
      </Stack>
    </Section>
  )
}
