const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8000"
    : "https://defi-tlm.herokuapp.com";

module.exports = baseUrl;