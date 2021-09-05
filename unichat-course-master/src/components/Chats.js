import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "./firebase";
import { useAuth } from "./contexts/AuthContext";
import axios from "axios";

function Chats() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  console.log(user);
  const history = useHistory();
  const handleLogout = () => {
    //  await auth.signOut();
    history.push("./Login");
  };

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "441db031-1ae2-4c30-bc09-426dd5f832e9",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdeta = new FormData();
        formdeta.append("email", user.email);
        formdeta.append("username", user.email);
        formdeta.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formdeta.append("avatar", avatar, avatar.name);

          axios
            .post("https://api.chatengine.io/users", formdeta, {
              headers: {
                "private-key": "6cebdbf2-2026-4563-805e-ff9608a6f25a",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);

  if (!user || loading) return "Loading...";
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">My Matches</div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>
      <ChatEngine
        projectID="441db031-1ae2-4c30-bc09-426dd5f832e9"
        userName={user.email}
        userSecret={user.uid}
        height="calc(100vh - 66px)"
      />
    </div>
  );
}

export default Chats;
