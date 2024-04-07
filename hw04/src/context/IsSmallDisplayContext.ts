import { Context, createContext } from "react";

const IsSmallDisplayContext = createContext<boolean | undefined>(undefined);

export default IsSmallDisplayContext as Context<boolean>;
