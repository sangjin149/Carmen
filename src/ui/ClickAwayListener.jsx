import { Children, cloneElement, useEffect, useRef } from "react";

export default function ClickAwayListener({ children: child, onClickAway }) {
    const ListeningComponentRef = useRef();

    function combineExistingRef(newRef) {
        ListeningComponentRef.current = newRef;

        const childRef = child.ref;

        if (typeof childRef === "function") childRef(newRef);
        else if (childRef) childRef.current = ListeningComponentRef;
    }

    useEffect(() => {
        function handleSomewhereClick(e) {
            const clickedElement = e.target;
            const listenerElement = ListeningComponentRef.current;
            if (!listenerElement.contains(clickedElement)) onClickAway(e);
        }

        document.addEventListener("click", handleSomewhereClick);
        return () => {
            document.removeEventListener("click", handleSomewhereClick);
        };
    }, [onClickAway]);

    const wrppedElement = cloneElement(child, { ref: combineExistingRef });

    return Children.only(wrppedElement);
}
