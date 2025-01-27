import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export default function AssignmentsControls() {
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

      <div className="d-flex justify-content-end flex-fill">
        <Button
          variant="secondary"
          size="lg"
          className="me-1"
          id="wd-add-assignment-group"
        >
          + Group
        </Button>

        <Button
          variant="danger"
          size="lg"
          className="me-1"
          id="wd-add-assignment"
        >
          + Assignment
        </Button>
      </div>
    </div>
  );
}
