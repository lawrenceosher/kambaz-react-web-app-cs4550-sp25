import { BsGripVertical } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { FaEdit } from "react-icons/fa";

import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";

import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

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
        {assignments
          .filter((assignment) => assignment.course === cid)
          .map((assignment) => (
            <ListGroupItem className="wd-assignment-list-item p-3 ps-1 mt-0 d-flex align-items-center">
              <BsGripVertical className="me-3 fs-3" />
              <a href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}>
                <FaEdit className="fs-3 me-3 text-success" />
              </a>

              <div className="d-flex flex-column">
                <a
                  href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                  className="wd-assignment-link fw-bold text-decoration-none text-black"
                >
                  {assignment.title}
                </a>{" "}
                <div>
                  <span className="text-danger"> Multiple Modules </span>{" "}
                  <span className="mx-2"> | </span>
                  <span className="fw-bold">Not available until</span>{" "}
                  {assignment.startDateDay} at {""}
                  {assignment.startDateTime} <span className="mx-2"> | </span>
                </div>
                <div>
                  <span className="fw-bold">Due</span> {assignment.dueDateDay}{" "}
                  at {assignment.dueDateTime} <span className="mx-2"> | </span>{" "}
                  {assignment.points} pts
                </div>
              </div>

              <div className="d-inline-flex flex-grow-1 justify-content-end">
                <GreenCheckmark />
                <IoEllipsisVertical className="ms-3 fs-3" />
              </div>
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}
