import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 bg-gray-300 rounded-lg">
      <Accordion title="Android or iOS" answer="Android" />
      <Accordion title="CSS or Tailwind" answer="Tailwind" />
      <Accordion title="Something or Else" answer="Else" />
    </div>
  );
};
export default FAQ;
