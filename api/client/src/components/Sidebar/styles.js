import styled from 'styled-components';

export const StyledSidebar = styled.div`
    display: flex;
    flex: 3;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    padding-bottom: 3rem;
    background-color: #fdfbfb;
    border-radius: 1rem;
    
    p {
        padding: 3rem;
    }

    .sidebar__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        img {
            margin-top: 1.5rem;
        }
    }

    .sidebar__title {
        margin: 1rem;
        padding: .5rem;
        width: 80%;
        color: #222;
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 2rem;
        text-align: center;
        text-transform: uppercase;
        border-top: 1px solid #a7a4a4;
        border-bottom: 1px solid #a7a4a4;
    }

    .sidebar__list {
        list-style: none;
        margin-bottom: 3rem;

        &__item {
            display: inline-block;
            width: 50%;
            margin-top: 1.5rem;
            cursor: pointer;
        }
    }

    .sidebar__social {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25rem;
        margin-top: 1.5rem;

        &__icon {
            font-size: 1.6rem;
            margin-left: 1.5rem;
            cursor: pointer;
        }
    }
`;