import { createContext } from 'react';

const clickAwayDefault = { clickedElement: null };

const clickAwayContext = createContext(clickAwayDefault);

export default clickAwayContext;
