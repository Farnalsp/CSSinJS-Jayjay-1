import styled from "styled-components";

const StyledContainer = styled.div`
    text-align: center;
    padding: 20px;
    background: snow
`;
const Title = styled.h1`
    font-size: 1.5em;
    font-weight: bold;
    font-family: sans-serif;
    color: #333;
    color: red;

`;
const StyledButton = styled.button`
    font-size: 1.5em;
    background: white;
    font-family: sans-serif;
    font-weight: bold;
    color: #333;
    :hover {
        color: blue;
    }
    padding: 8px 16px;
    color: blue;
    border: 1px solid #333;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
`;
const StyledBut = styled.button`
    font-size: 1.5em;
    background: white;
    font-family: sans-serif;
    color: #333;
    font-weight: bold;
    padding: 8px 16px;
    color: red;
    border: 1px solid #333;
    border-radius: 10px;
    margin: 15px;
    cursor: pointer;
    :hover {
        background: blue;
        color: white;
    }
`;
const StyledParagraph = styled.p`
    font-size: 1.5em;
    font-weight: bold;
    font-family: sans-serif;
    color: #333;
    color: blue;
`;
export { Title, StyledButton, StyledParagraph, StyledBut, StyledContainer};