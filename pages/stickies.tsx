import Container from "../components/Container";
import EuroPython from "./stickies/EuroPython";
import PyCascades from "./stickies/PyCascades";
import ResearchPaper from "./stickies/ResearchPaper";

function Stickies() {
  return (
    <Container title={"Stickies - Thameem Karakkoth"}>
      <div className="py-8 lg:py-16 lg:px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Random Things
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
          codes, blogs, thoughts, achievements ... ✍️ 🧑‍🎓
        </p>
        <PyCascades />
        <EuroPython />
        <ResearchPaper />
      </div>
    </Container>
  );
}

export default Stickies;
