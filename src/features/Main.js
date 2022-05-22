import VideoUpload from "./VideoUpload";
import './Main.css';
import Visualization from "./Visualization";
import Grid from '@mui/material/Grid';


export const Main = () => {
    return (
        <>
{/*             <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                    <div><VideoUpload /></div>
                </Grid>
                <Grid item xs={6} md={8}>
                    <div><Visualization /></div>
                </Grid>
            </Grid> */}
            <div className="container">
                <VideoUpload/>
                <Visualization className="result"/>
            </div>
        </>
    )
}

export default Main;