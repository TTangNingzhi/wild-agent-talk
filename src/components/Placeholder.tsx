import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

/** Scaffold marker for a section whose content is not written yet. */
export default function Placeholder({ note }: { note: string }) {
  return (
    <Box
      sx={{
        border: '1px dashed',
        borderColor: 'divider',
        borderRadius: 1,
        px: 3,
        py: 4,
      }}
    >
      <Typography variant="body1" color="text.disabled">
        {note}
      </Typography>
    </Box>
  )
}
