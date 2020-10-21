import React from 'react';

class TaskView extends React.Component {
    handleClick = () => {
        console.log(`Task ${this.props.id} completed status = ${this.props.completed}`)
    }

    render() {
        return (
            <div className="TaskView">
                <div>
                    <h2>{this.props.name}</h2>
                </div>
                <div>
                    <i>{this.props.description}</i>
                </div>
                <div>
                    Is completed: {this.props.completed ? "YES": "NO"}
                </div>
                <button onClick={this.handleClick}>Change completed status</button>
            </div>
        )

    }
}

class MyTodoList extends React.Component {
    state = {
        tasks: [
            {
                id: 1234,
                name: "task1",
                description: "My first task",
                completed: true
            },
            {
                id: 1223,
                name: "task2",
                description: "My second task",
                completed: true
            },
            {
                id: 228,
                name: "task3",
                description: "Todo...",
                completed: false
            }
        ]
    }
    render() {
        return (
            <ul>
                    {this.state.tasks.map(
                        item => <li>
                                    <TaskView id = {item.id} name = {item.name}
                                          description={item.description} completed={item.completed}/>
                                </li>
                    )}
            </ul>
        )
    }
}

export default MyTodoList;
