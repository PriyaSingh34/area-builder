// App.js
import React, { useState } from 'react';
import './App2.css';
import Box from './Box';
import DropTarget from './DropTarget';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const [boxes, setBoxes] = useState([
    { id: 'box-1', name: 'Box 1' },
    { id: 'box-2', name: 'Box 2' },
    { id: 'box-3', name: 'Box 3' },
  ]);

  const [targetBoxes, setTargetBoxes] = useState([]);

  const handleDrop = (boxId) => {
    // Check if the drop target is allowed
    if (boxId === 'drop-target') {
      return; // Do nothing when dropped in the "drop-target"
    }

    // Check if the boxId is one of the allowed box IDs
    if (boxes.some((box) => box.id === boxId)) {
      const draggedBox = boxes.find((box) => box.id === boxId);

      // Remove the dropped box from the original boxes array
      const updatedBoxes = boxes.filter((box) => box.id !== boxId);
      setBoxes(updatedBoxes);

      // Add the dropped box to the targetBoxes array
      setTargetBoxes((prevTargetBoxes) => [...prevTargetBoxes, draggedBox]);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <h1>Drag and Drop Example</h1>
        <div className="container">
          <div className="box-container">
            {boxes.map((box) => (
              <Box key={box.id} id={box.id} name={box.name} />
            ))}
          </div>
          <DropTarget onDrop={handleDrop} id="drop-target" />
        </div>
        <div className="target-container">
          <h2>Target Container</h2>
          {targetBoxes.map((box) => (
            <Box key={box.id} id={box.id} name={box.name} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
