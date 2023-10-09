import React, { useState } from 'react';

const Profile = () => {

    const [displayName, setDisplayName] = useState("");
    const [photoURL, setphotoURL] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleUpdate = e => {
        e.preventDefault();

    }

    return (
        <div className='container mx-auto h-screen flex justify-center justify-items-center mt-40'>
                <form className='w-1/2'>
                    <h1 className="text-gray-800 font-bold text-2xl mb-3 text-center">Update Profile</h1>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <input
                            required
                            onChange={(e) => setDisplayName(e.target.value)}
                            className="form-control pl-2 outline-none border-none"
                            type="text"
                            name=""
                            id=""
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <input
                            required
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="form-control pl-2 outline-none border-none"
                            type="text"
                            name=""
                            id=""
                            placeholder="Phone Number"
                        />
                    </div>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <input
                            required
                            onChange={(e) => setphotoURL(e.target.value)}
                            className="form-control pl-2 outline-none border-none"
                            type="text"
                            name=""
                            id=""
                            placeholder="Profile Photo Url"
                        />
                    </div>
                    <button
                        onClick={handleUpdate}
                        className="block w-full bg-gradient-to-r from-[#d050d6] to-[#3e87f5] mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                    >
                        Update
                    </button>
                </form>
            </div>

    );
};

export default Profile;