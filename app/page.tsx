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
          marginBottom: "2rem",
        }}
      >
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
      <p className="mb-2">
        I'm a researcher at the <a href="https://www.ika.rwth-aachen.de/en">Institute for Automotive Engineering (ika) at RWTH Aachen University</a> — next goal: <i>Dr.-Ing.</i> on connected automated driving.
      </p>
      <p className="mb-2">
        <b>I like all things tech.</b>
      </p>
    </section>
  );
}
