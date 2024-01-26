import { Fragment } from "react";
import RowInput from "./RowInput";

const RowItem = ({ sequenceLength }) => {
    const rows = [];
    for (let i = 0; i < sequenceLength; i++) {
        rows.push(i);
    }
    return (
        <Fragment>
            {rows.map((x) => {
                return <RowInput key={rows.indexOf(x)}></RowInput>
            })
            }
            <button onClick={() => { }}>delete</button>
            <hr></hr>
        </Fragment>
    )
}

export default RowItem