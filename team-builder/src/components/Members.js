import React from "react";

const Members = props => {
    return (
    <div>
        {props.memberList.map(member => {
            return (
            <div>
                <h2>{member.name}</h2>
                <p>E-mail: {member.email}</p>
                <p>Role: {member.role}</p>
            </div>
            );
        })}
    </div>
    );
};

export default Members;