import { FormControl } from "react-bootstrap";
import { Link } from "react-router";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h1>Sign In</h1>

      <FormControl id="wd-username" placeholder="username" className="mb-2" />
      <FormControl
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
      />

      <Link
        to="/Kambaz/Dashboard"
        id="wd-signin-btn"
        className="btn btn-primary w-100 mb-2"
      >
        Sign In
      </Link>

      <Link to="/Kambaz/Account/Signup" id="wd-signup-link">
        Sign Up
      </Link>
    </div>
  );
}
