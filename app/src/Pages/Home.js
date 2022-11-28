import React from 'react'
import GetRandomCocktail from './GetRandomCocktail'


function Home() {
    return (
        <>
            <div className="serviceBox">
                <h1>Welcome</h1>
                <GetRandomCocktail />
            </div>
        </>
    )
}

export default Home
