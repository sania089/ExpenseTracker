import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{ 
        margin: 0;
       padding: 0;
       box-sizing: border-box;
        list-style: none;
    }

    :root{
        --primary-color: #222260;
        --primary-color2: 'color: rgba(34, 34, 95, .6)';
        --primary-color3: 'color: rgba(34, 34, 95, .4)';
        --color-green: #42AD00;
        --color-grey: #aaa;
        --color-accent: #F56692;
        --color-delete: #FF0000;
    }
    body{
        font-family: 'Nunito Sans', sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        overflow: hidden;
        color: rgba(34, 34, 96, .6);
    }

    h1, h2, h3, h4, h5, h6{
        color: var--primary-color);
        }
`;