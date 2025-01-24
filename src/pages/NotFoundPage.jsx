import { AlertTriangle } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="flex-1 p-10 ml-0 sm:ml-24 md:ml-64 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center justify-center w-full h-[50vh] gap-2">
          <AlertTriangle size={64} className="text-red-500" />
          <h1 className="text-center text-4xl text-gray-800 font-semibold">
            Page not found!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
