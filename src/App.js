import './App.css';
import MarkSheet from './MarkSheet';

function App() {
  return (
    <div className="App">
    <h1 id="heading">10th Board Marksheet</h1>
      <MarkSheet name="Student1" telMarks="95" sanMarks="45" hinMarks="92" engMarks="89" matMarks="84" sciMarks="93" socMarks="94"></MarkSheet>
      <MarkSheet name="Student2" telMarks="96" sanMarks="38" hinMarks="90" engMarks="83" matMarks="90" sciMarks="91" socMarks="17"></MarkSheet>
      <MarkSheet name="Student3" telMarks="85" sanMarks="47" hinMarks="92" engMarks="89" matMarks="96" sciMarks="93" socMarks="94"></MarkSheet>
      <MarkSheet name="Student4" telMarks="15" sanMarks="35" hinMarks="22" engMarks="49" matMarks="25" sciMarks="93" socMarks="63"></MarkSheet>
      <MarkSheet name="Student5" telMarks="94" sanMarks="42" hinMarks="92" engMarks="93" matMarks="73" sciMarks="93" socMarks="94"></MarkSheet>
    </div>
  );
}

export default App;
