import './app.scss';
import TodoTemplate from './components/todoTemplate/TodoTemplate';
import TodoHead from './components/todoHead/TodoHead';
import TodoList from './components/todoList/TodoList';
import { TodoProvider } from './TodoContext';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h1`
	margin: 20px 0 0;
	font-family: 'Pushster', cursive;
	font-size: 70px;
	color: white;

	@media (max-width: 480px) {
		font-size: 50px;
		margin: 10px 0 0;
	}
`;

function App() {
	return (
		<div className="App">
			<TodoProvider>
				<Container>
					<Title>TooDoo</Title>
					<TodoTemplate>
						<TodoHead />
						<TodoList />
					</TodoTemplate>
				</Container>
			</TodoProvider>
		</div>
	);
}

export default App;
