import styled, {css} from 'styled-components'
// import {Link} from 'react-router-dom'

// // settings
// const titleFontFamily = 'Lobster'
// const fontFamily = 'Roboto'
const accentColor = '#E00DDD'

// const GlobalStyle = createGlobalStlye`
//         font-family: Arial, Helvetica, sans-serif;
//         background: linear-gradient(to bottom, #f05053, #e1eec3);
//         height: 100%;
//         margin: 0;
//         color: #555;
//  `;

// 
// STYLED COMPONENTS FOR SIGN IN PAGE
// 
const sharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`;

export const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
    
`;
export const StyledForm = styled.form`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    `;

export const StyledInput = styled.input`
    display: block;
    width: 100%;
    ${sharedStyles}
    `;

export const StyledTextArea = styled.textarea`
    background-color: #eee;
    width: 100%;
    min-height: 100px;
    resize: none;
    ${sharedStyles}
    `;
export const StyledButton = styled.button`
    display: block;
    background-color: #20232B;
    color: #fff;
    font-size: 0.9rem;
    border: 0;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
    `;

// END OF STYLED COMPONENTS FOR SIGN IN 

// 
// 
// Styled quotes
export const StyledQuote = styled.form`
    width: 80%;
    max-width: 600px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    margin: 20px;
    `;

// // container formatting
// export const Page = styled.div `
//     margin: 1em;
//     font-family: ${fontFamily};
//     width: 90vw;
// `
export const Block = styled.div `
    display: grid;
    width: 100vw;
`
// export const Row = styled.div `
//     display: flex;
// `

// // text formatting
// export const Title = styled.h1 `
//     font-family: ${titleFontFamily};
//     font-size: 3em;
// `
// export const PostTitle = styled.h1 `
//     color: ${accentColor};
// `
export const ErrorText = styled.p `
    color: red;
`

// form formatting
export const InputButton = styled.input `
    background-color: ${accentColor};
    color: white;
    padding: .2em;
    border: none;
    font-size: 1.2em;
    width: 200px;
`
export const Input = styled.input `
    width: 60vw;
    margin: .5em;
`

export const Label = styled.label `
    font-size: 1.2em;
`
// export const TextArea = styled.textarea `
//     height: 200px;
//     margin: .5em;
//     width: 70vw;
// `

// edit and delete buttons
export const Button = styled.button `
    background-color: ${accentColor};
    color: white;
    width: 100px;
    padding: .2em;
    border: none;
    font-size: 1.2em;
    margin: 1em;
`

// // link formatting
// export const Navvie = styled(Link) `
//     font-size: 1.2em;
//     text-decoration: none;
//     color: ${accentColor};
//     margin: 1em;
//     padding: .2em .5em;
// `
// export const BlogLink = styled(Link) `
//     color: black;
//     text-decoration: none;
// `