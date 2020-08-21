import React, { useState } from "react";
import Post from "./Post";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "서지혜",
      caption: "인스타그램 클론",
      imageUrl:
        "https://lh3.googleusercontent.com/proxy/kkH1Xzt569Q8BFyZofrqX70Cahu9GoCplObw2m8iVbQ2398LT3X9UhMZdfL0D7GX-gtlVSJylIuEwREtmvpVYG4RZITgo6pIsExxtO5rNf_7_jEYkOf-s_5nug",
    },
    {
      username: "비니",
      caption: "인스타그램 클론",
      imageUrl:
        "https://i.pinimg.com/originals/22/d8/77/22d8776f53b7f184108ad142563c1960.jpg",
    },
    {
      username: "BOL4",
      caption: "인스타그램 클론",
      imageUrl: "https://pbs.twimg.com/media/Cv8wKYeVIAAN6ke.jpg",
    },
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
