import React from 'react';

import FadingText from './FadingText.js';
import TypingText from './TypingText.js';

function ChangingText() {
  return (
    <div className="Home">
      <h1>Changing Text</h1>
      <FadingText />
      <TypingText />
    </div>
  );
}

export default ChangingText;
