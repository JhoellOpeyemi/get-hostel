import { Navigate } from "react-router-dom";

const UserProfile = ({ profile }) => {
  if (!profile) {
    return <Navigate to="/signin" replace />;
  }
  return (
    <div className="container profile">
      <h1>Hi</h1>
      <p>Under Construction!</p>
    </div>
  );
};

export default UserProfile;
