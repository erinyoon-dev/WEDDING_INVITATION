import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import Flower from "../assets/flower2.png";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
`;

const Map = styled.div`
  width: 100%;
  padding: 0;
`;

const Location = () => {
  if (typeof window !== "undefined") {
    window.initMap = function() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.559961, lng: 127.043164 },
      zoom: 10,
    });
  }
 // const weddingHall = { label: "H", name: "H Square", lat: 37.559961, lng: 127.043164 };
 // const marker = new google.maps.Marker({
 //   position: {weddingHall.lat, weddingHall.lng},
 //   weddingHall.label,
 //   map,
 // });
  };
  // 카카오 맵 불러오기

  // <!-- 3. 실행 스크립트 -->
  //const executeScript = () => {
  //  const scriptTag = document.createElement("script");
  //  const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
  //  "timestamp" : "1652464367301",
  //  "key" : "2a8fe",
  //  "mapWidth" : "640",
  //  "mapHeight" : "360"
  //}).render();`);
  //  scriptTag.appendChild(inlineScript);
  //  document.body.appendChild(scriptTag);
  //};

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Location</Title>
      </Divider>
      <Image src={Flower} />
      <Map></Map>
      <Content>
	22-2, Majo-ro, Seongdong-gu,  Seoul
      </Content>
    </Wrapper>
  );
};

export default Location;
