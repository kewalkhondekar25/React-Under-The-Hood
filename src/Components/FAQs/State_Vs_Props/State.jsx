import { useState } from "react";
import Child from "./Child";

const State = () => {
    const [name, setName] = useState("tony stark");
    let movie = "avengers"
    return(
        <div>
            <h3>Hello World {name}</h3>
            <Child movie={movie}/>
            <button onClick={() => setName("iron man")}>Click</button>
        </div>
    )
}

export default State;