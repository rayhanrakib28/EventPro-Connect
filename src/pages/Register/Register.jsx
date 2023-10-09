import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../custom/AuthProvider';

const Register = () => {

    const { googleSignIn } = useContext(AuthContext);

    const handleGoogle = e => {
        e.preventDefault();
        googleSignIn().then((result) => {
            console.log(result.user);
        })
    }


    return (
        <div>
            <div className="h-screen md:flex">
                <div className="relative overflow-hidden md:flex w-1/2 bg-black justify-around items-center hidden">
                    <div>
                        <h1 className="text-white font-bold text-4xl font-sans">EventPro Connect</h1>
                        <p className="text-white mt-1">Already Have An Acoount?</p>
                        <Link to="/login">
                            <button
                                className="bg-white text-[#045bdd] mt-5 py-2 px-4 rounded-2xl font-bold mb-2"
                            >
                                Sign In Now
                            </button>
                        </Link>

                    </div>
                    <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                </div>
                <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                    <form className="bg-white">
                        <h1 className="text-gray-800 font-bold text-2xl mb-3">Hello Again!</h1>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <input
                                className="form-control pl-2 outline-none border-none"
                                type="text"
                                name=""
                                id=""
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <input
                                className="form-control pl-2 outline-none border-none"
                                type="text"
                                name=""
                                id=""
                                placeholder="Profile Photo Url"
                            />
                        </div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <input
                                className="form-control pl-2 outline-none border-none"
                                type="email"
                                name=""
                                id=""
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                            <input
                                className="form-control pl-2 outline-none border-none"
                                type="password"
                                name=""
                                id=""
                                placeholder="Password"
                            />
                        </div>
                        <button
                            className="block w-full bg-gradient-to-r from-[#d050d6] to-[#3e87f5] mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                        >
                            Register
                        </button>
                        <span className="text-sm ml-2 hover:text-red-500 cursor-pointer">
                            Forgot Password ?
                        </span>
                        <button
                            onClick={handleGoogle}
                            className="block w-full bg-gradient-to-r from-[#e7cd36] to-[#dd1a00] mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                        >
                            Continue With Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;