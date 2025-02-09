import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <button className="border-0 bg-transparent">
        <BsPlus />
      </button>
      <button className="border-0 bg-transparent">
        <IoEllipsisVertical className="fs-4" />
      </button>
    </div>
  );
}
