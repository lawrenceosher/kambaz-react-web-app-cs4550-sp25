import AssignmentsControls from "./AssignmentsControls";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentsControls />
      <br />
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>{" "}
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a
            href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </a>{" "}
          <div>
            Multiple Modules | <strong>Not available until</strong> May 6 at
            12:00am |
          </div>
          <div>
            <strong>Due</strong> May 13 at 11:59pm | 100 pts
          </div>
        </li>
        <li className="wd-assignment-list-item">
          <a
            href="#/Kambaz/Courses/1234/Assignments/456"
            className="wd-assignment-link"
          >
            A2 - CSS + BOOTSTRAP
          </a>{" "}
          <div>
            Multiple Modules | <strong>Not available until</strong> May 13 at
            12:00am |
          </div>
          <div>
            <strong>Due</strong> May 20 at 11:59pm | 100 pts
          </div>
        </li>
        <li className="wd-assignment-list-item">
          <a
            href="#/Kambaz/Courses/1234/Assignments/789"
            className="wd-assignment-link"
          >
            A3 - JAVASCRIPT + REACT
          </a>{" "}
          <div>
            Multiple Modules | <strong>Not available until</strong> May 20 at
            12:00am |
          </div>
          <div>
            <strong>Due</strong> May 27 at 11:59pm | 100 pts
          </div>
        </li>
      </ul>
    </div>
  );
}
