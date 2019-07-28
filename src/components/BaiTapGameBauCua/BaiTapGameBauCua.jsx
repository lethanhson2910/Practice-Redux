import React, { Component } from 'react';
import XucXac from './XucXac';
import DanhSachCuoc from './DanhSachCuoc';

export default class BaiTapGameBauCua extends Component {
    render() {
        return (
            <div className="Container">
                <h3 className="text-center">Bầu cua</h3>
                <XucXac/>
                <DanhSachCuoc/>
            </div>
        )
    }
}
