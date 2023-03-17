
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export const wrapPageElement = ({ element, props }) => {
  return <ParallaxProvider>{element}</ParallaxProvider>
};





// import React from 'react'
//
// import { BgWrapper, FakeBgImg, Content, bgSlika } from './BgImageStyles.styles.js'
//
// const BGImg = ({ fluid, title, height, mobileHeight, children }) => (
//     <BgWrapper>
//         <FakeBgImg
//             fluid={fluid}
//             title={title}
//             height={height}
//             mobileHeight={mobileHeight}
//
//         />
//
//         <Content className={bgSlika}> {children} </Content>
//
//     </BgWrapper>
// )
//
// export default BGImg