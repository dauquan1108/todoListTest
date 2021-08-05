import React, {Component} from 'react';
import '../component/style/styleViewTodo.css';

class ViewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.item.name,
            status: false,
        };
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    };

    handleSubmit = (event) => {
        const {value} = this.state;
        const {editTodo, item} = this.props;
        event.preventDefault();
        editTodo(item.id, value);
    };

    onDelete = () => {
        const {item, onDeleteItem} = this.props;
        onDeleteItem(item.id);
    };

    checkStatus = () => {
        const {onCheckStatus, item} = this.props;
        onCheckStatus(item.id);
    }

    render() {
        const {value, status} = this.state;
        const {item, editTodo, onDeleteItem, statusItem}= this.props;
        return (
            <div>
                <button onClick={this.checkStatus}>check</button>
                <form onSubmit={this.handleSubmit}>
                    <input className={statusItem  ?  'ItemActive' : 'ItemNoActive'} type="text" value={value} onChange={this.handleChange} />
                </form>
                <button onClick={this.onDelete}>Xóa</button>
            </div>
        );
    }
}

export default ViewTodo;
