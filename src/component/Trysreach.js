// import React, { useState } from 'react';

// const Trysearch = () => {
//     const TryData = [
//         {
//             "id":1,"cardInforHeader":"Male T-shirt","cardPrice":"price:","value":"$40.00",
//             "disc":"card discription in not more than seven words","likeBtn":"Like",
//         },
//         {
//             "id":2,"cardInforHeader":"female","cardPrice":"price:","value":"$10.00",
//             "disc":"card discription in not more than seven words","likeBtn":"Like",
//         },
//         {
//             "id":3,"cardInforHeader":" you","cardPrice":"price:","value":"$50.00",
//             "disc":"card discription in not more than seven words","likeBtn":"Like",
//         },
//         {
//             "id":4,"cardInforHeader":"john","cardPrice":"price:","value":"$00.00",
//             "disc":"card discription in not more than seven words","likeBtn":"Like",
//         },
//         {
//             "id":5,"cardInforHeader":"jonah T","cardPrice":"price:","value":"$90.00",
//             "disc":"card discription in not more than seven words","likeBtn":"Like",
//         }

//     ]
//     const [searchTry, setSearchTry] = useState('');

//     const handleChange = (event) =>{
//         setSearchTry(event.target.value);
//     }
//     return (
//         <>
//         <div>
//             <input 
//             placeholder='trying search...'
//             value={ searchTry }
//             onChange={ handleChange }/>
//         </div>
//         <p>{ searchTry }</p>
//         <div>
//             {
//                 TryData.filter((items) => items.cardInforHeader.toLowerCase().includes(searchTry.toLowerCase())
//                 ).map(item =>{
//                     return(
//                         <div key={item.id}>
//                             <p>{item.cardInforHeader}</p>
//                             <p>{item.cardPrice}</p>
//                             <p>{item.disc}</p>
//                             <p>{item.likeBtn}</p>
//                         </div>
//                     );
//                 })
//             }
//         </div>
//         </>
//     );
// }
// export default Trysearch;