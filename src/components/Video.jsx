import React from "react"
import styled from "styled-components"

const VideoWrapper = styled.div`
  > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Video = ({ embedded }) => {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0,
      }}
    >
      <VideoWrapper dangerouslySetInnerHTML={{ __html: embedded.html }} />
    </div>
  )
}

export default Video
