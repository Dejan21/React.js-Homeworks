import React, { Component } from 'react';
import axios from 'axios';

class MyClassComp extends Component {
    constructor () {
        super ();
    this.state = {
        post: {},
        showDesc: true,
        toggleTimes: 0,
    };
};

    componentDidMount() {
        axios('http://jsonplaceholder.typicode.com/posts/1').then((res) => {
            // console.log(res.data);

            this.setState({ post: res.data });
        });
    }

    componentDidUpdate(prevProps,prevState){
        console.log('updated');

         console.log(prevState.showDesc); //prethoden state 
         console.log(this.state.showDesc); // momentalen state 

         if (prevState.showDesc !== this.state.showDesc) {
             this.setState({
                 toggleTimes: this.state.toggleTimes +1,
             });
         }
    }
// 1 nacin => arrow function za metodite vnatre vo klasata
    toggleDesc = () => {
        // console.log('clicked on the button');

        this.setState({
            showDesc: !this.state.showDesc,

        // !true === false
        // !false === true
        });
    };
    render() {
        const { post, showDesc,toggleTimes } = this.state;
        return (
            <div className="MyClassComp">
                <h2>{post.title}</h2>
                {showDesc && <p>{post.body}</p>}
                <button onClick={this.toggleDesc}>Click me</button>
                <span>{toggleTimes}</span>
            </div>
        );
    }
};

export default MyClassComp;