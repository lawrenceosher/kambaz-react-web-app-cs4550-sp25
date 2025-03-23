import { useState } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((_item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <Button variant="success" onClick={addElement} className="mb-2">
        Add Element
      </Button>
      <ListGroup className="w-25 ">
        {array.map((item, index) => (
          <ListGroupItem key={index} className="fs-2 align-middle">
            {item}
            <Button
              variant="danger"
              onClick={() => deleteElement(index)}
              id="wd-delete-element-click"
              className="float-end mt-1"
            >
              Delete
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
