import React from 'react';
import axios, { AxiosInstance } from 'axios';

export type GlobalContextProps = {
    authenticated: boolean,
    setAuthenticated(auth: boolean): void,
    userImage: string,
    lang: string,
    setLang(lang: string): void
    currentTheme: string,
    setTheme(name: string): void,
    axiosInstance: AxiosInstance
};

// eslint-disable-next-line no-unused-vars
const GlobalContext = React.createContext<GlobalContextProps>(
    {
        currentTheme: 'dark',
        setTheme: () => { },
        authenticated: false,
        setAuthenticated: () => { },
        userImage: "",
        lang: 'en',
        setLang: () => { },
        axiosInstance: new Proxy(axios.create(), {
            apply: () => {
                throw new Error('You must wrap your component in a CustomProvider');
            },
            get: () => {
                throw new Error('You must wrap your component in a CustomProvider');
            },
        })
    });

export default GlobalContext;