import { createContext, useContext, useMemo, useState } from 'react';

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider
      value={useMemo(
        () => ({
          user,
          setUser
        }),
        [user]
      )}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  return context;
}
