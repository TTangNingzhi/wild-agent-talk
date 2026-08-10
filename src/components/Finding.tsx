import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { ReactNode } from 'react'

import { accentText, type Accent } from '../accents'
import Reveal from './Reveal'

type FindingProps = {
  /** Finding number from the paper. */
  n: number
  headline: string
  /** Evidence under the headline: stats, quotes, figures, whatever fits. */
  children?: ReactNode
  /** False on the first finding of a section, so it does not open with a rule. */
  divider?: boolean
  accent?: Accent
}

/**
 * One numbered finding: the claim on one line, its evidence underneath. Every
 * finding in the talk uses this, so a number always sits at the same level
 * whether the evidence is two stats or a full figure.
 */
export default function Finding({
  n,
  headline,
  children,
  divider = true,
  accent = 'warning',
}: FindingProps) {
  return (
    <Reveal>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '56px 1fr' },
          columnGap: 2,
          rowGap: 1.5,
          py: { xs: 2.5, md: 3 },
          borderTop: divider ? '1px solid' : 0,
          borderColor: 'divider',
        }}
      >
        <Typography
          variant="h3"
          component="p"
          sx={{ color: accentText(accent), fontVariantNumeric: 'tabular-nums' }}
        >
          {n}
        </Typography>

        <Stack spacing={2} sx={{ minWidth: 0 }}>
          <Typography variant="h3" component="h3">
            {headline}
          </Typography>
          {children}
        </Stack>
      </Box>
    </Reveal>
  )
}
