// // import React, { useEffect, useState } from 'react';
// // import './RainGrid.css'; // Import CSS for styling

// // const { useEffect } = require("react");

// // import { set } from "animejs";
// // const RainGrid = () => {
// //   const [grid, setGrid] = useState([]);

// //   // Function to generate random color for each stream
// //   const getRandomColor = () => {
// //     const colors = ['#4CAF50', '#2196F3', '#f44336', '#FF9800', '#9C27B0'];
// //     return colors[Math.floor(Math.random() * colors.length)];
// //   };

// //   useEffect(() => {
// //     generateGrid();
// //   }, []);

// //   // Generate the grid with streams
// //   const generateGrid = () => {
// //     let newGrid = [];
// //     for (let i = 0; i < 15; i++) { // 15 rows
// //       let row = [];
// //       for (let j = 0; j < 20; j++) { // 20 columns
// //         row.push({ id: `${i}-${j}`, isStream: false, color: '#F0F0F0' });
// //       }
// //       newGrid.push(row);
// //     }

// //     // Define the streams
// //     const streams = [
// //       { column: 9 },
// //       { column: 12 },
// //       { column: 15 },
// //     ];

// //     streams.forEach(stream => {
// //       for (let i = 0; i < 15; i++) {
// //         newGrid[i][stream.column].isStream = true;
// //         newGrid[i][stream.column].color = getRandomColor();
// //       }
// //     });

// //     setGrid(newGrid);
// //   };

// //   return (
// //     <div className="grid border-2 border-indigo-600 border-collapse">
// //       {grid.map((row, rowIndex) =>
// //         row.map(cell => (
// //           <div 
// //             key={cell.id}
// //             className="grid border-2 border-indigo-600 strem border-collapse"
// //             style={{ backgroundColor: cell.color }}
// //           />
// //         ))
// //       )}
// //     </div>
// //   );
// // };
// // // {`cell ${cell.isStream ? 'stream' : ''} border-2 border-indigo-600`

// // export default RainGrid;


// import { useEffect,useState } from "react";

// const RainGrid = ()=>{


//   const [grid,setGrid] = useState([])


//   // const clr = ['#4CAF50', '#2196F3', '#f44336', '#FF9800', '#9C27B0']
//   const clr = ['#f44336', '#f44336', '#f44336', '#f44336', '#f44336']

//   const [start, setStart] = useState(0); // Example state for start
//   const [end, setEnd] = useState(4); 

//   // useEffect(() => {
//   //   const timer = setTimeout(() => {
//   //     // Update the start and end values
//   //     setStart(prevStart => (prevStart + 4)%15);
//   //     setEnd(prevEnd => (prevEnd + 4)%15);
//   //   }, 1000); // Change values every 1 second

//   //   // Clean up the timer
//   //   return () => clearTimeout(timer);
//   // }, [start, end]);


//   setTimeout(() => {
//     // Update the start and end values
//     setStart(prevStart => (prevStart + 4)%15);
//     setEnd(prevEnd => (prevEnd + 4)%15);
//   }, 1000);


//   const genearateGrid = ()=>{

//     let newGrid = [];
//     for(let i=0;i<15;i++)
//       {

//         let newRow = [];
//         for(let j=0;j<20;j++)
//           {
//             if(i>start && i<end && j%2 === 0)
//               {
//                 console.log("i : "+ i + " " , "j : "+ j)
//                 newRow.push({id:`${i}-${j}`,isstream:false,bgColor:clr[(i+j)%5]})
//               }
//               else{
//                 console.log("come")
//                 newRow.push({id:`${i}-${j}`,isstream:false,bgColor:'bg-slate-400'})
//               }
           
//           }

//           newGrid.push(newRow)
//       }


//       setGrid(newGrid)
  
//   }


//   useEffect(() => {
//     genearateGrid()
//   },[start,end])
  


//   return(
// <div>

//   <div>Hello World</div>

// <div>
//       {
//         grid.map((row,rowIndex)=>  
//           {
//             return(
//              <div className="flex flex-row">
//               { row.map((col)=>
//                 <div
//                    key={col.id}
//                    className="w-10 h-10 bg-slate-400 border border-1 border-black flex flex-col "
//                    style={{ backgroundColor: col.bgColor }}
//                 >
//                 </div>
//               )}
//              </div>
//             )
//           }  
         
//         )
//       }
     
//     </div>
// </div>

//   )
// }

// export default RainGrid;








import React, { useEffect, useState } from "react";

const RainGrid = () => {
  const [grid, setGrid] = useState([]);

  const clr = ['#008e00', '#009c00', '#00df00', '#54a24d', '#54a2bb'];

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Update the start and end values
      setStart(prevStart => (prevStart + 4) % 15);
      setEnd(prevEnd => (prevEnd + 4) % 15);
    }, 150); // Change values every 1 second

    // Clean up the timer
    return () => clearTimeout(timer);
  }, [start, end]);

  const generateGrid = () => {
    let newGrid = [];
    for (let i = 0; i < 15; i++) {
      let newRow = [];
      for (let j = 0; j < 20; j++) {
        // Apply the color only if the cell is between start and end
        if (i >= start && i <= end && j % 2 === 0) {
          newRow.push({ id: `${i}-${j}`, isstream: false, bgColor: clr[(i + j) % 5] });
        } else {
          newRow.push({ id: `${i}-${j}`, isstream: false, bgColor: '#F0F0F0' }); // Default color
        }
      }
      newGrid.push(newRow);
    }
    setGrid(newGrid);
  };

  useEffect(() => {
    generateGrid();
  }, [start, end]);

  return (
    <div>
      <div>Hello World</div>
      <div>
        {
          grid.map((row, rowIndex) =>
            <div className="flex flex-row" key={rowIndex}>
              {row.map((col) =>
                <div
                  key={col.id}
                  className="w-10 h-10 bg-slate-400 border border-1 border-black flex flex-col"
                  style={{ backgroundColor: col.bgColor }}
                >
                </div>
              )}
            </div>
          )
        }
      </div>
    </div>
  );
};

export default RainGrid;
