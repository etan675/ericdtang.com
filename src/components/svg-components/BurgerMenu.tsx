import React from 'react';

type Props = Readonly<{
    className?: string,
}>;

const BurgerMenu = ({ className = '' }: Props) => {
    return (
        <svg className={className} width="64px" height="64px" viewBox="0 0 24 24" fill="none" stroke="#000" xmlns="http://www.w3.org/2000/svg">

            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

            <g id="SVGRepo_iconCarrier">
                <path d="M4 18L20 18" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12L20 12" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 6L20 6" strokeWidth="2" strokeLinecap="round" />
            </g>

        </svg>
    )
};

export default BurgerMenu;