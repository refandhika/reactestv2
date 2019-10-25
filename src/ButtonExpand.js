import React from 'react';
import './ButtonExpand.css';

import logo from './logo.svg';

import ButtonExpandItem from './ButtonExpandItem.js';

const items = [
  {id: 1, logo: logo, content: 'Lorem'},
  {id: 2, logo: logo, content: 'Ipsum'},
  {id: 3, logo: logo, content: 'Dolor'},
  {id: 4, logo: logo, content: 'Sit'},
  {id: 5, logo: logo, content: 'Amet'},
  {id: 6, logo: logo, content: 'Lorem'},
  {id: 7, logo: logo, content: 'Ipsum'},
  {id: 8, logo: logo, content: 'Dolor'},
  {id: 9, logo: logo, content: 'Sit'},
  {id: 10, logo: logo, content: 'Amet'},
  {id: 11, logo: logo, content: 'Lorem'}
]

class ButtonExpand extends React.Component {
  constructor(props) {
    super(props);

    this.toggleContent = this.toggleContent.bind(this);

    this.state = {
      content: "",
      open: false,
      selections: []
    }
  }

  toggleContent(data){
    let on = false;
    if(data.content){
	on = true;
    }
    let selections = this.state.selections;
    selections.fill(false);
    selections[data.id] = on;
    

    this.setState({
      content: data.content,
      open: on,
      selections: selections
    });
  }

  render() {
    const newItem = {
      content: this.state.content,
      open: this.state.open,
      selections: this.state.selections
    }

    return (
      <div className="ButtonExpand">
	<div className="ButtonExpand-list">
	{items.map((item) =>
	  <ButtonExpandItem key={item.id.toString()}
	    pos={item.id}
	    isOn={newItem.selections[item.id]}
	    isOpen={newItem.open}
	    logo={item.logo}
	    content={item.content}
	    onButtonClick={this.toggleContent} />
	)}
	</div>
	<div className={"ButtonExpand-det" + (newItem.open ? " open" : "")}>
	  {newItem.content}
	</div>
      </div>
    );
  }
}

export default ButtonExpand;
