import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  const [data,setData] = useState();
  const [date,setDate] = useState("");

  useEffect(()=>{

    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(res=> setData(res.data[date]))

    .catch(err => console.log(err))
    

  },[data,date])


  return (
    <div className="App">

      <div className="container">

        <div className="row">

          <div className="col-md-8 mx-auto mt-4">

            <h2 className='text-white text-center display-3 fw-bolder'>Turkiye Covid-19 Api</h2>
            <input className="form-control mt-5" type="text" placeholder="GG/AA/Y" onChange={(e)=>setDate(e.target.value)}/>

            <table className="table table-striped text-white mt-3">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Test Sayisi</th>
                  <th scope="col">Hasta Sayisi</th>
                  <th scope="col">Ölüm</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th className={data ===undefined ? "bg-danger text-white" : "bg-success text-white"}  scope="row" >1</th>
                  <td className={data ===undefined ? "bg-danger text-white" : "bg-success text-white"}  >{data === undefined ? "Veri Bekleniyor": data.totalTests}</td>
                  <td  className={data ===undefined ? "bg-danger text-white" : "bg-success text-white"} >{data === undefined ? "Veri Bekleniyor": data.patients}</td>
                  <td  className={data ===undefined ? "bg-danger text-white" : "bg-success text-white"} >{data === undefined ? "Veri Bekleniyor": data.deaths}</td>
                </tr>
            
              </tbody>
            </table>

          </div>

        </div>

      </div>




    </div>

  );
}

export default App;
