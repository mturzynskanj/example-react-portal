import React, { Component } from 'react';
import Modal from './Modal';

function Child() {
    return (
        <div className='modal'>
            <div>
                <h2>Title</h2>
                <section>this is content</section>
                <button>Click</button>
            </div>
        </div>
    )
}

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            openedModal: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            clicks: prevState.clicks + 1
        }));
    }

    handleOpenModal() {
        this.setState(prevState=>({
            openedModal : !prevState.openedModal
        }))
    }

    render() {
        let openedModal = this.state.openedModal
        let mod;
        if(openedModal){
           mod = <Modal><Child /></Modal>
        }else{
            mod=''
        }
        return (
            <div>
                <button onClick={this.handleOpenModal}>Open Modal</button>
                <div onClick={this.handleClick}>
                    <p>Number of clicks: {this.state.clicks}</p>   
                     {mod}       
                </div>
            </div>
        );
    }
}

export default Parent;