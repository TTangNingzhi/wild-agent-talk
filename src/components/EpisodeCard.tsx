import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { ReactNode } from 'react'

import { accentText } from '../accents'
import Reveal from './Reveal'

type Label = { code: string; name: string; href: string }

/**
 * One real episode: a diagram, its taxonomy labels, and nothing else. The
 * labels are links back to the rows of the symptom and cause tables, so the
 * distribution and the episode stay one object.
 */
export default function EpisodeCard({
  n,
  title,
  labels,
  note,
  children,
}: {
  n: number
  title: string
  labels: readonly Label[]
  note?: string
  children: ReactNode
}) {
  return (
    <Reveal>
      <Stack
        spacing={2}
        sx={{
          py: { xs: 3, md: 4 },
          borderTop: n > 1 ? '1px solid' : 0,
          borderColor: 'divider',
        }}
      >
        <Stack spacing={1.25}>
          <Stack direction="row" spacing={2} sx={{ alignItems: 'baseline', minWidth: 0 }}>
            <Typography
              variant="overline"
              sx={{ color: accentText('error'), whiteSpace: 'nowrap' }}
            >
              Episode {n}
            </Typography>
            <Typography variant="h3" component="h3">
              {title}
            </Typography>
          </Stack>
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
            {labels.map((label) => (
              <Chip
                key={`${label.code}-${label.name}`}
                component="a"
                href={label.href}
                clickable
                size="small"
                variant="outlined"
                label={`${label.code} · ${label.name}`}
                sx={{ fontSize: '0.875rem', borderColor: 'divider', color: 'text.secondary' }}
              />
            ))}
          </Stack>
        </Stack>

        {/*
          Inset from the column and centered. 900 is the diagrams' own drawing
          grid, so SVG units map 1:1 to pixels and no label drops under 14px.
        */}
        <Box sx={{ width: '100%', maxWidth: 900, alignSelf: 'center' }}>{children}</Box>

        {note && (
          <Typography variant="body2" color="text.disabled">
            {note}
          </Typography>
        )}
      </Stack>
    </Reveal>
  )
}
