import React from 'react'

function Card({username, btntext}) {
         console.log(username);      
        return (
                <>
                        <div class=" flex justify-center items-center bg-gray-900">
                                <div class="w-[320px] rounded-xl overflow-hidden bg-neutral-800 text-white shadow-lg">

                                        <img
                                                src="https://imgs.search.brave.com/PfRv5piiNzBeHo3u6p8Xv5v1S_ppmE1T4Qw9emYuzA0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTIv/NzEzLzc2NC9zbWFs/bC92aWJyYW50LWFi/c3RyYWN0LWxldHRl/ci1zLWluLWEtd29v/ZGVuLWZyYW1lLWZy/ZWUtcGhvdG8uanBn"
                                                class="w-full h-52 object-cover"
                                                alt=""
                                        />

                                        <div class="p-4">
                                                <h2 class="text-xl font-bold">{username}</h2>
                                                <p class="text-sm text-gray-300 mt-1">
                                                        Lorem ipsum dolor sit amet consectetur.
                                                </p>

                                                <button class="mt-3 px-4 py-1 rounded-full bg-green-600 hover:bg-green-700">
                                                       {btntext || "visit me"}
                                                </button>
                                        </div>

                                </div>
                        </div>

                </>
        )
}

export default Card