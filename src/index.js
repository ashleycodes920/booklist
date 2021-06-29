import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';
const books = [
{ id: 1,
  img: 'https://m.media-amazon.com/images/I/61IwPljBpQL._AC_UL320_.jpg',
  title: "I'm Programmed to Love You",
  author: 'Elias Barks and Gemma Román',
},
{ id: 2,
  img: 'https://m.media-amazon.com/images/I/613knF3J8+L._AC_UL320_.jpg',
  title: 'I Believe in You',
  author: 'Elias Barks and George Bletsis',
},
{ id: 3,
  img: 'https://m.media-amazon.com/images/I/713KfGkrIlL._AC_UL320_.jpg',
  title: "My Magical Choices",
  author: "Becky Cummings",
},
{ id: 4,
  img: 'https://m.media-amazon.com/images/I/81F9eK5YhpL._AC_UL320_.jpg',
  title: "Don't Let the Pigeon Stay Up Late!",
  author: "Mo Willems",
},
{ id: 5,
  img: 'https://m.media-amazon.com/images/I/61rSMJLrg9L._AC_UL320_.jpg',
  title: "Kidness is my Superpower",
  author: "Alicia Ortego",
},
{ id: 6,
  img: 'https://m.media-amazon.com/images/I/51YRsJ1PTVL._AC_UL320_.jpg',
  title: "The Hiccupotamus",
  author: "Aaron Zenz",
},
{ id: 7,
  img: 'https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UL320_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
},
{ id: 8,
  img:'https://m.media-amazon.com/images/I/91G2Gbhe9QL._AC_UL320_.jpg',
  title: 'The Story of Ferdinand',
  author: 'Munro Leaf',
},
{ id: 9,
  img: 'https://m.media-amazon.com/images/I/A1d9nEENXHL._AC_UL320_.jpg',
  title: 'Llama Llama Red Pajama',
  author: 'Anna Dewdney',
},
];

function BookList() {
  return (
    <section className='booklist'>
    {books.map((book, index) => {
      return <Book key={book.id} {...book}></Book>;
  })}
  </section>
  );
}

const Book = ({img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  return (
  <article className='book'>
    <img src={img} alt='' />
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));


