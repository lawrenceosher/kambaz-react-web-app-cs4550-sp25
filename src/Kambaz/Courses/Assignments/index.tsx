import { BsGripVertical } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { FaEdit } from "react-icons/fa";

import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentsControls />

      <h3
        id="wd-assignments-title"
        className="p-3 ps-2 bg-body-secondary d-flex align-items-center mb-0"
      >
        <span className="flex-grow-1 fs-4 fw-semibold">
          <BsGripVertical className="me-1 fs-3" /> <GoTriangleDown />{" "}
          ASSIGNMENTS
        </span>
        <span className="border border-1 p-2 border-secondary-subtle rounded-pill fs-5">
          40% of Total
        </span>
        <AssignmentControlButtons />
      </h3>

      <ListGroup id="wd-assignment-list" className="rounded-0">
        <ListGroupItem className="wd-assignment-list-item p-3 ps-1 mt-0 d-flex align-items-center">
          <BsGripVertical className="me-3 fs-3" />
          <a href="#/Kambaz/Courses/1234/Assignments/123">
            <FaEdit className="fs-3 me-3 text-success" />
          </a>
          <div className="d-flex flex-column">
            <a
              href="#/Kambaz/Courses/1234/Assignments/123"
              className="wd-assignment-link fw-bold text-decoration-none text-black"
            >
              A1 - ENV + HTML
            </a>{" "}
            <div>
              <span className="text-danger"> Multiple Modules </span>{" "}
              <span className="mx-2"> | </span>
              <span className="fw-bold">Not available until</span> May 6 at
              12:00am <span className="mx-2"> | </span>
            </div>
            <div>
              <span className="fw-bold">Due</span> May 13 at 11:59pm{" "}
              <span className="mx-2"> | </span> 100 pts
            </div>
          </div>

          <div className="d-inline-flex flex-grow-1 justify-content-end">
            <GreenCheckmark />
            <IoEllipsisVertical className="ms-3 fs-3" />
          </div>
        </ListGroupItem>

        <ListGroupItem className="wd-assignment-list-item p-3 ps-1 mt-0 d-flex align-items-center">
          <BsGripVertical className="me-3 fs-3" />
          <a href="#/Kambaz/Courses/1234/Assignments/123">
            <FaEdit className="fs-3 me-3 text-success" />
          </a>
          <div className="d-flex flex-column">
            <a
              href="#/Kambaz/Courses/1234/Assignments/123"
              className="wd-assignment-link fw-bold text-decoration-none text-black"
            >
              A2 - CSS + BOOTSTRAP
            </a>{" "}
            <div>
              <span className="text-danger"> Multiple Modules </span>{" "}
              <span className="mx-2"> | </span>
              <span className="fw-bold">Not available until</span> May 13 at
              12:00am <span className="mx-2"> | </span>
            </div>
            <div>
              <span className="fw-bold">Due</span> May 20 at 11:59pm{" "}
              <span className="mx-2"> | </span> 100 pts
            </div>
          </div>

          <div className="d-inline-flex flex-grow-1 justify-content-end">
            <GreenCheckmark />
            <IoEllipsisVertical className="ms-3 fs-3" />
          </div>
        </ListGroupItem>

        <ListGroupItem className="wd-assignment-list-item p-3 ps-1 mt-0 d-flex align-items-center">
          <BsGripVertical className="me-3 fs-3" />
          <a href="#/Kambaz/Courses/1234/Assignments/123">
            <FaEdit className="fs-3 me-3 text-success" />
          </a>
          <div className="d-flex flex-column">
            <a
              href="#/Kambaz/Courses/1234/Assignments/123"
              className="wd-assignment-link fw-bold text-decoration-none text-black"
            >
              A3 - JAVASCRIPT + REACT
            </a>{" "}
            <div>
              <span className="text-danger"> Multiple Modules </span>{" "}
              <span className="mx-2"> | </span>
              <span className="fw-bold">Not available until</span> May 20 at
              12:00am <span className="mx-2"> | </span>
            </div>
            <div>
              <span className="fw-bold">Due</span> May 27 at 11:59pm{" "}
              <span className="mx-2"> | </span> 100 pts
            </div>
          </div>

          <div className="d-inline-flex flex-grow-1 justify-content-end">
            <GreenCheckmark />
            <IoEllipsisVertical className="ms-3 fs-3" />
          </div>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
