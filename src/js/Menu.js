import React from 'react'
import './Menu.scss'
import Button from 'react-bootstrap/Button';
import add from '/public/images/add.svg'
import homeIcon from '/public/images/home.svg'
import exportIcon from '/public/images/export.svg'
import plus from '/public/images/plus.svg'

export default function Menu() {
    return (
        <div className ="menuContainer">
               <Button variant="primary" id="add">
                <img src={add} alt="plus" class="btn-icon"/>
                <span id='text'>Add Projects</span>
                </Button>
                <div className='options'>
                    <Button variant="primary" id="home">
                    <img src={homeIcon} alt="plus" class="home-icon"/>
                    <span id='homeText'>Home</span>
                    </Button>
                    <Button variant="primary" id="export">
                    <img src={exportIcon} alt="plus" class="export-icon"/>
                    <span id='exportText'>Export Mode</span>
                    </Button>
                </div>
                <div className='lib'>
                    <span className='header'>My Library</span>
                    <Button variant="primary" id="recOp">
                    <span id='openedText'>Recently Opened</span>
                    </Button>
                    <Button variant="primary" id="star">
                    <span id='starredText'>Starred</span>
                    </Button>
                </div>
                <div className='play'>
                    <span className='header'>My Playlists</span>
                    <Button variant="primary" id="playlist">
                    <span className='playlistName'>Playlist1</span>
                    </Button>
                    <Button variant="primary" id="addPlaylist">
                    <img src={plus} alt="plus" class="plus-icon"/>
                    <span id='addPlaylistName'>Add Playlist</span>
                    </Button>
                </div>
                   
                
        </div>
    );
}