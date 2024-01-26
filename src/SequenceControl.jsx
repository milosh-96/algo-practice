import { Fragment, useState } from "react";

const SequenceControl = ({setSequenceLength, rows, setRows }) => {
    const [newSequenceLength, setNewSequenceLength] = useState(0);
    return (
        <Fragment>
            <input value={newSequenceLength} onChange={(e) => {
                setNewSequenceLength(e.target.value);
                //console.log(e.target.value);
            }}></input>
            <button onClick={() => {
                setSequenceLength(newSequenceLength);
                setRows(rows + 1);
            }}>ok</button>
        </Fragment>
    )
}

export default SequenceControl