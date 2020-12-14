import React from 'react'
import InputField from "./InputField"
import TaskList from "./TaskList";
import classnames from 'classnames/bind'
import styles from './app.module.scss'

const cx = classnames.bind(styles)

class App extends React.Component {

    state = {
        currentId: 0,
        inputNameValue: '',
        inputDescriptionValue: '',
        tasks: []
    }

    handleNameInput = event => {
        const {value} = event.target
        this.setState(currentState => {
            const newState = {...currentState}
            newState.inputNameValue = value
            return newState
        })
    }

    handleDescriptionInput = event => {
        // console.log(this.state)
        const {value} = event.target
        this.setState(currentState => {
            const newState = {...currentState}
            newState.inputDescriptionValue = value
            return newState
        })

    }

    handleSubmitButton = () => {
        if(this.state.inputNameValue!=='') {
            this.setState({
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
    }

    completionStatusUpdated = (id) => {
        console.log('completion status updated')
        const updatedElement = this.state.tasks.findIndex(elem => elem.id === id)
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
            return newState
        })
    }

    render() {
        return (
            <>
                <div className={cx('appHeader')}>
                    <h1> TODO List </h1>
                </div>
                <div className={cx('app')}>
                    <div className={cx('taskList')}>
                        <TaskList
                            tasks={this.state.tasks}
                            completionHandler={this.completionStatusUpdated}/>
                    </div>
                    <div className={cx('inputFields')}>
                        <InputField value={this.state.inputNameValue}
                                    placeholder={'Input name of the task'}
                                    onChange={this.handleNameInput}/>
                        <InputField value={this.state.inputDescriptionValue}
                                    placeholder={'Input task description'}
                                    onChange={this.handleDescriptionInput}/>
                        <div className='submit-button-area'>
                            <button
                                className={cx('submit-button')}
                                onClick={this.handleSubmitButton}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default App;
