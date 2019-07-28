const stateDefault = {
    tongDiem: 100,
    danhSachCuoc : [
        {ma: "bau", hinhAnh:"img/bau.PNG", diemCuoc: 0},
        {ma: "cua", hinhAnh:"img/cua.PNG", diemCuoc: 0},
        {ma: "tom", hinhAnh:"img/tom.PNG", diemCuoc: 0},
        {ma: "ga", hinhAnh:"img/ga.PNG", diemCuoc: 0},
        {ma: "ca", hinhAnh:"img/ca.PNG", diemCuoc: 0},
        {ma: "nai", hinhAnh:"img/nai.PNG", diemCuoc: 0},
    ],
    xucXac: [
        {ma: "bau", hinhAnh:"img/bau.PNG"},
        {ma: "bau", hinhAnh:"img/bau.PNG"},
        {ma: "bau", hinhAnh:"img/bau.PNG"},
    ],
}

const GameBauCuaReducer = (state = stateDefault, action) => {
    switch(action.type){
        case 'DAT_CUOC': {
            //xử lý đặt cược
            let danhSachCuocCapNhat = [...state.danhSachCuoc];

            let index = danhSachCuocCapNhat.findIndex(item => item.ma === action.ma);
            if(index !== -1){
                if(state.tongDiem > 0){
                    danhSachCuocCapNhat[index].diemCuoc +=10;
                    state.tongDiem -=10;
                }
                else {
                    alert("Hết tiền");
                }
            }
            state.danhSachCuoc = danhSachCuocCapNhat;
            return {...state};
        }
        case 'CHOI_GAME':{
            let mangXucXacNgauNhien = [];
            //Xử lý random
            for(let i=0; i<3; i++){
                //Random số ngầu nhiên từ 0 đến danhSachCuoc.length
                let soNgauNhien = Math.floor(Math.random() * state.danhSachCuoc.length);

                //Tạo ra con xúc xắc mới từ state.danhSachCuoc
                let xucXacMoi = {
                    ma: state.danhSachCuoc[soNgauNhien].ma,
                    hinhAnh: state.danhSachCuoc[soNgauNhien].hinhAnh
                }

                //Thêm vào mảng xúc xác mới
                mangXucXacNgauNhien.push(xucXacMoi);
            }
            state.xucXac = mangXucXacNgauNhien;
            //Xử lý hoàn tiền
            let danhSachCuocCapNhat = [...state.danhSachCuoc];
            state.danhSachCuoc.forEach((item, idsCuoc)=>{//Duyệt mảng cược
                //Tìm từng phần tử mảng cược có trong mảng xúc xắc không =>Nếu có xử lý hoàn tiền
                let i = mangXucXacNgauNhien.findIndex(xucXac => xucXac.ma === item.ma);
                //Hoàn tiền
                if(i !== -1){
                    state.tongDiem += danhSachCuocCapNhat[idsCuoc].diemCuoc;
                    
                }

            })
            //Xử lý tăng điểm 
            //Duyệt từng con xúc xắc so sánh với mảng danhSachCuoc
            mangXucXacNgauNhien.forEach((xucXac, iXucXac)=>{
                //Tìm xúc xắc có trong mảng cược k
                let iCuoc = danhSachCuocCapNhat.findIndex(itemCuoc => itemCuoc.ma === xucXac.ma);
                if(iCuoc !== -1){
                    state.tongDiem += danhSachCuocCapNhat[iCuoc].diemCuoc;
                }
            })
            //reset Điểm cược
            danhSachCuocCapNhat.forEach((item, index)=>{
                item.diemCuoc = 0;
            })
            state.danhSachCuoc = danhSachCuocCapNhat;

            return {...state};
        }
    }
    return {...state}
}

export default GameBauCuaReducer