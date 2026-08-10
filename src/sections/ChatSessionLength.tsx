import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { accentMain } from '../accents'
import cdf from '../assets/figures/session-length-cdf.png'
import Reveal from '../components/Reveal'
import Finding from '../components/Finding'
import { sessionLength } from '../content/dataset'

const accent = 'warning' as const

/** Finding 7: most sessions are short, and long ones are a different kind of work. */
export default function ChatSessionLength() {
  return (
    <Finding
      n={7}
      headline="Most sessions are short, the long tail is where work gets hard"
      divider={false}
      accent={accent}
    >
      <Reveal>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.15fr 1fr' },
            columnGap: 4,
            rowGap: 3,
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src={cdf}
            alt="Cumulative distribution of user messages per session. Median 3, 90th percentile 15, max 156."
            sx={{ display: 'block', width: '100%', height: 'auto' }}
          />

          <Stack spacing={3}>
            {sessionLength.groups.map((group) => (
              <Stack
                key={group.key}
                spacing={1}
                sx={{ pl: 2, borderLeft: '3px solid', borderColor: accentMain(accent) }}
              >
                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'baseline' }}>
                  <Typography variant="h4" component="h3">
                    {group.title}
                  </Typography>
                  <Typography variant="body2" color="text.disabled">
                    {group.range}, n = {group.sessions}
                  </Typography>
                </Stack>
                <Typography variant="subtitle2">{group.lead}</Typography>
                <Stack spacing={0.25}>
                  {group.intents.map((intent) => (
                    <Stack
                      key={intent.name}
                      direction="row"
                      spacing={2}
                      sx={{ justifyContent: 'space-between' }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        {intent.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.disabled"
                        sx={{ fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}
                      >
                        {intent.pair}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            ))}
            <Typography variant="body2" color="text.disabled">
              Each pair is this group against the other.
            </Typography>
          </Stack>
        </Box>
      </Reveal>
    </Finding>
  )
}
