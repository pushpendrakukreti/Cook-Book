import React from 'react';
import ReactPlayer from 'react-player';
import './App.css';

function App() {
  let lnkArr = [
    { link: "https://www.youtube.com/watch?v=18F8WMLRpMs", name:"Kofta || Step 1: Cutting", color:"seagreen" },
    { link: "https://www.youtube.com/watch?v=xzcvZRJvLVg", name:"Kofta || Step 2: Frying", color:"seagreen" },
    { link: "https://www.youtube.com/watch?v=ouANLAOMbDE", name:"Kofta || Step 3: Cooking", color:"seagreen" },
    { link: "https://youtu.be/SjkjpL1MPi4", name:"Watermelon Basket", color: "red" },
    { link: "https://www.youtube.com/watch?v=Uu3HZ5tV5Yc", name:"Egg Roll", color:"darkkhaki" },
    { link: "https://youtu.be/om0M8BRWF-w", name:"Sandwich || Tripple Egg", color:"peru" },
    { link: "https://youtu.be/p5XJ_pKQw90", name:"Khichdi || Step 1: Cut & Soak", color:"gold" },
    { link: "https://youtu.be/-shd3s2lHDI", name:"Khichdi || Step 2: Boil Rice", color:"gold" },
    { link: "https://youtu.be/OmyEP3my7C4", name:"Khichdi || Step 3: Cooking", color:"gold" },
    { link: "https://www.youtube.com/watch?v=6czWSUHrILw", name:"Bhindi || Step 1: Cutting", color:"forestgreen" },
    { link: "https://www.youtube.com/watch?v=CGd_nv8Y-0g", name:"Bhindi || Step 2: Spices", color:"forestgreen" },
    { link: "https://www.youtube.com/watch?v=I59n9v46o2g", name:"Bhindi || Step 3: Cooking", color:"forestgreen" }
  ]

  return (
    <div className="App">
      <div class="MuiContainer-root MuiContainer-maxWidthLg" maxidth="lg">
        <center>
          <header class="MuiPaper-root MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorInherit jss1 MuiPaper-elevation4">
            <h2 class="MuiTypography-root jss2 MuiTypography-h2 MuiTypography-alignCenter"><b><span style={{ color: 'grey' }}>BTS | </span>Cook<span style={{ color: 'black' }}>Book</span></b></h2>
          </header>
        </center>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          {lnkArr.map((key, index) =>
            <div className='col-lg-5 col-sm-12 mt-5'>
              <ReactPlayer
                url={key.link}
                className="react-player"
                width="100%"
                controls />
              <div className='text-center pb-1 pl-2 pr-2' style={{
                fontWeight: "bold", 
                fontSize: "180%",
                background: "rgba(255,255,255,1)",
                borderRadius: "10px",
                float:"right",
                margin: "-5.5% 0% -4% 0%",
                position: "sticky",
                border:"2px solid black",
                textShadow:"-0.5px 2px grey",
                color: key.color
              }}>{key.name}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
