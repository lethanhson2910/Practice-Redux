import React, { Component } from 'react';
import {connect} from 'react-redux';

class DanhSachCuoc extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.dsCuoc.map((item, index)=>{
                        return (
                            <div key={index} className="col-md-4">
                                <button onClick={()=>this.props.datCuoc(item.ma)}>
                                    <img src={item.hinhAnh} alt=""/>
                                </button>
                                <h1 className="text-center display-4">{item.diemCuoc} $</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        dsCuoc: state.GameBauCuaReducer.danhSachCuoc
        
    }
}

const mapDisPacthToProp = (dispatch) => {
    return {
        datCuoc: (ma)=>{
            dispatch({
                type: 'DAT_CUOC',
                ma
            })
        }
    }
}

export default connect(mapStateToProps, mapDisPacthToProp)(DanhSachCuoc);
