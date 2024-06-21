'use client';
import axios from "@repo/axios";

export default function Button() {
  async function handleClick() {
    const { data } = await axios.post('http://localhost:4000/event', { name: 'daniel' })
    console.log(data);
  }

  return (
    <button onClick={handleClick}>
      fetch to do
    </button>
  );
}
