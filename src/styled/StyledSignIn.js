import styled, {css} from "styled-components";
import image from '../images/login-background.jpeg'

export const Split = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 20px;

    @media (max-width: 786px) {
        grid-template-columns: 1fr;
    }
}
`;

export const SplitTitle = styled.h1`
  font-size: 42px;
`;

export const SplitImg = styled.img`
  height: 100%;
  width: 100%;
  background-image: url(${image});
`;

// 
// STYLED COMPONENTS FOR SIGN IN PAGE
// 
const sharedStyles = css`
    background-color: #eee;
    height: 30px;
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
