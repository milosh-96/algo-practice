import './App.css'
import { Fragment } from 'react';
import Header from './Header';
import { useState } from 'react';
import RowsList from './RowsList';
import SequenceControl from './SequenceControl';
function App() {
  const [sequenceLength, setSequenceLength] = useState(0);
  const [rows, setRows] = useState(0);
  return (
    <Fragment>
      <Header appName="Algo Practice"></Header>
      <section>
        {sequenceLength == 0 ?
          <SequenceControl
            sequenceLength={sequenceLength} setSequenceLength={setSequenceLength}
            rows={rows} setRows={setRows}
          ></SequenceControl> : null}
      </section>
      <RowsList rows={rows} sequenceLength={sequenceLength}></RowsList>

      {sequenceLength.length > 0 ? <button onClick={() => {
        setRows(rows + 1);
      }}>Add New</button> : null}

      
      <p>add finish button</p>
      <p>add reset button</p>
    </Fragment>

  );


}

export default App
