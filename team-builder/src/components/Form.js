import React, { useState } from "react";

function Form(props) {
  const [member, setMember] = useState();
  function handleChange(event) {
    setMember({ ...member, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.team(member);
  }
  return (
    <div>
    <h1>Team</h1>
      <form onSubmit={handleSubmit}>
        <lable>name</lable>
       <input
          id="name"
          type="text"
          name="name"
          onChange={e => handleChange(e)}></input>
        
        <lable>email</lable>
        
        <input
          id="email"
          type="text"
          name="email"
          onChange={e => handleChange(e)}
        />
        
        <lable>role</lable>
        
        <input
          id="role"
          type="text"
          name="role"
          onChange={e => handleChange(e)}
        />
        
        <button type="submit">Add</button>
      
    
      </form>
    
    </div>
  );
}
export default Form;