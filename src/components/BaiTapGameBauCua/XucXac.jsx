import React, { Component } from 'react';
import {connect} from 'react-redux';

class XucXac extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <button className="btn btn-success" onClick={()=>this.props.choiGame()}>Play</button>
                    </div>
                    <div className="col-md-8 text-center">
                        {this.props.dsXucXac.map((item, index)=>{
                            return (
                                <img className="m-2" key={index} src={item.hinhAnh} alt="" width={50} height={50}/>
                            )
                        })}
                    </div>
                   <div className="col-md-2">
                        <div className="display-4">
                            {this.props.tongDiem} $
                        </div>
                   </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        dsXucXac: state.GameBauCuaReducer.xucXac,
        tongDiem: state.GameBauCuaReducer.tongDiem
    }
}

const mapDisPacthToProp = (dispatch) => {
    return {
        choiGame: ()=>{
            dispatch({
                type: 'CHOI_GAME',
            })
        }
    }
}
export default connect(mapStateToProps, mapDisPacthToProp)(XucXac);

