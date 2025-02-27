import { Button, Modal } from "react-bootstrap";

export default function DeleteAssignmentDialog({
  show,
  handleClose,
  assignmentTitle,
  assignmentId,
  deleteAssignment,
}: {
  show: boolean;
  handleClose: () => void;
  assignmentTitle: string;
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
}) {

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this assignment: {assignmentTitle}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              deleteAssignment(assignmentId);
              handleClose();
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
