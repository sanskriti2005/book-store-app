import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const [displayBook, setDisplayBook] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {id} = useParams()

  const url = "https://discovered-snapdragon-zinnia.glitch.me/books";

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${url}/${id}`)
      .then((res) => setDisplayBook(res.data))
      .catch((err) => alert(err.message))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <img src={displayBook.coverImage} alt="" className="book-card" />
      <h3>{displayBook.name}</h3>
      <h4>{displayBook.author}</h4>
      <h5>Category: {displayBook.category}</h5>
      <p>Price: {displayBook.price}</p>
    </div>
  );
}
