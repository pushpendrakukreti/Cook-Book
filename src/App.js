import React from 'react';
import ReactPlayer from 'react-player';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
      <div class="MuiContainer-root MuiContainer-maxWidthLg" maxidth="lg">
        <center>
          <header class="MuiPaper-root MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorInherit jss1 MuiPaper-elevation4">
            <h2 class="MuiTypography-root jss2 MuiTypography-h2 MuiTypography-alignCenter"><b><span style={{color:'grey'}}>BTS | </span>Cook<span style={{color:'black'}}>Book</span></b></h2>
          </header>
        </center>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-5 col-sm-12'>
            <ReactPlayer
              url='https://youtu.be/SjkjpL1MPi4'
              className="react-player"
              width="100%"
              controls />
          </div>
          <div className='col-lg-5 col-sm-12'>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=6czWSUHrILw'
              className="react-player"
              width="100%"
              controls />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-5 col-sm-12'>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=CGd_nv8Y-0g'
              className="react-player"
              width="100%"
              controls />
          </div>
          <div className='col-lg-5 col-sm-12'>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=I59n9v46o2g'
              className="react-player"
              width="100%"
              controls />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-5 col-sm-12'>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=Uu3HZ5tV5Yc'
              className="react-player"
              width="100%"
              controls />
          </div>
          <div className='col-lg-5 col-sm-12'>
            <ReactPlayer
              url='https://youtu.be/om0M8BRWF-w'
              className="react-player"
              width="100%"
              controls />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-5 col-sm-12'>
            <ReactPlayer
              url='https://youtu.be/OmyEP3my7C4'
              className="react-player"
              width="100%"
              controls />
          </div>
          <div className='col-lg-5 col-sm-12'>
            <ReactPlayer
              url='https://youtu.be/p5XJ_pKQw90'
              className="react-player"
              width="100%"
              controls />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-5 col-sm-12'>
            <ReactPlayer
              url='https://youtu.be/-shd3s2lHDI'
              className="react-player"
              width="100%"
              controls />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
