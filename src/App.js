import Post from './components/navbar/Post'
import Home from "./components/navbar/Home";
import Navbar from "./components/navbar/Navbar";
import Inbox from "./components/Inbox"
import Test1 from "./components/Test1"
import AddMember from './components/AddMember';
import Bgv from "./sharing/bgv"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Form,
} from "react-router-dom";
import Events from './users/components/Events';
import Members from './admin/pages/Members';
import Footer from './sharing/footer';
import SignIn from './sharing/Signin';
import About from './sharing/About';




function App() {

  return (
    <>
      <Router>
        {/* <Navbar title="Navbar" aboutNavText="About"></Navbar> */}
        <div className="container">
          <Bgv></Bgv>


          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<Home />} >Home</Route>
            <Route path="/signup" element={<SignIn />}>Signup</Route>
            <Route path="/post" element={<Post />}>Post</Route>
            <Route path="/post/inbox" element={<Inbox />}>Inbox</Route>
            <Route path="/members" element={<Members />}>Members</Route>
            <Route path="/events" element={<Events />}>Events</Route>
            <Route path="/test1" element={<Test1 />}>Test1</Route>
            <Route path="/test2aa" element={<Events />}>Test2aa</Route>
            <Route path="/aboutus" element={<About />}>About</Route>
            <Route path="/addMember" element={<AddMember />}>AddMember</Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Routes>
        </div>


      </Router >
<Footer></Footer>      

    </>
  );
}

export default App;

