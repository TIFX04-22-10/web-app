import axios from 'axios';
import { useState } from "react";
import './VideoUpload.css';
import { Button, Form } from 'react-bootstrap';

export const VideoUpload = () => {
    const [selectedFile, setSelectedFile] = useState();

    // On file select (from the pop up) 
    const onFileChange = event => {
        // Update the state 
        setSelectedFile(event.target.files[0])
    };

    // On file upload (click the upload button) 
    const onFileUpload = () => {
        // Create an object of formData 
        const formData = new FormData();

        // Update the formData object 
        formData.append(
            "file",
            selectedFile,
            selectedFile.name
        );

        // Request made to the backend api 
        // Send formData object 
        axios.post("api/upload", formData);
    };

    // File content to be displayed after 
    // file upload is complete 
    const fileData = () => {
        if (selectedFile) {
            return (
                <div>
                <h2>File Details:</h2>
                    <p>File Name: {selectedFile.name}</p>
                    <p>File Type: {selectedFile.type}</p>
                    <p>
                        Last Modified:{" "}
                        {selectedFile.lastModifiedDate.toDateString()}
                    </p>
                    <form action="/delete" method="post">
                        <button name="deletedBtn" type="submit">Delete</button>
                    </form>
                </div>
            );
        } else {
            return (
                <div>
                </div>
            );
        }
    };

    return (
        <div className="videoupload">
            <div className='upload'>
                <h2>RunningPose</h2>
                <h5>An innovative tool for analyzing joints</h5>
                <p>Using video footage of a running person, the keypoint positions
can be predicted in 3D with a deviation of 115 millimeters in all dimensions, and the data
can be used to calculate joint angles.</p>
                <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label>Upload video to be analyzed</Form.Label>
                    <Form.Control type="file" size="sm" onChange={onFileChange}/>
                </Form.Group>
                <p className='formats'>Allowed formats: .mp4, .avi, .npy</p>
                <Button onClick={onFileUpload}>
                    Analyze
                </Button>
            </div>
            {fileData}
            <div className="links">
                {/* <i class="fas fa-arrow-circle-right"></i> */} 
                <h3> <a href="https://github.com/TIFX04-22-10/runningpose">GitHub</a></h3>
            </div>
        </div>
    );
}

export default VideoUpload;