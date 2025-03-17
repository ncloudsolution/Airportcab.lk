import { Puff } from "react-loader-spinner";
const PuffComponent = ({ size }) => {
  return (
    <Puff
      visible={true}
      height={size}
      width={size}
      color="#000000"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default PuffComponent;
