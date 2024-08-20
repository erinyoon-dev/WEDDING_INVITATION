import React, { useEffect } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/antd.css";
import Gallery from "../components/gallery";
import Share from "../components/share";
import Quote from "../components/quote";

import GroovePaper from "../assets/GroovePaper.png";
import Song from "../assets/song.mp3";
import Masia from "../assets/masia.png";
import Iglesia from "../assets/iglesia.png";
import Cal from "../assets/cal.png";
import Pin from "../assets/pin.png";
import Map from "../assets/map.png";

import AOS from "aos";
import "aos/dist/aos.css";
import "../components/hero.css";
import "../components/event.css";
import "../components/divider.css";

// markup
const { Footer } = Layout;

const Wrapper = styled.div`
  background: #ffffff;
  background-image: url(${GroovePaper});
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  background-color: #EDEFED;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 0.3rem;
`;

const IndexPage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });
  return (
    <Wrapper>
      <audio autoPlay loop>
        <source src={Song} />
      </audio>
      <Header>
        <br>
          <h1 className="divider-text">SAVE THE DATE!</h1>
          <div className="event-description">for the wedding of</div>
      </Header>
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            Junho Kwon & Seryong Yoon
          </div>
          <Gallery />
          <div className="hero-text">
            19 January 2025
          </div>
        </div>
      </div>
      <div className="divider">
        <h2 className="divider-text">THE EVENT</h2>
      </div>
      <div id="evento">
        <div className="event-header">
          <div className="event-title">THE WEDDING</div>
          <div className="event-description">The big day!</div>
        </div>
        <div className="event-content">
          <div className="event-media"><img className="event-image" src={Iglesia}></img></div>
          <div className="event-details">
            <div className="info-title"><h3>The Ceremony</h3></div>
            <div className="info">
              <div className="info-text">
                <div ><img className="icon" src={Cal}/></div>
                <div className="time-date">12:30h, Sunday, January 19th, 2025</div></div>
              <div className="info-text">
                <div><img className="icon" src={Pin}/></div>
                <div>
                  <div className="location"><h4>H Square Wedding Hall</h4></div>
                  <div className="address">22-2, Majo-ro, Seongdong-gu, Seoul</div>
                </div>
              </div>
              <div className="info-text">
                <div><img className="icon" src={Map}/></div>
                <div className="map"><a href="https://www.google.com/maps/place/H%EC%8A%A4%ED%80%98%EC%96%B4%EC%9B%A8%EB%94%A9%ED%99%80/data=!3m1!4b1!4m6!3m5!1s0x357ca5d4362571af:0xd64cdd7da9216d29!8m2!3d37.5594167!4d127.0414041!16s%2Fg%2F11rfbzds2j?authuser=0&entry=ttu" target="_blank">Map and directions</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="evento">
       <div className="event-content">
          <div className="event-media"><img className="event-image" src={Masia}></img></div>
          <div className="event-details">
            <div className="info-title"><h3>The Celebration</h3></div>
            <div className="info">
              <div className="info-text">
                <div ><img className="icon" src={Cal}/></div>
                <div className="time-date">15:00h, Sunday, January 19th, 2025</div></div>
              <div className="info-text">
                <div><img className="icon" src={Pin}/></div>
                <div>
                  <div className="location"><h4>To be updated</h4></div>
                </div>
              </div>
              <div className="info-text">
                <div><img className="icon" src={Map}/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Share />
      <Footer
        style={{
          background: "#D7CCC8",
          backgroundImage: `url(${GroovePaper})`,
          opacity: 0.6,
          textAlign: "center",
        }}
      >
        Copyright © 2024 Seryeong Yoon
      </Footer>
    </Wrapper>
  );
};

export default IndexPage;
