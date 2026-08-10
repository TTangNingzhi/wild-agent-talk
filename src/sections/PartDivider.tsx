import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import Slide from '../components/Slide'
import { accentMain, type Accent } from '../accents'

type PartDividerProps = {
  id: string
  /** e.g. "Part I" */
  kicker: string
  title: string
  /** One line on what this half of the talk answers. */
  question?: string
  /** Venue chip, e.g. "ASE 2026". */
  venue?: string
  accent?: Accent
}

/** Full-viewport marker between the two halves of the talk. */
export default function PartDivider({
  id,
  kicker,
  title,
  question,
  venue,
  accent = 'primary',
}: PartDividerProps) {
  const color = accentMain(accent)

  return (
    <Slide id={id}>
      <Stack spacing={{ xs: 3, md: 4 }} sx={{ width: '100%' }}>
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <Typography variant="overline" sx={{ color }}>
            {kicker}
          </Typography>
          {venue && <Chip variant="outlined" label={venue} sx={{ color: 'text.secondary' }} />}
        </Stack>
        <Typography variant="h1">{title}</Typography>
        <Box sx={{ width: '100%', height: 5, bgcolor: color }} />
        {question && (
          <Typography variant="subtitle1" color="text.secondary">
            {question}
          </Typography>
        )}
      </Stack>
    </Slide>
  )
}
