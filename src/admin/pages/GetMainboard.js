import React, { useState, useEffect } from "react";
import './Mainboard.css'
import MainBoardLists from '../../users/components/MainBoardLists'
import { database } from "../../context/Firebase";
import { child, get, ref } from "firebase/database";
import MemLists from "../../users/components/MemLists";


export default function Mainboard() {

  const [mainMemberData, setmainMemberData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        get(child(ref(database), 'community')).then(snapshot => {
          const data = snapshot.val();
          if (data) {
            // console.log(data);
            setmainMemberData(data);
          }
        })
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

  }, []);
  console.log("MainBoard", mainMemberData);

  const MainMembers = [
    { id: 'm1', name: 'Vivek', image: './profile-pic.png', role: 'Tester', course: 'BCA', selectYear: '2024-25' },
    { id: 'm1', name: 'Vivek', image: './profile-pic.png', role: 'Tester', course: 'BCA', selectYear: '2024-25' },
  ];
  return<>
    {/* <MemLists items={MainMembers} /> */}
    <MainBoardLists MboardItems={MainMembers} />
</>
}
