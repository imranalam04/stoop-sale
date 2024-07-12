import React from 'react'

const Content = () => {
    return (
        <div className='bg-gray-900'>

            <main className="relative isolate">
                <div
                    className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                        style={{
                            clipPath:
                                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                        }}
                    />
                </div>

                {/* Banner section */}
                <div className="px-6 pt-14 lg:px-8">
                    <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-[2.9rem]">
                            <span className="inline-block align-middle">🎉</span> Stoop Sale Extravaganza! <span className="inline-block align-middle">🎉</span>
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Join us for a day filled with treasures, community, and fun! Discover unique finds and support local creators.
                        </p>
                    </div>
                </div>


                {/* Content section */}
                <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
                            <div>
                                <p>
                                    Get ready for an amazing day on <strong>Saturday, August 10, 2024</strong>, from <strong>10:00 AM to 4:00 PM</strong> at <strong>2nd Pl. and Court St, Brooklyn, NY</strong>.
                                    Explore an array of items that cater to all tastes!
                                </p>
                                <p className="mt-8">
                                    Expect to find clothes, home goods, trendy shoes, and fun tchotchkes—all waiting for a new home.
                                    Come mingle, shop, and enjoy the good vibes!
                                </p>
                            </div>
                            <div>
                                <p>
                                    Experience the energy of our community as we celebrate creativity and sustainability.
                                    Meet your neighbors, enjoy lively music, and share stories over some unique finds.
                                </p>
                                <p className="mt-8">
                                    This is more than just a sale; it’s a chance to connect, celebrate, and discover local talent.
                                    Bring your friends and family for a day of shopping and fun!
                                </p>
                            </div>
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
                            <div className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                                <dt className="text-base leading-7 text-gray-300">Unique Items</dt>
                                <dd className="text-3xl font-semibold tracking-tight text-white">50+</dd>
                            </div>
                            <div className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                                <dt className="text-base leading-7 text-gray-300">Local Creators</dt>
                                <dd className="text-3xl font-semibold tracking-tight text-white">20+</dd>
                            </div>
                            <div className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                                <dt className="text-base leading-7 text-gray-300">Fun Activities</dt>
                                <dd className="text-3xl font-semibold tracking-tight text-white">Games & Music</dd>
                            </div>
                            <div className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                                <dt className="text-base leading-7 text-gray-300">Community Spirit</dt>
                                <dd className="text-3xl font-semibold tracking-tight text-white">Priceless!</dd>
                            </div>
                        </dl>
                    </div>
                </div>


                {/* Image section */}

            </main>
        </div>
    )
}

export default Content