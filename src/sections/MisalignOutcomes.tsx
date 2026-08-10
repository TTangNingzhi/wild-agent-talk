import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { accentMain } from '../accents'
import MisalignFinding from '../components/MisalignFinding'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { misalignOutcomeFindings, misalignOutcomes } from '../content/dataset'

const accent = 'error' as const

type Row = { code: string; name: string; pct: number }

function Distribution({
  title,
  rows,
  note,
}: {
  title: string
  rows: readonly Row[]
  note?: string
}) {
  return (
    <Stack spacing={1.25} sx={{ minWidth: 0 }}>
      <Typography variant="overline" color="text.secondary">
        {title}
      </Typography>
      <Stack spacing={1}>
        {rows.map((row) => (
          <Stack key={row.code} spacing={0.5}>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'baseline' }}>
              <Typography variant="body1" sx={{ flex: 1, minWidth: 0 }}>
                {row.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}
              >
                {row.pct.toFixed(2)}%
              </Typography>
            </Stack>
            <Box sx={{ height: 8, bgcolor: 'grey.100', borderRadius: 0.5 }}>
              <Box
                sx={{
                  width: `${Math.max(row.pct, 0.4)}%`,
                  height: '100%',
                  borderRadius: 0.5,
                  bgcolor: accentMain(accent),
                }}
              />
            </Box>
          </Stack>
        ))}
      </Stack>
      {note && (
        <Typography variant="body2" color="text.disabled">
          {note}
        </Typography>
      )}
    </Stack>
  )
}

/** RQ2: what misalignment costs, where the damage lands, and who repairs it. */
export default function MisalignOutcomes() {
  return (
    <Section id="misalign-outcomes" title="Cost and repair">
      <Reveal>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            columnGap: 4,
            rowGap: 3,
            alignItems: 'start',
          }}
        >
          <Distribution title="Damage severity" rows={misalignOutcomes.severity} />
          <Distribution
            title="Damage locus"
            rows={misalignOutcomes.locus}
            note={misalignOutcomes.locusNote}
          />
          <Distribution
            title="Who resolved it"
            rows={misalignOutcomes.resolver}
            note={misalignOutcomes.resolverNote}
          />
        </Box>
      </Reveal>

      <Stack spacing={0}>
        {misalignOutcomeFindings.map((item, i) => (
          <MisalignFinding key={item.n} item={item} divider={i > 0} />
        ))}
      </Stack>
    </Section>
  )
}
