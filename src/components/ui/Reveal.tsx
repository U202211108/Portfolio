
import {
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from "react";

import "../../styles/Reveal.css";

interface RevealProps {
    children: ReactNode;
    className?: string;
}

export default function Reveal({
    children,
    className = "",
}: RevealProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) return;

        if (
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.12 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={elementRef}
            className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
        >
            {children}
        </div>
    );
}
