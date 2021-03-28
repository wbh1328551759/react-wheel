import React, { useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

interface Props {
  code: string;
  children: React.ReactElement;
}

const Demo: React.FC<Props> = ({code, children}: Props) => {
  const [codeVisible, setCodeVisible] = useState<boolean>(false);
  const codeContent = (
    <Highlight {...defaultProps} code={code} language='jsx'>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({line, key: i})}>
              {line.map((token, key) => {
                return <span {...getTokenProps({token, key})}/>;
              })}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
  return (
    <div>
      <div className="example">
        {children}
      </div>
      <div>
        <button onClick={() => setCodeVisible(!codeVisible)}>查看代码</button>
      </div>
      {codeVisible && codeContent}
    </div>
  );
};

export default Demo;
