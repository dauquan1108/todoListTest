import React, {Component} from 'react';

class HeaderTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    };
    handleSubmit = (event) => {
        const {value} = this.state;
        const {addTodo} = this.props;
        addTodo(value);
        event.preventDefault();
        this.setState({
            value: '',
        })
    }
    render() {
        const {value} = this.state;
        return (
            <div className="HeaderTodo">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={value} onChange={this.handleChange} />
                </form>
            </div>
        );
    }
}

export default HeaderTodo;
