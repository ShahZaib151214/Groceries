import { createContext } from "react";

const Context = createContext({ login: false, setLogin: () => {} });

export default Context;
