import React from 'react';
import './todoHead.scss';

const TodoHead = () => {
	return (
		<div className="todo-head">
			<h1>2021년 9월 15일</h1>
			<div className="day">수요일</div>
			<div className="tasks-left">할일 2개 남음</div>
		</div>
	);
};

export default TodoHead;
