import React from "react";

const User = props => {
    // console.log(props);
    // setTimeout(() => {
    //     props.history.push("/help");
    // }, 2000);
    let { username } = props.match.params;
    return <h1>User is {username}</h1>;
};

export default User;
