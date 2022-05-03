import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

function Profile() {
  const [currentUser, setCurrentUser] = useState(null);

  const auth = getAuth();
  useEffect(() => {
    // auth.onAuthStateChanged((user) => {
    //   if (!user) {
    //     window.location.href = "/sign-in";
    //   }
    // });

    setCurrentUser(auth.currentUser);
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {currentUser != null ? (
        <h2>{currentUser.displayName}</h2>
      ) : (
        <h2>Not Logged in...</h2>
      )}
    </div>
  );
}

export default Profile;
