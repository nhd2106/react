import React from 'react';
import subStyle from '../subcribeForm/SubcribeStyle.module.css';
const SubcribeForm = () => {
    return (
        <div style={{background:'#11CBD7'}} className={subStyle}>
            <div className='container p-5'>
            <div className='row text-white text-left align-items-center'>
                <div className='col-md-6'>
                    <h3>Create cool websites</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi accusantium optio und.</p>
                </div>

                <form className='col-md-6 justify-content-center align-items-center row p-1' style={{background:'white'}}>
                    <div className='align-items-center col-md-10'>
                    <input type='text' className={`form-control ${subStyle.controlExtend}`} placeholder='Enter email'/>
                    </div>
                    <div>
                    <input type='submit' className='btn form-control' style={{background:'#11CBD7'}}/>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default SubcribeForm;