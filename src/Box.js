// Box.js
import React from 'react';
import { useDrag } from 'react-dnd';

const Box = ({ id, name }) => {
  const [, ref] = useDrag({
    type: 'BOX',
    item: { id },
  });

  return (
    <div ref={ref} className="box">
      {name}
    </div>
  );
};

export default Box;
