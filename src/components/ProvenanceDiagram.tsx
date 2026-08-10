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
        position: 'relative',
        minWidth: 0,
        height: '100%',
        overflow: 'hidden',
        p: 2,
        pt: 2.25,
        bgcolor: tint,
        borderColor: 'divider',
      }}
    >
      {tone === 'dual' ? (
        <Stack direction="row" sx={{ position: 'absolute', inset: '0 0 auto 0', height: 4 }}>
          <Box sx={{ flex: 1, bgcolor: 'primary.main' }} />
          <Box sx={{ flex: 1, bgcolor: 'error.main' }} />
        </Stack>
      ) : (
        <Box sx={{ position: 'absolute', inset: '0 0 auto 0', height: 4, bgcolor: tone }} />
      )}
      <Stack spacing={0.75}>{children}</Stack>
    </Paper>
  )
}

function StraightArrow({ color = 'text.disabled' }: { color?: string }) {
  return (
    <Box sx={{ display: 'grid', placeItems: 'center', color }} aria-hidden="true">
      <ArrowForwardRoundedIcon sx={{ display: { xs: 'none', md: 'block' } }} />
      <ArrowDownwardRoundedIcon sx={{ display: { xs: 'block', md: 'none' } }} />
    </Box>
  )
}

function BranchConnector({ merge = false }: { merge?: boolean }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 32 200"
      preserveAspectRatio="none"
      aria-hidden="true"
      sx={{ width: '100%', height: '100%', display: 'block' }}
    >
      <path
        d={merge ? 'M0 50 H16 V100 H29' : 'M3 100 H16 V50 H29'}
        fill="none"
        stroke="#1a73e8"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d={merge ? 'M0 150 H16 V100 H29' : 'M3 100 H16 V150 H29'}
        fill="none"
        stroke="#ea4335"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <path d="M32 50 l-6 -4 v8 Z" fill="#1a73e8" opacity={merge ? 0 : 1} />
      <path d="M32 150 l-6 -4 v8 Z" fill="#ea4335" opacity={merge ? 0 : 1} />
      <path d="M32 100 l-6 -4 v8 Z" fill="#5f6368" opacity={merge ? 1 : 0} />
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
            'minmax(150px, .85fr) 36px minmax(180px, 1.05fr) 36px minmax(260px, 1.5fr) 36px minmax(190px, 1fr)',
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
