import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import GitHubIcon from '@mui/icons-material/GitHub'

import ArxivIcon from './ArxivIcon'
import { accentMain, type Accent } from '../accents'
import type { Paper } from '../content/talk'

/**
 * One paper: the question it answers and its links, followed by its first page.
 */
export default function PaperCard({ paper }: { paper: Paper }) {
  const color = accentMain(paper.accent as Accent)

  return (
    <Stack spacing={2.5} sx={{ flex: 1, minWidth: 0 }}>
      <Stack spacing={1.5}>
        <Stack direction="row" spacing={1.25} sx={{ alignItems: 'center', flexWrap: 'wrap' }} useFlexGap>
          <Box sx={{ width: 28, height: 4, bgcolor: 'divider', borderRadius: 2 }} />
          <Typography variant="overline" color="text.primary">
            {paper.number} {paper.short}
          </Typography>
        </Stack>
        <Stack direction="row">
          <Chip
            size="small"
            variant="outlined"
            label={paper.status === 'accepted' ? paper.venue : `${paper.venue}, ${paper.status}`}
            sx={{ color: 'text.secondary' }}
          />
        </Stack>

        <Typography variant="h4">{paper.question}</Typography>

        <Stack direction="row" spacing={1} sx={{ pt: 0.5, flexWrap: 'wrap' }} useFlexGap>
          <Button
            href={paper.arxiv}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<ArxivIcon />}
            variant="outlined"
            sx={{ borderColor: 'divider', color: 'text.primary' }}
          >
            arXiv:{paper.arxivId}
          </Button>
          <Button
            href={paper.code}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GitHubIcon />}
            variant="outlined"
            sx={{ borderColor: 'divider', color: 'text.primary' }}
          >
            Code
          </Button>
        </Stack>
      </Stack>

      <Box
        component="a"
        href={paper.arxiv}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${paper.short} on arXiv`}
        sx={{
          display: 'block',
          borderRadius: 1,
          overflow: 'hidden',
          border: '1px solid',
          borderColor: 'divider',
          boxShadow: '0 1px 3px rgba(60,64,67,0.12), 0 4px 12px rgba(60,64,67,0.06)',
          transition:
            'transform 320ms cubic-bezier(0.2, 0, 0, 1), box-shadow 320ms cubic-bezier(0.2, 0, 0, 1), border-color 320ms',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 2px 6px rgba(60,64,67,0.16), 0 12px 28px rgba(60,64,67,0.14)',
            borderColor: color,
          },
          '@media (prefers-reduced-motion: reduce)': {
            '&:hover': { transform: 'none' },
          },
        }}
      >
        <Box
          component="img"
          src={paper.cover}
          alt={`First page of ${paper.title}`}
          loading="lazy"
          sx={{ display: 'block', width: '100%', height: 'auto' }}
        />
      </Box>
    </Stack>
  )
}
