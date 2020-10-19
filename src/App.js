import React from 'react'
import InputField from "./InputField"
import TaskList from "./TaskList";

class App extends React.Component {

    state = {
        currentId: 0,
        inputNameValue: '',
        inputDescriptionValue: '',
        tasks: []
    }

    handleNameInput = event => {
        const { value } = event.target
        this.setState(currentState => {
            const newState = {...currentState}
            newState.inputNameValue = value
            return newState
        })
    }

    handleDescriptionInput = event => {
        // console.log(this.state)
        const { value } = event.target
        this.setState(currentState => {
            const newState = {...currentState}
            newState.inputDescriptionValue = value
            return newState
        })
    }

    handleSubmitButton = () => {
        this.setState( {
                currentId: this.state.currentId + 1,
                inputNameValue: '',
                inputDescriptionValue: '',
                tasks: this.state.tasks.concat([{
                    id: this.state.currentId,
                    name: this.state.inputNameValue,
                    description: this.state.inputDescriptionValue,
                    completed: false
                }])
            })
    }

    completionStatusUpdated = (id) => {
        const updatedElement = this.state.tasks.findIndex(elem => elem.id === id)
        // console.log(updatedElement)
        this.setState(currentState => {
            const newState = {
                ...currentState,
                tasks: [...currentState.tasks]
            }
            const status = currentState.tasks[updatedElement].completed
            newState.tasks[updatedElement] = {
                ...currentState.tasks[updatedElement],
                completed: !status
            }
            //console.log(newState.tasks[updatedElement])
            return newState
        })
    }

    render() {
        return (
            <div>
                <InputField value={this.state.inputNameValue}
                            placeholder={'Input name of the task'}
                            onChange={this.handleNameInput}/>
                <InputField value={this.state.inputDescriptionValue}
                            placeholder={'Input task description'}
                            onChange={this.handleDescriptionInput}/>
                <div>
                    <button onClick={this.handleSubmitButton}>Submit</button>
                </div>
                <TaskList className='task-list'
                          tasks={this.state.tasks}
                          completionHandler={this.completionStatusUpdated}/>
            </div>
        )
    }
}

export default App;
