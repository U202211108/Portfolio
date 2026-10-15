
import { profile } from "../data/portfolio";

export function getWhatsAppUrl(message: string): string {
    const phone = profile.phone.replace(/\D/g, "");

    if (!phone) {
        return "https://wa.me/";
    }

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
