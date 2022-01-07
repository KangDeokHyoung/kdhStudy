import React from 'react';

interface props {
    name: string;
    age: number;
}

const type2:React.FC<props> = ({name, age}):JSX.Element => {
    return (
        <div>
            {name}, {age}
        </div>
    )
}



export default type2;


