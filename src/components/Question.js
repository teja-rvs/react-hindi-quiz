import React, { Component } from 'react';
import swal from 'sweetalert';

class Question extends Component {

    constructor(props){
        super(props);
        this.validateQuestion = this.validateQuestion.bind(this);
        this.score = 0;
    }

    validateQuestion(selectedOption){
        let result = selectedOption.option === this.props.correctOption;
        if(result){
            this.score += 1;
            swal("Correct Answer!", "SCORE: " + this.score, "success");
            this.props.nextQuestion();
        }
        else{
            swal("Try Again", "Wrong Answer!", "error");
        }
    }

    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <div className="card-header h1">
                        {this.props.question}
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            {this.props.options.map((option, idx) =>
                                <button key={idx} type="button" className="col-4 btn btn-outline-info p-3 m-3" onClick={() => this.validateQuestion({option})}>{option}</button>  
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Question;