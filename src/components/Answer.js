import React from 'react';
import {Row,Col} from 'react-bootstrap/';
import Button from 'react-bootstrap/Button';

import './Answer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class InputedList extends React.Component {
    constructor(props){
        super(props);
        this.state={answerList:this.props.answerList,
                    inputedList:this.props.inputedList}
        this.checkTheAnswer = this.checkTheAnswer.bind(this);
    }

    searchFromTableNum=(list,t_num)=>{
        for(let i=0;i<Object.keys(list).length;i++){
            if(list[i].table==t_num)
                return list[i];
        }
        return false;
    }

    checkTheAnswer=()=>{
        const iList=this.state.inputedList;
        const aList=this.state.answerList;

        let body = [];
        let pickupedList=null;
        const header =  <tr><th>時間</th>
                            <th>テーブル</th>
                            <th>人数</th></tr>

        for(let i=0;i<Object.keys(aList).length;i++){
            pickupedList=this.searchFromTableNum(iList,aList[i].table);
            let i_time=null;
            let i_ninzu=null;
            let classname = 'incorrect-answer';
            if(pickupedList){
                if(pickupedList.time!=aList[i].time){//不正解の時
                    i_time=<div style={{color: 'red'}}>{pickupedList.time}</div>
                }
                if(pickupedList.ninzu!=aList[i].ninzu){//不正解の時
                    i_ninzu=<div style={{color: 'red'}}>{pickupedList.ninzu}</div>
                }
                if((pickupedList.time==aList[i].time)&&(pickupedList.ninzu==aList[i].ninzu)){
                    classname = 'correct-answer';
                }

            }
            body.push(  <tr key={i} className={classname}>
                            <td>{aList[i].time}{i_time}</td>
                            <td>T{aList[i].table}</td>
                            <td>{aList[i].ninzu}名{i_ninzu}</td>
                        </tr>)
        }
        return <table><thead>{header}</thead><tbody>{body}</tbody></table>;
    }

    render(){
           return  <>
                    {this.checkTheAnswer()}
                    <Button variant="success"  onClick={this.props.movephase} >Try Again!</Button>
                    </>
        }
}