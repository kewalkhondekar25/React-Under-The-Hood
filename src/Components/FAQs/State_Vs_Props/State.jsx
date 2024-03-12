import { useState } from "react";

const State = () => {
    const [name, setName] = useState("tony stark");
    return(
        <div>
            <h3>Hello World {name}</h3>
            <button onClick={() => setName("iron man")}>Click</button>
        </div>
    )
}

export default State;