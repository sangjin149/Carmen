import { useEffect } from "react";

export default function useClickAway(ref, onClickAway) {
    useEffect(() => {
        function handleSomewhereClick(e) {
            const clickedElement = e.target;
            const listenerElement = ref.current;
            if (!listenerElement.contains(clickedElement)) onClickAway(e);
        }

        document.addEventListener("click", handleSomewhereClick);
        return () => {
            document.removeEventListener("click", handleSomewhereClick);
        };
    }, [ref, onClickAway]);
}
