import { Navigate, Route, Routes } from "react-router";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";

export default function Account() {
  return (
    <div id="wd-account-screen" className="d-flex">
      <div className="me-5">
        <AccountNavigation />
      </div>
      <div className="w-25">
        <Routes>
          <Route path="/" element={<Navigate to="/Kambaz/Account/Signin" />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}
