import React, { useState } from "react";

export default function Count() {
    //useState Demo
    const [count, setCount] = useState(1);
    // const [mail, setMail] = useState("user@gmail.com");

    return (

        <div>
             Counter: {count}
            <div>
                
                
                <button onClick={(e) => setCount(count+1)}>Increase</button>
    
                  
            

                

            </div>
           
        </div>
    );

}