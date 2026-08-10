import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

import { accentMain } from '../accents'
import MethodFlow from '../components/MethodFlow'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { intentMethod, intentMultiLabel, intentTaxonomy } from '../content/dataset'

const accent = 'warning' as const

/** Longest bar in the table, so every row shares one scale. */
const scale = Math.max(...intentTaxonomy.map((c) => c.pct))

function Bar({ pct, main }: { pct: number; main?: boolean }) {
  return (
    <Stack direction="row" spacing={1.25} sx={{ alignItems: 'center' }}>
      <Box sx={{ flex: 1, height: main ? 12 : 8, bgcolor: 'grey.100', borderRadius: 0.5 }}>
        <Box
          sx={{
            width: `${(pct / scale) * 100}%`,
            height: '100%',
            borderRadius: 0.5,
            bgcolor: main ? accentMain(accent) : 'warning.light',
            opacity: main ? 1 : 0.5,
          }}
        />
      </Box>
      <Typography
        component="span"
        sx={{
          width: 62,
          textAlign: 'right',
          fontVariantNumeric: 'tabular-nums',
          fontSize: '1rem',
          fontWeight: main ? 600 : 400,
          color: main ? 'text.primary' : 'text.secondary',
        }}
      >
        {pct.toFixed(2)}%
      </Typography>
    </Stack>
  )
}

/** RQ1: the intent taxonomy, how it was built, and how the messages fall across it. */
export default function ChatIntents() {
  return (
    <Section id="chat-intents">
      <Reveal>
        <MethodFlow steps={intentMethod} accent={accent} />
      </Reveal>

      <Reveal delay={100}>
        <TableContainer sx={{ pt: 1 }}>
          <Table
            aria-label="Behavioral intent taxonomy with message shares"
            sx={{
              tableLayout: 'fixed',
              borderTop: '2px solid',
              borderBottom: '2px solid',
              borderColor: 'grey.400',
              '& .MuiTableCell-root': {
                borderBottom: 0,
                fontSize: '1.0625rem',
                px: 1.5,
                py: 0.55,
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
                <TableCell sx={{ width: '30%' }}>Category and subcategory</TableCell>
                <TableCell sx={{ width: '42%' }}>Definition and example</TableCell>
                <TableCell sx={{ width: '28%' }}>Share of messages</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {intentTaxonomy.map((category, i) => [
                <TableRow key={category.name}>
                  <TableCell
                    sx={{
                      fontWeight: 600,
                      fontFamily: '"Google Sans", sans-serif',
                      borderTop: i === 0 ? 0 : '1px solid',
                      borderTopColor: 'divider',
                      pt: i === 0 ? 1 : 1.25,
                    }}
                  >
                    {category.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: 'text.secondary',
                      borderTop: i === 0 ? 0 : '1px solid',
                      borderTopColor: 'divider',
                      pt: i === 0 ? 1 : 1.25,
                    }}
                  >
                    {category.definition}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderTop: i === 0 ? 0 : '1px solid',
                      borderTopColor: 'divider',
                      pt: i === 0 ? 1 : 1.25,
                    }}
                  >
                    <Bar pct={category.pct} main />
                  </TableCell>
                </TableRow>,
                ...category.subs.map((sub) => (
                  <TableRow key={`${category.name}-${sub.name}`}>
                    <TableCell sx={{ pl: 4, color: 'text.secondary' }}>{sub.name}</TableCell>
                    <TableCell
                      sx={{
                        color: 'text.disabled',
                        fontStyle: 'italic',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      “{sub.example}”
                    </TableCell>
                    <TableCell>
                      <Bar pct={sub.pct} />
                    </TableCell>
                  </TableRow>
                )),
              ])}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="body2" color="text.disabled" sx={{ pt: 1.25 }}>
          Labels are multi-label: {intentMultiLabel.share} of messages carry more than one intent
          (mean {intentMultiLabel.mean}), so shares sum past 100%.
        </Typography>
      </Reveal>
    </Section>
  )
}
