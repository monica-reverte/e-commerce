import { useAuthContext } from '../../context/authContext';
import { FaHeart } from "react-icons/fa";

export function WishIcon() {
    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        <div>
            <FaHeart />
        </div>
    }
}