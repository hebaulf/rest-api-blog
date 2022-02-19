import styled from 'styled-components';

export const StyledWrite = styled.div`
    padding-top: 50px;

    .write__img {
        margin-left: 150px;
        width: 70vw;
        height: 250px;
        border-radius: 10px;
        object-fit: cover;
    }

    .write__form {
        position: relative;
    }

    .write__form-group {
        margin-left: 150px;
        display: flex;
        align-items: center;
    }

    .write__icon {
        width: 25px;
        height: 25px;
        font-size: 20px;
        border: 1px solid;
        border-radius: 50%;
        color: rgb(129, 125, 125);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .write__input {
        font-size: 30px;
        border: none;
        padding: 20px;
        width: 70vw;

        &::placeholder {
            color: rgb(189, 185, 185);
            font-weight: 400;
        }

        &:focus {
            outline-style: none;
        }
    }
    
    .write__text {
        width: 70vw;
        height: 100vh;
        font-family: inherit;
        font-size: 20px;
    }

    .write__submit {
        position: absolute;
        top: 20px;
        right: 50px;
        color: white;
        background-color: teal;
        padding: 10px;
        border: none;
        border-radius: 10px;
        font-size: 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
`;