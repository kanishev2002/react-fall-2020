import React from 'react';
import TaskView from './TaskView'

const TaskList = ({tasks, completionHandler}) => (
    <ul>
        {tasks.map(
            item => <li>
                <TaskView id={item.id}
                          name={item.name}
                          description={item.description}
                          completed={item.completed}
                          completionHandler={completionHandler}
                />
            </li>
        )}
    </ul>
)

export default TaskList
