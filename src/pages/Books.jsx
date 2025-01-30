import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Books() {
  const [displayBooks, setDisplayBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1)
  const navigate = useNavigate();

  const url = "https://discovered-snapdragon-zinnia.glitch.me/books";

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${url}?page=${page}&limit=5`)
      .then((res) => setDisplayBooks(res.data.books))
      .catch((err) => alert(err.message))
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  const handleClick = (id) => {
    console.log('click');
    navigate(`/books/${id}`);
  }

  const handlePrev = () => {
    setPage(prev => prev - 1)
  }

  const handleNext = () => {
    setPage(prev => prev + 1)
  }
  return (
    <div className="books-container">
        <h6>Page {page}</h6>
        <div><button disabled={page == 1 ? true : false} onClick={handlePrev}>Prev</button><button disabled={page == 3 ? true : false} onClick={handleNext}>Next</button></div>
      {loading && <h3>Loading...</h3>}
      {
        displayBooks.length && displayBooks.map((book) => {
            return <div onClick={() => handleClick(book.id)} key={book.id}>
                <img src={book.coverImage} alt="" className="book-card"/>
                <h3>{book.name}</h3>
                <h4>{book.author}</h4>
                <h5>Category: {book.category}</h5>
                <p>{book.description}</p>
            </div>
        })
      }
    </div>
  )
}
