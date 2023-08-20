import React from "react";

function FilterSort({ hogsToDisplay, setHogsToDisplay }) {

    function filterGreased() {
        setHogsToDisplay(hogsToDisplay.filter(hog => !hog.greased))
    }

    
    function sortName() {
        function compare(a,b) {
                if (a.name < b.name) { return -1}
                if (a.name > b.name) {return 1}
                return 0
            }

        setHogsToDisplay((hogsToDisplay) => {
            hogsToDisplay.sort(compare)
            return hogsToDisplay.slice()
        })
    }

    function sortWeight() {
        function compare(a,b) {
            if (a.weight < b.weight) { return -1}
            if (a.weight > b.weight) {return 1}
            return 0
        }
        setHogsToDisplay((hogsToDisplay) => {
            hogsToDisplay.sort(compare)
            return hogsToDisplay.slice()
        })
    }

    return (
        <div className="filterRow" >
            <button onClick={filterGreased} >Filter out greased hogs</button>
            <button onClick={sortName} >Sort by name</button>
            <button onClick={sortWeight} >Sort by weight</button>
            <hr />
        </div>  
    )
}

export default FilterSort