import React from 'react';
import './App.css';
import Main from './features/Main';
import Header from './features/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <div className="App"> 
            {/* <Header /> */}
            <Main />
        </div>
    );
}

export default App;