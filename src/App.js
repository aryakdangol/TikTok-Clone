
import { useEffect, useState } from 'react';
import './App.css';
import db from './firebase';
import Video from './Video';

function App() {
  const[videos,setVideos] = useState([]); 
  

  useEffect(()=>{
    console.log(db)
    db.collection('videos')
    .onSnapshot(snapshot => (setVideos(snapshot.docs.map(doc => doc.data()))))
  },[])

  console.log(videos)

  return (
    <div className="app">
      <h1>Tiktok</h1>
      <div className="app-videos">
        {videos.map(
          ({url, channel, description, song, likes, messages, shares}) => (
            <Video 
              url = {url} 
              channel = {channel} 
              description = {description} 
              song = {song} 
              likes = {likes} 
              messages = {messages} 
              shares = {shares} 

              />
          )
        )}

      </div>
    </div>
  );
}

export default App;
