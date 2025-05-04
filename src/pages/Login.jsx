import React from 'react';
import { Link } from 'react-router-dom';
import bg3 from '../assets/images/hero/bg3.jpg';
import LogoDark from '../assets/images/logo-dark.png';
import LogoLight from '../assets/images/logo-light.png';

const sectionStyle = {
  backgroundImage: `url(${bg3})`,
};

const Login = () => {
  return (
    <section
      style={sectionStyle}
      className="h-screen flex items-center justify-center relative overflow-hidden bg-no-repeat bg-center bg-cover"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>

      <div className="relative z-10 w-full max-w-md p-8 bg-white dark:bg-slate-900 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <img
            src={LogoDark}
            className="h-6 block dark:hidden"
            alt="logo dark"
          />
          <img
            src={LogoLight}
            className="h-6 hidden dark:block"
            alt="logo light"
          />
        </div>

        <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-6">
          Login
        </h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="LoginEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              id="LoginEmail"
              type="email"
              placeholder="name@example.com"
              className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-slate-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label htmlFor="LoginPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              id="LoginPassword"
              type="password"
              placeholder="Password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-slate-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-emerald-600 dark:bg-slate-800"
              />
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                Remember me
              </span>
            </label>
            <Link
              to="/reset-password"
              className="text-sm text-emerald-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-md transition duration-150"
          >
            Login / Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Don&apos;t have an account?{' '}
          <Link to="/inscription" className="font-medium text-emerald-600 hover:underline">
            Sign Up
          </Link>
        </p>

        <footer className="mt-6 text-center text-xs text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Jobstack. Designed by{' '}
          <a
            href="https://shreethemes.in/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Shreethemes
          </a>
          .
        </footer>
      </div>
    </section>
  );
};

export default Login;
