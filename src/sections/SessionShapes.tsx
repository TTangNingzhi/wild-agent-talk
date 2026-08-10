import Stack from '@mui/material/Stack'

import Section from '../components/Section'
import ChatArchetypes from './ChatArchetypes'
import ChatSessionLength from './ChatSessionLength'

/** RQ2, first half: how long sessions run, and the archetypes the long ones form. */
export default function SessionShapes() {
  return (
    <Section id="chat-shapes" title="Session archetypes">
      <Stack spacing={0}>
        <ChatSessionLength />
        <ChatArchetypes />
      </Stack>
    </Section>
  )
}
