import { memo } from "react";
const ToDoItemText = ({ todoItemText, important }) => {
    return (
        <>
            {
                important ? (
                    <span className="badge warning-bg">
                        <i className="fa fa-exclamation-circle"></i>
                    </span>
                ) : null}
            {todoItemText}
        </>
    );
};

export default memo(ToDoItemText);