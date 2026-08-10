import Box from '@mui/material/Box'
import type { ReactNode } from 'react'

import useInView from '../hooks/useInView'

type RevealProps = {
  children: ReactNode
  /** Stagger, in milliseconds, for items revealed as a group. */
  delay?: number
}

/** Fade and rise on first scroll into view. Never replays. */
export default function Reveal({ children, delay = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <Box
      ref={ref}
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(18px)',
        transition: `opacity 600ms cubic-bezier(0.2, 0, 0, 1) ${delay}ms, transform 600ms cubic-bezier(0.2, 0, 0, 1) ${delay}ms`,
        '@media (prefers-reduced-motion: reduce)': {
          opacity: 1,
          transform: 'none',
          transition: 'none',
        },
      }}
    >
      {children}
    </Box>
  )
}
