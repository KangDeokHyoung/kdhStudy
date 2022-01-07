import React, { useState, createContext, useContext } from "react";
import * as S from "./SmartAccordion.style";

export const AccordionContext = createContext();

export const SmartAccordion = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const value = { isOpen, setIsOpen };

    return (
        <AccordionContext.Provider value={value}>
            <S.Wrapper>{props.children}</S.Wrapper>
        </AccordionContext.Provider>
    )
};


export const SmartAccordionHeader = (props) => {
    const { isOpen, setIsOpen } = useContext(AccordionContext);
    return (
        <S.HeaderWrapper onClick={() => setIsOpen(!isOpen)} className={props.className} >
            {props.children}
        </S.HeaderWrapper>
    )

};


export const SmartAccordionBody = (props) => {
    const { isOpen } = useContext(AccordionContext);

    return (
        <S.BodyWrapper isOpen={isOpen} className={props.className} color="red">
            {props.children}
        </S.BodyWrapper>
    )
}


export default SmartAccordion;