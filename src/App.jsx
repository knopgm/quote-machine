import React from "react";
import { motion } from "framer-motion";
import { Wrapper } from "./components/Wrapper";
import { Quote } from "./components/Quote";
import { SocialLinks } from "./components/SocialLinks";
import { Footer } from "./components/Footer";

import "./style.scss";

const colors = [
  "#66D2D6",
  "#FBC740",
  "#BD97CB",
  "#E56997",
  "#ADE292",
  "#4120A9",
];

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      color: "#66D2D6",
      quote: {
        message: "",
        author: "",
      },
    };
    this.handleNewQuoteClick = this.handleNewQuoteClick.bind(this);
  }

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote() {
    this.setState({
      loading: true,
    });
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          quote: {
            message: data.content,
            author: data.author,
          },
          loading: false,
        });
      });
  }

  handleNewQuoteClick() {
    this.fetchQuote();
    this.randomizeBgColor();
  }

  randomizeBgColor() {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({
      color: newColor,
    });
  }

  render() {
    return (
      <>
        <motion.div
          className="background"
          animate={{
            background: this.state.color,
          }}
        />
        <Wrapper>
          <motion.div animate={{ color: this.state.color }}>
            <Quote
              message={this.state.quote.message}
              author={this.state.quote.author}
              textColor={this.state.color}
            />

            <div className="buttons">
              <SocialLinks />
              <motion.button
                className="quote-button"
                onClick={this.handleNewQuoteClick}
                disabled={this.state.loading}
                animate={{ backgroundColor: this.state.color }}
              >
                New Quote
              </motion.button>
            </div>

            <Footer />
          </motion.div>
        </Wrapper>
      </>
    );
  }
}
