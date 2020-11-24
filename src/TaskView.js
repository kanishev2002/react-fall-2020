import React from 'react'
import styles from './taskView.module.scss'
import classnames from 'classnames/bind'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle as circleFill} from '@fortawesome/free-solid-svg-icons'
import {faCircle as circle} from'@fortawesome/free-regular-svg-icons'

const cx = classnames.bind(styles);

class TaskView extends React.Component {
    render() {
        return (
            <div>
                <div className={cx("taskView")}>
                    <button onClick={() => this.props.completionHandler(this.props.id)}
                            className={cx('taskCompletionButton')}>
                        {this.props.completed ?
                        <FontAwesomeIcon icon={circleFill} className={cx('completedTask')}/> :
                        <FontAwesomeIcon icon={circle} className={cx('incompleteTask')}/>}
                    </button>
                    <div className={cx('task')}>
                        <div className={cx('taskName')}>{this.props.name}</div>
                        <div className={cx('taskDescription')}>{this.props.description}</div>
                    </div>
                </div>
                <hr className={cx('hr')}/>
            </div>
        )
    }
}

export default TaskView
