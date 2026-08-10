import Stack from '@mui/material/Stack'

import Section from '../components/Section'
import { ChatBoundaries, ChatOpenings } from './ChatDynamics'
import ChatTransitions from './ChatTransitions'

/** RQ2, second half: how intents move within a session, across a break, and over its arc. */
export default function SessionDynamics() {
  return (
    <Section id="chat-dynamics" title="Intent dynamics">
      <Stack spacing={0}>
        <ChatTransitions />
        <ChatBoundaries />
        <ChatOpenings />
      </Stack>
    </Section>
  )
}
