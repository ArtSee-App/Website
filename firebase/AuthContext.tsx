// src/contexts/AuthContext.tsx
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { onAuthStateChanged, signInAnonymously, User } from 'firebase/auth';
import { auth } from './firebaseConfig'; // Import your Firebase configuration

interface AuthContextType {
    user: User | null;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    console.log(user?.uid)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            } else {
                signInAnonymously(auth)
                    .then((result) => {
                        setUser(result.user);
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.error('Anonymous sign-in failed', error);
                        setLoading(false);
                    });
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
