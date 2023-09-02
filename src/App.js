import Navbar from "./Components/Navbar/Navbar";
import Liste from "./Pages/Liste/Liste"
import StateAnim from "./Pages/StateAnim/StateAnim"
import Scroll from "./Pages/Scroll/Scroll"
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="global-container">
          <Navbar />
              <Routes>
                <Route path="/" exact Component={Liste} />
                <Route path="/stateAnim" exact Component={StateAnim} />
                <Route path="/scroll" exact Component={Scroll} />
              </Routes>
        </div>
      </Router>

  );
}

export default App;
