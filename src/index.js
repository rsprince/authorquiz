import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {shuffle, sample} from 'underscore';

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/MarkTwain.LOC.jpg/1024px-MarkTwain.LOC.jpg',
    books: [
      'The Adventures of Huckleberry Finn',
      'Roughing It',
      'Life on the Missisippi'
    ]
  },
  {
    name: 'Stephen King',
    imageUrl: 'https://vignette.wikia.nocookie.net/stephenking/images/a/a0/Stephen_king-coming-to-boulder.jpg/revision/latest?cb=20170530002714',
    books: [
      'The Shining',
      'Dance Macabre',
      'It'
    ]
  },
  {
    name: 'William Shakespeare',
    imageUrl: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxNzgzMzkwNzMz/william-shakespeare-194895-1-402.jpg',
    books: [
      'Macbeth',
      'Midsummer Nights Dream',
      'Henry IV'
    ]
  }
]

const turnData = getTurnData(authors);

function getTurnData(authors) {
  // get all books
  let allBooks = [];
  authors.forEach(author => {
    allBooks = allBooks.concat(author.books);
  });
  // console.log(allBooks);
  // randomize, choose four, choose one random (using underscore)
  let fourRandomBooks = shuffle(allBooks).slice(0,4);
  let answer = sample(fourRandomBooks);
  // console.log(answer);
  let selectedAuthor = authors.find(author => author.books.includes(answer));
  // console.log(selectedAuthor);

  return {
    author: selectedAuthor, 
    books: fourRandomBooks,
    answer: answer
  }
}

ReactDOM.render(
  <AuthorQuiz turnData={turnData}  />, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();