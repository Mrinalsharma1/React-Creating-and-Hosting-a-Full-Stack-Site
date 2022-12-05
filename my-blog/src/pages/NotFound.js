const NotFound = () => (
  <>
    <h1
      style={{ marginTop: "200px" }}
      className="d-flex justify-content-center align-items-center"
    >
      404 : Page Not Found
    </h1>
    <div className="d-grid gap-2 my-3">
      <a
        href="http://localhost:3000/"
        className="btn btn-outline-danger"
        type="button"
      >
        Back to Home
      </a>
    </div>
  </>
);
export default NotFound;
