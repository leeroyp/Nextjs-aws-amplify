// pages/index.js
export default function Home({ formattedDate }) {
  return (
    <>
      <h1>Static page</h1>
      <p>This page is static. It was built on 02/08/2024.</p>
      <p>
        <a href="/ssr">View a server-side rendered page.</a>
      </p>
    </>
  );
}
