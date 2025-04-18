import DevelopCom from "../ProjectsP/DevelopCom";

const Upsevice = () => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-2 max-lg:grid-cols-1 gap-10 mt-20">
      <DevelopCom
        img="/Image-Zfta.png"
        title="Analytics and Reporting"
        class="w-10"
      />
      <DevelopCom img="/Zfta2.png" title="Billing and Payments" />
      <DevelopCom img="/Zfta-3.png" title="Account Management" />
      <DevelopCom img="/Zfta-4.png" title="General Support" />
    </div>
  );
};

export default Upsevice;
