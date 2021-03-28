import Demo from '../demo';
import React from 'react';
import IconExample from './icon.example';

const IconDemo = () => {
  return (
    <Demo code={require('!!raw-loader!./icon.example.tsx').default}>
      <IconExample/>
    </Demo>
  );
};

export default IconDemo;
