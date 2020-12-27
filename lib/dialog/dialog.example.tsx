import React, {useState} from 'react';
import Dialog from './dialog'

function dialogExample(){
  const [isVisible, setVisible] = useState<boolean>(false)
  return (
    <div>
      <button onClick={() => setVisible(!isVisible)}>click</button>
      <Dialog visible={isVisible}>
        <h1>1111</h1>
      </Dialog>
    </div>
  )
}

export default dialogExample
