/**
 * Shared drawing vocabulary for the episode diagrams. Every episode is a
 * hand-written SVG on a 900-unit grid, so the same panel, label, quote, and
 * arrow read identically across all four.
 */

import { C, F } from './tokens'

type Tone = 'neutral' | 'alarm'

export function Panel({
  x,
  y,
  w,
  h,
  tone = 'neutral',
}: {
  x: number
  y: number
  w: number
  h: number
  tone?: Tone
}) {
  const alarm = tone === 'alarm'
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={10}
      fill={alarm ? C.redTint : C.white}
      stroke={alarm ? C.redLine : C.grey300}
      strokeWidth={1.5}
    />
  )
}

/** Small-caps locator above a panel, or a field name inside one. */
export function Label({
  x,
  y,
  tone = 'neutral',
  children,
}: {
  x: number
  y: number
  tone?: Tone
  children: string
}) {
  return (
    <text
      x={x}
      y={y}
      fontFamily={F.display}
      fontSize={14}
      fontWeight={500}
      letterSpacing={1.1}
      fill={tone === 'alarm' ? C.red : C.grey500}
    >
      {children.toUpperCase()}
    </text>
  )
}

/** A verbatim developer or agent line, pre-split so it wraps where we want it. */
export function Quote({
  x,
  y,
  lines,
  size = 16.5,
  fill = C.ink,
  family = F.text,
  lead = 23,
}: {
  x: number
  y: number
  lines: readonly string[]
  size?: number
  fill?: string
  family?: string
  lead?: number
}) {
  return (
    <>
      {lines.map((line, i) => (
        <text
          key={line}
          x={x}
          y={y + i * lead}
          fontFamily={family}
          fontSize={size}
          fill={fill}
        >
          {line}
        </text>
      ))}
    </>
  )
}

/** Grey gloss under a quote: what the turn was actually doing. */
export function Caption({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <text x={x} y={y} fontFamily={F.text} fontSize={14.5} fill={C.grey600}>
      {children}
    </text>
  )
}

export function Arrow({
  x1,
  x2,
  y,
  color = C.grey500,
}: {
  x1: number
  x2: number
  y: number
  color?: string
}) {
  return (
    <g stroke={color} fill={color} strokeWidth={1.75}>
      <line x1={x1} y1={y} x2={x2 - 7} y2={y} strokeLinecap="round" />
      <path d={`M ${x2} ${y} L ${x2 - 9} ${y - 5} L ${x2 - 9} ${y + 5} Z`} stroke="none" />
    </g>
  )
}

/** Vertical arrow, used where a default pushes up through a constraint. */
export function ArrowUp({
  x,
  y1,
  y2,
  color = C.red,
}: {
  x: number
  y1: number
  y2: number
  color?: string
}) {
  return (
    <g stroke={color} fill={color} strokeWidth={1.75}>
      <line x1={x} y1={y1} x2={x} y2={y2 + 7} strokeLinecap="round" />
      <path d={`M ${x} ${y2} L ${x - 5} ${y2 + 9} L ${x + 5} ${y2 + 9} Z`} stroke="none" />
    </g>
  )
}

/** Vertical arrow pointing down, for a thing that happened again further along. */
export function ArrowDown({
  x,
  y1,
  y2,
  color = C.red,
}: {
  x: number
  y1: number
  y2: number
  color?: string
}) {
  return (
    <g stroke={color} fill={color} strokeWidth={1.75}>
      <line x1={x} y1={y1} x2={x} y2={y2 - 7} strokeLinecap="round" />
      <path d={`M ${x} ${y2} L ${x - 5} ${y2 - 9} L ${x + 5} ${y2 - 9} Z`} stroke="none" />
    </g>
  )
}

/** Red cross, marking the thing that should not have happened. */
export function Cross({ x, y, r = 7 }: { x: number; y: number; r?: number }) {
  return (
    <g stroke={C.red} strokeWidth={2.25} strokeLinecap="round">
      <line x1={x - r} y1={y - r} x2={x + r} y2={y + r} />
      <line x1={x + r} y1={y - r} x2={x - r} y2={y + r} />
    </g>
  )
}

/** The frame the whole diagram sits in: full width, scales with the column. */
export function Diagram({
  height,
  title,
  children,
}: {
  height: number
  title: string
  children: React.ReactNode
}) {
  return (
    <svg
      viewBox={`0 0 900 ${height}`}
      role="img"
      aria-label={title}
      style={{ display: 'block', width: '100%', height: 'auto' }}
    >
      {children}
    </svg>
  )
}
