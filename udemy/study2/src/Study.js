import React from 'react';

const Study = () => {
    // Symbol 값이 같더라도 넣어주면 다른 값으로 처리해준다 그러므로 false
    // const symbol1 = Symbol('id');
    // const symbol2 = Symbol('id');
    // console.log(symbol1 === symbol2);

    // //Symbol.for 반대로 처리 가능하다. true
    // const symbol11 = Symbol.for('id');
    // const symbol22 = Symbol.for('id');
    // console.log(symbol11 === symbol22);
    
    // let x = 3;
    // let y = 6;
    // console.log(x += y); //x = x + y 

    // // Logical operatiors : ||(or) , &&(and), !(not)
    // const value1 =  false;
    // const value2 = 4 < 2; //false
    
    // const ellie1 = {name: 'ellie'};
    // const ellie2 = {name: 'ellie'};
    // const ellie3 = ellie1;
    // console.log(ellie1 == ellie2);  //false 왜냐면  엘리1과 엘리 2는 다른 고유의 값이므로 같지 않다. 
    // console.log(ellie1 === ellie2); //false 왜냐면  엘리1과 엘리 2는 다른 고유의 값이므로 같지 않다. 
    // console.log(ellie1 === ellie3);


    // console.log(0 == false); //true
    // console.log(0 === false); //flase 0은 블리엄 타입이 아니므로 같지 않다.
    // console.log('' == false); //true
    // console.log('' === false); // false ''은 블리엄 타입이 아니므로 같지 않다.
    // console.log(null == undefined); //true
    // console.log(null === undefined); //false 다른 타입임으로 

    //if , else if, else
    // const name = 'ellie';
    // if(name === 'ellie') {
    //     console.log('welcom, ellie')
    // } else if (name ==='bob') {
    //     console.log('welcom, bob')
    // } else {
    //     console.log('오잉!')
    // }
    

    // const min = 'a';
    // if (min === 'min'){
    //     console.log('min')
    // } else if (min == 'non'){
    //     console.log('non')
    // } else {
    //     console.log('last')
    // };

    // // 이거 중요함!!!!
    // console.log(name !== 'ellie' ? 'yes' : 'no');
    

    //01. 0~10까지 qi 숫자 나오게 
    for (let i = 0; i < 11; i++){
        if(i % 2 == 0 ){
            console.log(`q1. ${i}`);
        }
    };

    for (let i = 0; i < 11; i++){
        if(i > 8) {
            break;
        }
        console.log(`q2. ${i}`);
    }
    
    const ellie = {name: 'ellie'};
    function changNmae(obj){
        obj.name='coder';
    }
    changNmae(ellie);
    console.log(changNmae);

    function sum(a,b) {
        return a + b;
    };
    const result = sum(1,2);
    console.log(result);  //3




    return (
        <div>
            aaa
        </div>
    );
};

export default Study;