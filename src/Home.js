import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [content, setContent] = useState("");
  const [ttl, setTtl] = useState("");
  const [views, setViews] = useState("");
  const [link, setLink] = useState("");

  async function createPaste() {
    const res = await axios.post("http://localhost:4000/api/pastes", {
      content,
      ttl_seconds: ttl ? Number(ttl) : undefined,
      max_views: views ? Number(views) : undefined
    });

    setLink(res.data.url);
  }

  return (
    <div>
      <h1>Pastebin Lite</h1>

      <textarea value={content} onChange={e => setContent(e.target.value)} />
      <input placeholder="TTL seconds" value={ttl} onChange={e=>setTtl(e.target.value)} />
      <input placeholder="Max Views" value={views} onChange={e=>setViews(e.target.value)} />

      <button onClick={createPaste}>Create</button>

      {link && <p>Share: <a href={link}>{link}</a></p>}
    </div>
  );
}
