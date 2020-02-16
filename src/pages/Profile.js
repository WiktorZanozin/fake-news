import React from 'react'
import {useSelector} from 'react-redux'

const Profile = () => {
  const userType = useSelector(state => state.authReducer.userType);
    return (
      <div className="jumbotron text-center">
      <h3>This is {userType} profile</h3>
      {userType==="admin"?
      <h4>You can create your own news feed</h4>:
      <h4>You can only read news feed created by admin</h4>}
      </div>
    );
  };

  export default Profile;