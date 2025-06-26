import { createContext, useState, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
  login: (access: string, refresh: string, user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  user: null,
  login: () => null,
  logout: () => null,
});

interface User {
  id: number;
  iin: string;
  email: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  date_of_birthday: string;
  address: string;
  phone_number: number;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const access = localStorage.getItem("accessToken");
    const refresh = localStorage.getItem("refreshToken");
    const storedUser = localStorage.getItem("userData");
    if (access && refresh && storedUser) {
      setAccessToken(access);
      setRefreshToken(refresh);
      setUser(JSON.parse(storedUser));
      setAuthenticated(true);
    }
  }, []);

  const login = (access: string, refresh: string, user: User) => {
    localStorage.setItem("accessToken", access);
    localStorage.setItem("refreshToken", refresh);
    localStorage.setItem("userData", JSON.stringify(user));
    setAccessToken(access);
    setRefreshToken(refresh);
    setUser(user);
    setAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userData");
    setAccessToken(null);
    setRefreshToken(null);
    setUser(null);
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        accessToken,
        refreshToken,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
