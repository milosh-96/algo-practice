import './App.css'
import { Fragment } from 'react';
import Header from './Header';
import { useState } from 'react';
import RowsList from './RowsList';
import SequenceControl from './SequenceControl';
import Reset from './Reset';
function App() {
  const [finished, setFinished] = useState(false);
  const [sequenceLength, setSequenceLength] = useState(0);
  const [rows, setRows] = useState(0);
  return (
    <Fragment>
      <Header appName="Algo Practice"></Header>

        <section className="sequence-control">
          <div className="container">
            <SequenceControl
              sequenceLength={sequenceLength} 
              setSequenceLength={setSequenceLength}
              rows={rows}
              setRows={setRows}
              setFinished={setFinished}
            ></SequenceControl>
            </div>
        </section>

      <section className="container">
          {rows > 0 ? <RowsList 
          rows={rows}
          setRows={setRows}
          sequenceLength={sequenceLength} 
          finished={finished} 
          setFinished={setFinished}></RowsList> :
            <div>
              <p>Enter how many numbers you are going to sort and click on "Set" button. Then you can add as many Passes
              as you want. When you finish sorting click on "Finish" to mark the last pass.
            </p>
            <p>If you want to start over - just click on the "Reset" button.</p>
            </div>
        }
      </section>

      <section className='container'>
        {finished ? <Reset
          setFinished={setFinished}
          setRows={setRows}
          setSequenceLength={setSequenceLength}
        ></Reset> :
          null

        }
      </section>


    </Fragment>

  );


}

export default App
