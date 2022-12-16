
import React, { useState } from 'react';
import Square from './Square';
import './main.css';

// ideas for <Square 
// generate 100 <Square space=shipLengths[0]/>, <Square space=shipLengths[1]/>
// 

class BattleshipBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {shipPositions: [], shipLengths: []}
    // pass this in to UserSquare
  }



 generateShip = () => {
// generate a random number between 2 and 5 inclusive - 2, 3, 3, 4, 5 are the ship lengths
const randNum = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
// check ship lengths
var shipLengths = this.state.shipLengths.slice();
// see if ship Length is already in ship - i.e. 5
if (shipLengths.indexOf(randNum) > -1){
// length is already in ship

// is the number equal to 3?
 var count = 0;
    for (var i = 0; i < shipLengths.length; i++) {
        if (shipLengths[i] === 3) {
            count++;
        }
    }

if (randNum == 3 && count < 2){

	shipLengths.push(randNum);
	this.setState({shipLengths: shipLengths});
	// generate ship start
	const shipStart = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
	var verticalorHorizontal = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
	if (verticalorHorizontal == 0){
		this.generateVertical(3, shipStart);
	}
	else {
	this.generateHorizontal(3, shipStart);
	//this.generateVertical(randNum, shipStart );
}
}

else {

   
if (shipLengths.length < 6){

    this.generateShip();
}



}
}

else {

shipLengths.push(randNum);
this.setState({shipLengths: shipLengths});
const shipStart = Math.floor(Math.random() * (100 - 1 + 1)) + 1;



var verticalorHorizontal = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
	if (verticalorHorizontal == 0){
		this.generateVertical(randNum, shipStart);
	}
	else {
	this.generateHorizontal(randNum, shipStart);
	//this.generateVertical(randNum, shipStart );
}



}


}


generateVertical = (shipLength, shipStart) => {




  
 var verticalShip = [];
       // generate a vetical ship
       if (shipStart + ((10 * shipLength) - (10)) > 100 ) {

        
        // the ship will go off the board if generating south
        // build ship up


        

        for (var i = 0; i < shipLength; i++){

              if (i == 0){
               verticalShip.push(shipStart);

             }
             else {

                shipStart = shipStart - 10;
                verticalShip.push(shipStart);
                
             }

        }

    }

    else {

        // generate vertical ship down
        

        for (var i = 0; i < shipLength; i++){

              if (i == 0){
               verticalShip.push(shipStart);

             }
             else {

                shipStart = shipStart + 10;
                verticalShip.push(shipStart);
                
             }

        }



    }



var shipPositions = this.state.shipPositions.slice();
var alreadyGenerated = false;
        for (var i = 0; i < verticalShip.length; i++){
        	if (shipPositions.indexOf(verticalShip[i]) > -1){
        		alreadyGenerated = true;
        	}

        }

        // check alreadyGenerated

        if (alreadyGenerated == true){
   			const newShipStart = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        	this.generateVertical(shipLength, newShipStart); // generate a ship again with a new starting position
        }

        else {

        	// append to shipPositions

        for (var i = 0; i < verticalShip.length; i++){

	shipPositions.push(verticalShip[i]);
	this.setState({shipPositions: shipPositions});
}




       	
      
       }



}



