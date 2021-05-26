import React, { ReactNode, useState, useContext, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import getTheme from '../themes/base';
import { AxiosInstance } from 'axios';
import GlobalContext from './GlobalContext';

export type Props = {
    children: ReactNode,
    axiosInstance: AxiosInstance
};

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = (props:Props) => {
    // eslint-disable-next-line react/prop-types
    const { children, axiosInstance } = props;    

    // Read current values from localStorage or maybe from an api
    const currentTheme = localStorage.getItem('appTheme') || 'dark';
    const currentLang = localStorage.getItem('appLang') || 'en';

    // State to hold the selected theme name
    const [themeName, _setThemeName] = useState(currentTheme);
    const [currLang, _setCurrLang] = useState(currentLang);
    const [auth, setAuth] = useState(false);
    const [userImage, setUserImage] = useState<string>("");

    // Retrieve the theme object by theme name
    const theme = getTheme(themeName, currLang);

    // Wrap _setThemeName to store new theme names in localStorage
    const setThemeName = (name: string) => {
        localStorage.setItem('appTheme', name);
        _setThemeName(name);
    };

    const setLang = (name: string) => {
        localStorage.setItem('appLang', name);
        _setCurrLang(name);
    };

    const getCurrAuth = async () => {
        let res = await axiosInstance.get('/auth/session');
        setAuth(res.data.authenticated);
        setUserImage(res.data.userAvatar);
    };

    useEffect(() => {
        getCurrAuth();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Updating the context to be passed to children components
    const contextValue = {
        currentTheme: themeName,
        setTheme: setThemeName,
        axiosInstance: axiosInstance,
        setAuthenticated: setAuth,
        authenticated: auth,
        userImage: userImage,
        lang: currLang,
        setLang: setLang
    };

    return (
        <GlobalContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;