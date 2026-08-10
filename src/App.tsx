import { Fragment, useMemo } from 'react'
import Box from '@mui/material/Box'

import OutlineRail from './components/OutlineRail'
import useActiveSection from './hooks/useActiveSection'
import { RAIL_GAP, shellSx } from './layout'
import { sections } from './sections'

export default function App() {
  const ids = useMemo(() => sections.map((s) => s.id), [])
  const activeId = useActiveSection(ids)

  return (
    <Box sx={shellSx}>
      <OutlineRail sections={sections} activeId={activeId} />
      <Box
        component="main"
        sx={{ flex: 1, minWidth: 0, ml: { xs: 0, lg: `${RAIL_GAP}px` } }}
      >
        {sections.map((section) => (
          <Fragment key={section.id}>{section.render()}</Fragment>
        ))}
      </Box>
    </Box>
  )
}
