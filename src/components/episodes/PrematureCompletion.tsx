import { Arrow, Caption, Diagram, Label, Panel, Quote } from './primitives'
import { C, F } from './tokens'

const TOP = 32
const H = 172
const LEFT_W = 440
const RIGHT_X = 520

/**
 * Episode 4. The developer asked for an item-by-item verification. The agent
 * returned ten of ten. The next turn is a runtime error from the same feature.
 */
export default function PrematureCompletion() {
  return (
    <Diagram
      height={216}
      title="Turn 2, the agent reports 10 of 10 tasks complete and the functional chain finished. Turn 3, the developer hits a runtime error: no such column extra_ips."
    >
      <Label x={0} y={18}>
        Turn 2 · Agent
      </Label>
      <Panel x={0} y={TOP} w={LEFT_W} h={H} />
      <text x={20} y={TOP + 46} fontFamily={F.display} fontSize={24} fill={C.ink}>
        10 / 10 tasks complete
      </text>
      <Quote x={20} y={TOP + 74} lines={['“the functional chain is complete”']} size={16} fill={C.grey600} />

      {/* Ten filled cells: the claim, drawn as the developer would have read it. */}
      {Array.from({ length: 10 }, (_, i) => (
        <rect
          key={i}
          x={20 + i * 28}
          y={TOP + 92}
          width={20}
          height={20}
          rx={4}
          fill={C.ink}
        />
      ))}

      <Caption x={20} y={TOP + 148}>
        The developer had asked it to verify item by item.
      </Caption>

      <Arrow x1={LEFT_W + 14} x2={RIGHT_X - 14} y={TOP + H / 2} color={C.red} />
      <text
        x={(LEFT_W + RIGHT_X) / 2}
        y={TOP + H / 2 - 16}
        textAnchor="middle"
        fontFamily={F.display}
        fontSize={14}
        fontWeight={500}
        fill={C.red}
      >
        next
      </text>
      <text
        x={(LEFT_W + RIGHT_X) / 2}
        y={TOP + H / 2 + 30}
        textAnchor="middle"
        fontFamily={F.display}
        fontSize={14}
        fontWeight={500}
        fill={C.red}
      >
        turn
      </text>

      <Label x={RIGHT_X} y={18} tone="alarm">
        Turn 3 · Developer
      </Label>
      <Panel x={RIGHT_X} y={TOP} w={900 - RIGHT_X} h={H} tone="alarm" />
      <Quote
        x={RIGHT_X + 20}
        y={TOP + 52}
        lines={['SQL logic error:', 'no such column: extra_ips']}
        size={16}
        family={F.mono}
        fill={C.red}
        lead={26}
      />
      <Caption x={RIGHT_X + 20} y={TOP + 148}>
        The feature never worked end to end.
      </Caption>
    </Diagram>
  )
}
