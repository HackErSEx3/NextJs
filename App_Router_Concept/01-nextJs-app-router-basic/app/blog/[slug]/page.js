export default function BlogPostPage({ params }) {
  const { slug } = params;
  return (
    <main>
      <h1>BlogPost &nbsp; {slug}</h1>
    </main>
  );
}
