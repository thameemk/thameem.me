function PyCascades() {
  return (
    <div className="mt-2">
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Building GraphQL microservices using FastAPI
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Thrilled to share that I had the incredible opportunity to speak at
          PyCascades Seattle alongside{" "}
          <a
            className="text-sky-600"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/abymjoseph"
          >
            Aby M Joseph
          </a>{" "}
          🎤. Our session was all about building GraphQL microservices
          using FastAPI & Apollo GraphQL. 🛠️🔍
          <br />
          <br />
          <a
            className="text-sky-600"
            href={
              "https://2024.pycascades.com/program/talks/building-graphql-microservices-using-fastapi/"
            }
            target="_blank"
            rel="noreferrer"
          >
            Read More &rarr;
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default PyCascades;
