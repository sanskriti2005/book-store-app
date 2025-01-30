import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/books.css";

export default function Books() {
  const [displayBooks, setDisplayBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [sort, setSort] = useState("asc");
  const [filter, setFilter] = useState("");

  const url = "https://discovered-snapdragon-zinnia.glitch.me/books";

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${url}?page=${page}&limit=5?sort=name_${sort}`)
      .then((res) => {
        setDisplayBooks(res.data.books);
        setFilteredBooks(res.data.books);
      })
      .catch((err) => alert(err.message))
      .finally(() => {
        setLoading(false);
      });
  }, [page, sort, filter]);

  const handleClick = (id) => {
    console.log("click");
    navigate(`/books/${id}`);
  };

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handleDelete = ({ e, id }) => {
    e.stopPropagation();
    axios.delete(`${url}/${id}`).then(alert("book successfully deleted"));
  };

  const handleEdit = ({ e, id }) => {
    e.stopPropagation();
    const updatedName = prompt("Enter an updated name");
    const reqBody = { name: updatedName };
    axios.put(`${url}/${id}`, reqBody).then(alert("Book updated succesfully"));
  };

  const handleFilter = (e) => {};

  const handleAddNewBook = () => {

  };
  const handleAddNewBookInput = () => {
    
  };
  return (
    <div>
      <h6>Page {page}</h6>
      <div>
        <button disabled={page == 1 ? true : false} onClick={handlePrev}>
          Prev
        </button>
        <button disabled={page == 3 ? true : false} onClick={handleNext}>
          Next
        </button>
      </div>
      <select name="" value={filter} onChange={handleFilter}>
        <p>Form to add new book is at the bottom</p>
        <option value="">Filter by Category</option>
        <option value="Fiction">Fiction</option>
        <option value="Self-Help">Self-Help</option>
        <option value="Technology"> Technology</option>
        <option value="Productivity">Productivity</option>
        <option value="History">Productivity</option>
      </select>
      <button>{sort === "asc" ? "High to low" : "Low to High"}</button>
      {loading && <h3>Loading...</h3>}
      <div className="books-container">
        {displayBooks.length &&
          displayBooks.map((book) => {
            return (
              <div onClick={() => handleClick(book.id)} key={book.id}>
                <img src={book.coverImage} alt="" className="book-card" />
                <h3>{book.name}</h3>
                <h4>{book.author}</h4>
                <h5>Category: {book.category}</h5>
                <p>{book.description}</p>
                <button onClick={() => handleDelete(book.id)}>Delete</button>
                <button onClick={() => handleEdit(book.id)}>
                  Edit Book Name
                </button>
              </div>
            );
          })}
      </div>
      <form onSubmit={handleAddNewBook}></form>
    </div>
  );
}
