import React, { Component } from 'react'

export default class StudentDetails extends Component {
    myStyle = {
        backgroundColor: 'green',
        color: 'white'
    }

    render() {
        if (this.props.selectedStudent == null) {
            return (<div style={this.myStyle}>select a student to view details</div>)
        }
        else {
            return (<table style={this.myStyle}>
                <tr>
                    <td>ID:</td>
                    <td>{this.props.selectedStudent.id}</td>
                    <td>-</td>
                    <td>Name:</td>
                    <td>{this.props.selectedStudent.name}</td>
                </tr>
            </table>)
        }
    }
}
