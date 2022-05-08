import VideoUpload from "./VideoUpload";
import logo from '../resources/BigLogo.png';
import './Main.css';


export const Main = () => {
    return (
        <div className="container">
            <img src={logo} alt='RunningPose' className="logo"/>
            <VideoUpload/>
        </div>
    )
}

export default Main;