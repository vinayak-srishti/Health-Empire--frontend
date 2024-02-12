import React from 'react'
import img from '../Image/result-img.jpg'
import '../Component/Home1.css'

function Home1() {
  return (
    <div>
      <div class="container">
  <div class="row">
    <div class="col">
    <img src={img} class="img-fluid" alt="img"/>
    </div>
    <div class="col">
     <h1>BUILT TO BRING</h1>
     <h1>BEST RESULTS</h1>
    </div>
  </div>
    </div>
    </div>
  )
}

export default Home1