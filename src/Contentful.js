import { createClient } from "contentful";

export default createClient({
  // space: "vbo904es5jbj",
  // accessToken: "W0C2NtPDhwwm7SKyvGbd4OKQKtirmHxxYzqv9PTjyE0"
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});
// space: process.env.REACT_APP_API_SPACE,
// accessToken: process.env.REACT_APP_ACCESS_TOKEN
