import React from 'react';
import Sidebar from "../../component/Sidebar/sidebar";
import { useState,useEffect } from 'react';
import axios from "axios";


import { PrettyChatWindow } from "react-chat-engine-pretty";

const Announcement = (props) => {
  return (
	<>
	<Sidebar/>
    <div className="background">
      <PrettyChatWindow
        // projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        // username={props.user.username}
        // secret={props.user.secret}
      />
    </div>
	</>
  );
};

export default Announcement;
