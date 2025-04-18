import Succespart from "./Succespart";

const KnowUs = () => {
  return (
    <div className="w-9/12 mx-auto flex flex-col items-center">
      <h2 className="text-7xl max-lg:text-5xl max-sm:text-3xl font-medium mt-20 text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#424D50] text-center">
        Get To Know Us Better
      </h2>
      <p className="text-[#afafaf] max-lg:text-xs text-sm mt-10 max-w-[800px] text-center">
        Orci at id enim eu pellentesque habitant. Ut at diam suscipit amet id
        cursus id blandit. Consectetur maecenas id vivamus integer integer
        aliquam. Donec amet rhoncus ut turpis massa augue faucibus.
      </p>

      <Succespart
        num="(001)"
        title="Our Success Stories"
        button="View Case studies"
      />
      <Succespart num="(002)" title="Join Our Community" button="Contact Us" />
      <Succespart
        num="(003)"
        title="See Our Impact"
        button="Explore Projects"
      />
    </div>
  );
};

export default KnowUs;
