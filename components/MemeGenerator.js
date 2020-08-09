import React, { Component } from "react";
import { render } from "react-dom";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        console.log(memes[1]);
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <form className="input-form">
          <input
            type="text"
            placeholder="Top Text"
            name="topText"
            onChange={this.handleChange}
            value={this.state.topText}
          ></input>
          <input
            type="text"
            placeholder="Bottom Text"
            name="bottomText"
            onChange={this.handleChange}
            value={this.state.bottomText}
          ></input>
          <button className="btn">Gen</button>
        </form>
        <div>
          <img src={this.state.randomImg}></img>
          <h2>{this.state.topText}</h2>
          <h2>{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
