import React from 'react'
import HelloWorld from "../Components/HelloWorld";


function Home() {
    return (
        <div>
            <h1 className="font-bold text-2xl">This is the Home page</h1>

            <HelloWorld name="World!" />

        </div>
    )
}

export default Home