generateHorizontal = (shipLength, shipStart) => {

// if ship goes too far to the left

// generate ship first
// 
var horizontalShip = [];
// try generating to the left first
var start = ((shipStart - shipLength)) + 1;
//alert(shipStart);
//alert(shipLength);
//alert(start);
for (var i = 0; i < shipLength; i++ ){

if (i==0){

horizontalShip.push(shipStart);

}

else {
	shipStart = shipStart - 1;
	horizontalShip.push(shipStart);
}


}


// does ship not work?
var newGenerate=false;

for (var i = 0; i< shipLength; i++){


if (horizontalShip[i] % 10 == 1 && i!=shipLength-1){

// re-generate ship to the right
  newGenerate=true;
  break;



}


}


if (newGenerate == false){

// chedk that ship has not already been generated



var shipPositions = this.state.shipPositions.slice();
var alreadyGenerated = false;
        for (var i = 0; i < horizontalShip.length; i++){
        	if (shipPositions.indexOf(horizontalShip[i]) > -1){
        		alreadyGenerated = true;
        	}

        }

        // check alreadyGenerated

        if (alreadyGenerated == true){
   			const newShipStart = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        	this.generateHorizontal(shipLength, newShipStart); // generate a ship again with a new starting position
        }


        else {

// add to ship positions
		var shipPositions = this.state.shipPositions.slice();
       for (var i = 0; i < horizontalShip.length; i++){

	shipPositions.push(horizontalShip[i]);
	this.setState({shipPositions: shipPositions});
}

}











}


else {

// re-do horizontal ship to the right

var shipStart = (shipStart + shipLength) - 1;
var horizontalShip = [];




// for loop to re-do ship to the right

for (var i = 0; i < shipLength; i++ ){

if (i==0){

horizontalShip.push(shipStart);

}

else {
	shipStart = shipStart + 1;
	horizontalShip.push(shipStart);
}


}





//check that ship has not already been generated



var shipPositions = this.state.shipPositions.slice();
var alreadyGenerated = false;
        for (var i = 0; i < horizontalShip.length; i++){
        	if (shipPositions.indexOf(horizontalShip[i]) > -1){
        		alreadyGenerated = true;
        	}

        }

        // check alreadyGenerated

        if (alreadyGenerated == true){
   			const newShipStart = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        	this.generateHorizontal(shipLength, newShipStart); // generate a ship again with a new starting position
        

   }   else {



// add to ship positions
	var shipPositions = this.state.shipPositions.slice();

       for (var i = 0; i < horizontalShip.length; i++){

	shipPositions.push(horizontalShip[i]);
	this.setState({shipPositions: shipPositions});
}


}




}


}





  
  render() {
    return (
    	<div style={{marginLeft: "100px"}}>
    	<br/><br/><br/>
      <div className={'main'}>

      

        <Square number={1} shipPositions={this.state.shipPositions}/>
         <Square number={2} shipPositions={this.state.shipPositions}/>
         <Square number={3} shipPositions={this.state.shipPositions}/>
          <Square number={4} shipPositions={this.state.shipPositions}/>
           <Square number={5} shipPositions={this.state.shipPositions}/>
            <Square number={6} shipPositions={this.state.shipPositions}/>
             <Square number={7} shipPositions={this.state.shipPositions}/>
              <Square number={8} shipPositions={this.state.shipPositions}/>
               <Square number={9} shipPositions={this.state.shipPositions}/>
                <Square number={10} shipPositions={this.state.shipPositions}/>
           
      </div>


<div className={'main'}>

      

        <Square number={11} shipPositions={this.state.shipPositions}/>
         <Square number={12} shipPositions={this.state.shipPositions}/>
         <Square number={13} shipPositions={this.state.shipPositions}/>
          <Square number={14} shipPositions={this.state.shipPositions}/>
           <Square number={15} shipPositions={this.state.shipPositions}/>
            <Square number={16} shipPositions={this.state.shipPositions}/>
             <Square number={17} shipPositions={this.state.shipPositions}/>
              <Square number={18} shipPositions={this.state.shipPositions}/>
               <Square number={19} shipPositions={this.state.shipPositions}/>
                <Square number={20} shipPositions={this.state.shipPositions}/>
           
      </div>



<div className={'main'}>

      

        <Square number={21} shipPositions={this.state.shipPositions}/>
         <Square number={22} shipPositions={this.state.shipPositions}/>
         <Square number={23} shipPositions={this.state.shipPositions}/>
          <Square number={24} shipPositions={this.state.shipPositions}/>
           <Square number={25} shipPositions={this.state.shipPositions}/>
            <Square number={26} shipPositions={this.state.shipPositions}/>
             <Square number={27} shipPositions={this.state.shipPositions}/>
              <Square number={28} shipPositions={this.state.shipPositions}/>
               <Square number={29} shipPositions={this.state.shipPositions}/>
                <Square number={30} shipPositions={this.state.shipPositions}/>
           
      </div>


<div className={'main'}>

      

        <Square number={31} shipPositions={this.state.shipPositions}/>
         <Square number={32} shipPositions={this.state.shipPositions}/>
         <Square number={33} shipPositions={this.state.shipPositions}/>
          <Square number={34} shipPositions={this.state.shipPositions}/>
           <Square number={35} shipPositions={this.state.shipPositions}/>
            <Square number={36} shipPositions={this.state.shipPositions}/>
             <Square number={37} shipPositions={this.state.shipPositions}/>
              <Square number={38} shipPositions={this.state.shipPositions}/>
               <Square number={39} shipPositions={this.state.shipPositions}/>
                <Square number={40} shipPositions={this.state.shipPositions}/>
           
      </div>

      <div className={'main'}>

      

        <Square number={41} shipPositions={this.state.shipPositions}/>
         <Square number={42} shipPositions={this.state.shipPositions}/>
         <Square number={43} shipPositions={this.state.shipPositions}/>
          <Square number={44} shipPositions={this.state.shipPositions}/>
           <Square number={45} shipPositions={this.state.shipPositions}/>
            <Square number={46} shipPositions={this.state.shipPositions}/>
             <Square number={47} shipPositions={this.state.shipPositions}/>
              <Square number={48} shipPositions={this.state.shipPositions}/>
               <Square number={49} shipPositions={this.state.shipPositions}/>
                <Square number={50} shipPositions={this.state.shipPositions}/>
           
      </div>



 <div className={'main'}>

      

        <Square number={51} shipPositions={this.state.shipPositions}/>
         <Square number={52} shipPositions={this.state.shipPositions}/>
         <Square number={53} shipPositions={this.state.shipPositions}/>
          <Square number={54} shipPositions={this.state.shipPositions}/>
           <Square number={55} shipPositions={this.state.shipPositions}/>
            <Square number={56} shipPositions={this.state.shipPositions}/>
             <Square number={57} shipPositions={this.state.shipPositions}/>
              <Square number={58} shipPositions={this.state.shipPositions}/>
               <Square number={59} shipPositions={this.state.shipPositions}/>
                <Square number={60} shipPositions={this.state.shipPositions}/>
           
      </div>



     <div className={'main'}>

      

        <Square number={61} shipPositions={this.state.shipPositions}/>
         <Square number={62} shipPositions={this.state.shipPositions}/>
         <Square number={63} shipPositions={this.state.shipPositions}/>
          <Square number={64} shipPositions={this.state.shipPositions}/>
           <Square number={65} shipPositions={this.state.shipPositions}/>
            <Square number={66} shipPositions={this.state.shipPositions}/>
             <Square number={67} shipPositions={this.state.shipPositions}/>
              <Square number={68} shipPositions={this.state.shipPositions}/>
               <Square number={69} shipPositions={this.state.shipPositions}/>
                <Square number={70} shipPositions={this.state.shipPositions}/>
           
      </div>
  


 <div className={'main'}>

      
        <Square number={71} shipPositions={this.state.shipPositions}/>
         <Square number={72} shipPositions={this.state.shipPositions}/>
         <Square number={73} shipPositions={this.state.shipPositions}/>
          <Square number={74} shipPositions={this.state.shipPositions}/>
           <Square number={75} shipPositions={this.state.shipPositions}/>
            <Square number={76} shipPositions={this.state.shipPositions}/>
             <Square number={77} shipPositions={this.state.shipPositions}/>
              <Square number={78} shipPositions={this.state.shipPositions}/>
               <Square number={79} shipPositions={this.state.shipPositions}/>
                <Square number={80} shipPositions={this.state.shipPositions}/>
           
      </div>




 <div className={'main'}>

      

        <Square number={81} shipPositions={this.state.shipPositions}/>
         <Square number={82} shipPositions={this.state.shipPositions}/>
         <Square number={83} shipPositions={this.state.shipPositions}/>
          <Square number={84} shipPositions={this.state.shipPositions}/>
           <Square number={85} shipPositions={this.state.shipPositions}/>
            <Square number={86} shipPositions={this.state.shipPositions}/>
             <Square number={87} shipPositions={this.state.shipPositions}/>
              <Square number={88} shipPositions={this.state.shipPositions}/>
               <Square number={89} shipPositions={this.state.shipPositions}/>
                <Square number={90} shipPositions={this.state.shipPositions}/>
           
      </div>


 <div className={'main'}>

      

        <Square number={91} shipPositions={this.state.shipPositions}/>
         <Square number={92} shipPositions={this.state.shipPositions}/>
         <Square number={93} shipPositions={this.state.shipPositions}/>
          <Square number={94} shipPositions={this.state.shipPositions}/>
           <Square number={95} shipPositions={this.state.shipPositions}/>
            <Square number={96} shipPositions={this.state.shipPositions}/>
             <Square number={97} shipPositions={this.state.shipPositions}/>
              <Square number={98} shipPositions={this.state.shipPositions}/>
               <Square number={99} shipPositions={this.state.shipPositions}/>
                <Square number={100} shipPositions={this.state.shipPositions}/>
           
      </div>










      <div> <button className={'button'} onClick={this.generateShip}>
          generate ships
        </button></div>




       </div> 
    );
  }
}


export default BattleshipBoard;