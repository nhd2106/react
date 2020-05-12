import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { goiDanhSachGioHang } from '../../redux/actions/GioHangAction';

const GioHang = () => {
    const dispatch = useDispatch()
    const danhSachGioHang = useSelector(state =>state.gioHangReducer.danhSachGioHang)
    console.log(danhSachGioHang,"danh sách giỏ hàng");
    
    
    useEffect(()=>{
    dispatch(goiDanhSachGioHang())
},[])

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-8">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th><div style={{width:"500px"}}></div></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src='hình ảnh'/></td>
                                <td>Mô tả</td>
                                <td>học phí</td>
                                <td><button className="btn btn-danger">bỏ khóa học</button></td>
                               
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className="col-md-4">
                    <div>Tạm tính : tiền</div>
                    <div>Thành tiền : tiền</div>

                    <button>Tiến hành đặt hàng</button>

                    <div>
                        <div>Mã giảm giá quà tặng</div>
                        <div>
                         <div className="form-group">
  <input type="text" className="form-control" name id aria-describedby="helpId" placeholder />
</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GioHang;
