// b_todo02.ts
export const tmp = '';

// Todo 항목의 인터페이스 정의
// 각 Todo 항목은 id, task, completed 속성을 가짐
interface ITodoItem { 
  id: number;
  task: string;
  completed: boolean;
}

//! 새로운 Todo 항목을 추가하는 함수(addTodo)
// 주어진 task를 가지고 새로운 Todo 항목을 생성한 뒤, 기존 목록에 추가하여 반환
function addTodo(todos: ITodoItem[] , task: string): ITodoItem[]{
  let newTodo: ITodoItem = {


    id: Math.max(0, ...todos.map(todo => todo.id)) + 1,
    task: task,
    completed: false


  }

  const newTodos = [...todos, newTodo];

  return newTodos;
}



//! 특정 id를 가진 Todo 항목을 완료 상태로 변경하는 함수(completeTodo)
function completed(todos: ITodoItem[] ,id: number): void {
  todos.forEach(todo => todo.id === id ? !todo.completed : todo.completed);
}

//! 특정 id를 가진 Todo 항목을 삭제하는 함수(deleteTodo)
function deleteTodo(todos: ITodoItem[], id: number): void{
  todos.filter(todo => todo.id !== id);
}
//! 특정 id를 가진 Todo 항목의 task를 편집하는 함수(editTodo)
function editTodo(id: number, task: string): void {
  todos.forEach(todo => todo.id === id ? todo.task = task : todo)
}
//! 완료된 Todo 항목을 모두 삭제하는 함수(clearCompleted)
function clearCompleted():  ITodoItem[] {
  return todos = [];
}


//! 모든 Todo 항목을 조회하는 함수(getAllTodos)
function getAlltodos(){
  todos.forEach(todo => console.log(todo));
}

//! 특정 상태(completed)에 따라 Todo 항목을 필터링하는 함수(filterTodos)
function filterTodos() {
  todos.forEach(todo => todo.completed ? console.log(todo) : todo );
}
//! 특정 id를 가진 Todo 항목의 completed 상태를 토글하는 함수(toggleTodo)
function toggleTodo(id: number){
    todos.forEach(todo => todo.id === id ? !todo.completed : todo);
}

//! 모든 Todo 항목의 completed 상태를 일괄적으로 설정하는 함수(setAllTodosCompletion)
function setAllTodosCompletion(){
  todos.forEach(todo => !todo.completed);
}

//# 함수 사용 예시
let todos: ITodoItem[] = [];
todos = addTodo(todos, "잠자기");
todos = addTodo(todos, "집에가기");
todos = addTodo(todos, "놀기");
todos = addTodo(todos, "쉬기");

completed(todos ,1);
deleteTodo(todos, 1);
console.log(todos);