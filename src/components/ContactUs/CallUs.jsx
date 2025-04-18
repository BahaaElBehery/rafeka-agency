import CallCom from "./CallCom";

const CallUs = () => {
  return (
    <div className="w-9/12 mx-auto mt-10 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
      <CallCom text="Phone Number" num="+90 536 488 66 76" img="call-1.png" />
      <CallCom
        text="Our Location"
        num="Sanliurfa, Turkey"
        img="location-1.png"
      />
      <CallCom text="Our Email" num="info@rafeka.com" img="email-1.png" />
    </div>
  );
};

export default CallUs;
