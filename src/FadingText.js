import React from 'react';
import './FadingText.css';

const texts = [
  "Lorem",
  "Ipsum",
  "Dolor",
  "Sit",
  "Amet"
]

class FadingText extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      total: texts.length,
      index: 0,
      fading: false
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.changeText(),
      4000
    );
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  changeText() {
    const current = {
      total: this.state.total,
      index: this.state.index,
    }
    
    this.setState({
	fading: true
    });
 
    this.timer = setTimeout(_ => {
      if(current.index < current.total - 1) {
        this.setState({
          index: current.index + 1,
        });
      } else {
        this.setState({
          index: 0,
        });
      }
      this.setState({fading: false});
    }, 500);

  }
  
  render() {
    const index = this.state.index;
    const fading = this.state.fading;
    let classChange = "Part-inner";

    if(fading){
	classChange = "Part-inner faded";
    }

    return (
      <div className="FadingText">
        <p>This <span className="Part"><span className={classChange}>{texts[index]}</span></span> will changing every 4 seconds.</p>
      </div>
    );
  }
}

export default FadingText;
