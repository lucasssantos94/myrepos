import styled from "styled-components";


export const Container = styled.div`
    max-width: 700px;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 30px;
    margin: 80px auto;
    
    h1 {
        font-size: 30px;
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 10px;
       
    }
`;

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    input {
        flex: 1;
        border: 1px solid #DDD;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 18px;
    }
`;

export const SubmitButton = styled.button.attrs({
    type: 'submit'})`
    background: #0D2636;
    border: 0;
    padding: 0 15px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-weight: bold;   
`;

