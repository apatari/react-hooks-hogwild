import React, { useState } from "react";
import Nav from "./Nav";
import FilterSort from "./FilterSort";
import HogList from "./HogList";

import hogs from "../porkers_data";

function App() {
	const [hogsToDisplay, setHogsToDisplay] = useState(hogs)

	return (
		<div className="App">
			<Nav />
			<FilterSort hogsToDisplay={hogsToDisplay} setHogsToDisplay={setHogsToDisplay} />
			<HogList hogs={hogsToDisplay} />
		</div>
	);
}

export default App;
