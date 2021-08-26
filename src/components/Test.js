import React from 'react';
import {Row,Col} from 'react-bootstrap/';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import ButtonForm from './ButtonForm.js';
import './Test.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class InputedList extends React.Component {
    constructor(props){
        super(props);
        this.state={inputedList:this.props.inputedList}
        this.selectButton = this.selectButton.bind(this);
        this.makeButtonList = this.makeButtonList.bind(this);
    }

    selectButton=(e)=>{
        const index = e.currentTarget.dataset['index'];
        this.props.selectButton(index);
    }

    makeButtonList=()=>{
        let list = [];
        for(let i=0;i<Object.keys(this.state.inputedList).length;i++){
            let id = this.state.inputedList[i].id;
            let time = this.state.inputedList[i].time;
            let table = this.state.inputedList[i].table;
            let num = this.state.inputedList[i].ninzu;
            list.push(  <Button variant='light' data-index={i} onClick={(e)=>this.selectButton(e)} key={i}  className='inputedList'>
                            <Row>
                                <Col>{id}:</Col>
                                <Col>{time}</Col>
                                <Col>T{table}</Col>
                                <Col>{num}名</Col>
                            </Row>
                        </Button>);
        }
        return list;
    }


    render(){
        return  <ListGroup>{this.makeButtonList()}</ListGroup>
    }
}

export default class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = {  answerList:this.props.reservationList,
                        inputedList:this.initList(Object.keys(this.props.reservationList).length),
                        selectedIndex:0,};

        this.updateParams = this.updateParams.bind(this);
    };

    initList=(num)=>{
        const list = [];
        for(let i=0;i<num;i++){
            list[i]={"id":i+1,"time":null,"table":null,"ninzu": null};
        }
        return list;
    }


    selectButton=(index)=>{
        this.setState(()=>({selectedIndex:index}));

    }

    updateParams(type,id){
        const i = this.state.selectedIndex;
        const list = this.state.inputedList.slice();

        if(type==="table"){
            list[i].table=Number(id);
        } else if(type==="guest"){
            list[i].ninzu=Number(id);
        } else if(type==="time"){
            list[i].time=id;
        }
        this.setState({inputedList:list});
    }

    onClick=()=>{
        this.props.getInputedList(this.state.inputedList);
        this.props.movephase();
    }

    render(){
        return  <> 
                    <Row>
                        <Col></Col><Col><InputedList inputedList={this.state.inputedList} selectButton={this.selectButton}></InputedList></Col><Col></Col>
                    </Row>
                    <Row>
                        <Col></Col><Col><ButtonForm updateParams={this.updateParams}/></Col><Col></Col>
                    </Row>
                    <Button variant="success" className="checkbutton" onClick={this.onClick} >CHECK!</Button>
                </>
    }
}