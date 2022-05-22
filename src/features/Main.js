import VideoUpload from "./VideoUpload";
import './Main.css';
import Visualization from "./Visualization";
import Angles from "./Angles";


export const Main = () => {
    return (
        <>
            <div className="container">
                <VideoUpload/>
                <Visualization className="result"/>
                <Angles/>
            </div>
        </>
    )
}

export default Main;