import React, { useState } from "react";
import ChattingContainer from "./containers/Chatting";
import FileManagerContainer from "./containers/FileManager";
import Header from "./containers/Header";

const Workspace = () => {
  const [view, setView] = useState("file");

  const renderView = (view) => {
    return view === "file" ? <FileManagerContainer /> : <ChattingContainer />;
  };

  return (
    <div>
      <Header setView={setView} />
      <div>{renderView(view)}</div>
    </div>
  );
};

export default Workspace;
