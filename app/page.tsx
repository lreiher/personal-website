import Typewriter from './components/typewriter';
// import { BlogPosts } from 'app/components/posts';

export default function Page() {
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "3rem",
        }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            height: "180px",
            backgroundColor: "white",
          }}
        />
        <img
          src="/profile.jpg"
          alt="Profile picture"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            filter: "grayscale(100%)",
            objectFit: "cover",
            border: "2px solid white",
          }}
        />
      </div>
      <Typewriter text="Hi, I'm Lennart!" />
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  );
}