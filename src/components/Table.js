import React from 'react'

export default class Table extends React.Component {
    constructor(props){
        super(props);
        this.state = {reservationList:this.props.reservationList};

        this.makeTable = this.makeTable.bind(this);
    }
    // 予約リストからテーブルを作成
    makeTable=(reservationList)=>{
        let table = <br />;
        var body = [];
        const header =  <tr><th>時間</th>
                            <th>テーブル</th>
                            <th>人数</th></tr>

        for(let i=0;i<Object.keys(reservationList).length;i++){
            body.push(  <tr key={i} >
                            <td>{reservationList[i].time}</td>
                            <td>{reservationList[i].table}</td>
                            <td>{reservationList[i].ninzu}</td>
                        </tr>)
        }
        return <table><thead>{header}</thead><tbody>{body}</tbody></table>;
    };

    render(){
        const table = this.makeTable(this.state.reservationList);
        return <div>{table}<button onClick={this.props.onClick}>START</button></div>
    };
}

