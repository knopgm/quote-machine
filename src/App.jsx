import React from "react";

import { motion } from "framer-motion";
import { Wrapper } from "./components/Wrapper";
import { Quote } from "./components/Quote";
import { SocialLinks } from "./components/SocialLinks";
import { Footer } from "./components/Footer";
import { Background } from "./components/Background";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

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
    this.setState({ color: newColor });
  }

  render() {
    const contentMarkup = (
      <>
        <div className="app__header-wrapper">
          <Header title="Random Quote" subtitle="- To be inspired..." />
        </div>

        <Card>
          <motion.div
            initial={{ color: this.state.color }}
            animate={{ color: this.state.color }}
          >
            <Quote
              message={this.state.quote.message}
              author={this.state.quote.author}
              textColor={this.state.color}
            />

            <div className="app__actions">
              <SocialLinks />
              <motion.button
                className="quote-button"
                onClick={this.handleNewQuoteClick}
                disabled={this.state.loading}
                initial={{ backgroundColor: this.state.color }}
                animate={{ backgroundColor: this.state.color }}
              >
                New Quote
              </motion.button>
            </div>
          </motion.div>
        </Card>
      </>
    );

    return (
      <div className="app">
        <Background color={this.state.color} />
        <Wrapper>
          {this.state.quote.message && contentMarkup}
          {this.state.loading && !this.state.quote.message && "loading"}
          <Footer />
        </Wrapper>
      </div>
    );
  }
}
