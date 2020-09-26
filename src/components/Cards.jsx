import React, { Component } from 'react'
import Card from './Card';
import "./_Cards.css";

export default class Cards extends Component {

    constructor(props) {
        super();
        this.state = {
            cards: []
        };
    }

    componentDidMount() {
        fetch("http://starlord.hackerearth.com/insta")
            .then((resp) => resp.json())
            .then((data) => {
                this.setState({
                    cards: data
                })
            })
            .catch(error => {
                // handle the error
                console.log(error)
            })
    }

    render() {
        return (
            <div className="cards">
                {this.state.cards.map((card) => (
                    <Card card={card}></Card>
                ))}
            </div>
        )
    }
}

