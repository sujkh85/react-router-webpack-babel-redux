import React, {Component} from 'react'
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import $ from 'jquery';

class MainAppContainer extends Component {
    // static propTypes = {
    //     children: PropTypes.element.isRequired
    // };

    componentDidMount() {

    }

    render() {
        let copy = { ...this.props }
        delete copy.children
        return (
            <div>
                {React.cloneElement(this.props.children, copy)}
                {/*this.props.children*/}
                {/*<Toast style={this.props.modal.toast.on ? styles.toast.visible : styles.toast.hidden}/>
                <Alert/>*/}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        push,
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(MainAppContainer);
