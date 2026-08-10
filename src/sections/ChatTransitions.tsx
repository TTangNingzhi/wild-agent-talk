import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { accentMain } from '../accents'
import lift from '../assets/figures/transition-lift.png'
import Reveal from '../components/Reveal'
import Finding from '../components/Finding'
import { transitions } from '../content/dataset'

const accent = 'warning' as const

function LiftArrow({ value, back }: { value: string; back?: boolean }) {
  return (
    <Stack
      direction="row"
      spacing={0.75}
      sx={{ alignItems: 'center', color: 'text.secondary', whiteSpace: 'nowrap' }}
    >
      <ArrowForwardRoundedIcon
        sx={{ fontSize: 20, transform: back ? 'rotate(180deg)' : 'none', color: accentMain(accent) }}
      />
      <Typography variant="body2" sx={{ fontVariantNumeric: 'tabular-nums' }}>
        lift {value}
      </Typography>
    </Stack>
  )
}

/** Finding 9: transitions are self-reinforcing, with a few tight cross-category loops. */
export default function ChatTransitions() {
  return (
    <Finding n={9} headline="Sessions get stuck in loops, with subsequent prompts carrying the same intent" divider={false} accent={accent}>
      <Reveal>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.15fr 1fr' },
            columnGap: 4,
            rowGap: 3,
            alignItems: { xs: 'start', md: 'center' },
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h5" component="p">
              {transitions.selfLoop}
            </Typography>
            <Typography variant="h5" component="p">
              {transitions.longestRun}
            </Typography>

            <Stack spacing={1.5} sx={{ pt: 0.5 }}>
              {transitions.loops.map((loop) => (
                <Paper
                  key={loop.name}
                  variant="outlined"
                  sx={{ p: 2, borderColor: 'divider', bgcolor: 'rgba(251, 188, 4, 0.08)' }}
                >
                  <Typography variant="overline" color="text.secondary">
                    {loop.name}
                  </Typography>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)',
                      columnGap: 1.5,
                      rowGap: 0.5,
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="subtitle2">{loop.from}</Typography>
                    <LiftArrow value={loop.forward} />
                    <Typography variant="subtitle2">{loop.to}</Typography>
                    {loop.back && (
                      <>
                        <Typography variant="subtitle2">{loop.from}</Typography>
                        <LiftArrow value={loop.back} back />
                        <Typography variant="subtitle2">{loop.to}</Typography>
                      </>
                    )}
                  </Box>
                </Paper>
              ))}
            </Stack>
          </Stack>

          <Stack component="figure" spacing={1} sx={{ m: 0, minWidth: 0 }}>
            <Box
              component="img"
              src={lift}
              alt="Markov lift between intent subcategories within sessions. The diagonal dominates."
              sx={{ display: 'block', width: '100%', height: 'auto' }}
            />
            <Typography component="figcaption" variant="body2" color="text.disabled">
              {transitions.method}
            </Typography>
          </Stack>
        </Box>
      </Reveal>
    </Finding>
  )
}
