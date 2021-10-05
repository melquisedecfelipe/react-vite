import { FC } from 'react'

import * as S from './styles'

const Home: FC = () => (
  <S.Wrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23174 23 20.46348"
    >
      <title>React Logo</title>
      <circle cx="0" cy="0" r="2.05" fill="#DFDEDE" />
      <g stroke="#DFDEDE" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>

    <div>
      <h1>React Boilerlate</h1>
      <a
        href="http://github.com/melquisedecfelipe/react"
        target="_blank"
        rel="noopener noreferrer"
      >
        github.com/melquisedecfelipe/react
      </a>
    </div>
  </S.Wrapper>
)

export default Home
