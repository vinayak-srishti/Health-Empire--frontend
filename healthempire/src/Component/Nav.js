import React from 'react'
import logo from '../Image/about-img.png'
import"../Component/Nav.css"

function Nav() {
  return (
    <div>
        <nav class="navbar navbar-light bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={logo}
        class="me-2"
        height="20"
        alt=" Logo"
        loading="lazy"
      />
      <small class='hdr'><b>HEALTH EMPIRE</b></small>
    </a>
    <button type="button" class="btn btn-primary">Login</button>
  </div>
  
</nav>
    </div>
  )
}

export default Nav