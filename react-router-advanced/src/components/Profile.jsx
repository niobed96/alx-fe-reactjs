import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
  return (
    <>
      <nav>
        <Link to="/Profile/settings">Settings</Link>
        <Link to="/Profile/details">Details</Link>
      </nav>
      <Routes>
        <Route path="settings" element={<ProfileSettings />} />
        <Route path="details" element={<ProfileDetails />} />
      </Routes>
    </>
  );
}

export default Profile;
