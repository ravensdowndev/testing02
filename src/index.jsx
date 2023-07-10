import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoList from './TodoList'
import './TodoSummary.css'
import TodoSummary from './TodoSummary'


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<TodoList />
		<TodoSummary />
	</React.StrictMode>
)