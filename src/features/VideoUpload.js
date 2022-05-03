import axios from 'axios';
import { useState } from "react";

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

        // Details of the uploaded file 
        console.log(selectedFile);

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
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    return (
            <div>
            <h3>
                Upload video to be analyzed:
            </h3>
            <div>
                <input type="file" onChange={onFileChange} />
                <button onClick={onFileUpload}>
                    Upload!
                </button>
            </div>
            {fileData()}
        </div>
    );
}

export default VideoUpload;