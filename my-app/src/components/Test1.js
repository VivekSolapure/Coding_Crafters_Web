// import React, { useState } from 'react'
// import { storage } from "../firebase"
// import 'firebase/storage';
// import { getDownloadURL, ref, uploadBytes } from "firebase/storage"

// export default function File2() {
//   /***********Lastest Image******************************/
//   const today = new Date();
//   today.setHours(0, 0, 0, 0)
//   const [ImgUpload, setImgUpload] = useState()
//   const [ImageUrls, setImageUrls] = useState([])

//   //Updating the data in the array of imagelist and storing urls of selected files only
//   const latestImg = async () => {

//     for (let i = 0; i < ImgUpload.length; i++) {

//       const imgref = ref(storage, `Images/${ImgUpload[i].name}`);
//       await uploadBytes(imgref, ImgUpload[i])//For uploading (kuta upload,kai upload)
//         .then((snapshot) => {//varible  snapshot tyat sagala astay [items,prefixes,extra]
//           getDownloadURL(snapshot.ref)//url download karaylo ref cha, ref kai ahe tar "ImageUrls/"
//             .then((url) => {//snapshot madla url
//               setImageUrls(prev => [...prev, url])//updates the imageList
//             })
//         })
//     }
//   }
// const as=()=>{
//   let a=ImageUrls.map((url)=>{return url})
//   console.log(a);
// }
//   return (
//     <>
//       <div>
//         <input type="file" multiple onChange={(event) => {setImgUpload(event.target.files) }} />
//         <button onClick={latestImg}>Upload</button>

//         {
//           ImageUrls.map((url) => {
//             return <img style={{width:500}} src={url} alt="" />
//           })
//         }
//       <button onClick={as}>Console</button>
//       </div>
//     </>
//   )
// }


import React, { useState } from 'react'




export default function Test1() {
const [comment, setcomment] = useState('');
const ChageTxtarea = (e) => {
  setcomment(e.target.value)
  // const commentref = database.ref("posts").once('value');
  // Object.values(commentref).map((val, id) => {
  //     <div key={id}>
  //         <p>{comment}</p>
  //     </div>
  // })
}
console.log(comment);

  return (
    <div>
      <textarea onChange={ChageTxtarea} id="" cols="30" rows="10"></textarea>
      <p style={{backgroundColor:"red",width:100}}>{comment}</p>
    </div>
  )
}
