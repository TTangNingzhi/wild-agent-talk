import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { ReactNode } from 'react'

import { accentMain } from '../accents'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import {
  misalignAxes,
  misalignCodebook,
  misalignRecord,
  misalignScope,
  misalignValidation,
} from '../content/dataset'

const accent = 'error' as const
const tint = 'rgba(234, 67, 53, 0.04)'
const mono = '"Google Sans Code", monospace'

/** One stage of the pipeline: number and title on the left, evidence on the right. */
function Stage({
  step,
  title,
  lead,
  children,
}: {
  step: string
  title: string
  lead: string
  children?: ReactNode
}) {
  return (
    <Reveal>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '260px 1fr' },
          columnGap: 4,
          rowGap: 2,
          py: { xs: 2.5, md: 3 },
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Stack spacing={0.75} sx={{ minWidth: 0 }}>
          <Typography variant="overline" sx={{ color: accentMain(accent) }}>
            Step {step}
          </Typography>
          <Typography variant="h3" component="h3">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {lead}
          </Typography>
        </Stack>
        <Stack spacing={2} sx={{ minWidth: 0 }}>
          {children}
        </Stack>
      </Box>
    </Reveal>
  )
}

function Card({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <Paper variant="outlined" sx={{ p: 2, borderColor: 'divider', bgcolor: tint }}>
      <Stack spacing={label ? 1 : 0}>
        {label && (
          <Typography variant="overline" color="text.secondary">
            {label}
          </Typography>
        )}
        {children}
      </Stack>
    </Paper>
  )
}

/** Method: what misalignment means here, and how 20,574 sessions become 16,118 episodes. */
export default function MisalignMethod() {
  return (
    <Section id="misalign-pipeline" title="From raw sessions to grounded failures">
      <Stack spacing={0}>
        <Stage step="1" title="Scope" lead={misalignScope.frame}>
          <Typography variant="h5" component="p">
            {misalignScope.definition}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ '& > *': { flex: 1 } }}>
            {misalignScope.goals.map((goal) => (
              <Card key={goal.name}>
                <Typography variant="subtitle1">{goal.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {goal.note}
                </Typography>
              </Card>
            ))}
          </Stack>
          <Typography variant="body2" color="text.disabled">
            {misalignScope.outOfScope}
          </Typography>
        </Stage>

        <Stage
          step="2"
          title="Extraction"
          lead="One structured record per breakdown, induced bottom-up from the whole session."
        >
          <Card label="Extracted record">
            <Stack spacing={0.5} sx={{ fontFamily: mono, fontSize: '0.9375rem' }}>
              {misalignRecord.fields.map((field) => (
                <Box key={field.key} sx={{ display: 'flex', gap: 1.5, alignItems: 'baseline' }}>
                  <Box component="span" sx={{ color: accentMain(accent), whiteSpace: 'nowrap' }}>
                    {field.key}
                  </Box>
                  <Box component="span" sx={{ color: 'text.primary' }}>
                    {field.value}
                  </Box>
                </Box>
              ))}
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'baseline', pt: 0.5 }}>
                <Box component="span" sx={{ color: accentMain(accent) }}>
                  evidence
                </Box>
              </Box>
              <Stack spacing={0.25} sx={{ pl: 2, borderLeft: '2px solid', borderColor: 'grey.300' }}>
                {misalignRecord.evidence.map((item) => (
                  <Typography
                    key={item.turn}
                    variant="body2"
                    sx={{ fontFamily: mono, color: 'text.secondary' }}
                  >
                    turn {item.turn} | {item.role}: “{item.quote}”
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Card>
          <Stack component="ul" spacing={0.5} sx={{ m: 0, pl: 2.5 }}>
            {misalignRecord.rules.map((rule) => (
              <Typography key={rule} component="li" variant="body1" color="text.secondary">
                {rule}
              </Typography>
            ))}
          </Stack>
        </Stage>

        <Stage
          step="3"
          title="Validation"
          lead="A single extraction pass produces systematic false positives, in two recurring shapes."
        >
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ '& > *': { flex: 1 } }}>
            {misalignValidation.patterns.map((pattern) => (
              <Card key={pattern.name}>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'baseline' }}>
                  <Typography variant="h4" component="p" sx={{ color: accentMain(accent) }}>
                    {pattern.share}
                  </Typography>
                  <Typography variant="subtitle1">{pattern.name}</Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ pt: 0.5 }}>
                  {pattern.note}
                </Typography>
              </Card>
            ))}
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 4 }}>
            {[
              { value: misalignValidation.keptPct, label: `kept, ${misalignValidation.kept} episodes` },
              { value: misalignValidation.precision, label: `precision, ${misalignValidation.precisionNote}` },
              { value: misalignValidation.recall, label: `recall, ${misalignValidation.recallNote}` },
            ].map((stat) => (
              <Stack
                key={stat.label}
                spacing={0.25}
                sx={{ flex: 1, pl: 2, borderLeft: '3px solid', borderColor: 'grey.300' }}
              >
                <Typography variant="h4" component="p">
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stage>

        <Stage
          step="4"
          title="Annotation"
          lead="Four axes, three rounds of abductive coding until saturation."
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(4, 1fr)' },
              gap: 2,
            }}
          >
            {misalignAxes.map((axis) => (
              <Card key={axis.code}>
                <Typography variant="subtitle1">{axis.code}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {axis.note}
                </Typography>
                <Typography variant="body2" color="text.disabled" sx={{ pt: 0.5 }}>
                  {axis.kind}
                </Typography>
              </Card>
            ))}
          </Box>
          <Stack spacing={1}>
            {misalignCodebook.rounds.map((round) => (
              <Stack key={round.n} direction="row" spacing={2} sx={{ alignItems: 'baseline' }}>
                <Typography
                  variant="subtitle2"
                  sx={{ color: 'text.disabled', whiteSpace: 'nowrap', width: 64 }}
                >
                  Round {round.n}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {round.note}
                </Typography>
              </Stack>
            ))}
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 4 }}>
            {[
              { value: misalignCodebook.ira, label: 'inter-rater agreement, 100 records, 6 sub-axes' },
              { value: misalignCodebook.accuracy, label: 'LLM judge accuracy against the gold standard' },
            ].map((stat) => (
              <Stack
                key={stat.label}
                spacing={0.25}
                sx={{ flex: 1, pl: 2, borderLeft: '3px solid', borderColor: 'grey.300' }}
              >
                <Typography variant="h4" component="p">
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stage>
      </Stack>
    </Section>
  )
}
