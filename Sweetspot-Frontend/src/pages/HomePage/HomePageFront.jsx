import "./HomePageFront.css"

function HomePageFront() {
    return (
      <div className="container-fluid py-5 hero-header">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-12 col-lg-7">
              <h4 className="mb-3 primary-text">Quality Foods</h4>
              <h1 className="mb-5 display-3 secondary-text">Delecious Sweets for Everyone!</h1>
            </div>
            <div className="col-md-12 col-lg-5">
              <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                <div className="carousel-inner" role="listbox">
                <div className="carousel-item active rounded">
                    <img src="https://images.unsplash.com/photo-1502304180871-869c4f43f41d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="img-fluid w-100 h-100 bg-secondary rounded " alt="First slide" />
                    
                  </div>
                  <div className="carousel-item active rounded">
                    <img src="https://images.unsplash.com/photo-1469533778471-92a68acc3633?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="img-fluid w-100 h-100 bg-secondary rounded " alt="First slide" />
                    
                  </div>
                  <div className="carousel-item rounded">
                    <img src="https://images.unsplash.com/photo-1619685347066-6727bb62f478?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="img-fluid w-100 h-100 rounded " alt="Second slide" />
                    
                  </div>
                  <div className="carousel-item rounded">
                    <img src="https://images.unsplash.com/photo-1520352823777-923f7151a680?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="img-fluid w-100 h-100 rounded " alt="Second slide" />
                    
                  </div>
                  <div className="carousel-item rounded">
                    <img src="https://images.unsplash.com/photo-1508736375612-66c03035c629?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="img-fluid w-100 h-100 rounded " alt="Second slide" />
                    
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId"
                  data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselId"
                  data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default HomePageFront;
  