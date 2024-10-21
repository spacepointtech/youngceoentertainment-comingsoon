
// import Image from 'next/image';

// export default function Home() {
//   return (
//     <div className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4">
//       {/* Logo */}
//       <div className="absolute top-6 left-1/2 transform -translate-x-1/2 sm:top-10">
//         <Image src="/images/logo.png" width={180} height={180} className="sm:w-[200px] sm:h-[200px]" alt="Logo" />
//       </div>

//       {/* Main Content */}
//       <div className="text-center mt-32 sm:mt-40 px-4 sm:px-0 max-w-3xl">
//         {/* Title */}
//         <h1 className="text-2xl sm:text-4xl font-bold mt-6">
//           The Rhythm is Loading… Our Website is Dropping Soon!
//         </h1>

//         {/* Subtitle */}
//         <p className="text-lg sm:text-2xl text-gray-600 mt-4">
//           Young CEO Entertainment is where artists rise & music vibes.
//         </p>

//         {/* Emoji */}
//         <div className="text-4xl sm:text-6xl mt-5 mb-6">🤯</div>

//         <p className="text-lg sm:text-2xl font-semibold text-[#582B0E]">
//           BIG things are coming your way!
//         </p>

//         <p className="text-xs sm:text-sm mt-5 text-gray-500">
//           Don&apos;t miss a beat—drop your email and stay tuned!
//         </p>

//         {/* Email Subscription Box */}
//         <div className="flex flex-col sm:flex-row justify-center items-center mt-6">
//           <input
//             type="email"
//             placeholder="Email"
//             className="p-3 sm:p-4 rounded-t-lg sm:rounded-l-lg w-full sm:w-[400px] border border-gray-300 text-lg mb-2 sm:mb-0"
//           />
//           <a
//             href="mailto:connectwithus@youngceoentertainment.com?subject=Get%20Details%20about%20distributing%20my%20track&body=Hello!%20I%20hope%20this%20email%20finds%20you%20well.%20I%20want%20to%20connect%20with%20the%20team%20to%20discuss%20about%20distributing%20my%20music."
//             className="bg-[#582B0E] text-white p-3 sm:p-4 rounded-b-lg sm:rounded-r-lg text-lg cursor-pointer w-full sm:w-auto text-center"
//           >
//             Subscribe
//           </a>
//         </div>
//       </div>

//       {/* Left Illustration */}
//       <div className="absolute bottom-0 left-0 hidden sm:block">
//         <Image src="/images/left.png" width={287} height={287} alt=" " />
//       </div>

//       {/* Right Illustration */}
//       <div className="absolute bottom-0 right-0 hidden sm:block">
//         <Image src="/images/right.png" width={137} height={137} alt=" " />
//       </div>

//       {/* Top-right Image */}
//       {/* <div
//         className="absolute top-0 right-0 hidden sm:block overflow-hidden"
//         style={{ height: '70%', width: '300px' }}
//       >
//         <Image
//           src="/images/art.png"
//           width={300}
//           height={400}
//           objectFit="cover"
//           objectPosition="bottom"
//           alt=" "
//         />
//       </div> */}
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubscribe = () => {
    if (!email) {
      setError(true);
      return;
    }
    setError(false);
    window.location.href =
      "mailto:connectwithus@youngceoentertainment.com?subject=Get%20Details%20about%20distributing%20my%20track&body=Hello!%20I%20hope%20this%20email%20finds%20you%20well.%20I%20want%20to%20connect%20with%20the%20team%20to%20discuss%20about%20distributing%20my%20music.";
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="absolute top-4 sm:top-8 left-1/2 transform -translate-x-1/2">
        <Image
          src="/images/logo.png"
          width={180}
          height={180}
          className="sm:w-[200px] sm:h-[200px]"
          alt="Logo"
        />
      </div>

      {/* Main Content */}
      <div className="text-center mt-24 sm:mt-36 px-4 sm:px-0 max-w-3xl">
        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-bold mt-6">
          The Rhythm is Loading… Our Website is Dropping Soon!
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl text-gray-600 mt-3 sm:mt-4">
          
        </p>

        {/* Emoji */}
        <div className="text-4xl sm:text-6xl mt-4 sm:mt-10 mb-6 sm:mb-6">🤯</div>

        <p className="text-lg sm:text-2xl font-semibold text-[#582B0E]">
          BIG things are coming your way!
        </p>

        <p className="text-xs sm:text-sm mt-4 sm:mt-5 text-gray-500">
        Young CEO Entertainment is where artists rise & music vibes.
        </p>

        {/* Email Subscription Box */}
        <div className="flex flex-col sm:flex-row justify-center items-center mt-5 sm:mt-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`p-3 sm:p-4 rounded-t-lg sm:rounded-l-lg w-full sm:w-[400px] border ${
              error ? "border-red-500" : "border-gray-300"
            } text-lg mb-2 sm:mb-0`}
          />
          <button
            onClick={handleSubscribe}
            className="bg-[#582B0E] text-white p-3 sm:p-4 rounded-b-lg sm:rounded-r-lg text-lg cursor-pointer w-full sm:w-auto text-center"
          >
            Subscribe
          </button>
        </div>

        {error && (
          <p className="text-red-500 mt-2">Please enter a valid email!</p>
        )}
      </div>

      {/* Left Illustration */}
      <div className="absolute bottom-0 left-0 hidden sm:block">
        <Image src="/images/left.png" width={287} height={287} alt=" " />
      </div>

      {/* Right Illustration */}
      <div className="absolute bottom-0 right-0 hidden sm:block">
        <Image src="/images/right.png" width={137} height={137} alt=" " />
      </div>
    </div>
  );
}
