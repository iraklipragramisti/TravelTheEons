import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch"


const WorldMap = () => {
  return(
    <TransformWrapper
        defaultScale={1}
        defaultPositionX={1}
        defaultPositionY={1}
        wheel={{step:300}}
        >
        {({ zoomIn, zoomOut, resetTransform}) => (
          <>
            <div>
              <button onClick={zoomIn}> Zoom In </button>
              <button onClick={zoomOut}> Zoom Out </button>
              <button onClick={resetTransform}> Reset Map</button>
            </div>
            <TransformComponent >
              <img className="worldMap" src='/images/the-map.jpg' />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
  )
}

export default WorldMap;
