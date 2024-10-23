import React from 'react'

function MarkSheet(props) {

    let telMarks= Number(props.telMarks);
    let engMarks= Number(props.engMarks);
    let hinMarks= Number(props.hinMarks);
    let matMarks= Number(props.matMarks);
    let sciMarks= Number(props.sciMarks);
    let socMarks= Number(props.socMarks);
    let sanMarks= Number(props.sanMarks);

    let totalMarks= telMarks+engMarks+hinMarks+matMarks+sciMarks+socMarks;

    let percent= (totalMarks/650)*100;

    const hasPassed = telMarks >= 35 && engMarks >= 35 && hinMarks >= 35 && matMarks >= 35 && sciMarks >= 35 && socMarks >= 35;


  return (
    <div className="markSheet">
    <h2 id="label">{props.name} MarkSheet</h2>
        <table>
            <thead>
            <tr>
                <th style={{ width: '100px' }}>Subjects</th>
                <th style={{ width: '100px' }}>Max Marks</th>
                <th style={{ width: '200px' }}>Marks Obtained & Percentage</th>
                <th style={{ width: '100px' }}>Result</th>
                <th style={{ width: '180px' }}>Remarks</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Telugu</td>
                <td>100</td>
                <td>{telMarks}</td>
                <td>{telMarks>=35?"Pass":"Fail"}</td>
                <td>{telMarks>=35?"Good":"Need Improvement"}</td>
            </tr>
            <tr>
                <td>Sanskrit</td>
                <td>50</td>
                <td>{sanMarks}</td>
                <td>{sanMarks>=15?"Pass":"Fail"}</td>
                <td>{sanMarks>=35?"Good":"Need Improvement"}</td>
            </tr>
            <tr>
                <td>Hindi</td>
                <td>100</td>
                <td>{hinMarks}</td>
                <td>{hinMarks>=35?"Pass":"Fail"}</td>
                <td>{hinMarks>=35?"Good":"Need Improvement"}</td>
            </tr><tr>
                <td>English</td>
                <td>100</td>
                <td>{engMarks}</td>
                <td>{engMarks>=35?"Pass":"Fail"}</td>
                <td>{engMarks>=35?"Good":"Need Improvement"}</td>
            </tr>
            <tr>
                <td>Maths</td>
                <td>100</td>
                <td>{matMarks}</td>
                <td>{matMarks>=35?"Pass":"Fail"}</td>
                <td>{matMarks>=35?"Good":"Need Improvement"}</td>
            </tr>
            <tr>
                <td>Science</td>
                <td>100</td>
                <td>{sciMarks}</td>
                <td>{sciMarks>=35?"Pass":"Fail"}</td>
                <td>{sciMarks>=35?"Good":"Need Improvement"}</td>
            </tr>
            <tr>
                <td>Social</td>
                <td>100</td>
                <td>{socMarks}</td>
                <td>{socMarks>=35?"Pass":"Fail"}</td>
                <td>{socMarks>=35?"Good":"Need Improvement"}</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <th>Total</th>
                <th>650</th>
                <th>{totalMarks} & {percent.toFixed(2)}%</th>
                <th>{hasPassed ? "Pass" : "Fail"}</th>
                <th>{hasPassed ?"Good":"Need Improvement"}</th>
            </tr>
            </tfoot>
        </table>
    </div>
  )
}

export default MarkSheet;