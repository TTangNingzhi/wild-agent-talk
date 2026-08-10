import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { accentMain, accentText } from '../accents'
import Reveal from '../components/Reveal'
import Finding from '../components/Finding'
import { sessionBoundaries, sessionOpenings } from '../content/dataset'

const accent = 'warning' as const

const colHead = {
  variant: 'body2' as const,
  color: 'text.disabled',
}

/** Finding 10: what a session break resets. */
export function ChatBoundaries() {
  return (
    <Finding
      n={10}
      headline="A break resets the conversation, not the task"
      accent={accent}
    >
      <Reveal>
        <Stack spacing={2}>
          <Typography variant="h5" component="p" color="text.secondary">
            {sessionBoundaries.keeps}
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 3,
              pt: 0.5,
            }}
          >
            {sessionBoundaries.resets.map((item) => (
              <Stack
                key={item.name}
                spacing={1}
                sx={{ pl: 2, borderLeft: '3px solid', borderColor: accentMain(accent) }}
              >
                <Typography variant="h5" component="h3">
                  {item.name}
                </Typography>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                  <Typography variant="h4" component="p">
                    {item.within}
                  </Typography>
                  <ArrowForwardRoundedIcon sx={{ color: accentMain(accent) }} />
                  <Typography variant="h4" component="p" color="text.disabled">
                    {item.across}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Box>
          <Typography variant="body2" color="text.disabled">
            Self-loop lift within a session, then across the break.
          </Typography>
        </Stack>
      </Reveal>
    </Finding>
  )
}

/** Finding 11: how opening messages differ from later turns. */
export function ChatOpenings() {
  return (
    <Finding
      n={11}
      headline="The first message is a different message"
      accent={accent}
    >
      <Reveal>
        <Stack spacing={2}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr auto auto',
              columnGap: { xs: 2, md: 5 },
              rowGap: 1,
              alignItems: 'center',
            }}
          >
            <Typography {...colHead}>Opening turn against later turns</Typography>
            <Typography {...colHead} sx={{ textAlign: 'right' }}>
              First
            </Typography>
            <Typography {...colHead} sx={{ textAlign: 'right' }}>
              Later
            </Typography>

            {sessionOpenings.rows.map((row) => [
              <Stack key={`${row.name}-n`} direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                {row.up ? (
                  <ArrowUpwardRoundedIcon sx={{ fontSize: 20, color: accentText(accent) }} />
                ) : (
                  <ArrowDownwardRoundedIcon sx={{ fontSize: 20, color: 'text.disabled' }} />
                )}
                <Typography variant="subtitle2">{row.name}</Typography>
              </Stack>,
              <Typography
                key={`${row.name}-a`}
                variant="h5"
                component="p"
                sx={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}
              >
                {row.first}
              </Typography>,
              <Typography
                key={`${row.name}-b`}
                variant="h5"
                component="p"
                color="text.disabled"
                sx={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}
              >
                {row.later}
              </Typography>,
            ])}
          </Box>

          <Typography variant="body1" color="text.secondary">
            {sessionOpenings.drift}
          </Typography>
        </Stack>
      </Reveal>
    </Finding>
  )
}
