import React, { useEffect } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/antd.css";
import Gallery from "../components/gallery";
import Location from "../components/location";
import Share from "../components/share";
import Quote from "../components/quote";
import "../styles/index.css";

import GroovePaper from "../assets/GroovePaper.png";
import Cal from "../assets/cal.svg";
import Pin from "../assets/pin.svg";
import Map from "../assets/map.svg";
import Song from "../assets/song.mp3";
import Masia from "../assets/masia.png";
import Iglesia from "../assets/iglesia.png";

import AOS from "aos";
import "aos/dist/aos.css";
import "../components/hero.css";

// markup
const { Footer } = Layout;

const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  width: 100%;
`;

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div id={this.props.id}>
        <div className="event-header">
          <div className="event-title">{this.props.title}</div>
          <div className="event-description">{this.props.desc}</div>
        </div>
        <div className="event-content">
          <div className="event-media">{this.props.img}</div>
          <div className="event-details">
            <div className="info-title"><h3>{this.props.infoTitle}</h3></div>
            <div className="info">
              <div className="info-text">
                <div ><Cal className="icon" /></div>
                <div className="time-date">{this.props.schedule}</div></div>
              <div className="info-text">
                <div><Pin className="icon"/></div>
                <div>
                  <div className="location"><h4>{this.props.location}</h4></div>
                  <div className="address">{this.props.address}</div>
                </div>
              </div>
              <div className="info-text">
                <div><Map className="icon"/></div>
                <div className="map"><a href={this.props.mapLink} target="_blank">{this.props.map}</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const IndexPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDSqYvUeqdB5m3oqZkbK9BVjWvr3a87j3E&loading=async&callback=initMap&libraries=map,marker";
    //script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    document.body.appendChild(script);

    return () => {
      document.body.romoveChile(script);
    };
  }, []);

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
    /* Title */
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            Junho Kwon and Seryong Yoon
          </div>
          <Gallery />
          <div className="hero-text">
            19 January 2025
          </div>
        </div>
      </div>
    /* Event */
      <Event
        id="evento"
        title="LA BODA"
        desc="¡El gran día!"
        img={<img className="event-image" src={Iglesia}></img>}
        infoTitle="La Ceremonia"
        schedule="12:30h, Sábado, 17 de Octubre de 2020"
        location="Basílica de los Santos Mártires Justo y Pastor"
        address="Plaça de Sant Just, s/n, 08002 Barcelona"
        mobility="Se facilitará servicio de autocar desde el centro de Barcelona a la Iglesia y, después de la ceremonia, desde la Iglesia a la Masía Ribas."
        map="Mapa e indicaciones"
        mapLink="https://www.google.com/maps/place/Bas%C3%ADlica+dels+Sants+M%C3%A0rtirs+Just+i+Pastor/@41.3828179,2.1760105,17z/data=!3m1!4b1!4m5!3m4!1s0x12a4a2f8dc412f27:0x10cb34ec22f1c0e4!8m2!3d41.3828139!4d2.1782045"
      />
      <Location />
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
