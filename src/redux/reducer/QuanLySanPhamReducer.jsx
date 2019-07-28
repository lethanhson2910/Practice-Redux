const stateDafault ={
    sanPhamModal: {
        maSP: 1,
        tenSP: "sản phẩm mặc định"
    }
};

const quanLySanPhamStoreReducer = (state = stateDafault, action) => {
    console.log(action);
    
    switch(action.type)
    {
        case 'XEM_CHI_TIET':{
            const stateUpdate = {...state};
            stateUpdate.sanPhamModal = action.sanPham;
            return {...stateUpdate};
        }
    }
    return {...state};
}

export default quanLySanPhamStoreReducer;

