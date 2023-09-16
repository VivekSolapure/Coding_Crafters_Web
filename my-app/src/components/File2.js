
// import React, { useEffect, useState } from 'react'
// import { database } from '../firebase'

// export default function Value() {
//   const [name, setName] = useState('')
//   const [allValue, setAllValue] = useState([])
//   const [allValues, setAllValues] = useState([])

//   const [allkey, setAllkey] = useState([])

//   //posting data
//   const handleAdd = () => {
//     database.ref().child('all').push(name)
//     setName('')
//   }

//   //getting data
//   useEffect(() => {
//     //*************Fetching with Index Number**************** */
//       database.ref('posts').on('value',data=>{
//       const getData=Object.values(data.val())
//       const getkey=Object.values(data.key)

//       setAllValues(getData)
//       setAllkey(getkey)
//   })
// }, [])
//       //*****************Fetching with Keys***************/

//       useEffect(() => {

//       const dbref=database.ref("Post");
//       dbref.once('value')
//         .then(snapshot=>{
//           const data =snapshot.val();
//           setAllValue(data)
//         })
//         .catch(error => {
//           console.error('Error:', error);
//         });
    
    
// }, [])

//     console.log(allkey);
    
//   return (
//     <div>
//       <input value={name} onChange={(e) => { setName(e.target.value) }} />
//       <button onClick={handleAdd}>Add</button>
//       <div>
//         {
//         //   Object.entries(allValues).map(([keys,values])=>(
//         //     <li key={keys}>
//         //       {keys}  :  {values}
//         //     </li>
//         // ))
//         }
//         {
//           Object.values(allValues).map((childdata,i) => (
//             <div key={i}>
//               <h2>Child Key: {i+1}</h2>
//               <p>Name: {childdata.Para}</p>
//               <p>Age: {childdata.Title}</p>
//             </div>
//           ))
//           // Object.entries(allValue.DAta).map(([key, value]) => (
//           //   <li key={key}>
//           //     {key}  :  {value}
//           //   </li>
//           // ))
//         }
//       </div>
//     </div>
//   )
// }

import React from 'react'

const images = [
  './slideimg1.jpg',
  './slideimg2.jpg',
  './slideimg3.jpg',
  './slideimg4.jpg',
  './slideimg5.jpg',
  './slideimg6.jpg'

 ];
export default function File2() {

  

  return (
    <div>
      <div><button>Prev</button></div>
      <div>
        <img src="" alt="" />
      </div>
      <div><button>Next</button></div>

    </div>
  )
}

