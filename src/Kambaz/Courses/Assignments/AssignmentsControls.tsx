import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export default function AssignmentsControls() {
  return (
    <Row id="wd-assignments-controls" className="text-nowrap mb-3">
      <Col>
        <InputGroup className="align-items-center" size="lg">
          <FaSearch />
          <FormControl id="wd-search-assignment" placeholder="Search..." />
        </InputGroup>
      </Col>

      <Col>
        <Button
          variant="danger"
          size="lg"
          className="me-1"
          id="wd-add-assignment"
        >
          + Assignment
        </Button>

        <Button
          variant="secondary"
          size="lg"
          className="me-1"
          id="wd-add-assignment-group"
        >
          + Group
        </Button>
      </Col>
    </Row>
  );
}
