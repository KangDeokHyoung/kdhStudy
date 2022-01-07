import Card from "./Card";
import useCouter from "../hooks/use-counter";

const BackwardCounter = () => {
  const counter = useCouter(false)
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
