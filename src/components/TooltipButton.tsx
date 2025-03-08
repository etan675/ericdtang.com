'use client'

import { arrow, FloatingArrow, useClick, useDismiss, useFloating, useInteractions, useTransitionStyles } from '@floating-ui/react';
import classNames from 'classnames';
import React, { useRef, useState } from 'react';

type Props = Readonly<{
    className?: string,
    children: React.ReactNode,
    content: string | React.ReactNode,
    disabled?: boolean
}>;

const TooltipButton = ({ 
    className = '', 
    children,
    content,
    disabled = false,
}: Props) => {
    const [open, setOpen] = useState(false);

    const arrowRef: React.RefObject<SVGSVGElement | null> = useRef(null);

    const { refs, floatingStyles, context } = useFloating({
        open,
        onOpenChange: setOpen,
        middleware: [arrow({ element: arrowRef })],
    });

    const clickProps = useClick(context);
    const dismissProps = useDismiss(context)

    const { getReferenceProps, getFloatingProps } = useInteractions([clickProps, dismissProps]);

    const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
        initial: {
            transform: 'translateY(-6px)',
            opacity: 0
        },
        open: {
            transform: 'translateY(0px)',
            opacity: 1
        }
    });

    return (
        <>
            <div
                ref={refs.setReference}
                className={classNames('select-none', className)}
                {...getReferenceProps()}
            >
                {children}
            </div>
            {(isMounted && !disabled) && (
                <div
                    ref={refs.setFloating}
                    className='z-50'
                    style={{ ...floatingStyles }}
                    {...getFloatingProps()}
                >
                    <div
                        style={{ ...transitionStyles }}
                        className='bg-[var(--foreground)] rounded-md p-4 text-[var(--background)] text-sm min-w-12'
                    >
                        <FloatingArrow
                            ref={arrowRef}
                            context={context}
                            className='fill-[var(--foreground)]'
                        />
                        {content}
                    </div>
                </div>
            )}
        </>
    )
};

export default TooltipButton;