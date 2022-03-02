import React, { Component } from 'react'

export default class AddStudent extends Component {
    state = {
        name: ''
    }
    CreatenewStud = () => {
        // alert(this.state.name)
        this.props.StudentIsAdded(this.state.name)
    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })

    }
    render() {
        return (
            <div>
                <input type='text'
                    placeholder='enter the stud name'
                    value={this.state.name}
                    onChange={(e) => { this.handleChange(e) }} />
                <button onClick={() => { this.CreatenewStud() }}>Add</button>
            </div>
        )
    }
}
