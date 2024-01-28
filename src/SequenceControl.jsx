import { Fragment, useState } from "react";
import Reset from "./Reset";

const SequenceControl = ({rows,setFinished, setRows,setSequenceLength }) => {
    const [newSequenceLength, setNewSequenceLength] = useState(0);
    return (
        <Fragment>
           
            {rows > 0 ? <Reset
          setFinished={setFinished}
          setRows={setRows}
          setSequenceLength={setSequenceLength}
        ></Reset> : <section>
             <label htmlFor="sequenceLength">How many numbers? </label>
            <input id="sequenceLength" min="1" max="10" value={newSequenceLength} onChange={(e) => {
                setNewSequenceLength(e.target.value);
                //console.log(e.target.value);
            }} type="number"></input>
            <button onClick={() => {
                if(newSequenceLength < 1)
                {
                    return;
                }
                setSequenceLength(newSequenceLength);
                setRows(rows + 1);
            }}>Set</button>

        </section>}
        </Fragment>
    )
}

export default SequenceControl