import React from 'react';

class ButtonExpandItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDetail = this.toggleDetail.bind(this);

    this.state = {
      content: props.content,
      id: props.pos
    }
  }

  toggleDetail() {
    let content = this.props.content;
   console.log(this.props.isOpen); 
    if(!this.props.isOpen){
      content = null;
    }

    this.setState({
      content: content
    });
    
    this.props.onButtonClick(this.state);
  }

  render() {
    const on = this.props.isOn;

    return (
      <button className={"ButtonExpand-item" + (on ? " on" : "")}
	onClick={this.toggleDetail} >
	<img src={this.props.logo} />
      </button>
    );
  }
}

export default ButtonExpandItem;
