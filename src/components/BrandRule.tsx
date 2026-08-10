import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

/** Full-width rule in the four Google brand colors. Cover only. */
export default function BrandRule({ sx }: { sx?: object }) {
  const colors = ['primary.main', 'error.main', 'warning.main', 'success.main']
  return (
    <Stack direction="row" spacing={0} sx={{ width: '100%', ...sx }}>
      {colors.map((color) => (
        <Box key={color} sx={{ flex: 1, height: 5, bgcolor: color }} />
      ))}
    </Stack>
  )
}
