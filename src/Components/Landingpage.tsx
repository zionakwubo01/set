import styled from "styled-components"
import img from "../assets/back.jpg"
import { FacebookShareButton } from 'react-share'
const Landingpage = () => {
  return (
    <div>
      <Container>
        <VideoHold>
        <img src={img} alt="" />
        </VideoHold>
        <ContentHold>
          <Buttonhold>

          </Buttonhold>
        </ContentHold>
      </Container>
    </div>
  )
}

export default Landingpage

const Buttonhold = styled.div`

`
const ContentHold = styled.div`
height: 100%;
width: 100%;
font-weight: bolder;
background-color: transparent;
position: absolute;
top: 0;
display: flex;
align-items: center;
justify-content: center;
color: white;
font-size: 40px;
`
const VideoHold = styled.div`
height: 100%;
width: 100%;
img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
`
const Container = styled.div`
    height: 700px;
    width: 100%;
background-color: red;
color: white;
position: relative;
/* padding-top: 70px; */
`