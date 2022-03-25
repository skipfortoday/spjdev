import Link from "next/link";
import { useState } from "react";
import { SignIn } from "../src/config/firebase";

export default function Home() {
  const [data, setData] = useState(false);

  const handleSumbit = async () => {
    try {
      let token = await SignIn(data?.email, data?.password);
      localStorage.setItem("USER_KEY", JSON.stringify(token));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex-col justify-center hero-content lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="mb-5 text-5xl font-bold">SPJ Dev</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {/* <img src={data} /> */}
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                onChange={(e) => {
                  console.log(e.target.value);
                  setData({ ...data, email: e.target.value });
                }}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              <label className="label">
                <a href="#" className="label-text-alt">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              {/* <Link href="/puskesmas"> */}
              <input
                type="button"
                value="Login"
                className="btn btn-primary"
                onClick={handleSumbit}
              />
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
