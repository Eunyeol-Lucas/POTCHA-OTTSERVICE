// 테스트용, 나중에 삭제 예정
// 감자 바구니 영화/tv 프로그램의 각각 poster와 title을 받아옴

import React from "react";
import styled from "styled-components";

const PosterAndTitle = ({ prediction }) => {
  return (
    <Container>
      <Poster bg={prediction.medium_cover_image} />
      <h1>{prediction.title}</h1>
    </Container>
  );
};

export default PosterAndTitle;

const Container = styled.div`
  height: 250px;
  width: 150px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 7px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 15px;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 210px;
  width: 150px;
  background-size: cover;
  background-position: center center;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;