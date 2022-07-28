import React,{useState,useEffect} from 'react'
import './Tables.css'

const Tables = ({globalName}) => {

  const [table1, settable1] = useState([]);
  const [table2, settable2] = useState([]);
  const [table3, settable3] = useState([]);
  const [table4, settable4] = useState([]);
  const [table5, settable5] = useState([]);
  const [table6, settable6] = useState([]);
  const [table7, settable7] = useState([]);
  const [table8, settable8] = useState([]);
  const [table9, settable9] = useState([]);

  const [selected, setselected] = useState(0)
  

  useEffect(() => {
    fetch("http://localhost:5000/alltables")
      .then((data) => {
        return data.json();
      })
      .then((resp) => {
        resp.map((dataArray,i) => {
          console.log(i);
          if(i === 0){
            settable1(dataArray.statusoftable)
          }if(i === 1){
            settable2(dataArray.statusoftable)
          }if(i === 2){
            settable3(dataArray.statusoftable)
          }if(i === 3){
            settable4(dataArray.statusoftable)
          }if(i === 4){
            settable5(dataArray.statusoftable)
          }if(i === 5){
            settable6(dataArray.statusoftable)
          }if(i === 6){
            settable7(dataArray.statusoftable)
          }if(i === 7){
            settable8(dataArray.statusoftable)
          }if(i === 8){
            settable9(dataArray.statusoftable)
          }

        });
      });
  }, []);


  async function submit() {
    let result = await fetch("http://localhost:5000/book", {
      method: "post",
      body: JSON.stringify({
        table : selected
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result) {
      alert("Table booked succesfully");
    } else {
      alert("error");
    }

    fetch("http://localhost:5000/alltables")
      .then((data) => {
        return data.json();
      })
      .then((resp) => {
        resp.map((dataArray,i) => {
          console.log(i);
          if(i === 0){
            settable1(dataArray.statusoftable)
          }if(i === 1){
            settable2(dataArray.statusoftable)
          }if(i === 2){
            settable3(dataArray.statusoftable)
          }if(i === 3){
            settable4(dataArray.statusoftable)
          }if(i === 4){
            settable5(dataArray.statusoftable)
          }if(i === 5){
            settable6(dataArray.statusoftable)
          }if(i === 6){
            settable7(dataArray.statusoftable)
          }if(i === 7){
            settable8(dataArray.statusoftable)
          }if(i === 8){
            settable9(dataArray.statusoftable)
          }

        });
      });
  }
  
  return (
    <div className='table_book_main_wrap'>

      <label className="title_text extra_"> Hi !! {globalName} please select your tables</label>
      <div className="table_book_wrap">
      <div className="row row1">
        {table1 === 0 && <div onClick={() => {settable1(1); setselected(1)}} className="col1 col">
          <img src="/Images/light_red.png" alt="Table" />
          <img src="/Images/light_red.png" alt="Table" />
        </div>}
        {table1 === 1 && <div onClick={() => settable1(0)} className="col1 col">
          <img src="/Images/red.png" alt="Table" />
          <img src="/Images/red.png" alt="Table" />
        </div>}
        {table1 === 2 && <div className="col1 col">
          <img src="/Images/grey.png" alt="Table" />
          <img src="/Images/grey.png" alt="Table" />
        </div>}
        {table2 === 0 && <div onClick={() => {settable2(1); setselected(2)}} className="col1 col">
          <img src="/Images/light_red.png" alt="Table" />
          <img src="/Images/light_red.png" alt="Table" />
        </div>}
        {table2 === 1 && <div onClick={() => settable2(0)} className="col1 col">
          <img src="/Images/red.png" alt="Table" />
          <img src="/Images/red.png" alt="Table" />
        </div>}
        {table2 === 2 && <div className="col1 col">
          <img src="/Images/grey.png" alt="Table" />
          <img src="/Images/grey.png" alt="Table" />
        </div>}
        {table3 === 0 && <div onClick={() => {settable3(1); setselected(3)}} className="col1 col">
          <img src="/Images/light_red.png" alt="Table" />
          <img src="/Images/light_red.png" alt="Table" />
        </div>}
        {table3 === 1 && <div onClick={() => settable3(0)} className="col1 col">
          <img src="/Images/red.png" alt="Table" />
          <img src="/Images/red.png" alt="Table" />
        </div>}
        {table3 === 2 && <div className="col1 col">
          <img src="/Images/grey.png" alt="Table" />
          <img src="/Images/grey.png" alt="Table" />
        </div>}
      </div>
      <div className="row row1">
      {table4 === 0 && <div onClick={() => {settable4(1); setselected(4)}} className="col1 col">
          <img src="/Images/light_red.png" alt="Table" />
          <img src="/Images/light_red.png" alt="Table" />
        </div>}
        {table4 === 1 && <div onClick={() => settable4(0)} className="col1 col">
          <img src="/Images/red.png" alt="Table" />
          <img src="/Images/red.png" alt="Table" />
        </div>}
        {table4 === 2 && <div className="col1 col">
          <img src="/Images/grey.png" alt="Table" />
          <img src="/Images/grey.png" alt="Table" />
        </div>}
        {table5 === 0 && <div onClick={() => {settable5(1); setselected(5)}} className="col1 col">
          <img src="/Images/light_red.png" alt="Table" />
          <img src="/Images/light_red.png" alt="Table" />
        </div>}
        {table5 === 1 && <div onClick={() => settable5(0)} className="col1 col">
          <img src="/Images/red.png" alt="Table" />
          <img src="/Images/red.png" alt="Table" />
        </div>}
        {table5 === 2 && <div className="col1 col">
          <img src="/Images/grey.png" alt="Table" />
          <img src="/Images/grey.png" alt="Table" />
        </div>}
        {table6 === 0 && <div onClick={() => {settable6(1); setselected(6)}} className="col1 col">
          <img src="/Images/light_red.png" alt="Table" />
          <img src="/Images/light_red.png" alt="Table" />
        </div>}
        {table6 === 1 && <div onClick={() => settable6(0)} className="col1 col">
          <img src="/Images/red.png" alt="Table" />
          <img src="/Images/red.png" alt="Table" />
        </div>}
        {table6 === 2 && <div className="col1 col">
          <img src="/Images/grey.png" alt="Table" />
          <img src="/Images/grey.png" alt="Table" />
        </div>}
      </div>
      <div className="row row1">
      {table7 === 0 && <div onClick={() => {settable7(1); setselected(7)}} className="col1 col">
          <img src="/Images/light_red.png" alt="Table" />
          <img src="/Images/light_red.png" alt="Table" />
        </div>}
        {table7 === 1 && <div onClick={() => settable7(0)} className="col1 col">
          <img src="/Images/red.png" alt="Table" />
          <img src="/Images/red.png" alt="Table" />
        </div>}
        {table7 === 2 && <div className="col1 col">
          <img src="/Images/grey.png" alt="Table" />
          <img src="/Images/grey.png" alt="Table" />
        </div>}
        {table8 === 0 && <div onClick={() => {settable8(1); setselected(8)}} className="col1 col">
          <img src="/Images/light_red.png" alt="Table" />
          <img src="/Images/light_red.png" alt="Table" />
        </div>}
        {table8 === 1 && <div onClick={() => settable8(0)} className="col1 col">
          <img src="/Images/red.png" alt="Table" />
          <img src="/Images/red.png" alt="Table" />
        </div>}
        {table8 === 2 && <div className="col1 col">
          <img src="/Images/grey.png" alt="Table" />
          <img src="/Images/grey.png" alt="Table" />
        </div>}
        {table9 === 0 && <div onClick={() => {settable9(1); setselected(9)}} className="col1 col">
          <img src="/Images/light_red.png" alt="Table" />
          <img src="/Images/light_red.png" alt="Table" />
        </div>}
        {table9 === 1 && <div onClick={() => settable9(0)} className="col1 col">
          <img src="/Images/red.png" alt="Table" />
          <img src="/Images/red.png" alt="Table" />
        </div>}
        {table9 === 2 && <div className="col1 col">
          <img src="/Images/grey.png" alt="Table" />
          <img src="/Images/grey.png" alt="Table" />
        </div>}
      </div>
      </div>
      <div className="onlyforhover">
      <button className='view_btn' onClick={submit}>Book tables</button>

      </div>
    </div>
  )
}

export default Tables