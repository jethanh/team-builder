import React, { useState } from "react";
import Form from './components/Form';
import "./App.css";

import Members from './components/Members';



function App() {
  
const testArr = [{
  "name": "ethan",
  "email": "eeee@e.com",
  "role": "role"
},
{
  "name": "bob",
  "email": "bob@bob.com",
  "role": "role2"
}];
  
  const [team, setTeam] = useState(testArr);
  function addTeamMember (args) {
    const member = {
      name: args.name,
      email: args.email,
      role: args.role,
    };
    setTeam([...team, member]);
  }
  
  
  return (
    <div className="App">
      <Form team={addTeamMember} />
      <Members memberList={team} />
    </div>
  );
}


export default App;