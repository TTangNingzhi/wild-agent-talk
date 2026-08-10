import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

import MisalignFinding from '../components/MisalignFinding'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { misalignModality } from '../content/dataset'

/** RQ3: the same models fail differently depending on the interface. */
export default function MisalignModality() {
  return (
    <Section id="misalign-modality" title="IDE against CLI">
      <Reveal>
        <Stack spacing={1.25}>
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
                  py: 0.75,
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

      <Stack spacing={0}>
        {misalignModality.findings.map((item, i) => (
          <MisalignFinding key={item.n} item={item} divider={i > 0} />
        ))}
      </Stack>
    </Section>
  )
}
