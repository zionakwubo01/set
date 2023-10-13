import React from 'react'
import logo from "../../assets/logo.jpg"
import styled from 'styled-components'
import confirmed from "../../assets/confirm-removebg-preview.png"
import logoblack from "../../assets/logoblack.jpg"
import { useState, useEffect, useRef } from "react"
import { FacebookShareButton } from "react-share"
import html2canvas from 'html2canvas'
import { WhatsappShareButton } from 'react-share'
import { InstapaperShareButton } from 'react-share'
import { LinkedinShareButton } from 'react-share'
import { TwitterShareButton } from 'react-share'
import { createSemanticDiagnosticsBuilderProgram } from 'typescript'
import userEvent from '@testing-library/user-event'


interface iData {
    name: string;
    email: string;
    phone: string;
    image: string;
    location: string;
    stack: string;
    description: string;
    id: any;
    time: string;
    like: number;
}

const Rsvp = () => {



    //download

    const printRef: any = useRef();

    const handleClick = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);

        const data = canvas.toDataURL("image/jpg");
        const link = document.createElement("a");

        if (typeof link.download === "string") {
            link.href = data;
            link.download = "image.jpeg";

            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
        } else {
            window.open(data);
        }
    };



    const [user, setuser] = useState<iData>()


    useEffect(() => {
        let data =
            JSON.parse(localStorage.getItem("invite")!);
        let getLast = data[data.length - 1]
        setuser(getLast)
    }, [])

    return (
        <div>

            <Container>

                <Wrapper ref={printRef}>
                    <Right>
                        <Logo dis="none" media="flex">
                            <img src={logoblack} alt="logo" />
                        </Logo>
                        <Profilepics>
                            <img src={user?.image} />
                        </Profilepics>
                    </Right>
                    <Left>
                        <Logo dis='flex' media="none">
                            <img src={logoblack} alt="logo" />
                        </Logo>
                        <Details>
                            <Name>{user?.name}</Name>
                            <Stack>{user?.stack}</Stack>
                        </Details>
                        <Title>
                            Bridging Your Future <span>With innovative technology</span>
                        </Title>
                        <Attend>
                            <Willattend>
                                I Will be Attending
                            </Willattend>
                            <Confirm>
                                <img src={confirmed} alt="confirmed" />
                            </Confirm>
                        </Attend>
                    </Left>
                </Wrapper>


                <Buttonshold>
                    <Download onClick={handleClick}>Download</Download>
                    <FacebookShareButton
                        url="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fforbestechcouncil%2F2019%2F02%2F22%2Fwant-to-learn-coding-check-out-these-resources-recommended-by-tech-experts%2F&psig=AOvVaw2ubFEV7eFyvHeXpVJgGAq6&ust=1697061600479000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOjMtLK97IEDFQAAAAAdAAAAABAE"
                        quote='se808 conference building your future with tech'
                        hashtag='#set08#codelab'
                    >

                        <Share>share</Share>

                    </FacebookShareButton>
                </Buttonshold>

            </Container>



        </div>
    )
}

export default Rsvp
const Share = styled.div`
padding: 10px 20px;
background-color: wheat;
&:hover{
    transform: scale(1.08);
    cursor: pointer;
    transition: 350ms all ease-in-out;
}
`
const Download = styled.button`
padding: 10px 20px;
background-color: wheat;
&:hover{
    transform: scale(1.08);
    cursor: pointer;
    transition: 350ms all ease-in-out;
}
`
const Buttonshold = styled.div`
display: flex;
gap: 20px;
flex-direction: row;
`
const Confirm = styled.div`
height: 80px;
width: 80px;
margin-right: 30px;
img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
`
const Willattend = styled.div`
font-size: 20px;
color: black;
font-weight: bold;

`
const Attend = styled.div`
display: flex;
align-items: center;
flex-direction: row;
gap: 30px;
height: 100px;
width: 100%;
justify-content: space-between;

`
const Title = styled.div`
font-size: 30px;
font-weight: bolder;
width: 80%;
/* background-color: red; */
color: white;
`
const Details = styled.div`

`
const Stack = styled.div`
   font-size: 18px;
color: black;

`
const Name = styled.div`
font-size: 30px;
font-weight: bolder;
color: white;

`
const Logo = styled.div<{ dis?: string, media?: string }>`
height: 50px;
width: 240px;
/* background-color: wheat; */
display: ${({ dis }) => dis};
align-items: center;
justify-content: center;
object-fit: cover;
margin-top: 40px;
img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
@media (max-width: 320px){
    display: ${({media})=>media};
    width: 100%;
   min-height: fit-content;
}
`
const Profilepics = styled.div`
    height: 50%;
    width: 75%;
    border: 2px solid orange;
background-color: white;
border-radius: 50%;

img{
    height: 100%;
    width: 100%;
    border-radius: 50%;

}
`
const Right = styled.div`
height: 100%;
width: 40%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;

@media (max-width: 320px){
    width: 30%;
   min-height: fit-content;
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 10px;
}
`
const Left = styled.div`
height: 100%;
width: 55%;
background-color: orange;
display: flex;
flex-direction: column;
padding-left: 5%;
gap: 20px;
@media (max-width: 320px){
    width: 70%;
   min-height: fit-content;

}
`
const Wrapper = styled.div`
height: 450px;
width: 790px;
background-color: cornsilk;
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width: 320px){
    width: 100%;
   min-height: fit-content;
   display: flex;
}
`
const Container = styled.div`
height: 100vh;
width: 100%;
background-color: black;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 30px;
/* flex-wrap: wrap;  */
@media (max-width: 320px){
    width: 100%;
    background-color: red;
}
`