import { useState } from "react";
import vault from "../vault.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const baseUrl = "http://127.0.0.1:8000";
    const url = baseUrl + "/auth/register/";
    const headers = {
        "Content-Type": "application/json",
    };
    const navigate = useNavigate();
    const registerHandler = async (e) => {
        try {
            e.preventDefault();
            const resp = await axios.post(
                url,
                {
                    username: username,
                    first_name: firstname,
                    last_name: lastname,
                    email: email,
                    password: password,
                },
                {
                    headers: headers,
                }
            );

            if (resp.status === 200) {
                navigate("/login/");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="container app">
            <div className="row body text-center align-center">
                <div className="col body border-body">
                    <span className="h5 landing_page">Sign Up</span>
                    <br />
                    <img src={vault} className="login_banner" alt="logo" />
                    <form onSubmit={registerHandler}>
                        <div className="form mb-3">
                            <input
                                type="text"
                                name="username"
                                className="form-control"
                                id="floatingUsername"
                                placeholder="username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form mb-3">
                            <input
                                type="text"
                                name="firstname"
                                className="form-control"
                                id="floatingFirstname"
                                placeholder="first name"
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                        </div>
                        <div className="form mb-3">
                            <input
                                type="text"
                                name="lastname"
                                className="form-control"
                                id="floatingLastname"
                                placeholder="last name"
                                onChange={(e) => setLastname(e.target.value)}
                            />
                        </div>
                        <div className="form mb-3">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="floatingEmail"
                                placeholder="name@example.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form mb-3">
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                    </form>
                    <div className="row">
                        <span className="whiteColor topSpacing">
                            Already Having an account?
                        </span>
                        <Link to={"/login"}>
                            <span className="whiteColor">Login</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;
