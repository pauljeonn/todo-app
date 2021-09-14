import TodoTemplate from './components/todoTemplate/TodoTemplate';

function App() {
	return (
		<div className="App">
			{/* <TodoTemplate>안녕하세요!</TodoTemplate> */}
			<TodoTemplate children="안녕하세요" />
		</div>
	);
}

export default App;
