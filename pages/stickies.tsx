import Container from "../components/Container";
import DefaultCard from "../components/DefaultCard";

function Stickies() {
  return (
    <Container title={"Stickies - Thameem Karakkoth"}>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Random Things
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
          share your thoughts anonymously 👋👋
        </p>

        <DefaultCard
          url="https://thameem.me"
          title="Noteworthy technology acquisitions 2021"
          descrption="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        />
      </div>
    </Container>
  );
}

export default Stickies;
