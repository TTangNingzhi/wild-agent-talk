import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import timeline from '../assets/figures/symptom-timeline.png'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { misalignPersistence } from '../content/dataset'

/** RQ4: misalignment repeats within a session, across sessions, and over the year. */
export default function MisalignPersistence() {
  return (
    <Section id="misalign-time" title="Structure and time">
      <Stack spacing={0}>
        <Reveal>
          <Stack spacing={2} sx={{ py: { xs: 2.5, md: 3 } }}>
            <Typography variant="h3" component="h3">
              {misalignPersistence.withinSession.title}
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: { xs: 2, md: 4 },
              }}
            >
              {misalignPersistence.withinSession.patterns.map((pattern) => (
                <Stack
                  key={pattern.label}
                  spacing={0.5}
                  sx={{ pl: 2, borderLeft: '3px solid', borderColor: 'grey.300' }}
                >
                  <Typography
                    variant="overline"
                    color="text.secondary"
                    sx={{ fontSize: '1.125rem' }}
                  >
                    {pattern.label}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="p"
                    sx={{ fontSize: '1.375rem', fontWeight: 400, lineHeight: 1.55 }}
                  >
                    {pattern.text}
                  </Typography>
                </Stack>
              ))}
            </Box>
          </Stack>
        </Reveal>
        <Reveal>
          <Stack
            spacing={1.5}
            sx={{
              py: { xs: 2.5, md: 3 },
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography variant="h3" component="h3">
              {misalignPersistence.crossSession.title}
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{ fontSize: '1.375rem', fontWeight: 400, lineHeight: 1.55 }}
            >
              {misalignPersistence.crossSession.text}
            </Typography>
          </Stack>
        </Reveal>

        <Reveal>
          <Stack
            spacing={2.5}
            sx={{
              py: { xs: 2.5, md: 3 },
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography variant="h3" component="h3">
              {misalignPersistence.temporal.title}
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: { xs: 2, md: 4 },
              }}
            >
              {misalignPersistence.temporal.evidence.map((stat) => (
                  <Stack
                    key={stat.value}
                    spacing={0.5}
                    sx={{ pl: 2, borderLeft: '3px solid', borderColor: 'grey.300' }}
                  >
                    <Typography variant="h3" component="p">
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ fontSize: '1.25rem', lineHeight: 1.55 }}
                    >
                      {stat.label}
                    </Typography>
                  </Stack>
              ))}
            </Box>
            <Typography
              variant="h5"
              component="p"
              color="text.secondary"
              sx={{ fontSize: '1.375rem', fontWeight: 400, lineHeight: 1.55 }}
            >
              {misalignPersistence.temporal.quote}
            </Typography>
            <Box
              sx={{
                width: { xs: '100%', md: '52%' },
                alignSelf: 'center',
                pt: 0.5,
              }}
            >
              <Box
                component="img"
                src={timeline}
                alt="Monthly share of each symptom. Constraint violation and inaccurate self-reporting rise; faulty implementation falls."
                sx={{ display: 'block', width: '100%', height: 'auto' }}
              />
            </Box>
          </Stack>
        </Reveal>
      </Stack>
    </Section>
  )
}
