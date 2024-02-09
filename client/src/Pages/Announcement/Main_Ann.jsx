import { useState } from "react";

import "./Main_Ann.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./Announcement";

function App2() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App2;