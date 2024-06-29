// import React, { useEffect, useState } from "react";
// import './RainGrid1.css';

// const RainGrid = () => {
//   const [grid, setGrid] = useState([]);

//   const generateGrid = () => {
//     let newGrid = [];
//     for (let i = 0; i < 15; i++) {
//       let newRow = [];
//       for (let j = 0; j < 20; j++) {
//         // All cells in the columns that are part of the streams will animate
//         const isStreamColumn = j % 2 === 0;
//         newRow.push({ id: `${i}-${j}`, isStream: isStreamColumn });
//       }
//       newGrid.push(newRow);
//     }
//     setGrid(newGrid);
//   };

//   useEffect(() => {
//     generateGrid();
//   }, []);

//   return (
//     <div className="grid">
//       {grid.map((row, rowIndex) => (
//         <div className="row" key={rowIndex}>
//           {row.map((col, colIndex) => (
//             <div
//               key={col.id}
//               className={`cell ${col.isStream ? 'rain' : ''}`}
//               style={{ animationDelay: col.isStream ? `${(rowIndex * 0.1)}s` : '0s' }}
//             />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RainGrid;





















// 2.


// import React, { useEffect, useState } from "react";
// import './RainGrid1.css';

// const RainGrid = () => {
//   const [grid, setGrid] = useState([]);

//   const generateGrid = () => {
//     let newGrid = [];
//     for (let i = 0; i < 15; i++) {
//       let newRow = [];
//       for (let j = 0; j < 20; j++) {
//         // Assign streams to every second column with different colors
//         const isStreamColumn = j % 2 === 0;
//         const streamClass = isStreamColumn ? `rain-${(j / 2) % 3}` : '';
//         newRow.push({ id: `${i}-${j}`, streamClass });
//       }
//       newGrid.push(newRow);
//     }
//     setGrid(newGrid);
//   };

//   useEffect(() => {
//     generateGrid();
//   }, []);

//   return (
//     <div className="grid">
//       {grid.map((row, rowIndex) => (
//         <div className="row" key={rowIndex}>
//           {row.map((col, colIndex) => (
//             <div
//               key={col.id}
//               className={`cell ${col.streamClass}`}
//               style={{ animationDelay: col.streamClass ? `${(rowIndex * 0.1)}s` : '0s' }}
//             />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RainGrid;













import React, { useEffect, useState } from "react";
import './RainGrid2.css';

const RainGrid = () => {
  const [grid, setGrid] = useState([]);

  const generateGrid = () => {
    let newGrid = [];
    for (let i = 0; i < 15; i++) {
      let newRow = [];
      for (let j = 0; j < 20; j++) {
        // Determine if the cell is part of a stream
        const isStreamColumn = j % 2 === 0;
        const isStreamCell = isStreamColumn && (i % 5 < 5);
        const streamClass = isStreamCell ? `rain-${(j / 2) % 3}` : '';
        newRow.push({ id: `${i}-${j}`, streamClass });
      }
      newGrid.push(newRow);
    }
    setGrid(newGrid);
  };

  useEffect(() => {
    generateGrid();
  }, []);

  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((col, colIndex) => (
            <div
              key={col.id}
              className={`cell ${col.streamClass}`}
              style={{ animationDelay: col.streamClass ? `${(rowIndex * 0.1)}s` : '0s' }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default RainGrid;
