import { useState } from "react"

//hoc
const WithLoader = (WrappedComponent) => {
    return () => {
        const [loading, setLoading] = useState(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return(
            <div>
                {loading ? <p>Loading ...</p> :<WrappedComponent/>}
            </div>
        )
    }
}

export default WithLoader;