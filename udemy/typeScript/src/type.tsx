import React from "react";


interface Props{
  name:string;
  age:number;
}

const Type1:React.FC<Props> = ({name, age})=>{
  return(
    <div>
      {name}, {age}
    </div>
  )
}

export default Type1;
