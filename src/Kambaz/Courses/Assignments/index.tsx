/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsGripVertical } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { FaEdit } from "react-icons/fa";

import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";

import { useParams } from "react-router";
import { useSelector } from "react-redux";

export default function Assignments() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  function toDate(isoDateString: string) {
    const myDate = new Date(isoDateString);

    const formattedDate = new Intl.DateTimeFormat("en-us", {
      dateStyle: "full",
      timeStyle: "short",
    });

    return formattedDate.format(myDate);
  }

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
        {currentUser.role === "FACULTY" && <AssignmentControlButtons />}
      </h3>

      <ListGroup id="wd-assignment-list" className="rounded-0">
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <ListGroupItem
              key={assignment._id}
              className="wd-assignment-list-item p-3 ps-1 mt-0 d-flex align-items-center"
            >
              {currentUser.role === "FACULTY" && (
                <>
                  <BsGripVertical className="me-3 fs-3" />
                  <a
                    href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                  >
                    <FaEdit className="fs-3 me-3 text-success" />
                  </a>
                </>
              )}

              <div className="d-flex flex-column">
                {currentUser.role === "FACULTY" ? (
                  <a
                    href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-link fw-bold text-decoration-none text-black"
                  >
                    {assignment.title}
                  </a>
                ) : (
                  <span className="fw-bold text-black">{assignment.title}</span>
                )}{" "}
                <div>
                  <span className="text-danger"> Multiple Modules </span>{" "}
                  <span className="mx-2"> | </span>
                  <span className="fw-bold">Not available until</span>{" "}
                  {toDate(assignment.availableFromDate)}
                  <span className="mx-2"> | </span>
                </div>
                <div>
                  <span className="fw-bold">Due</span>{" "}
                  {toDate(assignment.dueDate)} <span className="mx-2"> | </span>{" "}
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
