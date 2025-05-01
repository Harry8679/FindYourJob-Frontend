import React from 'react';
import { Link } from 'react-router-dom';
// import '../../assets/index.css';
import '../index.css';

const Login = () => {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-[url('../../assets/images/hero/bg3.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
      <div className="container">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          <div className="relative overflow-hidden bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
            <div className="p-6">
              <Link to="/">
                <img src="/assets/images/logo-dark.png" className="mx-auto h-[24px] block dark:hidden" alt="logo dark" />
                <img src="/assets/images/logo-light.png" className="mx-auto h-[24px] dark:block hidden" alt="logo light" />
              </Link>
              <h5 className="my-6 text-xl font-semibold">Login</h5>
              <form className="text-start">
                <div className="grid grid-cols-1">
                  <div className="mb-4 text-start">
                    <label className="font-semibold" htmlFor="LoginEmail">Email Address:</label>
                    <input id="LoginEmail" type="email" className="form-input mt-3 rounded-md" placeholder="name@example.com" />
                  </div>

                  <div className="mb-4 text-start">
                    <label className="font-semibold" htmlFor="LoginPassword">Password:</label>
                    <input id="LoginPassword" type="password" className="form-input mt-3 rounded-md" placeholder="Password:" />
                  </div>

                  <div className="flex justify-between mb-4">
                    <div className="inline-flex items-center mb-0">
                      <input className="form-checkbox size-4 border border-gray-200 dark:border-gray-800 accent-green-600 me-2" type="checkbox" id="RememberMe" />
                      <label htmlFor="RememberMe" className="text-slate-400">Remember me</label>
                    </div>
                    <p className="text-slate-400 mb-0"><Link to="/reset-password" className="text-slate-400">Forgot password?</Link></p>
                  </div>

                  <div className="mb-4">
                    <input type="submit" className="py-1 px-5 w-full font-semibold bg-emerald-600 hover:bg-emerald-700 border border-emerald-600 hover:border-emerald-700 text-white rounded-md" value="Login / Sign in" />
                  </div>

                  <div className="text-center">
                    <span className="text-slate-400 me-2">Don't have an account?</span>
                    <Link to="/inscription" className="text-slate-900 dark:text-white font-bold">Sign Up</Link>
                  </div>
                </div>
              </form>
            </div>

            <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 text-center">
              <p className="mb-0 text-gray-400 font-medium">
                © {new Date().getFullYear()} Jobstack. Designed by <a href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;