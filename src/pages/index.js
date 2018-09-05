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
    <div className={"container"}>
      <div className={"row col-md-4 offset-md-4"}>
      <object data={logo} type={"image/svg+xml"} style={styles.flipInX} />
      </div>
    </div>
    <h3 className={"display-4 text-center"}>Tools for helping the community.</h3>
    <div className={"row my-4"}>
      <div className={"col-sm-12 col-md-4 text-center"}>
        <h5>Manage your Events without the hassle</h5>
        <p>Every event post is built to provide as much information as possible to interested members. Automatic event ordering keeps new, trending events towards the top, giving coverage to opportunities that need more manpower.</p>
      </div>
      <div className={"col-sm-12 col-md-4 text-center"}>
        <h5>Automated hour tracking</h5>
        <p>openService will keep track of what events every user has joined. Using information inputed from a submitted sign in sheet, members will be able see a break down of how their total hours are broke down per event.</p>
      </div>
      <div className={"col-sm-12 col-md-4 text-center"}>
        <h5>All Open Source</h5>
        <p>Open Source development allows for a more transparent product, with the addition of community support for any issues. As well, this allows anyone with the know-how to host a copy for themselves.</p>
      </div>
    </div>
  </StyleRoot>
)

export default IndexPage
