import Box from '@mui/material/Box'
import type { BoxProps } from '@mui/material/Box'
import type { ReactNode } from 'react'

type SlideProps = {
  id: string
  children: ReactNode
  /**
   * Vertical placement of the content block. `between` stretches the content to
   * the full viewport and pushes the first and last child apart, which is what
   * a title slide wants.
   */
  align?: 'center' | 'start' | 'between'
  /** Reserved for the cover. Other slide moments stay compact in the page flow. */
  fullHeight?: boolean
  sx?: BoxProps['sx']
}

const alignItemsFor = {
  center: 'center',
  start: 'flex-start',
  between: 'stretch',
} as const

/**
 * A slide-like marker in the page flow. Only the cover opts into full viewport height.
 */
export default function Slide({ id, children, align = 'center', fullHeight = false, sx }: SlideProps) {
  return (
    <Box
      component="section"
      id={id}
      sx={[
        {
          position: 'relative',
          minHeight: fullHeight ? '100svh' : 'auto',
          display: 'flex',
          alignItems: alignItemsFor[align],
          py: fullHeight ? { xs: 8, md: 12 } : { xs: 5, md: 7 },
          scrollMarginTop: 0,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        sx={{
          width: '100%',
          ...(align === 'between' && {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }),
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
