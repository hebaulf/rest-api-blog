import styled from 'styled-components';

export const StyledRegister = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-size: cover;

    .register__title {
        font-size: 50px;
    }

    .register__form {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        
        > label {
            margin: 10px 0;
        }
    }

    .register__input {
        padding: 10px;
        background-color: white;
        border: none;
        border-radius: 10px;
        
        &:focus {
            outline: none;
        }
    }

    .register__btn {
        margin-top: 20px;
        cursor: pointer;
        background-color: teal;
        color: white;
        padding: 10px;
        border: none;
        border-radius: 10px;
        text-align: center;
    }

    .register__login-btn {
        position: absolute;
        top: 60px;
        right: 20px;
        background-color: lightcoral;
        cursor: pointer;
        padding: 10px;
        border: none;
        color: white;
        border-radius: 10px;
    }
`;