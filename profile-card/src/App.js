import React from 'react';
import ProfileCard from './ProfileCard';
import './App.css';

function App() 
{
  const profileData = {
    name: "G.Shariqua Taskeen",
    bio: "G. Shariqua Taskeen is from Ambur and holds a BCA (Bachelor of Computer Applications) degree, I have a strong interest in web development and is passionate about learning new skills in this field. I enjoy reading books, I also enjoys exploring various aspects of technology and design. With my dedication to web development, I have constantly working on expanding my knowledge and expertise in this area.",
    picture: "https://i.pinimg.com/736x/87/d5/48/87d54873257eda178a61ffe9cc7d0f95.jpg",
  };

  return (
    <div className="App">
      <ProfileCard {...profileData} />
    </div>
  );
}

export default App;
