import Box from '@mui/material/Box'
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
  accent = 'primary',
}: PartDividerProps) {
  const color = accentMain(accent)

  return (
    <Slide id={id}>
      <Stack spacing={{ xs: 3, md: 4 }} sx={{ width: '100%' }}>
        {kicker && (
          <Typography variant="overline" sx={{ color }}>
            {kicker}
          </Typography>
        )}
        <Typography
          variant="h1"
          sx={{ fontSize: 'clamp(2.5rem, 3vw, 3.25rem)' }}
        >
          {title}
        </Typography>
        <Box sx={{ width: '100%', height: 5, bgcolor: color }} />
        {paperTitle && (
          <Typography
            variant="subtitle1"
            sx={{ fontSize: 'clamp(1.375rem, 1.7vw, 1.75rem)', lineHeight: 1.4 }}
          >
            {paperTitle}
          </Typography>
        )}
        {authors && (
          <Stack spacing={0.75}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: '1.1875rem', lineHeight: 1.55 }}
            >
              {authors}
            </Typography>
            {affiliations && (
              <Typography
                variant="body2"
                color="text.disabled"
                sx={{ fontSize: '1.0625rem', lineHeight: 1.5 }}
              >
                {affiliations}
              </Typography>
            )}
          </Stack>
        )}
      </Stack>
    </Slide>
  )
}
