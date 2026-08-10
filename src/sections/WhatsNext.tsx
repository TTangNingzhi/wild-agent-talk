import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { accentMain } from '../accents'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { whatsNext } from '../content/talk'

const accent = 'success' as const
const tint = 'rgba(52, 168, 83, 0.05)'

/** Closing: what the two papers settle, what they leave open, and what I am working on. */
export default function WhatsNext() {
  return (
    <Section id="whats-next" title="What's next?">
      <Reveal>
        <Typography
          variant="subtitle1"
          component="p"
          sx={{ pb: 1, fontSize: '1.5rem', lineHeight: 1.5 }}
        >
          {whatsNext.established}
        </Typography>
      </Reveal>

      <Reveal delay={100}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 3,
            alignItems: 'stretch',
          }}
        >
          {whatsNext.problems.map((problem) => (
            <Paper
              key={problem.n}
              variant="outlined"
              sx={{
                height: '100%',
                p: 3,
                bgcolor: tint,
                borderColor: 'divider',
              }}
            >
              <Stack spacing={1.25}>
                <Typography variant="overline" color="text.secondary">
                  Open problem {problem.n}
                </Typography>
                <Typography variant="h3" component="h3">
                  {problem.title}
                </Typography>
                <Stack component="ul" spacing={0.75} sx={{ m: 0, pl: 2.5, pt: 0.5 }}>
                  {problem.points.map((point) => (
                    <Typography
                      key={point}
                      component="li"
                      variant="body1"
                      sx={{ fontSize: '1.125rem', lineHeight: 1.55 }}
                    >
                      {point}
                    </Typography>
                  ))}
                </Stack>
              </Stack>
            </Paper>
          ))}
        </Box>
      </Reveal>

      <Stack spacing={1.5} sx={{ pt: 2.5, borderTop: '1px solid', borderColor: 'divider' }}>
        <Typography variant="overline" sx={{ color: accentMain(accent) }}>
          {whatsNext.summer.label}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            columnGap: 4,
            rowGap: 2,
          }}
        >
          {whatsNext.summer.items.map((item) => (
            <Typography
              key={item}
              variant="h4"
              component="p"
              sx={{ fontSize: '1.375rem', fontWeight: 400, lineHeight: 1.45 }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Stack>
    </Section>
  )
}
