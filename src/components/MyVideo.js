import React, { useRef, useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import useResizeObserver from 'use-resize-observer'

export default function MyVideo({ url, className = '' }) {
  const videoContainerRef = useRef()
  const dimensions = useResizeObserver({ ref: videoContainerRef })
  const defaultVideoWidth = 640
  const defaultVideoHeight = 360
  const [videoWidth, setVideoWidth] = useState(640)
  const [videoHeight, setVideoHeight] = useState(360)

  /**
   * Set video width
   */
  useEffect(() => {
    const videoContainerWidth = videoContainerRef.current.getBoundingClientRect().width
    setVideoWidth(videoContainerWidth)
    setVideoHeight(videoContainerWidth * (defaultVideoHeight / defaultVideoWidth))
  }, [dimensions])

  return (
    <div ref={videoContainerRef} className={className}>
      <div className="flex flex-row justify-center" style={{ maxWidth: '100%' }}>
        <ReactPlayer
          url={url}
          width={`${videoWidth}px`}
          height={`${videoHeight}px`}
        />
      </div>
    </div>
  )
}