import React from 'react';
function Projects() {
    return(
            <section id="project" className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-4">My Projects</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Online Services Website</h5>
                  <iframe
                    src="https://onlineservice-ten.vercel.app/"
                    title="Online Services"
                    width="100%"
                    height="250"
                    style={{ border: 'none' }}
                    loading="lazy"
                  ></iframe>
                  <a href="https://onlineservice-ten.vercel.app" class="btn btn-success">Open New tab</a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Amazon Affiliate Store</h5>
                  <iframe
                    src="https://shopping-hubs.rf.gd"
                    title="Affiliate Store"
                    width="100%"
                    height="250"
                    style={{ border: 'none' }}
                    loading="lazy"
                  ></iframe>
                    <a href="https://shopping-hubs.rf.gd" class="btn btn-primary">Open New tab</a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">E-learning Blogger Platform</h5>
                  <iframe
                    src="https://laravel-tutorial.vercel.app/"
                    title="E-learning Blog"
                    width="100%"
                    height="250"
                    style={{ border: 'none' }}
                    loading="lazy"
                  ></iframe>
                    <a href="https://laravel-tutorial.vercel.app" class="btn btn-info">Open New tab</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Projects;