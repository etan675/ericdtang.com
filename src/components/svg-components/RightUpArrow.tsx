import React from 'react';

type Props = Readonly<{
    className?: string,
}>;

const RightUpArrow = ({ className = '' }: Props) => {
    return (
        <svg className={className} width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#000">

            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

            <g id="SVGRepo_iconCarrier">
                <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" />
            </g>

        </svg>
    )
};

export default RightUpArrow;