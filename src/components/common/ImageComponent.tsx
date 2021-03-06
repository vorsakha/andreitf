import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

// Utils
import useFilterImage from "../../utils/useFilterImage"

// Types
type ImageTypes = {
  rounded?: boolean
  image: string
  hover?: boolean
  shadow?: boolean
  alt: string
  forceheight?: boolean
}
type ImageStyledTypes = {
  rounded?: boolean
  hover?: boolean
  shadow?: boolean
  forceheight?: boolean
}

// Styled Components
const Img = styled(GatsbyImage)`
  width: 100% !important;
  height: ${(props: ImageStyledTypes) =>
    props.forceheight ? "100% !important" : "auto"};
  animation: 0.2s fade;
  overflow: hidden;
  max-height: none;
  border-radius: ${({ rounded }) => (rounded ? "4px !important" : "0")};
  box-shadow: ${({ shadow }) =>
    shadow
      ? "rgb(17 17 26 / 10%) 0px 1px 0px, rgb(17 17 26 / 10%) 0px 8px 12px, rgb(17 17 26 / 1%) 0px 16px 28px !important"
      : "none"};

  div {
    justify-content: center;
    border-radius: ${({ rounded }) => (rounded ? "4px !important" : "0")};
    height: ${({ forceheight }) => (forceheight ? "100% !important" : "auto")};
    margin: 0 !important;
  }

  img {
    width: 100%;
    height: ${({ forceheight }) => (forceheight ? "100% !important" : "auto")};
    margin: 0 auto;
    align-self: center;
    border-radius: ${({ rounded }) => (rounded ? "4px !important" : "0")};
    max-height: none;
    transition: opacity 0.25s linear, transform 0.2s ease !important;

    :hover {
      transform: ${({ hover }) => (hover ? "scale(1.1)" : "none")};
    }
  }

  @media screen and (min-width: 768px) {
    border-radius: ${({ rounded }) => (rounded ? "4px !important" : "0")};
    cursor: ${({ hover }) => (hover ? "pointer" : "auto")};

    img {
      max-width: none;
      margin: 0;
    }
  }
`

const Image: React.FC<ImageTypes> = ({
  rounded,
  image,
  hover,
  shadow,
  alt,
  forceheight,
}): JSX.Element => {
  return (
    <Img
      image={useFilterImage(image)}
      alt={alt}
      rounded={rounded}
      hover={hover}
      shadow={shadow}
      forceheight={forceheight}
    />
  )
}

export default Image
