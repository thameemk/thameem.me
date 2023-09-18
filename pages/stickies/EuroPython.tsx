function EuroPython() {
  return (
    <div className="mt-2">
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Pygoat - Learn Django security the hard way
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Excited to have been a speaker at EuroPython 2023 alongside{" "}
          <a
            className="text-sky-600"
            target="_blank"
            href="https://adarshd.dev/"
          >
            Adarsh Divakaran
          </a>{" "}
          🎤. We had the wonderful opportunity to discuss Pygoat - Learn Django
          security the hard way and share our insights with the Python
          community.
          <br />
          <br />
          <a
            className="text-sky-600"
            href={
              "https://ep2023.europython.eu/session/pygoat-learn-django-security-the-hard-way"
            }
            target="_blank"
          >
            Read More &rarr;
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default EuroPython;
