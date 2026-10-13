import React, {useState} from "react";

export default function User(){
    //useState Demo
    const [name , setName] = useState("User 123");
    const [mail , setMail] = useState("user@gmail.com");

    return(
        <div>
            <h4>User Detail</h4>
           <div>Name: {name}</div>
           <div>Email: {mail} </div>
        </div>
    );

}