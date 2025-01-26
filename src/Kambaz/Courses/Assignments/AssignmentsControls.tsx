import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export default function AssignmentsControls() {
  return (
    <div id="wd-assignments-controls" className="mb-3 d-flex w-100">
      <div className="w-50 me-1 d-flex justify-content-start">
        <InputGroup className="align-items-center" size="lg">
          <FaSearch />
          <FormControl id="wd-search-assignment" placeholder="Search..." />
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
