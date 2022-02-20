import styled from 'styled-components';

export const StyledSinglePost = styled.div`
    flex: 9;

    .single-post {
        &__wrapper {
            display: flex;
            flex-direction: column;
            padding: 2rem;
            padding-right: 0;
        } 

        &__img {
            width: 100%;
            height: 30rem;
            border-radius: .5rem;
            object-fit: cover;
        }

        &__title {
            margin: 1rem;
            font-family: "Lora", sans-serif;
            font-size: 2.8rem;
            text-align: center;

            &--input {
                margin: 1rem;
                color: gray;
                font-family: "Lora", sans-serif;
                font-size: 2.8rem;
                text-align: center;
                border: none;
                border-bottom: 1px solid lightgray;

                &:focus {
                    outline: none;
                }
            }
        }

        &__edit {
            float: right;
            font-size: 1.6rem;
        }

        &__icon {
            margin-left: 1rem;
            cursor: pointer;

            &:first-child {
                color: teal;
            }
            &:last-child {
                color: tomato;
            }
        }

        &__info {
            margin-bottom: 2rem;
            display: flex;
            justify-content: space-between;
            font-size: 1.6rem;
            color: #be9656;
        }

        &__author{
            margin-left: 5px;
        }

        &__desc {
            color: #666;
            font-size: 1.8rem;
            line-height: 2.5rem;

            &--input {
                color: #666;
                font-size: 1.8rem;
                line-height: 2.5rem;
                border: none;

                &:focus {
                    outline: none;
                }
            }

            &__btn {
                align-self: flex-end;
                width: 10rem;
                margin-top: 2rem;
                padding: .5rem;
                color: white;
                background-color: teal;
                border: 1px solid teal;
                border-radius: .5rem;
                cursor: pointer;
            }

            &::first-letter {
                margin-left: 2rem;
                font-size: 3rem;
                font-weight: 600;
            }
        }
    }
`;