import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

function TopicPage() {
  const { topicId } = useParams();

  // Updated video data
  const videos = {
    integrals: {
      title: 'Integrals',
      description: 'Learn about integrals in mathematics.',
      url: 'https://vimeo.com/1041327472', // Updated URL
    },
    geometry: {
      title: 'Geometry',
      description: 'Explore shapes and figures in mathematics.',
      url: 'https://vimeo.com/1041386767', // Updated URL
    },
    basics: {
      title: 'Basics',
      description: 'Understand the basics of mathematics.',
      url: 'https://vimeo.com/1041386484', // Updated URL
    },
  };

  const topic = videos[topicId];

  if (!topic) {
    return <h1 style={{ textAlign: 'center' }}>Topic not found!</h1>;
  }

  return (
    <div
      style={{
        padding: '40px 20px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #eef2f3 0%, #8e9eab 100%)',
        minHeight: '100vh',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          marginBottom: '10px',
          fontWeight: '700',
          color: '#333',
        }}
      >
        {topic.title}
      </h1>
      <p
        style={{
          fontSize: '1.2rem',
          color: '#555',
          marginBottom: '30px',
        }}
      >
        {topic.description}
      </p>
      <div
        style={{
          margin: '0 auto',
          maxWidth: '900px',
          aspectRatio: '16 / 9',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
        }}
      >
        <ReactPlayer
          url={topic.url}
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default TopicPage;
