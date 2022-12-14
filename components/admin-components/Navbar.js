import Image from "next/image"

export default function Navbar() {
    return(
        <nav className="bg-white border-gray-200 px-8 py-3 dark:bg-slate-900 shadow-sm shadow-slate-700 absolute w-screen z-10">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/index.js" className="flex items-center text-white">
                <svg width="130" height="44" viewBox="0 0 375 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_11_2)">
                    <path d="M327.243 73.3639L305.564 41.8305C303.462 38.7648 301.622 36.356 300.046 34.6042C298.469 32.7647 296.41 31.1443 293.87 29.7428C291.33 28.3413 288.221 27.553 284.542 27.3778V24.75H300.308C304.162 24.75 307.403 26.0201 310.031 28.5603C312.659 31.0129 315.549 34.5604 318.703 39.2028L335.126 63.5097L356.149 94.3861C358.864 98.4153 361.755 101.788 364.82 104.503C367.974 107.131 371.434 108.576 375.2 108.839V111.467H361.404C357.638 111.467 354.309 110.153 351.419 107.525C348.528 104.81 345.725 101.306 343.01 97.0139L327.243 73.3639Z" fill="#DDFFDA"/>
                    <path d="M322.465 73.3639L300.786 41.8305C298.684 38.7648 296.844 36.356 295.268 34.6042C293.691 32.7647 291.633 31.1443 289.093 29.7428C286.552 28.3413 283.443 27.553 279.764 27.3778V24.75H295.531C299.385 24.75 302.626 26.0201 305.253 28.5603C307.881 31.0129 310.772 34.5604 313.925 39.2028L330.349 63.5097L351.371 94.3861C354.086 98.4153 356.977 101.788 360.043 104.503C363.196 107.131 366.656 108.576 370.422 108.839V111.467H356.626C352.86 111.467 349.531 110.153 346.641 107.525C343.75 104.81 340.947 101.306 338.232 97.0139L322.465 73.3639Z" fill="#99E292"/>
                    <path d="M317.09 73.3639L295.411 41.8305C293.309 38.7648 291.469 36.356 289.893 34.6042C288.316 32.7647 286.258 31.1443 283.718 29.7428C281.177 28.3413 278.068 27.553 274.389 27.3778V24.75H290.156C294.01 24.75 297.251 26.0201 299.878 28.5603C302.506 31.0129 305.397 34.5604 308.55 39.2028L324.974 63.5097L345.996 94.3861C348.711 98.4153 351.602 101.788 354.668 104.503C357.821 107.131 361.281 108.576 365.047 108.839V111.467H351.251C347.485 111.467 344.156 110.153 341.266 107.525C338.375 104.81 335.572 101.306 332.857 97.0139L317.09 73.3639Z" fill="url(#paint0_radial_11_2)"/>
                    <path d="M345.458 33.1111C341.875 73.4236 296.328 105.99 272 113.139C337.257 105.712 351.758 47.8362 355.611 33.1111H345.458Z" fill="url(#paint1_radial_11_2)"/>
                    <path d="M352.028 14C350.048 18.4792 344.673 29.7381 336.799 35.2014C339.187 36.1855 341.576 36.1855 345.458 34.0069L354.715 34.9028C354.715 34.9028 357.701 36.1855 362.369 36.1855C357.104 31.0208 353.222 22.0625 352.028 14Z" fill="url(#paint2_radial_11_2)"/>
                    <path d="M29.9354 42.8H20.0354C10.8687 42.8 6.28539 47.0167 6.28539 55.45H4.08539V47.2C4.08539 41.3333 7.20206 38.4 13.4354 38.4H64.5854V42.8H39.8354V111H29.9354V42.8ZM64.8277 72.5C64.8277 68.76 64.3144 66.01 63.2877 64.25C62.2611 62.4167 60.2077 61.5 57.1277 61.5H56.0277V59.3H64.8277C67.6144 59.3 69.7044 59.7033 71.0977 60.51C72.5644 61.2433 73.5911 62.49 74.1777 64.25H74.7277C76.0477 62.5633 77.8077 61.1333 80.0077 59.96C82.2811 58.7867 84.9211 58.2 87.9277 58.2C90.8611 58.2 93.0611 58.75 94.5277 59.85C95.7744 60.8033 97.0577 62.4533 98.3777 64.8L93.9777 68.1C93.1711 67 91.9977 66.1933 90.4577 65.68C88.9177 65.0933 87.1577 64.8 85.1777 64.8C82.9777 64.8 80.9611 65.3133 79.1277 66.34C77.2944 67.2933 75.8277 68.6133 74.7277 70.3V111H64.8277V72.5ZM115.588 112.1C113.242 112.1 110.858 111.623 108.438 110.67C106.018 109.643 103.928 107.993 102.168 105.72C100.482 103.447 99.6384 100.44 99.6384 96.7C99.6384 91.1267 102.205 87.1667 107.338 84.82C112.545 82.4733 119.328 81.3 127.688 81.3H130.988C130.988 74.1133 129.998 69.2 128.018 66.56C126.038 63.92 123.178 62.6 119.438 62.6C116.138 62.6 113.498 63.2967 111.518 64.69C109.538 66.0833 108.145 68.5033 107.338 71.95H102.388C102.388 69.4567 102.535 67.5133 102.828 66.12C103.122 64.6533 103.892 63.2967 105.138 62.05C106.458 60.73 108.622 59.7767 111.628 59.19C114.708 58.53 118.045 58.2 121.638 58.2C127.578 58.2 132.272 59.8133 135.718 63.04C139.165 66.1933 140.888 72.28 140.888 81.3V111H135.388L131.538 106.05H130.988C129.668 107.737 127.725 109.167 125.158 110.34C122.592 111.513 119.402 112.1 115.588 112.1ZM120.538 107.15C122.958 107.15 124.975 106.563 126.588 105.39C128.202 104.217 129.668 102.603 130.988 100.55V85.7H127.688C122.262 85.7 117.972 86.7267 114.818 88.78C111.665 90.76 110.088 93.4 110.088 96.7C110.088 100.073 111.078 102.677 113.058 104.51C115.112 106.27 117.605 107.15 120.538 107.15ZM168.877 112.1C162.497 112.1 157.584 109.57 154.137 104.51C150.764 99.45 149.077 92.9967 149.077 85.15C149.077 77.3033 150.837 70.85 154.357 65.79C157.951 60.73 163.157 58.2 169.977 58.2C172.764 58.2 175.221 58.4933 177.347 59.08C179.474 59.6667 181.601 60.4733 183.727 61.5V51.6C183.727 47.86 183.214 45.11 182.187 43.35C181.161 41.5167 179.107 40.6 176.027 40.6H173.827V38.4H183.727C186.441 38.4 188.457 38.7667 189.777 39.5C191.171 40.16 192.161 41.4067 192.747 43.24C193.334 45.0733 193.627 47.86 193.627 51.6V111H188.127L184.277 106.05H183.727C182.114 107.883 180.207 109.35 178.007 110.45C175.881 111.55 172.837 112.1 168.877 112.1ZM172.177 107.7C175.184 107.7 177.457 107.15 178.997 106.05C180.537 104.95 182.114 103.3 183.727 101.1V65.9C181.527 64.8733 179.621 64.0667 178.007 63.48C176.394 62.8933 174.817 62.6 173.277 62.6C168.584 62.6 165.101 64.6533 162.827 68.76C160.627 72.8667 159.527 78.33 159.527 85.15C159.527 91.8967 160.591 97.36 162.717 101.54C164.844 105.647 167.997 107.7 172.177 107.7ZM225.243 112.1C220.256 112.1 216.04 110.927 212.593 108.58C209.146 106.16 206.543 102.933 204.783 98.9C203.023 94.7933 202.143 90.21 202.143 85.15C202.143 80.1633 203.023 75.6167 204.783 71.51C206.543 67.4033 209.073 64.1767 212.373 61.83C215.746 59.41 219.67 58.2 224.143 58.2C231.55 58.2 237.05 60.29 240.643 64.47C244.31 68.5767 246.143 74.5533 246.143 82.4L245.923 86.8H212.593C212.593 92.96 213.913 97.9833 216.553 101.87C219.193 105.757 222.823 107.7 227.443 107.7C230.89 107.7 233.786 106.967 236.133 105.5C238.553 104.033 240.79 101.833 242.843 98.9L245.043 100.55C242.623 104.583 239.8 107.517 236.573 109.35C233.346 111.183 229.57 112.1 225.243 112.1ZM235.693 82.4C235.693 75.9467 234.74 71.0333 232.833 67.66C230.926 64.2867 228.03 62.6 224.143 62.6C221.943 62.6 219.963 63.48 218.203 65.24C216.443 66.9267 215.05 69.2733 214.023 72.28C213.07 75.2867 212.593 78.66 212.593 82.4H235.693ZM255.304 72.5C255.304 68.76 254.791 66.01 253.764 64.25C252.737 62.4167 250.684 61.5 247.604 61.5H246.504V59.3H255.304C258.091 59.3 260.181 59.7033 261.574 60.51C263.041 61.2433 264.067 62.49 264.654 64.25H265.204C266.524 62.5633 268.284 61.1333 270.484 59.96C272.757 58.7867 275.397 58.2 278.404 58.2C281.337 58.2 283.537 58.75 285.004 59.85C286.251 60.8033 287.534 62.4533 288.854 64.8L284.454 68.1C283.647 67 282.474 66.1933 280.934 65.68C279.394 65.0933 277.634 64.8 275.654 64.8C273.454 64.8 271.437 65.3133 269.604 66.34C267.771 67.2933 266.304 68.6133 265.204 70.3V111H255.304V72.5Z" fill="url(#paint3_radial_11_2)"/>
                    </g>
                    <defs>
                    <radialGradient id="paint0_radial_11_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(329.333 80.2916) rotate(-132.51) scale(68.0545 71.1479)">
                    <stop offset="0.291667" stopColor="#136D37"/>
                    <stop offset="1" stopColor="#99E292"/>
                    </radialGradient>
                    <radialGradient id="paint1_radial_11_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(328.139 80.5903) rotate(-68.4534) scale(74.8037 67.7952)">
                    <stop offset="0.234375" stopColor="#136D37"/>
                    <stop offset="1" stopColor="#ADFAA6"/>
                    </radialGradient>
                    <radialGradient id="paint2_radial_11_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(328.139 80.5903) rotate(-68.4534) scale(74.8037 67.7952)">
                    <stop offset="0.234375" stopColor="#136D37"/>
                    <stop offset="1" stopColor="#ADFAA6"/>
                    </radialGradient>
                    <radialGradient id="paint3_radial_11_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(129.5 78) rotate(101.31) scale(79.0348 320.834)">
                    <stop stopColor="#136D37"/>
                    <stop offset="1" stopColor="#99E292"/>
                    </radialGradient>
                    <clipPath id="clip0_11_2">
                    <rect width="375" height="129" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>

                </a>
                <div className="flex md:order-2">
                <button
                    type="button"
                    data-collapse-toggle="mobile-menu-3"
                    aria-controls="mobile-menu-3"
                    aria-expanded="false"
                    className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
                >
                    <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                    />
                    </svg>
                </button>
                <div className="hidden relative md:block">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                        className="w-5 h-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </div>
                    <input
                    type="text"
                    id="search-navbar"
                    className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                    />
                </div>
                <button
                    data-collapse-toggle="mobile-menu-3"
                    type="button"
                    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mobile-menu-3"
                    aria-expanded="false"
                >
                    <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                    </svg>
                    <svg
                    className="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                    </svg>
                </button>
                </div>
                <div
                className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                id="mobile-menu-3"
                >
                <div className="relative mt-3 md:hidden">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                        className="w-5 h-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </div>
                    <input
                    type="text"
                    id="search-navbar"
                    className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                    />
                </div>
                </div>
            </div>
        </nav>

    )
}