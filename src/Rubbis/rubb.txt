import { useState, useEffect } from "react";
import styled from "styled-components";
import { AiFillHeart, AiOutlineFieldTime } from "react-icons/ai";

import moment from "moment";

interface iData {
  name: string;
  email: string;
  phone: string;
  image: string;
  location: string;
  stack: string;
  description: string;
  id: string;
  time: string;
  like: number;
}

const MainCard = () => {
  const [state, setState] = useState<number>(0);

  const [userState, setUserState] = useState<Array<iData>>();

  const countState = () => {
    setState((el) => {
      return el + 1;
    });
  };

  useEffect(() => {
    setUserState(JSON.parse(localStorage.getItem("invited")!));
  }, [userState]);

  return (
    <div>
      <Container>
        {userState?.map((el: iData) => (
          <Card key={el.phone}>
            <Top>
              <Image src={el.image} />
              <Favorite onClick={countState}>
                <Heart />
              </Favorite>
              <Stack>{el.stack}</Stack>
            </Top>
            <Div>{el.name}</Div>

            <TitleText>{el.description}</TitleText>

            <Title>
              <Diiv>
                <Icon />
                <Ago>{moment(el.time).fromNow()}</Ago>
              </Diiv>

              <Diiv>
                <Heart sign="88" />
                <Ago>{el.like}</Ago>
              </Diiv>
            </Title>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default MainCard;

const Diiv = styled.div`
  display: flex;
  align-items: center;
`;

const Ago = styled.div`
  margin-left: 5px;
`;

const Icon = styled(AiOutlineFieldTime)`
  color: darkorange;
  font-size: 20px;
`;

const TitleText = styled.div`
  background-color: #f5f7f6;
  margin: 0 10px;
  border-radius: 2px;
  font-size: 12px;
  padding: 10px 0;
  margin-bottom: 10px;
  padding-left: 10px;
  color: gray;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  padding-right: 10px;
`;

const Title = styled.div`
  background-color: #f5f7f6;
  margin: 0 10px;
  border-radius: 2px;
  font-size: 12px;
  padding: 10px 0;
  margin-bottom: 10px;
  padding-left: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  padding-right: 10px;
`;

const Div = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
  margin-left: 10px;
  text-transform: capitalize;
  font-weight: bold;
  color: #291600;
`;

const Stack = styled.div`
  font-size: 15px;
  background-color: darkorange;
  color: white;
  width: 150px;
  height: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: absolute;
  bottom: -20px;
  left: 10px;
  border-radius: 2px;
`;

const Heart = styled(AiFillHeart)<{ sign?: string }>`
  color: rgba(0, 0, 0, 0.3);
  transition: all 350ms;
  color: ${({ sign }) => (sign ? "red" : "")};

  &:hover {
    color: red;
    cursor: pointer;
  }
`;

const Favorite = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  width: 30px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 1px solid darkorange;
  transition: all 350ms;

  &:hover {
    color: red;
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Top = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
`;

const Card = styled.div`
  width: 250px;
  min-height: 300px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  margin: 10px;
`;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 95%;
`;