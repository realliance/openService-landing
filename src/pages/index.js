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
    <div style={{ height: '100vh '}}>
      <div className={"container"} style={{ paddingTop: '10vh '}}>
        <div className={"row col-md-4 offset-md-4"}>
        <object data={logo} type={"image/svg+xml"} style={styles.flipInX} />
        </div>
      </div>
      <h3 className={"display-4 text-center"}>Free. Open Source.</h3>
      <h3 className={"display-4 text-center"}>Tools for helping the community.</h3>
    </div>
    <div className={"row py-4"} style={{ backgroundColor: '#eeeeef' }}>
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
    <div className={"container"}>
      <div className={"my-4"}>
        <h4>User Accounts</h4>
        <p>Members can register on their own and then must be activated by a leader of the organization. This allows for clubs that have fees to not allow users to sign up until they have paid their dues.</p>
      </div>
      <div className={"my-4"}>
        <h4>Event Creation and Sign Ups</h4>
        <p>Organization leaders can post events for activated users to sign up for. openService will automatically organize the events by the most abundent slots avaliable, and close off full events to avoid overflow. As well, officers can generate a sign in sheet for the automatically, allowing for easy sign in once at the event. After the event, the participants can be updated and given their hours, all organized through openService.</p>
      </div>
      <div className={"my-4"}>
        <h4>Users in Control</h4>
        <p>Users can access their own dashboard to see how many hours they have earned, and a breakdown of how they achieved those hours.</p>
      </div>
      <div className={"my-4"}>
        <h4>Announcements</h4>
        <p>Leaders can publish announcement for every user to see. Whenever a user logs in, any new announcements will be displayed to them.</p>
      </div>
      <div className={"my-4"}>
        <h4>Make it your Own</h4>
        <p>Change the way your website feels using the settings panel located in the admin dashboard.</p>
      </div>
    </div>
  </StyleRoot>
)

export default IndexPage
