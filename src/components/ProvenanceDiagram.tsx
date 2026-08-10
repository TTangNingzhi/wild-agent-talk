import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { ReactNode } from 'react'

import { sources } from '../content/dataset'

const specStory = sources.find((source) => source.key === 'specstory')!
const entire = sources.find((source) => source.key === 'entire')!

type Tone = 'primary.main' | 'error.main' | 'dual'

function FlowNode({ tone, children }: { tone: Tone; children: ReactNode }) {
  const tint =
    tone === 'primary.main'
      ? 'rgba(26, 115, 232, 0.04)'
      : tone === 'error.main'
        ? 'rgba(234, 67, 53, 0.04)'
        : 'grey.50'

  return (
    <Paper
      variant="outlined"
      sx={{
        minWidth: 0,
        height: '100%',
        p: 2,
        bgcolor: tint,
        borderColor: 'divider',
      }}
    >
      <Stack spacing={0.75}>{children}</Stack>
    </Paper>
  )
}

function StraightArrow({ color = 'text.disabled' }: { color?: string }) {
  return (
    <Box
      sx={{
        display: 'grid',
        placeItems: 'center',
        width: '100%',
        height: { xs: 32, md: '100%' },
        minHeight: 0,
        color,
      }}
      aria-hidden="true"
    >
      <ArrowForwardRoundedIcon sx={{ display: { xs: 'none', md: 'block' } }} />
      <ArrowDownwardRoundedIcon sx={{ display: { xs: 'block', md: 'none' } }} />
    </Box>
  )
}

/** Stroke of the MUI arrow shaft, so drawn lines and arrowheads read as one line. */
const LINE = 2
const RADIUS = 12
/** Kept clear on the right so the arrow icon's shaft continues the elbow. */
const ARROW_LANE = 24
/** Shared run before the split. */
const STEM = 10

/**
 * One rounded elbow: a horizontal leg at `at`, turning on `side` and running to `to`.
 * Drawn with borders rather than SVG so the corner stays a true arc at any cell height.
 */
function Elbow({
  color,
  at,
  to,
  side,
  left = 0,
}: {
  color: string
  at: string
  to: string
  side: 'left' | 'right'
  left?: number
}) {
  const downward = parseFloat(to) > parseFloat(at)
  const top = downward ? at : to
  const bottom = downward ? to : at
  const legEdge = downward ? 'Top' : 'Bottom'
  const turnEdge = side === 'left' ? 'Left' : 'Right'

  return (
    <Box
      sx={{
        position: 'absolute',
        left,
        right: ARROW_LANE,
        top: `calc(${top} - ${LINE / 2}px)`,
        height: `calc(${bottom} - ${top} + ${LINE}px)`,
        [`border${legEdge}`]: `${LINE}px solid`,
        [`border${turnEdge}`]: `${LINE}px solid`,
        borderColor: color,
        [`border${legEdge}${turnEdge}Radius`]: `${RADIUS}px`,
      }}
    />
  )
}

function BranchArrow({ color, at }: { color: string; at: string }) {
  return (
    <ArrowForwardRoundedIcon
      sx={{
        position: 'absolute',
        right: 4,
        top: at,
        fontSize: 24,
        color,
        transform: 'translateY(-50%)',
      }}
    />
  )
}

/** Vertical centers of the two diagram rows, as a share of the connector height. */
const ROW_TOP = '22%'
const ROW_BOTTOM = '74%'

function BranchConnector({ merge = false }: { merge?: boolean }) {
  const blueAt = merge ? '45%' : ROW_TOP
  const redAt = merge ? '55%' : ROW_BOTTOM

  return (
    <Box aria-hidden="true" sx={{ position: 'relative', width: '100%', height: '100%' }}>
      {merge ? (
        <>
          <Elbow color="primary.main" at={ROW_TOP} to="45%" side="right" />
          <Elbow color="error.main" at={ROW_BOTTOM} to="55%" side="right" />
        </>
      ) : (
        <>
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              width: STEM + LINE,
              top: `calc(50% - ${LINE / 2}px)`,
              height: LINE,
              bgcolor: 'text.disabled',
            }}
          />
          <Elbow color="primary.main" at={ROW_TOP} to="50%" side="left" left={STEM} />
          <Elbow color="error.main" at={ROW_BOTTOM} to="50%" side="left" left={STEM} />
        </>
      )}
      <BranchArrow color="primary.main" at={blueAt} />
      <BranchArrow color="error.main" at={redAt} />
    </Box>
  )
}

const codeSx = {
  fontFamily: '"Google Sans Code", monospace',
  fontSize: '0.875rem',
  lineHeight: 1.45,
  overflowWrap: 'anywhere',
} as const

function SharedStart() {
  return (
    <FlowNode tone="dual">
      <Typography variant="h6">Coding agent session</Typography>
      <Typography variant="body2" color="text.secondary">
        IDE or CLI
      </Typography>
    </FlowNode>
  )
}

