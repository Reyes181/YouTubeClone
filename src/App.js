import React, {Component} from 'react';
import './App.css';

import Youtube from './api/Youtube';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

import YoutubeIcon from './resources/youtube_icon.jpg';
import BellIcon from './resources/bell_icon.png';
import UserIcon from './resources/user_icon.jpg';

import {APP_KEY} from './components/config';

class App extends Component {
    
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount(){
        this.handleSubmit('mlb')
        console.log(APP_KEY)
    }

    handleSubmit = async (searchTerm) => {
        const response = await Youtube.get('search', {
            params:{
                part: 'snippet',
                maxResults: 10,
                key: APP_KEY,
                q: searchTerm
            }
        });

        let filterVids = response.data.items.filter(function(n){
            return n.id.kind !== 'youtube#channel'
        })

        this.setState({
            videos: filterVids,
            selectedVideo: filterVids[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
    }

    render(){
        const {selectedVideo, videos} = this.state
        
        return(
            <div style={{width: '100%', height: '100%'}}>
                <header>
                    <div className="left_icons">
                        <div
                            className="burger_icon"
                            style={{background: 'url(https://www.malavasig.it/WP/wp-content/uploads/2017/09/mobile_menu.png)'}}
                        />
                        <div
                            className="youtube_icon"
                            style={{background: `url(${YoutubeIcon})`}}
                        />
                    </div>
                    <SearchBar onFormSubmit={this.handleSubmit}/>
                    <div className="right_icons">
                        <div
                            className="bell_logo"
                            style={{background: `url(${BellIcon})`}}
                        />
                        <div
                            className="user_logo"
                            style={{background: `url(${UserIcon})`}}
                        />
                    </div>
                </header>
                {selectedVideo === null ?
                    <div className="loading"><div className="spinner" style={{background: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif)'}}></div></div>
                    :
                    <section className="main_container">
                        <VideoDetail video={selectedVideo}/>
                        <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                    </section>
                }
            </div>
        )
    }
}

export default App;