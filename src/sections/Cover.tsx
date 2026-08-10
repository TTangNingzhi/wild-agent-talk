import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import BrandRule from '../components/BrandRule'
import Slide from '../components/Slide'
import { papers, talk } from '../content/talk'

/** Staggered fade-up, applied once on mount. Disabled under reduced motion. */
const riseIn = (delayMs: number) => ({
  opacity: 0,
  animation: 'coverRise 700ms cubic-bezier(0.2, 0, 0, 1) forwards',
  animationDelay: `${delayMs}ms`,
  '@keyframes coverRise': {
    from: { opacity: 0, transform: 'translateY(14px)' },
    to: { opacity: 1, transform: 'none' },
  },
  '@media (prefers-reduced-motion: reduce)': { opacity: 1, animation: 'none' },
})

export default function Cover() {
  return (
    <Slide id="cover" fullHeight>
      <Stack spacing={{ xs: 4, md: 5 }} sx={{ width: '100%' }}>
        <Typography variant="h1" sx={{ ...riseIn(0) }}>
          {talk.title}
        </Typography>

        <BrandRule sx={riseIn(120)} />

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2.5, md: 5 }}
          sx={{ ...riseIn(200), '& > *': { flex: 1, minWidth: 0 } }}
        >
          {papers.map((paper) => (
              <Stack
                key={paper.key}
                spacing={0.75}
                sx={{ borderLeft: '3px solid', borderColor: 'divider', pl: 2 }}
              >
                <Typography variant="overline" color="text.primary">
                  {paper.number} {paper.short}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {paper.question}
                </Typography>
              </Stack>
          ))}
        </Stack>
      </Stack>

      {/* Byline, set off from the title block by a clear band of space. */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 3, sm: 4 }}
        sx={{
          width: '100%',
          mt: { xs: 8, md: 12 },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', sm: 'flex-end' },
          borderTop: '1px solid',
          borderColor: 'divider',
          pt: { xs: 3, md: 4 },
          ...riseIn(320),
        }}
      >
        <Stack spacing={1}>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: 'baseline' }}>
            <Typography variant="h4" component="p" sx={{ fontSize: '1.5rem' }}>
              <Link
                href={talk.speaker.homepage}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                underline="hover"
              >
                {talk.speaker.name}
              </Link>
            </Typography>
            <Typography
              component="span"
              sx={{
                fontFamily: '"Google Sans Code", monospace',
                fontSize: '1.125rem',
                color: 'text.disabled',
              }}
            >
              {talk.speaker.ldap}
            </Typography>
          </Stack>
          {talk.speaker.roles.map((role) => (
            <Typography
              key={role}
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: '1.1875rem' }}
            >
              {role}
            </Typography>
          ))}
        </Stack>

        <Stack spacing={0.75} sx={{ alignItems: { xs: 'flex-start', sm: 'flex-end' } }}>
          <Typography variant="overline" color="text.disabled" sx={{ fontSize: '1.0625rem' }}>
            Presented to
          </Typography>
          <Typography variant="h6" component="p" sx={{ fontSize: '1.1875rem' }}>
            {talk.venue}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1875rem' }}>
            {talk.date}
          </Typography>
        </Stack>
      </Stack>

      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          left: '50%',
          bottom: 16,
          transform: 'translateX(-50%)',
          color: 'text.disabled',
          display: { xs: 'none', md: 'block' },
          animation: 'scrollCue 2.6s ease-in-out 1.8s infinite',
          '@keyframes scrollCue': {
            '0%, 100%': { transform: 'translate(-50%, 0)', opacity: 0.45 },
            '50%': { transform: 'translate(-50%, 5px)', opacity: 1 },
          },
          '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
        }}
      >
        <KeyboardArrowDownIcon fontSize="small" />
      </Box>
    </Slide>
  )
}