function SpecStoryCapture() {
  return (
    <FlowNode tone="primary.main">
      <Link
        href={specStory.url}
        target="_blank"
        rel="noopener noreferrer"
        underline="hover"
        color="primary.main"
        aria-label={`${specStory.name} website`}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          alignSelf: 'flex-start',
          gap: 0.5,
          fontFamily: '"Google Sans", sans-serif',
          fontSize: '1rem',
          fontWeight: 500,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}
      >
        {specStory.name}
        <OpenInNewRoundedIcon sx={{ fontSize: 17 }} />
      </Link>
      <Typography variant="body2">Extension or CLI writes Markdown</Typography>
    </FlowNode>
  )
}

function SpecStoryStorage() {
  return (
    <FlowNode tone="primary.main">
      <Typography variant="subtitle2">Working branch</Typography>
      <Typography sx={{ ...codeSx, color: 'primary.main' }}>.specstory/history/*.md</Typography>
      <Typography variant="body2" color="text.secondary">
        Committed and pushed
      </Typography>
    </FlowNode>
  )
}

function EntireCapture() {
  return (
    <FlowNode tone="error.main">
      <Link
        href={entire.url}
        target="_blank"
        rel="noopener noreferrer"
        underline="hover"
        color="error.main"
        aria-label={`${entire.name} website`}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          alignSelf: 'flex-start',
          gap: 0.5,
          fontFamily: '"Google Sans", sans-serif',
          fontSize: '1rem',
          fontWeight: 500,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}
      >
        {entire.name}
        <OpenInNewRoundedIcon sx={{ fontSize: 17 }} />
      </Link>
      <Typography variant="body2">Agent integration plus Git hooks</Typography>
    </FlowNode>
  )
}

function EntireStorage() {
  return (
    <FlowNode tone="error.main">
      <Typography variant="subtitle2">During session, local only</Typography>
      <Typography sx={{ ...codeSx, color: 'text.secondary' }}>
        entire/&lt;session&gt;-&lt;worktree&gt;
      </Typography>
      <Typography variant="subtitle2">On commit</Typography>
      <Typography sx={{ ...codeSx, color: 'error.main' }}>entire/checkpoints/v1</Typography>
      <Typography variant="body2" color="text.secondary">
        Synced by the pre-push hook
      </Typography>
    </FlowNode>
  )
}

function PublicRepo() {
  return (
    <FlowNode tone="dual">
      <Typography variant="h6">Public GitHub repository</Typography>
      <Typography variant="body2" color="text.secondary">
        Session record plus code
      </Typography>
    </FlowNode>
  )
}

/** Shared collection skeleton with the two storage-specific paths highlighted. */
export default function ProvenanceDiagram() {
  return (
    <Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'grid' },
          gridTemplateColumns:
            'minmax(150px, .85fr) 52px minmax(180px, 1.05fr) 36px minmax(260px, 1.5fr) 52px minmax(190px, 1fr)',
          gridTemplateRows: 'minmax(142px, auto) minmax(174px, auto)',
          rowGap: 2,
          alignItems: 'stretch',
        }}
      >
        <Box sx={{ gridColumn: 1, gridRow: '1 / 3', alignSelf: 'center', height: 150 }}>
          <SharedStart />
        </Box>
        <Box sx={{ gridColumn: 2, gridRow: '1 / 3' }}>
          <BranchConnector />
        </Box>

        <Box sx={{ gridColumn: 3, gridRow: 1 }}>
          <SpecStoryCapture />
        </Box>
        <Box sx={{ gridColumn: 4, gridRow: 1 }}>
          <StraightArrow color="primary.main" />
        </Box>
        <Box sx={{ gridColumn: 5, gridRow: 1 }}>
          <SpecStoryStorage />
        </Box>

        <Box sx={{ gridColumn: 3, gridRow: 2 }}>
          <EntireCapture />
        </Box>
        <Box sx={{ gridColumn: 4, gridRow: 2 }}>
          <StraightArrow color="error.main" />
        </Box>
        <Box sx={{ gridColumn: 5, gridRow: 2 }}>
          <EntireStorage />
        </Box>

        <Box sx={{ gridColumn: 6, gridRow: '1 / 3' }}>
          <BranchConnector merge />
        </Box>
        <Box sx={{ gridColumn: 7, gridRow: '1 / 3', alignSelf: 'center', height: 150 }}>
          <PublicRepo />
        </Box>
      </Box>

      <Stack spacing={1.25} sx={{ display: { xs: 'flex', md: 'none' } }}>
        <SharedStart />
        <StraightArrow />
        <SpecStoryCapture />
        <StraightArrow color="primary.main" />
        <SpecStoryStorage />
        <StraightArrow />
        <EntireCapture />
        <StraightArrow color="error.main" />
        <EntireStorage />
        <StraightArrow />
        <PublicRepo />
      </Stack>
    </Box>
  )
}
