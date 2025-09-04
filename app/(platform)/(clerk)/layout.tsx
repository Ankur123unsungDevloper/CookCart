"use client";

const ClerkLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <style>{`
        /* Import the 'Fleur De Leah' font from Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Fleur+De+Leah&display=swap');

        /* Define the keyframes for the page-turn animation */
        @keyframes pageTurnIn {
          0% {
            transform: translateX(100%) rotateY(90deg);
            transform-origin: left center;
            opacity: 0;
          }
          100% {
            transform: translateX(0) rotateY(0deg);
            transform-origin: left center;
            opacity: 1;
          }
        }

        /* Apply the animation and font family */
        .page-turn-animation {
          animation: pageTurnIn 1s ease-out forwards;
          font-family: "Fleur De Leah", cursive;
        }
      `}</style>

      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gray-50">
        {/* Main Content & Form Section */}
        <div className="flex flex-col items-center justify-center p-4 lg:p-8">
          <div className="text-center space-y-4 mb-10">
            <h1 className="font-extrabold text-5xl sm:text-6xl text-gray-900 leading-tight tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-rose-600">
                Welcome to CookCart!
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Fresh, healthy, and affordable meals from mom&apos;s kitchen to your doorstep.
            </p>
          </div>
          {children}
        </div>

        {/* Hero Image & Branding Section with Animation */}
        <div className="h-screen hidden lg:flex items-center justify-center relative overflow-hidden page-turn-animation">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/backgroundImage/bg5.jpg')" }}
          ></div>
          <div className="absolute inset-0 bg-red-600/60 backdrop-brightness-50"></div>
          <div className="relative text-white z-10 text-center p-8">
            <h2 className="text-8xl font-extrabold tracking-widest leading-tight">
              CookCart
            </h2>
            <p className="mt-4 text-4xl italic font-medium drop-shadow-md">
              Cook with love, serve with ease.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClerkLayout;
