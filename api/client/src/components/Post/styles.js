import styled from 'styled-components';

export const StyledPost = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
        width: 50%;
    }

    @media (min-width: 1220px) {
        width: 33.33333%;
    }

    @media (min-width: 1990px) {
        width: 33.33333%;
    }

    .post__img {
        height: 280px;
        margin-bottom: 1.5rem;
        object-fit: cover;
        border-radius: 7px;
    }

    .post__info {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .post__cat {
        font-family: "Varela Round", Arial, Helvetica, sans-serif;
        font-weight: 400;
        font-size: 11px;
        color: #be9656;
        line-height: 19px;
        margin-top: 15px;
        margin-right: 10px;
        cursor: pointer;
    }

    .post__title {
        font-size: 24px;
        margin-top: 15px;
        cursor: pointer;
    }

    .post__date {
        font-family: serif;
        font-style: italic;
        font-size: 13px;
        font-weight: 300;
        color: #999999;
        margin-top: 15px;
    }

    .post__desc {
        font-weight: 300;
        font-size: 16px;
        line-height: 1.5;
        color: #444444;
        margin-top: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
`;