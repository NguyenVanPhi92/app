const Services = ({ color }: { color: string }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='21' height='20' viewBox='0 0 21 20' fill='none'>
      <mask
        id='mask0_3336_697'
        style={{ maskType: 'alpha' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='1'
        width='21'
        height='18'
      >
        <path
          d='M2.87372 3.46312H18.1263C18.7255 3.46312 19.2158 2.97286 19.2158 2.37365C19.2158 1.77444 18.7255 1.28418 18.1263 1.28418H2.87372C2.27451 1.28418 1.78425 1.77444 1.78425 2.37365C1.78425 2.97286 2.27451 3.46312 2.87372 3.46312ZM19.3901 5.42416C19.292 4.92301 18.8453 4.55259 18.3224 4.55259H2.67761C2.15467 4.55259 1.70799 4.92301 1.60993 5.42416L0.520465 10.8715C0.389729 11.547 0.901779 12.1789 1.58814 12.1789H1.78425V17.6262C1.78425 18.2254 2.27451 18.7157 2.87372 18.7157H11.5895C12.1887 18.7157 12.6789 18.2254 12.6789 17.6262V12.1789H17.0368V17.6262C17.0368 18.2254 17.5271 18.7157 18.1263 18.7157C18.7255 18.7157 19.2158 18.2254 19.2158 17.6262V12.1789H19.4119C20.0982 12.1789 20.6103 11.547 20.4795 10.8715L19.3901 5.42416ZM10.5 16.5367H3.96319V12.1789H10.5V16.5367Z'
          fill='black'
        />
      </mask>
      <g mask='url(#mask0_3336_697)'>
        <rect x='0.5' y='-0.000976562' width='20' height='20' fill={color} />
      </g>
    </svg>
  )
}

export default Services
