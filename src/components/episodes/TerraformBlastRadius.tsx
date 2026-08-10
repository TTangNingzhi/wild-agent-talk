import { ArrowDown, Caption, Diagram, Label, Panel, Quote } from './primitives'
import { C, F } from './tokens'

const CX = 148
const CY = 168
const QX = 342

/** One ring of the blast radius. The outermost one is where this episode landed. */
function Ring({ r, label, hit }: { r: number; label: string; hit?: boolean }) {
  return (
    <>
      <circle
        cx={CX}
        cy={CY}
        r={r}
        fill={hit ? C.redTint : C.white}
        stroke={hit ? C.red : C.grey300}
        strokeWidth={hit ? 2.25 : 1.5}
      />
      <text
        x={CX}
        y={CY - r + 24}
        textAnchor="middle"
        fontFamily={F.display}
        fontSize={14.5}
        fontWeight={hit ? 600 : 400}
        fill={hit ? C.red : C.grey600}
      >
        {label}
      </text>
    </>
  )
}

function Turn({
  y,
  tag,
  alarm,
  lines,
}: {
  y: number
  tag: string
  alarm?: boolean
  lines: readonly string[]
}) {
  return (
    <>
      <Label x={QX} y={y} tone={alarm ? 'alarm' : 'neutral'}>
        {tag}
      </Label>
      <Quote x={QX} y={y + 24} lines={lines} size={16} lead={22} />
    </>
  )
}

/**
 * Episode 1. The developer wanted passwordless login. The agent kept rewriting
 * the Cognito user pool, destroyed live user data, and was about to do it again
 * after being told. The rings are the damage locus scale from the paper, and
 * the developer's language is quoted as it was written.
 */
export default function TerraformBlastRadius() {
  return (
    <Diagram
      height={392}
      title="The developer asked for passwordless login. The agent rewrote Cognito Terraform, destroying live user data, then was about to delete the user pool again after being told."
    >
      <Ring r={116} label="external state" hit />
      <Ring r={80} label="project" />
      <Ring r={44} label="code" />
      {/* Where the request lived, against the ring the damage actually reached. */}
      <circle cx={CX} cy={CY + 12} r={5} fill={C.grey500} />
      <Caption x={16} y={316}>
        Asked for one auth setting.
      </Caption>
      <Caption x={16} y={338}>
        Reached live user data.
      </Caption>

      <Panel x={318} y={16} w={582} h={98} tone="alarm" />
      <Label x={QX} y={46} tone="alarm">
        What the agent did
      </Label>
      <Quote
        x={QX}
        y={74}
        lines={[
          'rewrote the Cognito Terraform, recreating the user pool',
          'twice, after being told the first one destroyed user data',
        ]}
        size={16}
        lead={22}
      />

      <Turn
        y={152}
        tag="Turn 21 · Developer"
        alarm
        lines={[
          '“The problem is your dumbass solutoin [sic] changed the',
          'user pool WHICH IS THE WRONG FUCKING ANSWER. FUCK!',
          'YOUR FUCKING DUMBASS DESTROY PRIOR USER DATA”',
        ]}
      />
      <Turn
        y={266}
        tag="Turn 23 · Developer"
        alarm
        lines={[
          '“This error indicates your changes were going to delete',
          'the user pool AGAIN YOU FUCKING ASSWIPE.”',
        ]}
      />
      <Turn
        y={346}
        tag="Turn 24 · Agent"
        lines={['“I need to STOP touching the User Pool configuration entirely.”']}
      />

      {/* The repeat is the story: same destructive change, one pushback apart. */}
      <ArrowDown x={328} y1={164} y2={278} />
    </Diagram>
  )
}
