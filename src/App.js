import Header from "./components/Header";
import { useState } from "react";

import Landing from "./components/Landing"
import Wing1 from "./components/Wings/Wing1";
import Wing2 from "./components/Wings/Wing2";
import Wing3 from "./components/Wings/Wing3";
import Wing4 from "./components/Wings/Wing4";
import Wing5 from "./components/Wings/Wing5";
import Wing6 from "./components/Wings/Wing6";
import Wing7 from "./components/Wings/Wing7";
import Fractal98 from "./components/Wings/Fractal98";
import Fractal99 from "./components/Wings/Fractal99";
import Fractal100 from "./components/Wings/Fractal100";
import Strikes from "./components/Wings/Strikes";

function App() {
  const [showLandingPage, setshowLandingPage] = useState(true)
  const [showUpload, setshowUpload] = useState(false)
  const [showWing1, setshowWing1] = useState(false)
  const [showWing2, setshowWing2] = useState(false)
  const [showWing3, setshowWing3] = useState(false)
  const [showWing4, setshowWing4] = useState(false)
  const [showWing5, setshowWing5] = useState(false)
  const [showWing6, setshowWing6] = useState(false)
  const [showWing7, setshowWing7] = useState(false)
  const [showFractal98, setshowFractal98] = useState(false)
  const [showFractal99, setshowFractal99] = useState(false)
  const [showFractal100, setshowFractal100] = useState(false)
  const [showStrikes, setshowStrikes] = useState(false)




  //used in clear all functions to hide all components 
  const funcList = [setshowLandingPage, setshowUpload, setshowWing1, setshowWing2, setshowWing3, setshowWing4, setshowWing5, setshowWing6, setshowWing7,
    setshowFractal98, setshowFractal99, setshowFractal100, setshowStrikes]

  const clearAll = () => {
    funcList.map((func) => {
      func(false);
    }) 
  }


  // passed to the header buttons to show hide wings
  const dropFuncs = {
    wing1: () => {
      clearAll()
      setshowWing1(true)
    },

    wing2: () => {
      clearAll()
      setshowWing2(true)
    },

    wing3: () => {
      clearAll()
      setshowWing3(true)
    },

    wing4: () => {
      clearAll()
      setshowWing4(true)
    },

    wing5: () => {
      clearAll()
      setshowWing5(true)
    },

    wing6: () => {
      clearAll()
      setshowWing6(true)
    },

    wing7: () => {
      clearAll()
      setshowWing7(true)
    },

    strikes: () => {
      clearAll()
      setshowStrikes(true)
    },

    f98: () => {
      clearAll()
      setshowFractal98(true)
    },

    f99: () => {
      clearAll()
      setshowFractal99(true)
    },

    f100: () => {
      clearAll()
      setshowFractal100(true)
    },

    landing: () => {
      clearAll()
      setshowLandingPage(true)
    },

    upload: () => {
      clearAll()
      setshowUpload(true)
    }
  } 
  


  return (
    <div className="base">
      <Header functions={dropFuncs} />
      {showLandingPage && <Landing />}
      {showWing1 && <Wing1 />}
      {showWing2 && <Wing2 />}
      {showWing3 && <Wing3 />}
      {showWing4 && <Wing4 />}
      {showWing5 && <Wing5 />}
      {showWing6 && <Wing6 />}
      {showWing7 && <Wing7 />}
      {showFractal98 && <Fractal98 />}
      {showFractal99 && <Fractal99 />}
      {showFractal100 && <Fractal100 />}
      {showStrikes && <Strikes/>}

    </div>
  )
}

export default App;
