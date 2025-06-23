import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div>
            <section className="hero text-center text-white" id="home">
                <div className="container py-5">
                    <h1 className="animated-heading">
                        Hello, I'm <span className="word delay-1">Deepak</span> <span className="word delay-2">Kumar</span>
                    </h1>
                    <p className="lead">
                        A creative frontend/backend developer building responsive, user-friendly websites using HTML, CSS, Bootstrap,  and Laravel.
                    </p>
                    <a href="#projects" className="btn btn-primary mt-3">View My Work</a>
                </div>
            </section>

        </div>

    );
}
export default Home;