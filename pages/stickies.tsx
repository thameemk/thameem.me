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
          url="https://ep2023.europython.eu/session/pygoat-learn-django-security-the-hard-way"
          title="Pygoat - Learn Django security the hard way"
          descrption="Excited to have been a speaker at EuroPython 2023 alongside{' '}
          <a className='text-sky-600' target='_blank' href='https://adarshd.dev/'>
            Adarsh Divakaran
          </a>{' '}
          🎤. We had the wonderful opportunity to discuss Pygoat - Learn Django
          security the hard way and share our insights with the Python
          community.
          <br />
          <br />
          <a className='text-sky-600' href={url} target='_blank'>
            Read More &rarr;
          </a>{' '}"
        />
      </div>
    </Container>
  );
}

export default Stickies;
