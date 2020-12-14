import React from 'react';
import TaskView from './TaskView'

const TaskList = ({tasks, completionHandler}) => (
    tasks.map(
            item =>
                <TaskView id={item.id}
                          name={item.name}
                          description={item.description}
                          completed={item.completed}
                          completionHandler={completionHandler}
                />
        )
)

export default TaskList
