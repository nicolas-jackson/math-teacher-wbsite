import React from 'react';
import { Link } from 'react-router-dom';

function Lessons() {
  // Example topics
  const topics = [
    { id: 'integrals', title: 'Integrals' },
    { id: 'geometry', title: 'Geometry' },
    { id: 'basics', title: 'Basics' },
  ];

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
          marginBottom: '40px',
          fontSize: '3rem',
          fontWeight: '700',
          color: '#333',
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}
      >
        My Lessons
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap',
        }}
      >
        {topics.map((topic) => (
          <div
            key={topic.id}
            style={{
              padding: '24px',
              borderRadius: '12px',
              width: '280px',
              textAlign: 'center',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              background: 'white',
              border: '1px solid #ddd',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 15px 25px rgba(0, 0, 0, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
            }}
          >
            <h3
              style={{
                marginBottom: '16px',
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#333',
              }}
            >
              {topic.title}
            </h3>
            <Link
              to={`/lessons/${topic.id}`}
              style={{
                textDecoration: 'none',
                color: '#fff',
                backgroundColor: '#007BFF',
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: 'bold',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0056b3';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#007BFF';
              }}
            >
              View Topic
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lessons;
