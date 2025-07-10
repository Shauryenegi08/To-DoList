import { FaTrash } from 'react-icons/fa';

export default function toDoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex justify-between items-center bg-white p-3 rounded shadow mb-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.attributes.completed}
          onChange={() => onToggle(todo)}
        />
        <span className={`text-lg ${todo.attributes.completed ? 'line-through text-gray-400' : ''}`}>
          {todo.attributes.title}
        </span>
      </div>
      <button onClick={() => onDelete(todo)} className="text-red-500 hover:text-red-700">
        <FaTrash />
      </button>
    </div>
  );
}