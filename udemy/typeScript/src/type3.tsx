import React from 'react';

interface yarm{
    name:string;
    age:number;
    id: number
}

const type3:React.FC<yarm> = ({name, age, id}): JSX.Element => {
    return (
        <div>
            {name}, {age} ,{id}
        </div>
    );
};

export default type3;