// DropTarget.js
import React from 'react';
import { useDrop } from 'react-dnd';

const DropTarget = ({ onDrop }) => {
  const [, ref] = useDrop({
    accept: 'BOX',
    drop: (item) => onDrop(item.id),
  });

  return (
    <div ref={ref} className="drop-target">
      Drop Here
    </div>
  );
};

export default DropTarget;
