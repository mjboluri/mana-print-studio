const wavePaths = {
  one: 'M0 88 C158 38 320 25 488 38 C652 50 738 88 890 94 C1054 101 1170 76 1306 47 C1378 31 1417 27 1440 24 L1440 150 L0 150 Z',
  two: 'M0 82 C170 42 342 32 506 44 C658 55 744 90 897 97 C1063 105 1180 82 1310 54 C1378 39 1417 35 1440 32 L1440 150 L0 150 Z',
  three: 'M0 90 C164 46 326 31 492 42 C652 53 742 86 900 92 C1062 98 1176 76 1306 50 C1378 35 1416 31 1440 28 L1440 150 L0 150 Z',
}

export default function WaveEdge({ fill, variant = 'one' }) {
  return (
    <svg
      className={`wave-edge wave-${variant}`}
      viewBox="0 0 1440 150"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={wavePaths[variant] ?? wavePaths.one} fill={fill} />
    </svg>
  )
}
