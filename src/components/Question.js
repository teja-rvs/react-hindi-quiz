import React, { Component } from 'react';
import swal from 'sweetalert';

class Question extends Component {

    constructor(props){
        super(props);
        this.validateQuestion = this.validateQuestion.bind(this);
    }

    validateQuestion(selectedOption){
        let result = selectedOption.option === this.props.correct_option ? true : false;
        if(result){
            swal("Good job!", "Correct Answer!", "success");
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
                    <div className="btn-group-vertical w-100">
                        {this.props.options.map((option, idx) =>
                            <button key={idx} type="button" className="btn btn-outline-info m-3" onClick={() => this.validateQuestion({option})}>{option}</button>  
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Question;