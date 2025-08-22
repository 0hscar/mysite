function Intro() {
  return (
    <div className="content">
      <h2>Hey, I'm Oscar</h2>
      <p>
        I'm Software Engineer and a geek at heart.{" "}
        {`I'm ${Math.floor((Date.now() - new Date(2000, 3, 7).getTime()) / (1000 * 60 * 60 * 24 * 365.25))} years old`}{" "}
        and I live in Finland. Technology has always fascinated me, and I don't
        mind tinkering with it. Been building my own computers since I was
        around 12.
      </p>
      <p>
        I enjoy learning through hands-on experience, and I love to experiment
        with new technologies. Something oddly fascinating about playing around
        and getting things to work, even if it means breaking them first (not
        going to break hardware of course).
      </p>
      <p>
        My passion in technology lead to me pursuing a degree in Information
        Technology, I have a Bachelor's degree in Information Technology from
        Arcada University of Applied Sciences. You can find my CV{" "}
        <a href="#/cv" target="_blank" rel="noopener noreferrer">
          here
        </a>
        .
      </p>
    </div>
  );
}
export default Intro;
