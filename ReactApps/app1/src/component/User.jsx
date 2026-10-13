import React, { useState } from "react";

export default function User() {
    //useState Demo
    const [name, setName] = useState("User 123");
    const [mail, setMail] = useState("user@gmail.com");

    return (



        <div>
            <div>
                <form>
                    <label htmlFor="name"> Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                    </label>
                    <label htmlFor="name"> Email:
                        <input type="text" value={mail} onChange={(e) => setMail(e.target.value)}></input>
                    </label>

                </form>

            </div>
            <h4>User Detail</h4>
            <div>Name: {name}</div>
            <div>Email: {mail} </div>
        </div>
    );

}