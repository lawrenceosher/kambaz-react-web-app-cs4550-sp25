import { FaCircle } from "react-icons/fa6";
import { RxCircleBackslash } from "react-icons/rx";

export default function Unpublish() {
  return (
    <span className="me-1 position-relative">
      <RxCircleBackslash
        style={{ top: "2px" }}
        className="me-1 position-absolute fs-5"
      />
      <FaCircle className="text-white me-1 fs-6" />
    </span>
  );
}
