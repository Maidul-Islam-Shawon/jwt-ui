import Axios from "axios";

export default function loginFunc(state, setAuthenticated, setError) {
  Axios.post("https://localhost:44331/api/authenticate/login", state).then(
    (result) => {
      setAuthenticated(true);
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("isAuth", true);
      sessionStorage.setItem("token", result.data.token);

      setError("");
    },
    (err) => {
      setError(err.message);
    }
  );
}
