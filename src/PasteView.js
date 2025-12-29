import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PasteView() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4000/api/pastes/${id}`)
      .then(res => setData(res.data))
      .catch(() => setError("Unavailable"));
  }, [id]);

  if (error) return <h1>{error}</h1>;
  if (!data) return <h1>Loading…</h1>;

  return (
    <pre>{data.content}</pre>
  );
}
