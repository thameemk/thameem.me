function DefaultCard({
  url,
  title,
  descrption,
}: {
  url: string;
  title: string;
  descrption: any;
}) {
  return (
    <div>
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Excited to have been a speaker at EuroPython 2023 alongside{" "}
          <a className="text-sky-600" target="_blank" href="https://adarshd.dev/">
            Adarsh Divakaran
          </a>{" "}
          🎤. We had the wonderful opportunity to discuss Pygoat - Learn Django
          security the hard way and share our insights with the Python
          community.
          <br />
          <br />
          <a className="text-sky-600" href={url} target="_blank">
            Read More &rarr;
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default DefaultCard;
