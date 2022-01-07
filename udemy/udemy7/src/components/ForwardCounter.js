import Card from './Card';
import useCouter from "../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCouter()

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
