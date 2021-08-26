import React from 'react'
import './Main.css'
import Table from './Table.js'
import Test from './Test.js'

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {isStarted: false, reservationList:makeGuestList()};
    }

    handleStartClick=()=>{
        this.setState({isStarted: !this.state.isStarted});
    }

    render() {
        const isStarted = this.state.isStarted;
        let contents;

        if(isStarted){
            contents = <div><Test reservationList={this.state.reservationList} onClick={()=>this.handleStartClick()}/></div>;
        } else {
            contents = <div><Table reservationList={this.state.reservationList} onClick={()=>this.handleStartClick()}/></div>
        }

        return (<div>{contents}</div>);
    }
}

function arrayShaffle(array){
    for(var i = array.length - 1; 0<i; i--){
        var r = Math.floor(Math.random() * (i+1));

        var tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;
    }
    return array;
};

function makeIndex(time_arr,len){
    let index = []
    for(let i=0;i<len;i++){
        index.push(Math.floor(Math.random()*time_arr.length))
    }
    index.sort();
    return index;
}

function makeGuestList(){
    const table_arr = [1,3,5,11,12,13,14,15,16,21,22,25,26,27,30];
    const time_arr = ["11:00","11:30","12:00","13:00"]; 
    const ninzu_arr = [1,2,3,4,5,6];
    const list = {};
    let ninzu = 0;
    const table = arrayShaffle(table_arr);
    const index = makeIndex(time_arr,table.length);
    for(let i=0; i<table.length; i++){
        if(table[i]>=11 && table[i]<=16){
            ninzu = ninzu_arr[Math.floor(Math.random()*3)]
        }else{
            ninzu = ninzu_arr[Math.floor(Math.random()*ninzu_arr.length)]
        }
        list[i] = {"id":i+1,"time":time_arr[index[i]],"table":"T"+table[i],"ninzu":ninzu+"名"}; 
    }
    return list;
}

