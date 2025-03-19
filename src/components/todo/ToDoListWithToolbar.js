import React from "react";
import ToDoFilterToolbar from "./ToDoFilterToolbar";

const ToDoListWithToolbar = ({
  displayStatus,
  setDisplayStatus,
  important,
  setImportant,
  searchText,
  setSearchText,
  children,
  startTransition,
  isPending
}) => (
  <div>
    <ToDoFilterToolbar
      displayStatus={displayStatus}
      setDisplayStatus={setDisplayStatus}
      import={important}
      setImportant={setImportant}
      searchText={searchText}
      setSearchText={setSearchText}
      startTransition={startTransition}
      isPending={isPending}
    />
    {children}
  </div>
);
export default ToDoListWithToolbar;
