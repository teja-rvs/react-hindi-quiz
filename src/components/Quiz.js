import React, {Component} from 'react';
import Question from './Question';

class Quiz extends Component {

    state  = {
        question: "",
        options: [],
        correct_option: 0
    }

    getRandomIntInclusive(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    

    componentDidMount() {
        this.getQuestion();
    }

    getQuestion(){
        fetch('http://localhost:3001/hindi-numbers')
            .then(res => res.json())
            .then((data) => {
                let rand = this.getRandomIntInclusive(0, 100);
                let question = data[rand];
                let options = this.shuffleArray([parseInt(question.Arabic), this.getRandomIntInclusive(0, 33), this.getRandomIntInclusive(34, 66), this.getRandomIntInclusive(67, 100)]);
                this.setState({ 
                    question: question.Hindi,
                    options: options, 
                    correct_option: parseInt(question.Arabic) 
                });
            })
            .catch(console.log)
    }

    render(){
        return (
            <div>
                <Question question={this.state.question} options={this.state.options} correct_option={this.state.correct_option}></Question>
                <div className="p-2">
                    <button className="btn btn-primary" onClick={() => this.getQuestion()}>Next</button>
                </div>
            </div>
        )
    }
}

export default Quiz;