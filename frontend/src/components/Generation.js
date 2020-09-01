import React, {Component} from 'react';

class Generation extends Component{

    state = {generation: {generationId: 69, expiration: '2022-04-01'}}; //dummy data for testing

    componentDidMount(){
        this.fetchGeneration();
    }

    fetchGeneration = () => {
        fetch('http://localhost:3000/generation')
            .then(response => console.log(response));
    }

    render(){
        const {generation} = this.state;
        return(
            <div>
                <h3>Generation {generation.generationId}. Expires on:</h3>
                <h4>{new Date(generation.expiration).toString()}</h4>
            </div>
        )
    }
}

export default Generation;