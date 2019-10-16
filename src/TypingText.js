import React from 'react';
import Typed from 'typed.js';
import './TypingText.css';

const texts = [
  "Lorem",
  "Ipsum",
  "Dolor",
  "Sit",
  "Amet"
]

class TypingText extends React.Component {
  constructor(props) {
    super(props);
    }

  componentDidMount() {
    const options = {
      strings: texts,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      backDelay: 4000,
      showCursor: false
    }

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy()
  }

  render() {
    return (
      <div className="TypingText">
	<h2>Typing Text</h2>
	<p>Below is an example of changing text with typing animation using library <strong>Typed.js</strong>. Useful for re-typing a word. Or a part of sentences.</p>
	<div className="Example">
          <p>This <span className="Part"><span className="Part-inner" ref={(el)=>{this.el=el;}}></span></span> will changing every 4 seconds.</p>
	</div>
      </div>
    );
  }
}

export default TypingText;
