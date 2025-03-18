async function getData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  export async function generateStaticParams() {
    return [{ id: "1" }, { id: "2" }, { id: "3" }];
  }
  export default async function BlogPost({ params }) {
    const post = await getData(params.id);
  
    return (
      <main>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <a href="/">Go Back</a>
      </main>
    );
  }
  