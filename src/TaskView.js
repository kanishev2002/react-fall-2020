import React from 'react';

class TaskView  extends React.Component{
    render() {
        return (
            <div className="TaskView">
                <h2>{this.props.name}</h2>
                <i>{this.props.description}</i>
                <div>
                    Is completed: {this.props.completed ? "YES" : "NO"}
                </div>
                <button onClick={() => this.props.completionHandler(this.props.id)}>
                    Change completed status
                </button>
            </div>
        )
    }
}

export default TaskView
