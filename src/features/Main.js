import VideoUpload from "./VideoUpload";
import logo from '../resources/BigLogo.png';
import './Main.css';
import Visualization from "./Visualization";


export const Main = () => {
    return (
        <div className="container">
            <img src={logo} alt='RunningPose' className="logo"/>
            <VideoUpload />
            <Visualization />
        </div>
    )
}

export default Main;