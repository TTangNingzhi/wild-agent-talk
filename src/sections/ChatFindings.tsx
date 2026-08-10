import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import Finding from '../components/Finding'
import Section from '../components/Section'
import { intentFindings } from '../content/dataset'

type Evidence = (typeof intentFindings)[number]['evidence'][number]

function Stat({ item }: { item: Evidence }) {
  return (
    <Stack spacing={0.25} sx={{ pl: 2, borderLeft: '3px solid', borderColor: 'grey.300' }}>
      <Typography variant="h4" component="p">
        {item.value}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {item.label}
      </Typography>
    </Stack>
  )
}

function Quote({ item }: { item: Evidence }) {
  return (
    <Stack spacing={0.25} sx={{ pl: 2, borderLeft: '3px solid', borderColor: 'grey.300' }}>
      <Typography variant="h5" component="p" sx={{ fontStyle: 'italic' }}>
        “{item.value}”
      </Typography>
      <Typography variant="body2" color="text.disabled">
        {item.label}
      </Typography>
    </Stack>
  )
}

/** RQ1 findings, one line each, with the two strongest pieces of evidence under it. */
export default function ChatFindings() {
  return (
    <Section id="chat-findings" title="Six findings">
      <Stack spacing={0}>
        {intentFindings.map((finding, i) => (
          <Finding key={finding.n} n={Number(finding.n)} headline={finding.headline} divider={i > 0}>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={{ xs: 2, md: 4 }}
              sx={{ '& > *': { flex: 1, minWidth: 0 } }}
            >
              {finding.evidence.map((item) =>
                item.kind === 'stat' ? (
                  <Stat key={item.value} item={item} />
                ) : (
                  <Quote key={item.value} item={item} />
                ),
              )}
            </Stack>
          </Finding>
        ))}
      </Stack>
    </Section>
  )
}
