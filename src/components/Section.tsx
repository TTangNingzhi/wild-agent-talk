import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title?: string
  children: ReactNode
}

/**
 * Article-flow section: sized by its content rather than the viewport, so the
 * page reads as one continuous document between slide moments. A section shows
 * its title and nothing else above the content; numbered findings live inside
 * it as `Finding` blocks.
 */
export default function Section({ id, title, children }: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      sx={{ py: { xs: 4, md: 6 }, scrollMarginTop: { xs: 56, md: 64 } }}
    >
      <Stack spacing={{ xs: 2.5, md: 3 }}>
        {title && <Typography variant="h2">{title}</Typography>}
        {children}
      </Stack>
    </Box>
  )
}
