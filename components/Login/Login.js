import React from 'react';
import FormControl from '../UI/FormControl';
import { FaTimes } from 'react-icons/fa';

const Login = ({ showLogin, loginClickHandler }) => {
  const closeClickHandler = () => {
    loginClickHandler(false);
  };
  return (
    <div
      className={`h-screen absolute flex top-0 z-[1000] w-[30%] transition-all ${
        showLogin ? 'right-0' : '-right-[50%]'
      } duration-700 ease`}
    >
      <div className="flex h-full w-full backdrop-blur-[15px] flex-col justify-center items-center relative">
        <button
          className="btn w-[40px] h-[40px] rounded-full absolute top-2 left-2 group flex items-center justify-center"
          onClick={closeClickHandler}
        >
          <FaTimes className="font-normal text-3xl text-white group-hover:text-primary-100 transition duration-500 ease" />
        </button>
        <h1 className="form-header mb-8 text-xl font-bold text-primary-100">
          Login
        </h1>
        <form className="min-w-[70%]">
          <FormControl title={'Email'} type="text" className="first:mt-0" />
          <FormControl title={'Password'} type="password" className="mb-0" />
          <div className="flex justify-between mt-3">
            <div className="flex items-center">
              <input type="checkbox" id="remember-me" />
              <label
                className="ml-1 text-sm text-white cursor-pointer font-thin"
                for="remember-me"
              >
                Remember me
              </label>
            </div>
            <div>
              <a className="text-sm text-white cursor-pointer">
                Forgot Password
              </a>
            </div>
          </div>
          <div className="mt-3">
            <button className="w-full bg-primary-100 p-2 text-white rounded-[3px] shadow-lg cursor-pointer">
              Login
            </button>
          </div>
          <div className="registration mt-3 text-sm text-white w-full flex justify-center">
            <span>Don&apos;t have an account?</span>
            <a className="ml-1 font-semibold">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
