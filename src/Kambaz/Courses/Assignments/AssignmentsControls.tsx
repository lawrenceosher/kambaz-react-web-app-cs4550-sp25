/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function AssignmentsControls() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const { cid } = useParams();

  return (
    <div
      id="wd-assignments-controls"
      className="mb-5 d-flex w-100 align-items-center"
    >
      <div className="w-50 me-1">
        {/* Reference for positioning an icon inside of input: https://mdbootstrap.com/docs/standard/extended/icon-inside-input/ */}
        <InputGroup className="align-items-center border-start" size="lg">
          <FaSearch className="ms-4 mt-3 position-absolute top-30 start-0 translate-middle z-3" />
          <FormControl
            id="wd-search-assignment"
            placeholder="Search..."
            className="ps-5"
          />
        </InputGroup>
      </div>

      {currentUser.role === "FACULTY" && (
        <div className="d-flex justify-content-end flex-fill">
          <Button
            variant="secondary"
            size="lg"
            className="me-1"
            id="wd-add-assignment-group"
          >
            + Group
          </Button>

          <Link
            to={`/Kambaz/Courses/${cid}/Assignments/new`}
            className="btn btn-danger btn-lg me-1"
            id="wd-add-assignment"
          >
            + Assignment
          </Link>
        </div>
      )}
    </div>
  );
}
