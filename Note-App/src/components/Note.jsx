import { MdDeleteForever } from "react-icons/md";

export default function Note({ id, text, date, onDelete }) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon deleteIcon"
          size="1.3em"
          onClick={() => onDelete(id)}
        />
      </div>
    </div>
  );
}
