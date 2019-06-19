import React, { Component } from 'react';
import { connect} from "react-redux";
import PropTypes from 'prop-types';
import { createPosts } from "../actions/postAction";

class PostForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
    }

    onChange = (e) => {
        console.log(e);
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        };

        this.props.createPosts(post);
        /*fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then( res => res.json())
            .then(data => console.log(data))*/
    };
    render () {

        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label> Title: </label>
                        <input type="text"  name="title" onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <div>
                        <label> Body: </label>
                        <input type="text" name="body" onChange={this.onChange} value={this.state.body}/>
                    </div>
                    <button type="submit">Submit</button>

                </form>
            </div>
        );
    }
}

PostForm.propTyps = {
    createPost: PropTypes.func.isRequired
};
export default connect(null, { createPosts })(PostForm);
