import { MdDeleteForever } from "react-icons/md";

export default function Note({ id, text, date, deleteNotes }) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon deleteIcon"
          size="1.3em"
          onClick={() => deleteNotes(id)}
        />
      </div>
    </div>
  );
}
