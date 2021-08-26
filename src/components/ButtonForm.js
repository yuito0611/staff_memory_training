import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Test.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ButtonForm extends React.Component {
    constructor(props){
        super(props);
        this.updateParams = this.updateParams.bind();
    }

    updateParams=(e)=>{
        const type = e.currentTarget.dataset['type'];
        const id = e.currentTarget.dataset['id'];

        this.props.updateParams(type,id);
    }

    render(){
        return <>
            <Card>
                <Card.Body>
                    <ButtonToolbar aria-label="TableGroup">
                        <ButtonGroup className="me-2" aria-label="First group">
                            <Button variant="outline-primary" data-type="table" data-id="1" onClick={(e)=>this.updateParams(e)}>1</Button>
                            <Button variant="outline-primary" data-type="table" data-id="3" onClick={(e)=>this.updateParams(e)}>3</Button>
                            <Button variant="outline-primary" data-type="table" data-id="5" onClick={(e)=>this.updateParams(e)}>5</Button>
                        </ButtonGroup>
                        <ButtonGroup className="me-2" aria-label="Second groprops">
                            <Button variant="outline-primary" data-type="table" data-id="11" onClick={(e)=>this.updateParams(e)}>11</Button>
                            <Button variant="outline-primary" data-type="table" data-id="12" onClick={(e)=>this.updateParams(e)}>12</Button>
                            <Button variant="outline-primary" data-type="table" data-id="13" onClick={(e)=>this.updateParams(e)}>13</Button>
                            <Button variant="outline-primary" data-type="table" data-id="14" onClick={(e)=>this.updateParams(e)}>14</Button>
                            <Button variant="outline-primary" data-type="table" data-id="15" onClick={(e)=>this.updateParams(e)}>15</Button>
                            <Button variant="outline-primary" data-type="table" data-id="16" onClick={(e)=>this.updateParams(e)}>16</Button>
                        </ButtonGroup>
                        <ButtonGroup aria-label="Third group">
                            <Button variant="outline-primary" data-type="table" data-id="21" onClick={(e)=>this.updateParams(e)}>21</Button>
                            <Button variant="outline-primary" data-type="table" data-id="22" onClick={(e)=>this.updateParams(e)}>22</Button>
                            <Button variant="outline-primary" data-type="table" data-id="25" onClick={(e)=>this.updateParams(e)}>25</Button>
                            <Button variant="outline-primary" data-type="table" data-id="26" onClick={(e)=>this.updateParams(e)}>26</Button>
                            <Button variant="outline-primary" data-type="table" data-id="27" onClick={(e)=>this.updateParams(e)}>27</Button>
                            <Button variant="outline-primary" data-type="table" data-id="30" onClick={(e)=>this.updateParams(e)}>30</Button>
                        </ButtonGroup>
                    </ButtonToolbar><br/>
                    <ButtonToolbar aria-label="NumberOfGuestGroup">
                        <ButtonGroup className="me-2" aria-label="First group">
                            <Button variant="outline-success" data-type="guest" data-id="1" onClick={(e)=>this.updateParams(e)}>1</Button>
                            <Button variant="outline-success" data-type="guest" data-id="2" onClick={(e)=>this.updateParams(e)}>2</Button>
                            <Button variant="outline-success" data-type="guest" data-id="3" onClick={(e)=>this.updateParams(e)}>3</Button>
                            <Button variant="outline-success" data-type="guest" data-id="4" onClick={(e)=>this.updateParams(e)}>4</Button>
                            <Button variant="outline-success" data-type="guest" data-id="5" onClick={(e)=>this.updateParams(e)}>5</Button>
                            <Button variant="outline-success" data-type="guest" data-id="6" onClick={(e)=>this.updateParams(e)}>6</Button>

                        </ButtonGroup>
                    </ButtonToolbar><br/>
                    <ButtonToolbar aria-label="Toolbar with button groups">
                        <ButtonGroup className="me-2" aria-label="First group">
                            <Button variant="secondary" data-type="time" data-id="11:00" onClick={(e)=>this.updateParams(e)}>11:00</Button>
                            <Button variant="secondary" data-type="time" data-id="11:30" onClick={(e)=>this.updateParams(e)}>11:30</Button>
                            <Button variant="secondary" data-type="time" data-id="12:00" onClick={(e)=>this.updateParams(e)}>12:00</Button>
                            <Button variant="secondary" data-type="time" data-id="13:00" onClick={(e)=>this.updateParams(e)}>13:00</Button>
                        </ButtonGroup>
                    </ButtonToolbar><br/> 
                </Card.Body>
            </Card>
            </>;
    }
}

