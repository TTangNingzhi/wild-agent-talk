import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import Finding from './Finding'

export type MisalignFindingItem = {
  n: number
  headline: string
  evidence: readonly { value: string; label: string }[]
  quote: string
}

/** A misalignment finding: two stats side by side, one line of context under them. */
export default function MisalignFinding({
  item,
  divider = true,
}: {
  item: MisalignFindingItem
  divider?: boolean
}) {
  return (
    <Finding n={item.n} headline={item.headline} divider={divider} accent="error">
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 2, md: 4 }}
        sx={{ '& > *': { flex: 1, minWidth: 0 } }}
      >
        {item.evidence.map((stat) => (
          <Stack
            key={stat.value}
            spacing={0.25}
            sx={{ pl: 2, borderLeft: '3px solid', borderColor: 'grey.300' }}
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
      <Typography variant="body1" color="text.disabled">
        {item.quote}
      </Typography>
    </Finding>
  )
}
