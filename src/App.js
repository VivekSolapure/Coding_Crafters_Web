import Post from './components/navbar/Post'
import Home from "./components/navbar/Home";
import Navbar from "./components/navbar/Navbar";
import Inbox from "./components/Inbox"
import Test1 from "./components/Test1"
import Test2aa from "./components/Test2"
import AddMember from './components/AddMember';
import MemLists from './users/components/MemLists';
import Bgv from "./sharing/bgv"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import  Events  from './users/components/Events';
import Members from './admin/pages/Members';
import Footer from './sharing/footer';


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
            <Route path="/post" element={<Post />}>Post</Route>
            <Route path="/post/inbox" element={<Inbox />}>Inbox</Route>
            <Route path="/members" element={<Members />}>Members</Route>
            <Route path="/events" element={<Events />}>Events</Route>
            <Route path="/test1" element={<Test1 />}>Test1</Route>
            <Route path="/test2aa" element={<Events />}>Test2aa</Route>
            <Route path="/addMember" element={<AddMember />}>AddMember</Route>
            <Route path="*" element={<Navigate to="/"/>}></Route>
          </Routes>
          
        </div>


      </Router>
      <Footer></Footer>

    </>
  );
}

export default App;

