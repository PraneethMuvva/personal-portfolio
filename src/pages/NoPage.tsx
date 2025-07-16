const NoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-base-content p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-center text-base-content/70">
        The page you are looking for does not exist.
      </p>
      <a href="/" className="btn btn-primary mt-6">
        Go Home
      </a>
    </div>
  );
};

export default NoPage;
