import {useState} from "react";

function UseStateTest() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    function handleData() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setData([1, 2, 3, 4]);
        }, 3000)
    }

    return (
        <>
            {loading && <p> Loading...</p>}
            {!loading && data.length === 0 ? <p> &nbsp; </p> : !loading && <pre>{JSON.stringify(data)}</pre>}
            <button onClick={handleData}>Load Data</button>
        </>

    )
}

export default UseStateTest;