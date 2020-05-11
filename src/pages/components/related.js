import React from 'react';
import logo from '../../../images/logo.png';
import './related.css'
import Scroller from '../../libs/components/scroller.js'
import MyPlaylist from './my-playlist.js'
import MyFriends from './my-friends.js'

function Related(props) {
	return (
		<div className="Related">
      <div>
        <img 
          //className = "Related-logo"
          src={logo}
        />
      </div>
      <Scroller>
        <MyPlaylist data = {props.myPlaylist} />
        
      </Scroller>
		</div>
	)
}

export default Related;