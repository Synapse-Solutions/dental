// export const handleImageClick =(event:any, index:number, setClicks:any:clic)=>{
//     const rect = event.target.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;
//     console.log("🚀 ~ handleClick ~ y:", { y, x });
//     // if y is less than 35 and the dot is already clcked then remove all dots less than 35
//     if (y < 10 && clicks.some((item: any) => item.y < 10)) {
//       console.log("🚀 ~ handleClick ~ y:", y);
//       setClicks((prevClicks: { x: number; y: number; index: number }[]) => {
//         const updatedClicks = [...prevClicks];
//         const updatedClicksFiltered = updatedClicks.filter(
//           (item) => item.y > 10
//         );
//         console.log(
//           "🚀 ~ setClicks ~ updatedClicksFiltered:",
//           updatedClicksFiltered
//         );
//         return updatedClicksFiltered;
//       });
//       return;
//     }
//     console.log("🚀 ~ else ~ y:", y);
//     if (y > 50 && y < 85 && x > 18 && x < 30) {
//       updateImages(index);
//       setPositionsofSelecteTeeth({ x, y, index });
//     }
//     if (y > 85) {
//       setCavityModal(index);
//     }

//     setClicks((prevClicks: { x: number; y: number; index: number }[]) => [
//       ...prevClicks,
//       { x, y, index },
//     ]);
// }
