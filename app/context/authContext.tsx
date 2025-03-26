import { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";


interface AuthContextProps {
    isAuthenticated: boolean;
    login: (user: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

// Definindo a interface para o contexto
export const AuthContext = createContext<AuthContextProps>({
    isAuthenticated: false,
    login: async () => {},
    logout: async () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkLoginStatus = async() => {
            const token = await AsyncStorage.getItem("token");
            setIsAuthenticated(!!token);
       }
       checkLoginStatus();
    }, []);

    const login = async(user: string, password: string) => {
        try{
            const response = await fetch("http://192.168.0.103:3000/users/authentication", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user, password }),
            });

            const data = await response.json();
        
            if(response.ok){
                await AsyncStorage.setItem("token", data.token);
                setIsAuthenticated(true);
            } else {
                throw new Error("Usuário ou senha incorretos.");
            } 
        } catch(error: any){
            console.log(error);
            Alert.alert(error.toString());
        }
    };

    const logout = async() => {
        await AsyncStorage.removeItem("token");
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
          {children}
        </AuthContext.Provider>
      );
}
