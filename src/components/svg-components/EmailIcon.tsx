import React from 'react';

type Props = Readonly<{
    className?: string,
    fill?: string
    stroke?: string
}>;

const EmailIcon = ({ className = '', fill = '#fff', stroke = '#000' }: Props) => {
    return (
        <svg className={className} fill={fill} stroke={stroke} width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
                <rect x="8" y="12" width="48" height="40" />
                <polyline points="56 20 32 36 8 20" />
            </g>
        </svg>
    )
};

export default EmailIcon;