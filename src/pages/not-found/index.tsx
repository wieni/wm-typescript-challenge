const NotFound = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center space-y-5 space-x-10">
      <div className="space-y-10 text-slate-600">
        <h1 className="font-serif text-5xl">Page not found :(</h1>
        <h2 className="text-lg">
          Make sure you clicked the correct link or copied the whole URL address
        </h2>
        <a className="inline-block underline hover:no-underline" href="/">
          Go to homepage
        </a>
      </div>

      <a href="/">
        <img
          src="/page_not_found.svg"
          className="mx-auto
         w-10/12 lg:w-64"
          alt=""
        />
      </a>
    </div>
  );
};

export default NotFound;
