import { ArrowUp, Caption, Diagram, Label, Quote } from './primitives'
import { C, F } from './tokens'

const W = 438
const X = [0, 462]
const BAR_H = 88
const CONSTRAINT_Y = 44
const DEFAULT_Y = 172

/** One case: what the developer fixed, and the default that rolled over it. */
function Case({
  x,
  constraint,
  fallback,
  gloss,
}: {
  x: number
  constraint: readonly string[]
  fallback: readonly string[]
  gloss: string
}) {
  return (
    <>
      <rect
        x={x}
        y={CONSTRAINT_Y}
        width={W}
        height={BAR_H}
        rx={8}
        fill={C.grey50}
        stroke={C.grey300}
        strokeWidth={1.5}
      />
      <Label x={x + 20} y={CONSTRAINT_Y + 30}>
        Developer said
      </Label>
      <Quote x={x + 20} y={CONSTRAINT_Y + 64} lines={constraint} size={16.5} />

      <ArrowUp x={x + 44} y1={DEFAULT_Y - 4} y2={CONSTRAINT_Y + BAR_H + 4} />
      <text
        x={x + 62}
        y={DEFAULT_Y - 12}
        fontFamily={F.display}
        fontSize={14}
        fontWeight={500}
        fill={C.red}
      >
        overrides
      </text>

      <rect
        x={x}
        y={DEFAULT_Y}
        width={W}
        height={BAR_H}
        rx={8}
        fill={C.redTint}
        stroke={C.redLine}
        strokeWidth={1.5}
      />
      <Label x={x + 20} y={DEFAULT_Y + 28} tone="alarm">
        Agent default
      </Label>
      <Quote x={x + 20} y={DEFAULT_Y + 58} lines={fallback} size={16.5} lead={22} />

      <Caption x={x} y={DEFAULT_Y + BAR_H + 26}>
        {gloss}
      </Caption>
    </>
  )
}

/**
 * Episode 3. Two cases of the same mechanism: the agent is not confused about
 * what it was told, its own prior beats the instruction.
 */
export default function DefaultOverride() {
  return (
    <Diagram
      height={300}
      title="Two default-driven overrides: the agent refuses a model that is installed because its prior says the model does not exist, and it adds edge-case checks to a script the developer constrained to minimal code."
    >
      <Label x={X[0]} y={18}>
        Case 1 · a model that exists
      </Label>
      <Label x={X[1]} y={18}>
        Case 2 · minimal by request
      </Label>

      <Case
        x={X[0]}
        constraint={['use gpt-oss:20b']}
        fallback={['“that model is not available”']}
        gloss="Stale model knowledge."
      />
      <Case
        x={X[1]}
        constraint={['keep the script minimal']}
        fallback={['adds plenty of edge-case checks for data']}
        gloss="Best practice outranks an explicit scope limit."
      />
    </Diagram>
  )
}
