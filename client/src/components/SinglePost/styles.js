import styled from 'styled-components';

export const StyledSinglePost = styled.div`
    flex: 9;

    .single-post {
        &__wrapper {
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
            text-align: center;
            margin: 1rem;
            font-size: 2.8rem;
            font-family: "Lora", sans-serif;
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
            font-family: "Varela Round", Arial, Helvetica, sans-serif;
        }

        &__author{
            margin-left: 5px;
        }

        &__desc {
            color: #666;
            font-size: 1.8rem;
            line-height: 2.5rem;

            &::first-letter {
                margin-left: 2rem;
                font-size: 3rem;
                font-weight: 600;
            }
        }
    }
`;