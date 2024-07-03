import React from 'react';




const Home = () => {
  return (
    <section id="header" className="d-flex align-tems-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
              <h1>Grow your business with <strong className="brand-name"> 🎊 PATIL INNOVATIONS 🎊</strong></h1>
              <h2 className="my-3 d-flex justify-content-center flex-column" >
                We are the team of talented developers making websites
              </h2>
              <div className="mt-3">
                {/* <a href="/" className="btn-get-started">Get Started</a> */}
                <button>Get Started</button>
              </div>
            </div>
            <div className="col-lg-6 order-1-lg-2 header-img">
              <img src="https://th.bing.com/th/id/OIP._Z9LQZSKhVM4wSZwAewyEgAAAA?rs=1&pid=ImgDetMain"className="img-fluid animated" alt="home-img"/>
            </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
