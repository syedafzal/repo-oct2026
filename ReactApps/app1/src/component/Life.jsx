import React, { Component } from "react";
export  default class Life extends React.Component {
    constructor(){
        super();

        this.state = {name: 'First'};
          console.log('constructor:',this.state.name);
          alert('hi from const');
    }
    componentDidMount(){
         this.setState({name: 'Second'});
        // console.log('Did');
        
        console.log('did name:',this.state.name);
        alert('hi from did');
       
    }
    componentWillMount(){
        // console.log('will');
          console.log('Will: ',this.state.name);
          alert('hi from Will');
    }
    render(){
        return (
        <>
        <h1>Life: {this.state.name}</h1>
       
        </>
        );
    }
}