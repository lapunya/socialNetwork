import React from 'react';
import classes from './profileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }

    onStatusChange(el) {
        let value = el.target.value;
        this.setState({
            status: value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span className={classes.statusSpan} onClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange.bind(this)} onBlur={this.deactivateEditMode.bind(this)} autoFocus type="text" value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;