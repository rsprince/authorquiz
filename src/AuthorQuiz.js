import React, { useState } from 'react';
import './AuthorQuiz.css';

export default class AuthorQuiz extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <div className="container">
        <Turn turnData={this.props.turnData} />
        <Continue />
        <Footer />
        </div>
      </div>
    );
  }  
}

function Hero() {
  return (
    <div>
      <div className="jumbotron">
        <div className="container">
          <h1>Author Quiz</h1>
          <p>Select the book written by the author shown.</p>
        </div>
      </div>
    </div>
  )
}

function Turn({turnData}) { 
  return(
    <div className="row turn" style={{backgroundColor: "white"}}>
      <div className="col-4">
        <img src={turnData.author.imageUrl} className="authorimage" alt="Author" />
      </div>
      <div className="col-6"> 
        {turnData.books.map( (title) => <Book title={title} turndata={turnData} key={title} /> )}
      </div>
    </div>
  )
}

function Book({title, turndata}) {
  const [hilite, setHilite] = useState('');
  
  return(
    <div 
      className={`answer ${hilite}`}
      onClick={ () => selectAnswer({title, turndata}) } >
      <p>Book:</p>
      <h4>{title}</h4>
    </div>
  )

  function selectAnswer(answer) {
    // console.log(answer);
    // console.log(answer.correctAnswer);
    if(answer.turndata.author.books.includes(answer.title)) 
      setHilite('correct');
    else 
      setHilite('wrong');
    console.log({hilite});
    return true;
  }
}

function Continue() {
  return(
    <div></div>
  )
}

function Footer() {
  return(
    <div className="row">
      <div className="col-md-12">
        <small>
          All images are from <a href="http://www.wikimedia.org">Wikimedia Commons</a> and are in the public domain.
        </small>
      </div>
    </div>
  )
}
