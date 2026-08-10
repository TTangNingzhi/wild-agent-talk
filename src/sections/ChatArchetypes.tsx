import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { accentText } from '../accents'
import MethodFlow from '../components/MethodFlow'
import Reveal from '../components/Reveal'
import Finding from '../components/Finding'
import {
  clusterCaveat,
  clusterExplorer,
  clusterMethod,
  sessionArchetypes,
} from '../content/dataset'

const accent = 'warning' as const

/** RQ2, clustering half: how sessions were grouped, and the six archetypes. */
export default function ChatArchetypes() {
  return (
    <Finding
      n={8}
      headline="Longer sessions fall into six recurring archetypes by clustering"
      accent={accent}
    >
      <Reveal>
        <MethodFlow steps={clusterMethod} accent={accent} />
        <Typography variant="body2" color="text.disabled" sx={{ pt: 1.5 }}>
          {clusterCaveat}
        </Typography>
      </Reveal>

      <Reveal delay={100}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' },
            columnGap: 4,
            rowGap: 2.5,
          }}
        >
          {sessionArchetypes.map((archetype) => (
            <Stack key={archetype.name} spacing={0.75} sx={{ height: '100%' }}>
              <Chip
                variant="outlined"
                label={archetype.name}
                sx={{
                  alignSelf: 'flex-start',
                  maxWidth: '100%',
                  borderColor: archetype.color,
                  color: archetype.color,
                  bgcolor: `${archetype.color}14`,
                }}
              />
              <Typography variant="h4" component="p">
                {archetype.share}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {archetype.note}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Reveal>

      <Reveal delay={100}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1}
          sx={{ alignItems: { sm: 'baseline' }, justifyContent: 'space-between', pb: 1 }}
        >
          <Typography variant="body2" color="text.secondary">
            {clusterExplorer.note}
          </Typography>
          <Link
            href={clusterExplorer.url}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.5,
              color: accentText(accent),
              fontFamily: '"Google Sans", sans-serif',
              fontSize: '1rem',
              fontWeight: 500,
              whiteSpace: 'nowrap',
            }}
          >
            Open full screen
            <OpenInNewRoundedIcon sx={{ fontSize: 17 }} />
          </Link>
        </Stack>
        <Box
          component="iframe"
          src={clusterExplorer.url}
          title="Interactive t-SNE projection of 4,864 clustered sessions"
          sx={{
            display: 'block',
            width: '100%',
            height: { xs: 420, md: 640 },
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1,
          }}
        />
      </Reveal>
    </Finding>
  )
}
