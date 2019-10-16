import React from 'react';
import Typed from 'typed.js';
import './TypingText.js';

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
      backDelay: 4000
    }

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy()
  }

  render() {
    return (
      <div className="TypingText">
        <p>This <span className="Part"><span className="Part-inner" ref={(el)=>{this.el=el;}}></span></span> will changing every 4 seconds.</p>
      </div>
    );
  }
}

export default TypingText;
