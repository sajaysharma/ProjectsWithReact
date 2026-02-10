import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext.js';

function Login() {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const {setUser} = useContext(UserContext);

        const handleSubmit = (e) => {
                e.preventDefault();
                setUser({username})
        }
        return (
                <>
                        <div className='flex content-center justify-center flex-col items-center gap-4 h-100 bg-gray-400'>
                                <h1 className='text-3xl font-bold'>Understand context API with login component</h1>
                                <input
                                        className='border-3 border-black rounded p-2 text-white'
                                        type="text"
                                        placeholder='Username'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                />
                                <input
                                        className='border-3 border-black rounded p-2 text-white'
                                        type="password"
                                        placeholder='Password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                />
                                <button 
                                className='border-3 border-black rounded px-2 bg-blue-500 font-bold hover:bg-blue-700 text-white'
                                onClick={handleSubmit}>Submit</button>
                        </div>
                </>
        )
}

export default Login