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
            top: 10rem;
            font-size: 2rem;
        }

        &--lg {
            position: absolute;
            top: 11.3rem;
            font-family: 'BioRhyme Expanded', serif;
            font-size: 10rem;
        }
    }

    img {
        display: block;
        width: 100%;
        height: 45rem;
        margin-top: 8rem;
        object-fit: cover;
    }
`;