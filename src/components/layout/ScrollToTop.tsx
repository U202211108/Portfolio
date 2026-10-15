
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Espera a que React renderice la página de destino.
            const frame = requestAnimationFrame(() => {
                const id = decodeURIComponent(hash.slice(1));
                const target = document.getElementById(id);

                if (target) {
                    target.scrollIntoView({
                        behavior: "auto",
                        block: "start",
                    });
                } else {
                    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                }
            });

            return () => cancelAnimationFrame(frame);
        }

        // Toda ruta sin fragmento comienza desde arriba.
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, [pathname, hash]);

    return null;
}
