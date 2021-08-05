import React, {Component} from 'react';
import '../component/style/styleViewTodo.css';

class FooterTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onShow: 'All',
        };
    };
    onActive = (event) => {
        const {onShowActive} = this.props;
        onShowActive(event);
        this.setState({
            onShow: event,
        });
    };
    onClearAllItem = () => {
        const {onClearAllItem} = this.props;
        onClearAllItem();
    };
    render() {
        const {onShow} = this.state;
        const {countTodo} = this.props;
        return (
            <div>
               <p>{countTodo}</p>
               <p className= {onShow === 'All'  && 'Active'}  onClick={() => this.onActive('All')}>All</p>
               <p className= {onShow === 'Active' && 'Active'} onClick={() => this.onActive('Active')}>Active</p>
               <p className= {onShow === 'Completed' && 'Active'} onClick={() => this.onActive('Completed')}>Completed</p><p onClick={this.onClearAllItem}>ClearActive</p>
            </div>
        );
    }
}

export default FooterTodo;
