import React, { useState } from "react";

function Hog({ hog }) {

    const [showInfo, setShowInfo] = useState(false)

    function handleClick() {
        setShowInfo((showInfo) => !showInfo)
    }

    return (
        <div className="ui eight wide column" onClick={handleClick}>
            <p>Name: {hog.name}</p>
            <img style={{width: 200}} src={hog.image} alt="" />
            {showInfo ? 
                <>
                    <p>Weight: {hog.weight}</p>
                    <p>Greased: {hog.greased.toString()}</p>
                </>
                 : null
        }
                
            
            
        </div>
        
    )
}

export default Hog