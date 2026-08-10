import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { accentMain, accentText, type Accent } from '../accents'

type RqMarkerProps = {
  id: string
  /** Short locator, e.g. "RQ2" or "Data". */
  label: string
  /** The question this stretch of the talk answers. */
  question: string
  accent?: Accent
}

/**
 * Chapter band between the part divider and the sections under it. One per
 * research question, never per section, so the audience gets the question
 * restated exactly once before the evidence for it.
 */
export default function RqMarker({ id, label, question, accent = 'primary' }: RqMarkerProps) {
  return (
    <Box id={id} sx={{ pt: { xs: 4, md: 6 }, scrollMarginTop: { xs: 56, md: 64 } }}>
      <Box sx={{ height: 4, bgcolor: accentMain(accent) }} />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 0.5, sm: 2.5 }}
        sx={{ alignItems: { sm: 'baseline' }, pt: 1.25 }}
      >
        <Typography variant="overline" sx={{ color: accentText(accent), whiteSpace: 'nowrap' }}>
          {label}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {question}
        </Typography>
      </Stack>
    </Box>
  )
}
