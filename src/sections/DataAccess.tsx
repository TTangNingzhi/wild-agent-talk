import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import Reveal from '../components/Reveal'
import Section from '../components/Section'

const interactionSteps = ['Prompt', 'Steer', 'Correct', 'Stop'] as const

/** Why firsthand developer-agent interaction data is hard to study outside product teams. */
export default function DataAccess() {
  return (
    <Section id="data-access" eyebrow="The access gap" title="Firsthand logs exist. Access is narrow.">
      <Stack spacing={0}>
        <Reveal>
          <Paper variant="outlined" sx={{ overflow: 'hidden', borderColor: 'primary.main' }}>
            <Stack direction={{ xs: 'column', md: 'row' }}>
              <Stack spacing={1.5} sx={{ flex: 1, p: { xs: 3, md: 3.5 } }}>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                  <LockOutlinedIcon color="primary" />
                  <Typography variant="overline" color="primary.main">
                    Inside Google
                  </Typography>
                </Stack>
                <Typography variant="h4" component="h3">
                  Jetski
                </Typography>
                <Typography variant="body1" component="p" color="text.secondary">
                  Firsthand developer-agent interaction at product scale.
                </Typography>
              </Stack>

              <Stack
                spacing={1.5}
                sx={{
                  width: { md: 410 },
                  flexShrink: 0,
                  p: { xs: 3, md: 3.5 },
                  bgcolor: 'rgba(234, 67, 53, 0.04)',
                  borderTop: { xs: '1px solid', md: 0 },
                  borderLeft: { xs: 0, md: '4px solid' },
                  borderColor: { xs: 'error.main', md: 'error.main' },
                  justifyContent: 'center',
                }}
              >
                <Typography variant="overline" color="error.main">
                  My intern access
                </Typography>
                <Typography variant="body1" component="p">
                  Even as a Google intern, I cannot access Jetski logs.
                </Typography>
                <Box
                  sx={{
                    alignSelf: 'flex-start',
                    px: 1.5,
                    py: 0.75,
                    borderRadius: 1,
                    bgcolor: 'error.main',
                    color: 'error.contrastText',
                    fontFamily: '"Google Sans Code", monospace',
                    fontSize: '1rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                  }}
                >
                  ACCESS DENIED
                </Box>
              </Stack>
            </Stack>
          </Paper>
        </Reveal>

        <Reveal delay={100}>
          <Stack sx={{ height: 48, alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ width: 2, height: 10, bgcolor: 'error.main', opacity: 0.5 }} />
            <Box
              sx={{
                width: 34,
                height: 34,
                display: 'grid',
                placeItems: 'center',
                border: '1px solid',
                borderColor: 'error.main',
                borderRadius: '50%',
                bgcolor: 'background.default',
              }}
            >
              <ArrowDownwardRoundedIcon sx={{ fontSize: 20, color: 'error.main' }} />
            </Box>
          </Stack>
        </Reveal>

        <Reveal delay={160}>
          <Paper variant="outlined" sx={{ p: { xs: 3, md: 3.5 }, borderColor: 'error.main' }}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <PublicOutlinedIcon color="error" />
                <Typography variant="overline" color="error.main">
                  Research community
                </Typography>
              </Stack>

              <Typography variant="h4" component="h3">
                Needs firsthand interaction data
              </Typography>

              <Stack
                direction="row"
                spacing={1.5}
                useFlexGap
                sx={{ flexWrap: 'wrap', alignItems: 'center' }}
              >
                {interactionSteps.map((step, index) => (
                  <Stack key={step} direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                    <Typography
                      variant="body1"
                      sx={{
                        px: 1.5,
                        py: 0.75,
                        borderRadius: 1,
                        bgcolor: 'rgba(234, 67, 53, 0.04)',
                        border: '1px solid',
                        borderColor: 'rgba(234, 67, 53, 0.32)',
                        fontWeight: 500,
                      }}
                    >
                      {step}
                    </Typography>
                    {index < interactionSteps.length - 1 && (
                      <Typography variant="body1" color="error.main" aria-hidden="true">
                        →
                      </Typography>
                    )}
                  </Stack>
                ))}
              </Stack>

              <Typography variant="body1" component="p" color="text.secondary">
                These logs are rarely public.
              </Typography>
            </Stack>
          </Paper>
        </Reveal>
      </Stack>
    </Section>
  )
}
