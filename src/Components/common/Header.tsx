import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Header = () => {
  return (
    <div>
<Container>
<Wrapper>
<Logo>CODELAB</Logo>
<NavLink to="/registar">
<Getstarted>GET STARTED</Getstarted>
</NavLink>
</Wrapper>
</Container>
    </div>
  )
}

export default Header
const Logo = styled.div`
color: orangered;
font-size: 25px;
font-weight: bolder;
@media (max-width: 320px){
 
  
      
        }
`
const Getstarted = styled.button`
padding: 10px 30px;
background-color: #fdf0e4;
border: 1px solid orange;
border-radius: 30px;
color: black;
font-size: 15px;
font-weight: 700;
&:hover{
    cursor: pointer;

}
@media (max-width: 320px){
  padding: 7px 10px;
      
        }
`
const Wrapper = styled.div`
    height: 60px;
    width: 95%;
    background-color: #faf7f4;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: #46444446 2px 1px 2px 1px ;
    padding-left: 20px;
    padding-right: 20px;
    @media (max-width: 320px){
      width: 97%;
      display: flex;
      justify-content: space-between;
      
        }
`
const Container = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* box-shadow: #46444446 2px 1px 2px 1px ; */
    position: fixed;
    z-index: 1;
    @media (max-width: 320px){
      width: 100%;

        }
`