import React from 'react'
import JsonData from '../angles-example.json'
 const Angles = () => {
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.LElbow}</td>
                    <td>{info.RElbow}</td>
                    <td>{info.Neck}</td>
                    <td>{info.Spine}</td>
                    <td>{info.LKnee}</td>
                    <td>{info.RKnee}</td>
                    <td>{info.LFot}</td>
                    <td>{info.RFot}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Left Elbow</th>
                    <th>Right Elbow</th>
                    <th>Neck</th>
                    <th>Spine</th>
                    <th>Left Knee</th>
                    <th>Right Knee</th>
                    <th>Left Foot</th>
                    <th>Right Foot</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default Angles;