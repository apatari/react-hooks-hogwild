import React from "react";
import Hog from "./Hog"

function HogList({ hogs }) {
    return (
        <div>
            {hogs.map((hog) => {
                return <Hog hog={hog} />
            })}
        </div>
    )
}

export default HogList