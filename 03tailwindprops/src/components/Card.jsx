import React from 'react'

function Card(props) {
    console.log(props.channel);
    
    return (
        <div
            className="m-auto my-6 w-screen max-w-sm rounded-lg border border-gray-200 p-4 pt-4 shadow-sm sm:p-6 lg:p-8 bg-white"
            aria-modal="true"
            role="dialog"
            tabIndex="-1"
        >
            <button className="relative ml-auto block text-gray-600 transition hover:scale-110">
                <span className="sr-only">Close cart</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x"
                >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <div className="mt-6 space-y-6">
                <ul className="space-y-4">
                    <li className="flex items-center gap-4">
                        <img
                            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png"
                            alt="Nike Air Force 1 07 LV8"
                            className="h-16 w-16 rounded object-contain"
                        />
                        <div>
                            <h3 className="text-sm text-gray-900">{props.brand}</h3>
                            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                <div>
                                    <dd className="inline font-bold">₹47,199</dd>
                                </div>
                                <div>
                                    <dt className="inline">Color:</dt>
                                    <dd className="inline">Orange</dd>
                                </div>
                            </dl>
                        </div>
                    </li>
                    <li className="flex items-center gap-4">
                        <img
                            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png"
                            alt="Nike Blazer Low 77 SE"
                            className="h-16 w-16 rounded object-contain"
                        />
                        <div>
                            <h3 className="text-sm text-gray-900">Nike Blazer Low 77 SE</h3>
                            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                <div>
                                    <dd className="inline font-bold">₹1,549</dd>
                                </div>
                                <div>
                                    <dt className="inline">Color:</dt>
                                    <dd className="inline">White</dd>
                                </div>
                            </dl>
                        </div>
                    </li>
                    <li className="flex items-center gap-4">
                        <img
                            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png"
                            alt="Nike Air Max 90"
                            className="h-16 w-16 rounded object-contain"
                        />
                        <div>
                            <h3 className="text-sm text-gray-900">Nike Air Max 90</h3>
                            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                <div>
                                    <dd className="inline font-bold">₹2219 </dd>
                                </div>
                                <div>
                                    <dt className="inline">Color:</dt>
                                    <dd className="inline">Black</dd>
                                </div>
                            </dl>
                        </div>
                    </li>
                </ul>
                <div className="space-y-4 text-center">
                    <button
                        type="button"
                        className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        View Cart (3)
                    </button>
                    <button
                        type="button"
                        className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        {props.btnText || "CheckOut"}
                    </button>
                    <a
                        href="#"
                        className="inline-block text-sm text-gray-600 transition hover:text-gray-700 hover:underline hover:underline-offset-4"
                    >
                        Continue shopping →
                    </a>
                </div>
            </div>
        </div> 
    )
}

export default Card