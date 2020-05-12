import React from 'react';
import {Formik,useField, useFormik, Field} from 'formik'
import { useDispatch } from 'react-redux';



const MyInput = props =>{
    const [field, meta] = useField(props);
    return <input {...field} {...props}/>
}

const MySelect = ({values, props}) =>{
    const [field, meta] = useField(props);
    return (
        <select {...field} {...props}>
            {values.map(item => (
                <option key={item.value} value={item.value}>{item.label}</option>
            ))}
        </select>
    )
}

const  ThemKhoaHoc = () => {
    const dispatch =  useDispatch()

    return (
        <div className='container'>
            <div className='row'>
                <Formik
                    initialValues={{
                        maKhoaHoc:"",
                        biDanh: "",
                        tenKhoaHoc: "",
                        moTa: "",
                        hinhAnh: "",
                        maDanhMucKhoaHoc: ""
                    }}
                    onSubmit={values=>dispatch(ThemKhoaHoc(values))}
                >
                    {({handleSubmit,values, handleChange,handleBlur})=>{
                        console.log(values);
                        
                        return(
                            <form>
                                <label>Mã khóa học</label>
                                <input type="text" name="maKhoaHoc" value = {values.maKhoaHoc} onChange={handleChange} onBlur={handleBlur}/>
                                <label>Bí danh</label>
                                <MyInput type="text" name="biDanh"/>
                                <label>Tên Khóa học</label>
                                <MyInput type="text" name="tenKhoaHoc"/>
                                <label>Mô tả</label>
                                <MyInput type="text" name="moTa"/>
                                <label>Hình ảnh</label>
                                <MyInput type="file" name="hinhAnh"/>
                                <label>Mã danh mục khóa học</label>
                                <MySelect name="maDanhMucKhoaHoc" tag={Field}
                                    values={[
                                        {label:"Chọn danh mục khóa học", value:""},
                                        {label:"Lập trình Backend", value:"Backend"},
                                        {label:"Lập trình frontend", value:"Frontend"}
                                    ]}

                                />
                                <button className="btn btn-success" onClick={handleSubmit} type="submit"> Submit</button>
                            </form>
                        )
                    }}

                </Formik>
            </div>
        </div>
    )
}

export default ThemKhoaHoc;
