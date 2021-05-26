import light from './light';
import dark from './dark';
import createMuiTheme, { Theme, ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { enUS, frFR } from '@material-ui/core/locale';

const themes:{[index:string]:ThemeOptions } = {light, dark};

export default function getTheme(theme: string, lang: string) :Theme {
    let langObject = enUS;
    switch (lang) {
        case 'fr':
            langObject = frFR;
            break;
        default:
            break;
    }

    return createMuiTheme(themes[theme], langObject);
}