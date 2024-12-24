import React, { useEffect, useState } from "react";
//import axios from "axios";
import ReactPlayer from "react-player/vimeo";
import styles from './VideoLibrary.module.css'

const VideoLibrary = () => {
  const [videos] = useState([ {
    "title": "Принципы простых вычислений",
    "description": "Учебное видео по математике.",
    "vimeoId": "1041386767"
  },
  {
    "title": "Фигуры в математике",
    "description": "Учебное видео по геометрии.",
    "vimeoId": "1041386484"
  },
  {
    "title": "Математика для начальных классов",
    "description": "Учебное видео с основами.",
    "vimeoId": "1041327472"
  }]);

  // Fetch videos from MongoDB
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        //const response = await axios.get("https://math-teacher-website.onrender.com/api/videos");
        //setVideos(response.data); // Store videos in state
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
  
    fetchVideos();
  }, []);
  
  return (
    <div className={styles.videoLibrary}>
      <h1>Video Library</h1>
      <div className={styles.videoGrid}>

        {videos.map((video) => (
      
          <div key={video.vimeoId}  className={styles.videoItem}>
              
            <ReactPlayer
              url={`https://vimeo.com/${video.vimeoId}`}
              controls={true}
              width="100%"
              height="300px"
            />  
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
             
             
        ))}
      </div>
    </div>
  );
};

export default VideoLibrary;
