import Post from './components/navbar/Post'
import Home from "./components/navbar/Home";
import Navbar from "./components/navbar/Navbar";
import Inbox from "./components/dummy_inbox"
import File2 from "./components/img-slider"

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        {/* <Navbar title="Navbar" aboutNavText="About"></Navbar> */}
        <Navbar></Navbar>
        <div className="container">
        <Routes>
            <Route path="/" element={<Home />}>Home</Route>          
            <Route path="/post" element={<Post />}>Post</Route>
            <Route path="/inbox" element={<Inbox />}>Inbox</Route>
            <Route path="/file2" element={<File2 />}>File2</Route>


          </Routes>
          
          
        </div>
      </Router>
    </>
  );
}

export default App;

