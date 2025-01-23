import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/3650/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/systems.png" width={200} />
            <div>
              <h5> CS3650 </h5>
              <p className="wd-dashboard-course-title">Computer Systems</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/2110/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/sportsmedia.jpeg" width={200} />
            <div>
              <h5> COMM2110 </h5>
              <p className="wd-dashboard-course-title">
                Sports, Media, & Communication
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/3800/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/theory_of_comp.jpg" width={200} />
            <div>
              <h5> CS3800 </h5>
              <p className="wd-dashboard-course-title">Theory of Computation</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/4550/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/web_dev.png" width={200} />
            <div>
              <h5> CS4550 </h5>
              <p className="wd-dashboard-course-title">Web Development</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/5678/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/public_speaking.jpg" width={200} />
            <div>
              <h5> COMM5678 </h5>
              <p className="wd-dashboard-course-title">Public Speaking</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/4520/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/mobile_app_dev.jpeg" width={200} />
            <div>
              <h5> CS4520 </h5>
              <p className="wd-dashboard-course-title">
                Mobile App Development
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/3200/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/database_design.png" width={200} />
            <div>
              <h5> CS3200 </h5>
              <p className="wd-dashboard-course-title">Database Design</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
