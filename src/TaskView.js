import React from 'react';
import './App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

class TaskView  extends React.Component{
    render() {
        return (
            <div className="TaskView">
                <div className='task-name'>{this.props.name}</div>
                <i>{this.props.description}</i>
                <div>
                    Is completed: {this.props.completed ?
                        <FontAwesomeIcon className='tick' icon={faCheck}/> :
                        <FontAwesomeIcon className='cross' icon={faTimes}/>
                    }
                </div>
                <div className='submit-button-area'>
                    <button
                        onClick={() => this.props.completionHandler(this.props.id)}
                        className='submit-button'
                    >
                        Change completed status
                    </button>
                </div>
            </div>
        )
    }
}

export default TaskView
