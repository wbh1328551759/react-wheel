import React from 'react';

interface Props{
  code: string;
  children: React.ReactElement;
}

const Demo: React.FC<Props> = ({code, children}: Props) => {
  return (
    <div>
      {children}
      <pre>{code}</pre>
    </div>
  )
}

export default Demo
