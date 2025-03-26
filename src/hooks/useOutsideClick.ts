import { useEffect, useRef } from "react";

type Props = {
    trigger: boolean,
    handleOutsideClick: () => void
}

const useOutsideClick = ({
    trigger,
    handleOutsideClick,
}: Props) => {

    // ref for the main element.
    const ref = useRef<HTMLElement | null>(null);
    // ref for the element that triggers the main element to appear (usually a button),
    // we might want to exclude it as an 'outside' element as it might have its own onClick that
    // conflicts with this hook's logic.
    const triggerRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        const _handleOutsideClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                if (!triggerRef.current || !triggerRef.current.contains(event.target as Node)) {
                    handleOutsideClick();
                }
            }
        };

        document.addEventListener('click', _handleOutsideClick);

        return () => document.removeEventListener('click', _handleOutsideClick);
    }, [trigger, handleOutsideClick]);

    return { ref, triggerRef };
}

export default useOutsideClick;