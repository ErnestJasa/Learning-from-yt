import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Name</span>
      <br />
      Software dev
    </h1>
  ),
  2: (
    <InfoBox
      text="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quas ratione, illo quae fugiat eos."
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quas ratione, illo quae fugiat eos."
      link="/projects"
      btnText="Visit portfolio"
    />
  ),
  4: (
    <InfoBox
      text="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quas ratione, illo quae fugiat eos."
      link="/contact"
      btnText="Let's talk"
    />
  ),
};
function InfoBox({ text, link, btnText }) {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link className="neo-brutalism-white neo-btn" to={link}>
        {btnText}
        <img className="w-4 h-4 object-contain" src={arrow} alt="arrow" />
      </Link>
    </div>
  );
}
function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null;
}
export default HomeInfo;
