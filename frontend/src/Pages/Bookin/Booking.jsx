import React, { useState } from 'react'
import './Booking.css'
import Select from 'react-select';
import Tables from '../Tables/Tables';
import { customStyles } from '../../React_select/React_select';

const Booking = ({globalName}) => {

  const [bookflag, setbookflag] = useState(false)

  const [member, setmember] = useState();
  const [timearray, settimearray] = useState([
    { label: '09.00AM to 11.00AM', value: '1' },
    { label: '08.00PM to 10.00PM', value: '2' },])

  const [memberarray, setmemberarray] = useState([
    { label: '1-2', value: '1' },
    { label: '3-4', value: '2' },
    { label: '4-6', value: '3' },
    { label: '7-10', value: '4' }])

  return (
    <div className="booking_wrap">
      {!bookflag && <div className='login_box'>
        <div className="inner_wrap">
          <label className="title_text" >Welcome to our hotel {globalName} !!</label>
        <label className='red_text margin_class'>Book your timings :</label>
        <Select styles={customStyles} options={timearray}></Select>

        <label className='red_text margin_class'>Member</label>
        <Select styles={customStyles} options={memberarray}></Select>

        <div className='onlyforhover'>
        <button className='margin_class view_btn' onClick={() => { setbookflag(true)}}>View tables</button>
        </div>
        </div>
      </div>}
      {
        bookflag && <div className="table_wrap">
          <Tables globalName={globalName} />
        </div>
      }
    </div>
  )
}

export default Booking