import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import Slide from '../components/Slide'
import { accentMain, type Accent } from '../accents'

type PartDividerProps = {
  id: string
  /** Optional short label shown above the paper title. */
  kicker?: string
  title: string
  /** Full paper title, shown under the rule. */
  paperTitle?: string
  /** Author list, in paper order. */
  authors?: string
  /** Institutions behind the author list. */
  affiliations?: string
  /** Venue chip, e.g. "ASE 2026". */
  venue?: string
  accent?: Accent
}

/** Full-viewport marker between the two halves of the talk. */
export default function PartDivider({
  id,
  kicker,
  title,
  paperTitle,
  authors,
  affiliations,
  venue,
  accent = 'primary',
}: PartDividerProps) {
  const color = accentMain(accent)

  return (
    <Slide id={id}>
      <Stack spacing={{ xs: 3, md: 4 }} sx={{ width: '100%' }}>
        {(kicker || venue) && (
          <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            {kicker && (
              <Typography variant="overline" sx={{ color }}>
                {kicker}
              </Typography>
            )}
            {venue && <Chip variant="outlined" label={venue} sx={{ color: 'text.secondary' }} />}
          </Stack>
        )}
        <Typography
          variant="h1"
          sx={{ fontSize: 'clamp(2.5rem, 3vw, 3.25rem)' }}
        >
          {title}
        </Typography>
        <Box sx={{ width: '100%', height: 5, bgcolor: color }} />
        {paperTitle && (
          <Typography variant="subtitle1" sx={{ fontSize: 'clamp(1.125rem, 1.35vw, 1.375rem)' }}>
            {paperTitle}
          </Typography>
        )}
        {authors && (
          <Stack spacing={0.75}>
            <Typography variant="body2" color="text.secondary">
              {authors}
            </Typography>
            {affiliations && (
              <Typography variant="caption" color="text.disabled">
                {affiliations}
              </Typography>
            )}
          </Stack>
        )}
      </Stack>
    </Slide>
  )
}
