import React, {Component} from 'react';

class Post extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: ''
        }
    }    
    
    componentDidMount(){
        const {id} = this.props.match.params;
        this.setState({id: id})
    }

    render(){
        return(
            <div>
                Post {this.state.id}
            </div>
        )
    }
}

export default Post;
