import React from 'react'
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch"
import "./Caucasus.css"
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5"
import { useState, useRef } from "react"
import one from "../../../assets/15000bc.png"
import two from "../../../assets/5000bc.png"

const Caucasus = () => {

  const mapYears = ["15000 BC", "5000 BC"]

  const mapYearsNum = ["15"]
  const caucasusMaps = [
    one,
    two]

  const [selected, setSelected] = useState(0)
  const [input, setInput] = useState('')

  //custom date rom sheiyvans momxmarebeli tu BC aris mashin zevit amrgvaleb, tu AD qvevit
  const parseInput = () => {
      let parsedInput = input.toLowerCase().replace(/ /g, '')
      let yearNum = ''
      for(let i = 0; i < parsedInput.length; i++){
        let stringNum = ''
        if(parsedInput[i].match(/a/)) {
          yearNum = stringNum
          console.log(stringNum)
          break
        }
        stringNum = stringNum + parsedInput[i]
      }
    
  }

  return (
    <div>
      <div className="chevrons-container">
        <ul className="back-ul">
          <li className="back-li">
            <IoChevronBackSharp className="back-chevron" />
            <IoChevronBackSharp className="back-chevron" />
            <IoChevronBackSharp className="back-chevron" />
          </li>
          <li className="back-li">
            <IoChevronBackSharp className="back-chevron" />
            <IoChevronBackSharp className="back-chevron" />
          </li>
          <li className="back-li" onClick={() => {
            if (typeof caucasusMaps[selected - 1] != 'undefined') {
              setSelected(selected - 1)
            }
          }
          } >
            <IoChevronBackSharp className="back-chevron" />
          </li>
        </ul>

        <form onKeyDown={parseInput}>
          <input type="text" className="year-indicator" value={mapYears[selected]} onChange={e => 
          setInput(e.target.value)}/>
        </form>

        <ul className="forward-ul">
          <li className="forward-li" onClick={() => {
            if (typeof caucasusMaps[selected + 1] != 'undefined') {
              setSelected(selected + 1)
            }
          }
          } >
            <IoChevronForwardSharp className="forward-chevron" />
          </li>
          <li className="forward-li">
            <IoChevronForwardSharp className="forward-chevron" />
            <IoChevronForwardSharp className="forward-chevron" />
          </li>
          <li className="forward-li" onClick={() => {
            if (typeof caucasusMaps[selected + 3] != 'undefined') {
              setSelected(selected + 3)
            }
          }
          } >
            <IoChevronForwardSharp className="forward-chevron" />
            <IoChevronForwardSharp className="forward-chevron" />
            <IoChevronForwardSharp className="forward-chevron" />
          </li>
        </ul>
      </div>
      <TransformWrapper
        className="wrapper"
        defaultScale={1}
        defaultPositionX={1}
        defaultPositionY={1}
        wheel={{ step: 300 }}
      >

        <TransformComponent >
          <img className="caucasus-map" src={caucasusMaps[selected]}
          />
        </TransformComponent>


      </TransformWrapper>
    </div>
  )
}

export default Caucasus
