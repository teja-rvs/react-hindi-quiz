import React from 'react';
import NumberList from './NumberList';

class Study extends React.Component {
    state = {
        numbers: [],
    }

    componentDidMount(){
        fetch('./db.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({ numbers: data.hindi_numbers });
            })
            .catch(console.log)

    }
     render(){
         return (
             <div>
                 <NumberList data={ this.state.numbers}></NumberList>
             </div>
         )
     }
}

export default Study;