import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { misalignModality } from '../content/dataset'

/** RQ3: the same models fail differently depending on the interface. */
export default function MisalignModality() {
  return (
    <Section id="misalign-modality" title="IDE vs CLI">
      <Reveal>
        <Stack spacing={1.25} sx={{ width: '100%', maxWidth: 900, mx: 'auto' }}>
          <TableContainer>
            <Table
              aria-label="IDE against CLI comparison"
              sx={{
                tableLayout: 'fixed',
                borderTop: '2px solid',
                borderBottom: '2px solid',
                borderColor: 'grey.400',
                '& .MuiTableCell-root': {
                  borderBottom: 0,
                  fontSize: '1.0625rem',
                  px: 1.5,
                  py: 0.5,
                },
                '& .MuiTableCell-head': {
                  borderBottom: '1px solid',
                  borderColor: 'grey.400',
                  fontWeight: 600,
                },
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: '52%' }} />
                  <TableCell align="right" sx={{ width: '24%' }}>
                    IDE
                  </TableCell>
                  <TableCell align="right" sx={{ width: '24%' }}>
                    CLI
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {misalignModality.rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell sx={{ color: 'text.secondary' }}>{row.name}</TableCell>
                    <TableCell align="right" sx={{ fontVariantNumeric: 'tabular-nums' }}>
                      {row.ide}
                    </TableCell>
                    <TableCell align="right" sx={{ fontVariantNumeric: 'tabular-nums' }}>
                      {row.cli}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body2" color="text.disabled">
            {misalignModality.note}
          </Typography>
        </Stack>
      </Reveal>

      <Reveal>
        <Typography
          variant="h5"
          component="p"
          sx={{ pt: { xs: 2.5, md: 3 }, fontSize: '1.375rem', fontWeight: 400, lineHeight: 1.55 }}
        >
          <Box component="strong" sx={{ fontWeight: 600 }}>
            Takeaway:
          </Box>{' '}
          Developers push back more on faulty code in the IDE. In the CLI, they push back more on
          constraint violations, and failures reach further into project or external state. A
          likely reason is greater agent autonomy and less developer attention to code-level
          details.
        </Typography>
      </Reveal>
    </Section>
  )
}
