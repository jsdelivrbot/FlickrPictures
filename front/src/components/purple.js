import React, { Component } from 'react';
import axios from 'axios';
const URL="localhost:9000/flickr"
class Purple extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            color:'purple',
            fotos:[]
        }
    }
    render()
    {
        return(
            <div className="container columna purple" onClick={this.upDateFotos.bind(this)}>
            <p>
            {this.state.color}
            </p>    
        </div>
        );
    }
    
    upDateFotos()
    {
        var buscar =this.props.query+','+this.state.color;
        console.log('buscar: '+buscar);
        axios.get(URL+'/'+buscar).then(response => {
            console.log(response);
            this.setState({
              fotos:response.data
            });
          });        
    }
}

export default Purple;