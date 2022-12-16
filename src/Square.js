
import React, { useState } from 'react';
import './square.css';


class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    // pass this in to UserSquare
  }


render(){

const shipPositions = this.props.shipPositions;
const number = this.props.number;
const isIn = shipPositions.indexOf(number);
var className = 'bigblue';
if (isIn > -1){

className = 'bigblack';

}

// if number in shipPositions, change style

	return(



		<div className={className}>

    <div>  {this.props.number}
    		</div>



		</div>);
}



}


export default Square;