import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import NewsList from './components/news-list';
import Footer from './components/footer';

import "./styles/styles.css";
import JSON from './db.json';

class App extends Component{
 
  state={
    news: JSON,
    footerText: 'This is a happy footer!'
  }

  render() {
    return(
      <div>
        <Header/>
        <NewsList news={this.state.news}>
          <h1>Headlines</h1>

        </NewsList>
        <Footer footerText={this.state.footerText}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"))