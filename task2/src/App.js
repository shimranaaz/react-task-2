import React from "react";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div>
      <UserProfile 
        name="P.Shimra Naaz" 
        age={20} 
        hobbies={["Reading books", "Coding", "Designing", "Traveling","Exploring new technologies","Gaming or game design"]} 
      />
    </div>
  );
}

export default App;
