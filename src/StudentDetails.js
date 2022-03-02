import React, { Component } from 'react'

export default class StudentDetails extends Component {
    render() {
        return (
            <table>
                <tr>
                    <td>ID:</td>
                    <td>{this.props.selectedStudent.id}</td>
                    <td>-</td>
                    <td>Name:</td>
                    <td>{this.props.selectedStudent.name}</td>
                </tr>
            </table>
        )
    }
}
