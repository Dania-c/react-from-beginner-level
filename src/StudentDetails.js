import React, { Component } from 'react'

export default class StudentDetails extends Component {
    myStyle = {
        backgroundColor: 'green',
        color: 'white'
    }
    componentDidMount() // called once and only once when the comp is created , then on chang state, no
    {
        console.log("constructer of a component is better to be used from componentDidMount")
    }
    render() {
        if (this.props.selectedStudent == null) {
            return (<div style={this.myStyle}>select a student to view details</div>)
        }
        else {
            return (<table style={this.myStyle}>
                <tbody>
                    <tr>
                        <td>ID:</td>
                        <td>{this.props.selectedStudent.id}</td>
                        <td>-</td>
                        <td>Name:</td>
                        <td>{this.props.selectedStudent.name}</td>
                    </tr></tbody>
            </table>)
        }
    }
}
