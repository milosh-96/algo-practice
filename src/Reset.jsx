import { Fragment } from "react"

const Reset = ({setFinished,setRows,setSequenceLength}) => {
  return (
    <Fragment>
          <button onClick={() => { setSequenceLength(0); setFinished(false);setRows(0); }}>Reset</button>
    </Fragment>
  )
}

export default Reset