const Sim = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='36'
      height='36'
      viewBox='0 0 36 36'
      fill='none'
    >
      <rect width='36' height='36' fill='url(#pattern0_3315_8401)' />
      <defs>
        <pattern id='pattern0_3315_8401' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use xlinkHref='#image0_3315_8401' transform='scale(0.00390625)' />
        </pattern>
        <image
          id='image0_3315_8401'
          width='256'
          height='256'
          preserveAspectRatio='none'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  )
}

export default Sim
