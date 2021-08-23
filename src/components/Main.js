import React from 'react'
import './Main.css'

export class Table extends React.Component {
    constructor(props){
        super(props);
        this.state = {reservation_list:makeGuestList()};
        this.makeTable = this.makeTable.bind(this);
    }
    // 予約リストからテーブルを作成
    makeTable=(reservation_list)=>{
        let table = <br />;
        var body = [];
        const header =  <tr><th>時間</th>
                            <th>テーブル</th>
                            <th>人数</th></tr>

        for(let i=0;i<Object.keys(reservation_list).length;i++){
            body.push(  <tr key={i}>
                            <td>{reservation_list[i].time}</td>
                            <td>{reservation_list[i].table}</td>
                            <td>{reservation_list[i].ninzu}</td>
                        </tr>)
        }
        table = <table><thead>{header}</thead><tbody>{body}</tbody></table>
        return table;
    };

    render(){
        return this.makeTable(this.state.reservation_list);
    }
}

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {isStarted: false};
    }

    handleStartClick=()=>{
        this.setState({isStarted: true});
    }

    render() {
        const isStarted = this.state.isStarted;
        let contents;

        if(isStarted){
            contents = <div><Table /><button onClick={makeGuestList}>START</button></div>
        } else {
            contents = <button className="startbutton" onClick={this.handleStartClick} ><p>button</p></button>;
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
    const table_arr = ["1","2","3","4","5","6","11","12","13","14","15","16","21","22","25","26","27","30"];
    const time_arr = ["11:00","11:30","12:00","13:00"]; 
    const ninzu_arr = [1,2,3,4,5,6];
    const list = {};

    const table = arrayShaffle(table_arr);
    const index = makeIndex(time_arr,table.length);
    for(let i=0; i<table.length; i++){
        let ninzu = ninzu_arr[Math.floor(Math.random()*ninzu_arr.length)]
        list[i] = {"id":i+1,"time":time_arr[index[i]],"table":"T"+table[i],"ninzu":ninzu+"名"}; 
    }

    return list;
}
