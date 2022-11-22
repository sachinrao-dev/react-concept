import React from "react";
import { UserConsumer } from './UserContext'

const ComponentA = () =>{
    return(
        <UserConsumer>
        {
            (userName ) =>{
                return(
                    <div>Hello {userName}</div>
                )
            }
        }
        </UserConsumer>
    )
}

export default ComponentA;