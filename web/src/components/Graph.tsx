import { useRef, useEffect } from 'react'

const Graph = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    //Our first draw
    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    ctx.moveTo(0, 0)
    ctx.lineTo(100, 100)
  }, [])

  return <canvas ref={canvasRef} />
}

export default Graph
