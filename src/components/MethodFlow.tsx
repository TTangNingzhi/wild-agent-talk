import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Fragment } from 'react'

import type { Accent } from '../accents'

export type MethodStep = {
  step: string
  title: string
  detail: string
  result: string
}

const tint: Record<Accent, string> = {
  primary: 'rgba(26, 115, 232, 0.04)',
  error: 'rgba(234, 67, 53, 0.04)',
  warning: 'rgba(251, 188, 4, 0.08)',
  success: 'rgba(52, 168, 83, 0.05)',
}

function Step({ item, accent }: { item: MethodStep; accent: Accent }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        height: '100%',
        p: 2,
        bgcolor: tint[accent],
        borderColor: 'divider',
      }}
    >
      <Stack spacing={0.75}>
        <Typography variant="overline" color="text.secondary">
          Step {item.step}
        </Typography>
        <Typography variant="h4" component="h3">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.detail}
        </Typography>
        <Typography variant="subtitle2">{item.result}</Typography>
      </Stack>
    </Paper>
  )
}

function Arrow() {
  return (
    <Box sx={{ display: 'grid', placeItems: 'center', color: 'text.disabled' }} aria-hidden="true">
      <ArrowForwardRoundedIcon sx={{ display: { xs: 'none', md: 'block' } }} />
      <ArrowDownwardRoundedIcon sx={{ display: { xs: 'block', md: 'none' } }} />
    </Box>
  )
}

/** Three-step method strip, shared by the sections that open with a pipeline. */
export default function MethodFlow({
  steps,
  accent = 'primary',
}: {
  steps: readonly MethodStep[]
  accent?: Accent
}) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: `repeat(${steps.length - 1}, 1fr 40px) 1fr` },
        alignItems: 'stretch',
        rowGap: 1.25,
      }}
    >
      {steps.map((item, i) => (
        <Fragment key={item.step}>
          {i > 0 && <Arrow />}
          <Step item={item} accent={accent} />
        </Fragment>
      ))}
    </Box>
  )
}
