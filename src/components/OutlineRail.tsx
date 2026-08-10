import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { accentMain, accentText, type Accent } from '../accents'
import { RAIL_WIDTH } from '../layout'
import { researchQuestions, type ResearchQuestion, type SectionEntry } from '../sections'

type OutlineRailProps = {
  sections: SectionEntry[]
  activeId: string
}

type Group = { rq?: ResearchQuestion; items: SectionEntry[] }
type Part = { name: string; accent: Accent; anchor: string; groups: Group[] }

/** Parts, each holding its RQ runs, derived from the section list. */
function buildParts(sections: SectionEntry[]): Part[] {
  const parts: Part[] = []

  for (const section of sections) {
    const name = section.group ?? ''
    let part = parts.at(-1)
    if (!part || part.name !== name) {
      part = { name, accent: section.accent ?? 'primary', anchor: section.id, groups: [] }
      parts.push(part)
    }
    if (section.showInOutline === false) continue

    const group = part.groups.at(-1)
    if (group && group.rq === section.rq) group.items.push(section)
    else part.groups.push({ rq: section.rq, items: [section] })
  }

  return parts.filter((part) => part.groups.length > 0)
}

const rowSx = (active: boolean, accent: Accent, indent: number) => ({
  display: 'block',
  textDecoration: 'none',
  pl: indent,
  py: 0.5,
  borderLeft: '2px solid',
  borderColor: active ? accentMain(accent) : 'divider',
  transition: 'border-color 220ms, color 220ms',
  color: active ? accentText(accent) : 'text.secondary',
  '&:hover': { color: active ? accentText(accent) : 'text.primary' },
})

/**
 * The talk outline: parts, the questions inside them, and the sections that
 * answer each question. Only the part being presented is expanded, so the
 * whole structure stays visible without becoming a list of everything.
 */
export default function OutlineRail({ sections, activeId }: OutlineRailProps) {
  const parts = buildParts(sections)
  const activeIndex = sections.findIndex((section) => section.id === activeId)
  const activeSection = activeIndex >= 0 ? sections[activeIndex] : undefined
  const activeRq =
    activeSection?.rq ?? (activeId in researchQuestions ? (activeId as ResearchQuestion) : undefined)
  const activePart = activeSection?.group ?? parts.find((p) => p.groups.some((g) => g.rq === activeRq))?.name

  /** The outline row that owns the viewport, skipping sections the rail hides. */
  const activeRowId =
    activeSection?.showInOutline === false
      ? sections
          .slice(0, activeIndex)
          .reverse()
          .find((section) => section.showInOutline !== false)?.id
      : activeSection?.id

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
        {parts.map((part) => {
          const inPart = part.name === activePart

          return (
            <Box key={part.name} sx={{ pt: 2 }}>
              <Box
                component="a"
                href={`#${part.anchor}`}
                sx={{
                  display: 'block',
                  textDecoration: 'none',
                  pl: 2,
                  py: 0.25,
                  borderLeft: '2px solid',
                  borderColor: inPart ? accentMain(part.accent) : 'divider',
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    color: inPart ? accentText(part.accent) : 'text.disabled',
                    transition: 'color 220ms',
                  }}
                >
                  {part.name}
                </Typography>
              </Box>

              {part.groups.map((group) => (
                  <Box key={group.rq ?? group.items[0].id}>
                    {group.rq && (
                      <Box
                        component="a"
                        href={`#${group.rq}`}
                        sx={{
                          ...rowSx(activeRq === group.rq, part.accent, 2),
                          py: 0.4,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            color: 'text.disabled',
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {researchQuestions[group.rq].label}
                        </Typography>
                      </Box>
                    )}

                    {group.items.map((section) => (
                      <Box
                        key={section.id}
                        component="a"
                        href={`#${section.id}`}
                        aria-current={section.id === activeRowId ? 'true' : undefined}
                        sx={rowSx(section.id === activeRowId, part.accent, group.rq ? 3.5 : 2)}
                      >
                        <Typography
                          sx={{
                            fontSize: '0.9375rem',
                            lineHeight: 1.45,
                            fontWeight: section.id === activeRowId ? 500 : 400,
                            color: 'inherit',
                          }}
                        >
                          {section.label}
                        </Typography>
                      </Box>
                    ))}
                </Box>
              ))}
            </Box>
          )
        })}
      </Stack>
    </Box>
  )
}
