import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useUserStore } from "../stores/userStore";

const Account = () => {
  const [loading, setLoading] = useState(true);
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const userProfile = useUserStore((state) => state.profile);
  const fetchUserProfile = useUserStore((state) => state.fetchProfile);
  const clearUserProfile = useUserStore((state) => state.clearProfile);

  const loadProfile = async () => {
    if (user == null) {
      navigate("/");
      return;
    }
    if (userProfile != null) {
      setLoading(false);
      return;
    }
    try {
      await fetchUserProfile();
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      clearUserProfile();
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="max-w-[600px] mx-auto my-16 p-4">
      {loading && <p>Loading Profile...</p>}
      {!loading && (
        <div>
          <h1 className="text-2xl font-bold py-4">Account</h1>
          <p>User Email: {user && user.email} </p>
          <p>User's Name loaded from DB: {userProfile.name} </p>
          <button onClick={handleLogout} className="border px-6 py-2 my-4">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Account;
