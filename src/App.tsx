import { Fragment, useMemo } from 'react'
import Box from '@mui/material/Box'

import OutlineRail from './components/OutlineRail'
import RqMarker from './components/RqMarker'
import useActiveSection from './hooks/useActiveSection'
import { RAIL_GAP, shellSx } from './layout'
import { outline, researchQuestions, sections } from './sections'

export default function App() {
  const ids = useMemo(
    () => outline.map((node) => (node.kind === 'rq' ? node.id : node.section.id)),
    [],
  )
  const activeId = useActiveSection(ids)

  return (
    <Box sx={shellSx}>
      <OutlineRail sections={sections} activeId={activeId} />
      <Box component="main" sx={{ flex: 1, minWidth: 0, ml: { xs: 0, lg: `${RAIL_GAP}px` } }}>
        {outline.map((node) =>
          node.kind === 'rq' ? (
            <RqMarker
              key={node.id}
              id={node.id}
              accent={node.accent}
              label={researchQuestions[node.id].label}
              question={researchQuestions[node.id].question}
            />
          ) : (
            <Fragment key={node.section.id}>{node.section.render()}</Fragment>
          ),
        )}
      </Box>
    </Box>
  )
}
