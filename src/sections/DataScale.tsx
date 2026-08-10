import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

import timeline from '../assets/figures/agent-timeline.png'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import {
  agentTable,
  chatDataset,
  combined,
  modalityTotals,
  sweChat,
} from '../content/dataset'

const nf = new Intl.NumberFormat('en-US')

const stages = [
  {
    date: chatDataset.crawled,
    label: '① Programming by Chat',
    title: 'SpecStory only (identified by me)',
    detail: `${chatDataset.sessions} IDE sessions across ${chatDataset.repos} repositories`,
    accent: 'primary.main',
  },
  {
    date: sweChat.released,
    label: 'New source',
    title: 'SWE-chat ships (from Stanford)',
    detail: 'Entire.io open a second route into real CLI agent sessions',
    accent: 'error.main',
  },
  {
    date: combined.crawled,
    label: '② Coding Agent Misalignment',
    title: 'Both sources',
    detail: `${combined.sessions} IDE and CLI sessions across ${combined.repos} repositories`,
    accent: 'success.main',
  },
] as const

/** How the first IDE-only corpus grew into the combined misalignment dataset. */
export default function DataScale() {
  return (
    <Section
      id="data-scale"
      title="Scope expands"
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={0}
        sx={{ '& > *': { flex: 1, minWidth: 0 } }}
      >
        {stages.map((stage, i) => (
          <Reveal key={stage.label} delay={i * 100}>
            <Stack
              spacing={1.25}
              sx={{
                height: '100%',
                borderTop: '4px solid',
                borderColor: stage.accent,
                pt: 2,
                pr: { md: 3 },
                pb: { xs: 3, md: 0 },
              }}
            >
              <Typography variant="body2" color="text.disabled">
                {stage.date}
              </Typography>
              <Typography variant="overline" sx={{ color: stage.accent }}>
                {stage.label}
              </Typography>
              <Typography variant="h4" component="h3">
                {stage.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {stage.detail}
              </Typography>
            </Stack>
          </Reveal>
        ))}
      </Stack>

      <Reveal delay={100}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2, md: 4 }}
          sx={{ alignItems: { md: 'flex-end' }, pt: 2 }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="overline" color="primary.main">
              Corpus breadth
            </Typography>
            <Typography variant="h3">Agent coverage</Typography>
          </Box>
          <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
            <Chip label={`${nf.format(modalityTotals.IDE)} IDE`} variant="outlined" />
            <Chip label={`${nf.format(modalityTotals.CLI)} CLI`} variant="outlined" />
          </Stack>
        </Stack>

        <TableContainer sx={{ width: '100%', maxWidth: 720, mx: 'auto', pt: 2 }}>
          <Table
            aria-label="Agent composition of the combined dataset"
            sx={{
              tableLayout: 'fixed',
              borderTop: '2px solid',
              borderBottom: '2px solid',
              borderColor: 'grey.400',
              '& .MuiTableCell-root': {
                borderBottom: 0,
                fontSize: '1.0625rem',
                px: 1.5,
                py: 0.8,
              },
              '& .MuiTableCell-head': {
                borderBottom: '1px solid',
                borderColor: 'grey.400',
                fontWeight: 600,
              },
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: '24%' }}>Modality</TableCell>
                <TableCell sx={{ width: '46%' }}>Agent</TableCell>
                <TableCell align="right" sx={{ width: '30%' }}>
                  Sessions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {agentTable.map((row, i) => {
                const firstOfModality = i === 0 || agentTable[i - 1].modality !== row.modality
                const accent = row.modality === 'IDE' ? 'primary.main' : 'error.main'
                return (
                  <TableRow key={`${row.modality}-${row.agent}`}>
                    <TableCell
                      sx={{
                        color: accent,
                        fontWeight: 500,
                      }}
                    >
                      {firstOfModality ? row.modality : ''}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: row.agent === 'Unknown' ? 'text.disabled' : 'text.primary',
                      }}
                    >
                      {row.agent}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {nf.format(row.sessions)}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography
          variant="body2"
          color="text.disabled"
          sx={{ width: '100%', maxWidth: 720, mx: 'auto', pt: 1.25 }}
        >
          Unknown means agent identity was missing from early SpecStory exports.
        </Typography>
      </Reveal>

      <Reveal delay={100}>
        <Stack spacing={1.5} sx={{ pt: 2 }}>
          <Box
            component="img"
            src={timeline}
            alt="Monthly session volume by modality from the misalignment paper. IDE sessions dominate first, then CLI volume grows sharply after Entire launches."
            sx={{
              display: 'block',
              width: '100%',
              height: 'auto',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
              p: 2,
            }}
          />
          <Typography variant="body2" color="text.disabled">
            CLI enters late, then grows fast.
          </Typography>
        </Stack>
      </Reveal>
    </Section>
  )
}
