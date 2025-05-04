import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import bg3 from '../assets/images/hero/bg3.jpg';
import LogoDark from '../assets/images/logo-dark.png';
import LogoLight from '../assets/images/logo-light.png';

const sectionStyle = {
    backgroundImage: `url(${bg3})`,
  };

const Login = () => {
  return (
    <section style={sectionStyle} className="h-screen flex items-center justify-center relative overflow-hidden bg-no-repeat bg-center bg-cover">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
      <div className="container">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          <div className="relative overflow-hidden bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
            <div className="p-6">
              <Link to="/">
                <img src={LogoDark} className="mx-auto h-[24px] block dark:hidden" alt="logo dark" />
                <img src={LogoLight} className="mx-auto h-[24px] dark:block hidden" alt="logo light" />
              </Link>
              <h5 className="my-6 text-xl font-semibold">Login</h5>
                Test
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