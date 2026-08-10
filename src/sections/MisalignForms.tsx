import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

import { accentMain } from '../accents'
import heatmap from '../assets/figures/symptom-cause-heatmap.png'
import EpisodeCard from '../components/EpisodeCard'
import DefaultOverride from '../components/episodes/DefaultOverride'
import PrematureCompletion from '../components/episodes/PrematureCompletion'
import SlideOrientation from '../components/episodes/SlideOrientation'
import TerraformBlastRadius from '../components/episodes/TerraformBlastRadius'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import {
  misalignCauses,
  misalignEpisodes,
  misalignLabelNote,
  misalignSymptoms,
} from '../content/dataset'

const diagrams = {
  slides: SlideOrientation,
  terraform: TerraformBlastRadius,
  defaults: DefaultOverride,
  reporting: PrematureCompletion,
} as const

const accent = 'error' as const

type Row = { code: string; name: string; desc: string; all: number }

function Bar({ pct, scale }: { pct: number; scale: number }) {
  return (
    <Stack direction="row" spacing={1.25} sx={{ alignItems: 'center' }}>
      <Box sx={{ flex: 1, height: 12, bgcolor: 'grey.100', borderRadius: 0.5 }}>
        <Box
          sx={{
            width: `${(pct / scale) * 100}%`,
            height: '100%',
            borderRadius: 0.5,
            bgcolor: accentMain(accent),
          }}
        />
      </Box>
      <Typography
        component="span"
        sx={{
          width: 62,
          textAlign: 'right',
          fontVariantNumeric: 'tabular-nums',
          fontSize: '1rem',
          fontWeight: 600,
        }}
      >
        {pct.toFixed(2)}%
      </Typography>
    </Stack>
  )
}

function AxisTable({ head, rows }: { head: string; rows: readonly Row[] }) {
  const scale = Math.max(...rows.map((row) => row.all))
  return (
    <TableContainer>
      <Table
        aria-label={head}
        sx={{
          tableLayout: 'fixed',
          borderTop: '2px solid',
          borderBottom: '2px solid',
          borderColor: 'grey.400',
          '& .MuiTableCell-root': { borderBottom: 0, fontSize: '1.0625rem', px: 1.5, py: 0.65 },
          '& .MuiTableCell-head': {
            borderBottom: '1px solid',
            borderColor: 'grey.400',
            fontWeight: 600,
          },
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: '32%' }}>{head}</TableCell>
            <TableCell sx={{ width: '40%' }}>Description</TableCell>
            <TableCell sx={{ width: '28%' }}>Share of episodes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.code} id={`code-${row.code}`} sx={{ scrollMarginTop: 96 }}>
              <TableCell sx={{ fontFamily: '"Google Sans", sans-serif', fontWeight: 600 }}>
                <Box component="span" sx={{ color: 'text.disabled', pr: 1 }}>
                  {row.code}
                </Box>
                {row.name}
              </TableCell>
              <TableCell sx={{ color: 'text.secondary' }}>{row.desc}</TableCell>
              <TableCell>
                <Bar pct={row.all} scale={scale} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

/** RQ1: the symptom and cause taxonomy, and what the distribution says. */
export default function MisalignForms() {
  return (
    <Section id="misalign-forms" title="Seven symptoms, seven causes">
      <Reveal>
        <AxisTable head="Symptom" rows={misalignSymptoms} />
      </Reveal>

      <Reveal delay={100}>
        <Stack spacing={1.25}>
          <AxisTable head="Cause" rows={misalignCauses} />
          <Typography variant="body2" color="text.disabled">
            {misalignLabelNote}
          </Typography>
        </Stack>
      </Reveal>

      <Reveal delay={100}>
        <Stack spacing={1} sx={{ alignItems: 'center', pt: 1 }}>
          <Box
            component="img"
            src={heatmap}
            alt="Symptom by cause heatmap, row-normalized. Constraint violation concentrates on instruction-following failure."
            sx={{ display: 'block', width: '100%', maxWidth: 700, height: 'auto' }}
          />
          <Typography variant="body2" color="text.disabled">
            Which cause each symptom comes from, row-normalized.
          </Typography>
        </Stack>
      </Reveal>

      <Stack spacing={0} sx={{ pt: 1 }}>
        {misalignEpisodes.map((episode) => {
          const Diagram = diagrams[episode.key]
          return (
            <EpisodeCard
              key={episode.key}
              n={episode.n}
              title={episode.title}
              labels={episode.labels}
              note={'note' in episode ? episode.note : undefined}
            >
              <Diagram />
            </EpisodeCard>
          )
        })}
      </Stack>
    </Section>
  )
}
