import { TodoItem } from "./TodoItem";

export function ToDoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul>
      {todos.length === 0 && "no ToDos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
