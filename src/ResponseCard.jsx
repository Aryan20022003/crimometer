import React, { useState } from 'react';
import './response.css';

const ResponseCard = (props) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = document.querySelector('.card-body p').textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    });
  };

  const copyButtonText = isCopied ? 'Copied to Clipboard' : 'Copy';

  const buttonClassName = isCopied
    ? 'btn btn-success w-40 h-4'
    : 'btn btn-primary w-28 h-4';

  return (
    <div className="card w-full lg:w-2/4 h-4/5 bg-base-100 shadow-xl overflow-x-scroll overflow-y-scroll responsecard">
      <div className="card-body break-words">
        <h2 className="card-title">AI generated Advisory</h2>
        <p style={{ whiteSpace: 'pre-wrap' }}>{props.data}</p>
        <div className="card-actions justify-end">
          <button className={buttonClassName} onClick={handleCopy}>
            {copyButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponseCard;
