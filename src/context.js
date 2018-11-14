import { createContext } from 'react';
const defaultData = [];
export default ({ Provider, Consumer } = createContext(defaultData));
