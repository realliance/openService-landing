import React from 'react'
import Link from 'gatsby-link'

import { flipInX } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  flipInX: {
    animation: 'x 2s',
    animationName: Radium.keyframes(flipInX, 'flipInX')
  }
}

import logo from '../../public/static/openServiceLogo-01.svg'

const IndexPage = () => (
  <StyleRoot>
    <div className={"row col-md-4 offset-md-4"}>
     <object data={logo} type={"image/svg+xml"} style={styles.flipInX} />
    </div>
    <h3 className={"display-4 text-center"}>Tools for helping the community.</h3>
    <div className={"row"}>
      <div className={"col-sm-4"}>
        <h6>Post your Events without the hassle.</h6>
        <p></p>
      </div>
      <div className={"col-sm-4"}>
        <h6>Post your Events without the hassle.</h6>
      </div>
      <div className={"col-sm-4"}>
        <h6>Post your Events without the hassle.</h6>
      </div>
    </div>
  </StyleRoot>
)

export default IndexPage
