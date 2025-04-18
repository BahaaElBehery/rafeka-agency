import { Link } from "react-router";
import Header from "../Homepage/Header";
import AvailableCom from "../Homepage/AvailableCom";
import Rafeka from "../Homepage/Rafeka";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="bg-[url('/Line-BG.png')] h-[490px] flex flex-col items-center justify-evenly">
        <h2 className="text-8xl max-sm:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#424D50]">
          Error 404
        </h2>

        <p className="text-4xl">Something's missing.</p>
        <p className="text-sm text-[#afafaf] text-center max-w-[500px]">
          Oops! It seems that the page you're looking for doesn't exist. This
          might be due to an outdated link, a mistyped URL, or the page being
          removed
        </p>

        <Link
          className="px-8 py-2 bg-red-500 cursor-pointer rounded-2xl"
          to={`/`}
        >
          Back To HomePage
        </Link>
      </div>

      <AvailableCom
        one="Available For New Project"
        two="Interested in Working Together?"
        three="Orci at id enim eu pellentesque habitant. Ut at diam suscipit amet id
        cursus id blandit. Consectetur maecenas id vivamus integer integer
        aliquam."
        edit="text-8xl max-lg:text-4xl text-center max-w-4xl mt-10 capitalize font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#424D50]"
        four="px-8 py-1 border border-red-500 mt-10 rounded-md font-medium max-lg:text-base text-lg"
        five="Schedule A Call"
      />

      <Rafeka />
    </>
  );
};

export default NotFound;
