import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import ProvenanceDiagram from '../components/ProvenanceDiagram'
import Reveal from '../components/Reveal'
import Section from '../components/Section'

const consequences = [
  {
    key: 'public',
    title: 'Public',
    body: 'Developers commit or push sessions to public repositories, intentionally or inadvertently.',
  },
  {
    key: 'crawlable',
    title: 'Crawlable',
    body: `GitHub Code Search API discovers both storage formats.`,
  },
  {
    key: 'contextual',
    title: 'Repository context',
    body: 'The session stays attached to the code and commit history.',
  },
] as const

/** How public agent sessions become collectable at all. */
export default function DataProvenance() {
  return (
    <Section id="data-provenance" title="Two routes into public Git repository">
      <Reveal>
        <ProvenanceDiagram />
      </Reveal>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={3}
        sx={{ pt: 1, '& > *': { flex: 1, minWidth: 0 } }}
      >
        {consequences.map((item, i) => (
          <Reveal key={item.key} delay={i * 120}>
            <Stack spacing={1.25}>
              <Chip
                label={item.title}
                variant="outlined"
                size="small"
                sx={{
                  alignSelf: 'flex-start',
                  height: 32,
                  color: 'text.secondary',
                  borderColor: 'grey.400',
                  fontSize: '1.125rem',
                  '& .MuiChip-label': { px: 1.25 },
                }}
              />
              <Typography variant="body1" color="text.secondary">
                {item.body}
              </Typography>
            </Stack>
          </Reveal>
        ))}
      </Stack>
    </Section>
  )
}
