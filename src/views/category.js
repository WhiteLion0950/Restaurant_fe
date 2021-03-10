import React from "react";
import {withRouter} from "react-router-dom"
class Category extends React.Component {
    constructor (props){
        super(props) //per la classe react component

    }

    render(){
        return(
            <p>L'id passato {this.props.match.params.id}</p>
        );
    }
}
export default withRouter