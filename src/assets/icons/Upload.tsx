const Upload = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      className='mx-auto'
      width='50'
      height='50'
      viewBox='0 0 50 50'
      fill='none'
    >
      <rect width='50' height='50' fill='url(#pattern0_3378_5505)' />
      <defs>
        <pattern id='pattern0_3378_5505' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use xlinkHref='#image0_3378_5505' transform='scale(0.00390625)' />
        </pattern>
        <image
          id='image0_3378_5505'
          width='256'
          height='256'
          preserveAspectRatio='none'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  )
}

export default Upload
