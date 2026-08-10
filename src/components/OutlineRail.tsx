import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { accentMain } from '../accents'
import { RAIL_WIDTH } from '../layout'
import type { SectionEntry } from '../sections'

type OutlineRailProps = {
  sections: SectionEntry[]
  activeId: string
}

/**
 * The talk outline, sitting to the left of the content as a sticky column
 * rather than floating over the page, so rail and slides read as one block and
 * the window's whitespace collects on the outer edges.
 */
export default function OutlineRail({ sections, activeId }: OutlineRailProps) {
  const outlineSections = sections.filter((section) => section.showInOutline !== false)
  const activeIndex = sections.findIndex((section) => section.id === activeId)
  const activeOutlineId =
    sections
      .slice(0, activeIndex + 1)
      .reverse()
      .find((section) => section.showInOutline !== false)?.id ?? outlineSections[0]?.id
  let lastGroup: string | undefined

  return (
    <Box
      component="nav"
      aria-label="Talk outline"
      sx={{
        display: { xs: 'none', lg: 'block' },
        position: 'sticky',
        top: 0,
        width: RAIL_WIDTH,
        height: '100svh',
        flexShrink: 0,
        alignSelf: 'flex-start',
        overflowY: 'auto',
      }}
    >
      <Stack spacing={0} sx={{ minHeight: '100%', justifyContent: 'center', py: 2 }}>
        {outlineSections.map((section) => {
          const isActive = section.id === activeOutlineId
          const group = section.group
          const startsGroup = group !== undefined && group !== lastGroup
          const accent = accentMain(section.accent ?? 'primary')
          lastGroup = group

          return (
            <Box key={section.id}>
              {startsGroup && (
                <Box
                  sx={{
                    borderLeft: '2px solid',
                    borderColor: 'divider',
                    pl: 2,
                    pt: 2,
                    pb: 0.5,
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{ fontSize: '0.875rem', color: accent, lineHeight: 1.6, opacity: 0.9 }}
                  >
                    {group}
                  </Typography>
                </Box>
              )}
              <Box
                component="a"
                href={`#${section.id}`}
                aria-current={isActive ? 'true' : undefined}
                sx={{
                  display: 'block',
                  textDecoration: 'none',
                  pl: 2,
                  py: 0.6,
                  borderLeft: '2px solid',
                  borderColor: isActive ? accent : 'divider',
                  transition: 'border-color 220ms, color 220ms',
                  color: isActive ? accent : 'text.secondary',
                  '&:hover': { color: isActive ? accent : 'text.primary' },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.9375rem',
                    lineHeight: 1.45,
                    fontWeight: isActive ? 500 : 400,
                    color: 'inherit',
                  }}
                >
                  {section.label}
                </Typography>
              </Box>
            </Box>
          )
        })}
      </Stack>
    </Box>
  )
}
