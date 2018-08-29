import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class Picture extends Component {
  render() {
    return (
      <div className="Picture">
        <img className="Picture-Fix" src="http://phillymixtape.co/wp-content/uploads/2018/05/marsh-.jpg" />
      </div>
    );
  }
}

class Controls extends Component {
  render() {
    return (
      <div className="Controls">
        <div className="PlayButton"><i className="fa fa-play"></i></div>
        <div className="TimerBar"></div>
        <div className="MuteButton"><i className="fa fa-volume-up"></i></div>
      </div>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div className="SongsButton"><i className="fa fa-list-ul"></i></div>
        <div className="LyricsButton"><i className="fa fa-file"></i></div>
        <div className="CommentsButton"><i className="fa fa-comments"></i></div>
        <div className="ReactionButton"><i className="fa fa-heart"></i>&nbsp; 200</div>
      </div>
    );
  }
}

class Feed extends Component {
  render() {
    return (
      <div className="Feed">
        <Songs />
        <Lyrics />
        <Comments />
      </div>
    );
  }
}

class Songs extends Component {
  render() {
    return (
      <div className="Songs">
        <h2 className="Song-Title">{` Friends | Marshmello `}</h2>
        <h2 className="Song-Title">{` Find Me | Marshmello `}</h2>
        <h2 className="Song-Title">{` Know Me | Marshmello `}</h2>
        <h2 className="Song-Title">{` Magic | Marshmello `}</h2>
        <h2 className="Song-Title">{` Summer | Marshmello `}</h2>
        <h2 className="Song-Title">{` Keep It | Marshmello `}</h2>
        <h2 className="Song-Title">{` Alone | Marshmello `}</h2>
        <h2 className="Song-Title">{` Ritual | Marshmello `}</h2>
        <h2 className="Song-Title">{` Wolves | Marshmello `}</h2>
        <h2 className="Song-Title">{` Silence | Marshmello `}</h2>
      </div>
    );
  }
}

class Lyrics extends Component {
  render() {
    return (
      <div className="Lyrics">
        <h2 className="Lyrics-Title">Friends | Marshmello</h2>
        <p className="Lyrics-Paragraph">
          {`You say you love me, I say you crazy
          We're nothing more than friends
          You're not my lover, more like a brother
          I know you since we were like ten

          Don't mess it up, talking that shit
          Only gonna push me away, that's it
          When you say you love me, that make me crazy
          Here we go again

          Don't go look at me with that look in your eye
          You really ain't going away without a fight
          You can't be reasoned with, I'm done being polite
          I've told you 1, 2, 3, 4, 5, 6 thousand times`}
        </p>
      </div>
    );
  }
}

class Comments extends Component {
  render() {
    return (
      <div className="Comments">
        <div className="Comments-List">
          <div className="Comment">Message for a comment</div>
          <div className="Comment">Message for a comment</div>
          <div className="Comment">Message for a comment</div>
          <div className="Comment">Message for a comment</div>
          <div className="Comment">Message for a comment</div>
        </div>
        <div className="Insert-Comment">
          <input type="text" placeholder="Type a comment" />
          <div className="SentMessageButton"><i className="fa fa-share"></i></div>
        </div>
      </div>
    );
  }
}

class Player extends Component {
  render() {
    return (
      <div className="Player">
        <Picture />
        <Controls />
        <Menu />
        <Feed />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Player />
      </div>
    );
  }
}

export default App;
