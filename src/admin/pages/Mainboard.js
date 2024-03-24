import React from 'react'
import './Mainboard.css'
import MainBoardLists from '../../users/components/MainBoardLists'

export default function Mainboard() {
    const MainMembers=[
        {id:'m1', name:'Vivek', image:'./profile-pic.png', role:'Tester', course:'BCA', selectYear:'2024-25'},
        {id:'m1', name:'Vivek', image:'./profile-pic.png', role:'Tester', course:'BCA', selectYear:'2024-25'},
    ];
  return <MainBoardLists MboardItems={MainMembers} />
}
