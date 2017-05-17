import React from "react";
import theme from "../static/react-toolbox/theme.js";
import ThemeProvider from 'react-toolbox/lib/ThemeProvider'
import Input from "react-toolbox/lib/input/Input.js";
import Autocomplete from "react-toolbox/lib/autocomplete/Autocomplete.js";

var moment = require("moment");

const mockAuthorList = ["Dvorit", "Cera", "Mac", "Matt", "Tito"];
const mockCategoryList = ["growth", "outreach", "funding", "collaboration"];

class Story2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roleInput: "As a Manylabs fellow proud of my success this month,",
      needInput: "I wish it was easy to use the Manylabs.org website to share my accomplishment with an audience 100x bigger than my personal network,",
      benefitInput: "So that I can maximize the number of people who find value in my work (and in the ML org too).",
      notesInput: "",
      category: "",
      // following should not be state; will be set by graphql mutations HoC
      id: "0",
      author: "",
      date: moment().format("YYMMDD_HHMMss"),
      printed: "false",
      ...props
    };
  }

  // state = { name: 'previous input' }

  // clever: skip initializing state in constructor
  handleChange = (value, e) => {
    console.log(e, value);
    this.setState({ ...this.state, [e.target.name]: value });
  };

  handleAutocomplete = (value, { name }) => {
    console.log(value, name);
    this.setState({ [name]: value });
  };

  render() {
    const commonProps = {
      type: "text",
      multiline: true,
      onChange: this.handleChange,
      style: { resize: "none" }
    };

    return (
      <ThemeProvider theme={theme}>
      <main className="fl ba b--black-40 measure-narrow ma2 story">

        <header className="f3 fw7 bg-near-black white pv3 cf">
          <div className="fl ph3">
            a new thought...
          </div>

        </header>

        <section className="pa3 mb3">
          <Input
            name="roleInput"
            label="As a..."
            value={this.state.roleInput}
            {...commonProps}
          />

          <Input
            name="needInput"
            label="I need/want..."
            value={this.state.needInput}
            {...commonProps}
          />

          <Input
            name="benefitInput"
            label="So that..."
            value={this.state.benefitInput}
            {...commonProps}
          />

          <Input
            name="notesInput"
            label="notes"
            value={this.state.notesInput}
            hint="come back and update if anything gets done!"
            {...commonProps}
          />
        </section>
{/*
        <section className="pb2 ph3 bt b--moon-gray cf">
          <Autocomplete
            className="fl w-50 tc pr4"
            direction="up"
            allowCreate={true}
            multiple={false}
            onChange={val => this.handleAutocomplete(val, { name: "author" })}
            showSuggestionsWhenValueIsSet={true}
            label="author"
            source={mockAuthorList}
            value={this.state.author}
          />
          <Autocomplete
            className="fl w-50 tc pl4"
            direction="up"
            allowCreate={true}
            multiple={false}
            onChange={val => this.handleAutocomplete(val, { name: "category" })}
            showSuggestionsWhenValueIsSet={true}
            label="category"
            source={mockCategoryList}
            value={this.state.category}
          />
        </section> */}

        <footer className="f3 fw7 bg-near-black white pv3 cf">
          <div className="fl w-50 ph3">
            {moment().format("YYMMDD_HHMMss")}
          </div>
          <div className="fl w-50 pr3 tr dark-red">print</div>
        </footer>

      </main>
    </ThemeProvider>
    );
  }
}

export default Story2;
