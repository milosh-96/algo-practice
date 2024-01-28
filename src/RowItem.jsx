import { Fragment } from "react";
import RowInput from "./RowInput";

const RowItem = ({pass, sequenceLength, finished, isLast }) => {
    const rows = [];
    for (let i = 0; i < sequenceLength; i++) {
        rows.push(i);
    }
    return (
        <Fragment>
            <section className={finished && isLast ? 'rows-list__row-item--finished' : 'rows-list__row-item'}>
            <h3>Pass #{pass}</h3>
            {rows.map((x) => {
                return <RowInput key={rows.indexOf(x)}></RowInput>
            })
            }
            <div>
                <button onClick={() => { }}>delete</button>
            </div>
            </section>
        </Fragment>
    )
}

export default RowItem