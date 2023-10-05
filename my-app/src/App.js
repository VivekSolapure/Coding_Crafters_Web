import Post from './components/navbar/Post'
import Home from "./components/navbar/Home";
import Navbar from "./components/navbar/Navbar";
import Inbox from "./components/dummy_inbox"
import Test1 from "./components/Test1"
import Test2aa from "./components/dummy_post"
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
            <Route path="/test1" element={<Test1 />}>Test1</Route>
            <Route path="/test2aa" element={<Test2aa />}>Test2aa</Route>


          </Routes>
          
          
        </div>
      </Router>
    </>
  );
}

export default App;

