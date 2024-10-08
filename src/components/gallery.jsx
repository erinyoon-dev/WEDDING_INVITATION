import React from "react";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";
import "./gallery.css";

import GalleryPhoto0 from "../assets/images_00.jpeg";
import GalleryPhoto1 from "../assets/images_01.jpeg";
import GalleryPhoto2 from "../assets/images_02.jpeg";
import GalleryPhoto3 from "../assets/images_03.jpeg";
import GalleryPhoto4 from "../assets/images_04.jpeg";
import GalleryPhoto5 from "../assets/images_05.jpeg";
import GalleryPhoto6 from "../assets/images_06.jpeg";
import GalleryPhoto7 from "../assets/images_07.jpeg";
import GalleryPhoto8 from "../assets/images_08.jpeg";
import GalleryPhoto9 from "../assets/images_09.jpeg";
import GalleryPhoto10 from "../assets/images_10.jpeg";
import GalleryPhoto11 from "../assets/images_11.jpeg";
import GalleryPhoto12 from "../assets/images_12.jpeg";

const images = [
  {
    original: GalleryPhoto12,
    thumbnail: GalleryPhoto12,
  },
  {
    original: GalleryPhoto0,
    thumbnail: GalleryPhoto0,
  },
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
  {
    original: GalleryPhoto7,
    thumbnail: GalleryPhoto7,
  },
  {
    original: GalleryPhoto8,
    thumbnail: GalleryPhoto8,
  },
  {
    original: GalleryPhoto9,
    thumbnail: GalleryPhoto9,
  },
  {
    original: GalleryPhoto10,
    thumbnail: GalleryPhoto10,
  },
  {
    original: GalleryPhoto11,
    thumbnail: GalleryPhoto11,
  },
];

const Gallery = () => {
  return (
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
        showThumbnails={false}
      />
  );
};

export default Gallery;
