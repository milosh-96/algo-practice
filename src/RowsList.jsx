import { Fragment } from "react";
import RowItem from "./RowItem"

const RowsList = ({rows,setRows,sequenceLength,finished,setFinished}) => {
  
  const items = [];
  for(let i = 0; i < rows; i++)
  {
    items.push(
      <RowItem
        key={i}
        sequenceLength={sequenceLength}
        pass={i+1}
        isLast={ i == rows-1 ? true : false}
        finished={finished}></RowItem>
    )
  }
  return (
    <Fragment>
      {items.length > 0 ?
        <section className="rows-list">
          <h2>Passes</h2>
          {items}

          <div className="flex" style={{justifyContent:"flex-end"}}>
          {sequenceLength.length > 0 && !finished ? <button className='button' onClick={() => {
                setRows(rows + 1);
              }}>Add New</button> : null}

          {items.length > 0 && !finished ? <div>
              <button className='button' onClick={() => { setFinished(true) }}>Finish</button>
            </div> : null}
          </div>
        </section>
       : null}
    </Fragment>
  )
}

export default RowsList