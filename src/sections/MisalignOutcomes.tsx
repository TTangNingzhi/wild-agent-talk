import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { accentMain } from '../accents'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { misalignOutcomes } from '../content/dataset'

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

      <Reveal>
        <Typography
          variant="h5"
          component="p"
          sx={{ pt: { xs: 2.5, md: 3 }, fontSize: '1.375rem', fontWeight: 400, lineHeight: 1.55 }}
        >
          <Box component="strong" sx={{ fontWeight: 600 }}>
            Takeaway:
          </Box>{' '}
          Most episodes do not damage the system. But that does not mean agents are safe:{' '}
          {misalignOutcomes.resolver[0].pct.toFixed(2)}% of visible fixes happen only after a
          developer pushes back. Developers catch the problem and absorb the cost before it can
          spread.
        </Typography>
      </Reveal>
    </Section>
  )
}
