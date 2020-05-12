import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LayKhoaHocTheoDanhMuc } from "../../redux/actions/QuanLyKhoaHocAction";

const KhoaHocTheoDanhMuc = (...props) => {
  const dispatch = useDispatch();
  const danhSachKhoaHocDm = useSelector(
    state => state.quanLyKhoaHoc.danhSachKhoaHocDm
  );
  useEffect(() => {
    const maDanhMuc = props[0].match.params;
    
    dispatch(LayKhoaHocTheoDanhMuc(maDanhMuc));
  }, []);
 

  return (
    <div className="container">
        
        <div className='row'>
        {danhSachKhoaHocDm.map(item => (
        <div key={item} className='col-md-3 my-3'>
          <div className="card text-white bg-primary" type='button' onClick={()=> props[0].history.push(`/chi-tiet/${item.maKhoaHoc}`)}>
            <img className="card-img-top" src={item.hinhAnh} alt="hinh-anh."  width='100%' height='208px' />
            <div className="card-body">
              <h4 className="card-title text-truncate">{item.tenKhoaHoc}</h4>
              <p className="card-text text-truncate">{item.moTa}</p>
            </div>
          </div>
        </div>
      ))}
        </div>
    </div>
  );
};

export default KhoaHocTheoDanhMuc;
// {
//     danhMucKhoaHoc.map(item=>(
//      <a
//      className="nav-item nav-link active"
//      id="nav-home-tab"
//      data-toggle="tab"
//      href="#nav-home"
//      role="tab"
//      aria-controls="nav-home"
//      aria-selected="true"
//    >
//      {item.tenDanhMuc}
//    </a>
//     ))
//   }