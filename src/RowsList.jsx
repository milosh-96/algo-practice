import { Fragment } from "react";
import RowItem from "./RowItem"

const RowsList = ({rows,sequenceLength}) => {
  
  const items = [];
  for(let i = 0; i < rows; i++)
  {
    items.push(
      <RowItem key={i} sequenceLength={sequenceLength}></RowItem>
    )
  }
  return (
    <Fragment>
        {items}
    </Fragment>
  )
}

export default RowsList