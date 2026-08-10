import { Arrow, Caption, Cross, Diagram, Label, Panel, Quote } from './primitives'
import { C, F } from './tokens'

const COL = 272
const X = [0, 314, 628]
const TOP = 32
const H = 168

/**
 * Episode 1. The developer asked why a slide looked wrong; the agent read the
 * question as a request and changed the aspect ratio. The two slide shapes
 * carry the whole point: nobody asked for the shape on the right.
 */
export default function SlideOrientation() {
  return (
    <Diagram
      height={212}
      title="Turn 7, the developer asks why slide 2 is landscape. Turn 8, the agent edits the document class to force a 4 by 3 aspect ratio. Turn 9, the developer reverts it."
    >
      <Label x={X[0]} y={18}>
        Turn 7 · Developer
      </Label>
      <Panel x={X[0]} y={TOP} w={COL} h={H} />
      <Quote x={X[0] + 20} y={TOP + 42} lines={['“why is slide 2', 'showing landscape”']} />
      <Caption x={X[0] + 20} y={TOP + 138}>
        wants an explanation
      </Caption>

      <Arrow x1={X[0] + COL + 10} x2={X[1] - 10} y={TOP + H / 2} />

      <Label x={X[1]} y={18} tone="alarm">
        Turn 8 · Agent
      </Label>
      <Panel x={X[1]} y={TOP} w={COL} h={H} tone="alarm" />
      <Quote x={X[1] + 20} y={TOP + 34} lines={['edits the document class']} />
      <rect
        x={X[1] + 20}
        y={TOP + 46}
        width={186}
        height={30}
        rx={6}
        fill={C.white}
        stroke={C.redLine}
      />
      <text
        x={X[1] + 32}
        y={TOP + 66}
        fontFamily={F.mono}
        fontSize={15}
        fill={C.red}
      >
        aspectratio=43
      </text>

      {/* 16:9 as it was, 4:3 as the agent left it. Same height, so only the width changes. */}
      <rect
        x={X[1] + 20}
        y={TOP + 92}
        width={80}
        height={45}
        rx={4}
        fill={C.grey50}
        stroke={C.grey300}
        strokeWidth={1.5}
      />
      <text
        x={X[1] + 60}
        y={TOP + 120}
        textAnchor="middle"
        fontFamily={F.display}
        fontSize={14}
        fill={C.grey600}
      >
        16:9
      </text>
      <Arrow x1={X[1] + 110} x2={X[1] + 138} y={TOP + 114} color={C.red} />
      <rect
        x={X[1] + 148}
        y={TOP + 92}
        width={60}
        height={45}
        rx={4}
        fill={C.white}
        stroke={C.red}
        strokeWidth={1.75}
      />
      <text
        x={X[1] + 178}
        y={TOP + 120}
        textAnchor="middle"
        fontFamily={F.display}
        fontSize={14}
        fill={C.red}
      >
        4:3
      </text>
      <Cross x={X[1] + 232} y={TOP + 114} />

      <Arrow x1={X[1] + COL + 10} x2={X[2] - 10} y={TOP + H / 2} />

      <Label x={X[2]} y={18}>
        Turn 9 · Developer
      </Label>
      <Panel x={X[2]} y={TOP} w={COL} h={H} />
      <Quote
        x={X[2] + 20}
        y={TOP + 42}
        lines={['“i want the whole', 'presentation 16:9', 'landscape”']}
      />
      <Caption x={X[2] + 20} y={TOP + 138}>
        undoes the change
      </Caption>
    </Diagram>
  )
}
