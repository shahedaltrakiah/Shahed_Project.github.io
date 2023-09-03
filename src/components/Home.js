import React from 'react';

function HomePage() {
  return (
    <div>
      <div className="container-fluid background-image" style={{ backgroundImage: 'url("bg.jpg")', height: '650px' }}>
      <nav class="navbar p-4">
            <a class="navbar-brand text-light m-4" href="#"><h3> Website Logo </h3> </a>
            <nav class="nav d-flex m-4 ">
                <a class="nav-link text-light" href="#">Home</a>
                <a class="nav-link text-light" href="#Products">Products</a>
                <a class="nav-link text-light" href="#About">About</a>
                <a class="nav-link text-light" href="#Contact">Contact</a>
            </nav>
        </nav>
        <br />
        <br />
        <div className="text-center p-5">
          <h1 className="nav-link text-light" style={{ fontSize: '350%' }}>
            Responsive Flexbox Template
          </h1>
          <br/>
          <h2 className="nav-link text-light" style={{ fontSize: '150%' }} >A freebie by Tutorialzine.</h2>
          <br/>
          <div className="text-center p-3">
            <button className="btn btn-lg btn-primary" type="button">
              DOWNLOAD IT HERE
            </button>
          </div>
        </div>
      </div>

      <br/> <br/>
      <div id="Products" className="container text-center mx-auto">
        <h2>Some Of Our Work</h2>
        <p className="text-align p-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.
        </p>
        <div className="d-flex justify-content-center"> 
          <hr style={{ width: '200px', borderWidth: '3px', backgroundColor: 'rgba(0, 238, 255, 0.356)' }} />
        </div>      
        </div>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="">
              <img className="mt-2" width="600px" height="300px" src="m-1.jpg" alt="Image 1" />
            </div>
          </div>
          <div className="col">
            <div className="">
              <img className="mt-2" width="400px" height="300px" src="m-3.jpg" alt="Image 3" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="">
              <img className="mt-2" width="400px" height="300px" src="m-2.jpeg" alt="Image 2" />
            </div>
          </div>
          <div className="col">
            <div className="">
              <img className="mt-2" width="600px" height="300px" src="m-4.jpg" alt="Image 4" />
            </div>
          </div>
        </div>
      </div>
      
      <div id="About" className="container text-center mx-auto p-5">
        <h2>Features And Services</h2>
        <p className="text-align p-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.
        </p>
        <div className="d-flex justify-content-center"> 
          <hr style={{ width: '200px', borderWidth: '3px', backgroundColor: 'rgba(0, 238, 255, 0.356)' }} />
        </div>
              </div>

      <div className="container text-center ">
        <div className="row">
          <div className="col">
            <div className="card-heder mb-4">
              <h4>Photography</h4>
            </div>
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="card-heder mb-4">
              <h4>Web Development</h4>
            </div>
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="card-heder mb-4">
              <h4>Content Editing</h4>
            </div>
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br/> <br/>
      <div id="Contact" className="container-fluid text-center" style={{ backgroundColor: 'rgba(152, 183, 185, 0.247)' }}>
  <nav className="navbar d-flex justify-content-center">
    <div className="container">
      <div className="text-center p-5">
        <h2>Join Our Newsletter</h2>
        <p className="text-align p-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.
        </p>
        <div className="d-flex justify-content-center"> 
          <hr style={{ width: '200px', borderWidth: '3px', backgroundColor: 'rgba(0, 238, 255, 0.356)' }} />
        </div>    
      </div>
    </div>
          <form className=" form-inline p-2 text-align">
            <input className="form-control" type="text" placeholder="Email" />
            <button className="btn btn-primary" type="button">SUBSCRIBE NOW</button>
          </form>
        </nav>
      </div>

      <footer className="container-fluid text-center bg-dark p-5">
        <div>
          <p className="text-light text-align">MADE BY TUTORIALZINE. IMAGES COURTESY TO UNSPLASH.
          <br />NO ATTRIBUTION REQUIRED. YOU CAN REMOVE THIS FOOTER.</p>
          </div>
      </footer>
    </div>
  );
}

export default HomePage;
