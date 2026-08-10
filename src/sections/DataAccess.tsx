import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import Reveal from '../components/Reveal'
import Section from '../components/Section'

const interactionSteps = ['Prompt', 'Steer', 'Correct', 'Stop'] as const
const accessRed = '#c43d35'
const accessRedWash = 'rgba(196, 61, 53, 0.045)'
const accessRedBorder = 'rgba(196, 61, 53, 0.32)'

/** Why firsthand developer-agent interaction data is hard to study outside product teams. */
export default function DataAccess() {
  return (
    <Section
      id="data-access"
      title="The access gap"
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) 56px minmax(0, 1fr)' },
          alignItems: 'stretch',
        }}
      >
        <Reveal>
          <Paper
            variant="outlined"
            sx={{ height: '100%', p: { xs: 3, md: 3.5 }, borderColor: 'grey.500' }}
          >
            <Stack spacing={1.5} sx={{ height: '100%', justifyContent: 'center' }}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <LockOutlinedIcon sx={{ color: 'text.secondary' }} />
                <Typography variant="overline" color="text.primary">
                  Inside OpenAI / Anthropic / Google
                </Typography>
              </Stack>
              <Typography variant="h4" component="h3">
                Codex, Claude Code, and Antigravity
              </Typography>
              <Typography variant="body1" component="p" color="text.secondary">
                Firsthand developer-agent interaction at product scale.
              </Typography>
            </Stack>
          </Paper>
        </Reveal>

        <Reveal delay={100}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            sx={{ height: { xs: 56, md: '100%' }, alignItems: 'center', justifyContent: 'center' }}
          >
            <Box
              sx={{
                width: { xs: 2, md: 11 },
                height: { xs: 11, md: 2 },
                bgcolor: accessRed,
                opacity: 0.5,
              }}
            />
            <Box
              sx={{
                width: 34,
                height: 34,
                display: 'grid',
                placeItems: 'center',
                border: '1px solid',
                borderColor: accessRed,
                borderRadius: '50%',
                bgcolor: 'background.default',
              }}
            >
              <ArrowDownwardRoundedIcon
                sx={{ display: { xs: 'block', md: 'none' }, fontSize: 20, color: accessRed }}
              />
              <ArrowForwardRoundedIcon
                sx={{ display: { xs: 'none', md: 'block' }, fontSize: 20, color: accessRed }}
              />
            </Box>
            <Box
              sx={{
                width: { xs: 2, md: 11 },
                height: { xs: 11, md: 2 },
                bgcolor: accessRed,
                opacity: 0.5,
              }}
            />
          </Stack>
        </Reveal>

        <Reveal delay={160}>
          <Paper
            variant="outlined"
            sx={{ height: '100%', p: { xs: 3, md: 3.5 }, borderColor: accessRed }}
          >
            <Stack spacing={2} sx={{ height: '100%', justifyContent: 'center' }}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <PublicOutlinedIcon sx={{ color: accessRed }} />
                <Typography variant="overline" sx={{ color: accessRed }}>
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
                        px: 1,
                        py: 0.375,
                        borderRadius: 1,
                        bgcolor: accessRedWash,
                        border: '1px solid',
                        borderColor: accessRedBorder,
                        fontWeight: 500,
                      }}
                    >
                      {step}
                    </Typography>
                    {index < interactionSteps.length - 1 && (
                      <Typography variant="body1" sx={{ color: accessRed }} aria-hidden="true">
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
      </Box>
    </Section>
  )
}
