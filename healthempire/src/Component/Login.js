import React from 'react'
import"../Component/Login.css"
import Nav from './Nav'




function Login() {
  return (
    <div>
      <Nav/>
<div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h3 class="card-title text-center mb-5 fw-light fs-5">Login</h3>
            <form>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>

              <div class="d-grid">
                <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Login
                  </button>
              </div>
              <hr class="my-4"/>
              <div>
              <p class="mb-0">Don't have an account?Sign up now <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
              </p>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    
                 
            </div>
        

   

  
           

           

          
    
  )
}

export default Login