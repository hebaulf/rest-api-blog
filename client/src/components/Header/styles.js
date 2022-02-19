import styled from 'styled-components';

export const StyledHeader = styled.div`
    margin-top: 6rem;

    .header__title {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #444;

        &--sm {
            position: absolute;
            top: 18%;
            font-size: 2rem;
        }

        &--lg {
            position: absolute;
            top: 20%;
            font-size: 10rem;
        }
    }

    img {
        width: 100%;
        height: 45rem;
        margin-top: 8rem;
        object-fit: cover;
    }
`;