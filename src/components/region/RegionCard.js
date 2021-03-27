import React from 'react'
import "./RegionCard.css"
import { useSpring, animated } from 'react-spring'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 30, (x - window.innerWidth / 2) / 30, 1.1]
const trans = (x, y, s) => `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const RegionCard = (props) => {
  const [prop, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <animated.div
      class="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{backgroundImage: props.backgroundImage, transform: prop.xys.interpolate(trans) }}
    ><h1 className="region">{props.regionName}</h1></animated.div>
  )
}

export default RegionCard
