import React, { Component } from 'react'
import axios from 'axios';


export class Api extends Component {


    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                const persons = response.data;
                this.setState({ persons });
            })
    }

    render() {
        return (

            <div className='mt-4 row'>

                {this.state.persons.map(person => (
                    <div className="card col-md-3 my-2 mx-4" key={person.id}>
                        <div className="card-body">
                            <h5 className="card-title">{person.title} ...</h5>
                            <p className="card-text">{person.body}...</p>
                            <a href='/' target="_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>

                    </div>
                ))}
            </div>
        )
    }
}


export default Api
