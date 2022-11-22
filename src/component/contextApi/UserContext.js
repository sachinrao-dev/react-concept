import React, { createContext } from "react";

const userContext = createContext();
const UserProvider = userContext.Provider;
const UserConsumer = userContext.Consumer;

export { UserConsumer, UserProvider};