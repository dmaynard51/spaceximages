import React from "react"

export default function Header() {
    const [user, setUser] = React.useState("Joe")
    
    return (
        <header>

            <img className="spacex--header" src="./images/spaceximg.png"/>
            
        </header>
    )
}
