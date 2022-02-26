import styled from 'styled-components';

export const StyledSettings = styled.div`

    display: flex;

    .settings__wrapper {
        flex: 9;
        padding: 20px;
    }

    .settings__title {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .settings__title-update {
        font-size: 30px;
        margin-bottom: 20px;
        color: lightcoral;
    }

    .settings__title-delete {
        color: red;
        font-size: 12px;
        cursor: pointer;
    }

    .settings__form {
        display: flex;
        flex-direction: column;

        > label {
            font-size: 20px;
            margin-top: 20px;
        }

        > input {
            color: gray;
            margin-top: 10px;
            margin-bottom: 10px;
            height: 30px;
            border: none;
            border-bottom: 1px solid lightgray;
        }
    }

    .settings__pp {
        display: flex;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 10px;
        
        img {
            height: 70px;
            width: 70px;
            border-radius: 20px;
            object-fit: cover;
        }
        
        &__icon {
            width: 25px;
            height: 25px;
            padding: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            border-radius: 50%;
            margin-left: 10px;
            color: white;
            background-color: lightcoral;
            cursor: pointer;
        }

        &__input {
            width: 30%;
        }
    }

    .settings__submit-btn {
        align-self: center;
        width: 150px;
        border: none;
        border-radius: 10px;
        color: white;
        background-color: teal;
        padding: 10px;
        margin-top: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        
        &:hover {
            background-color: rgb(1, 114, 114);
        }
    }
`;