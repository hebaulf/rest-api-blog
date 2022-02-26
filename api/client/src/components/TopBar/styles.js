import styled from 'styled-components';

export const StyledTopbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.topbar};
  color: ${({ theme }) => theme.colors.titles};
  z-index: 99;

    .top {
        &__left,
        &__right {
            display: flex;
            flex: 3;
            align-items: center;
            justify-content: center;
        }

        &__center {
            flex: 6;
        }

        &__social-icon {
            font-size: 2rem;
            margin-right: 1rem;
            cursor: pointer;
        }

        &__search-icon {
            margin-left: 1.5rem;
            cursor: pointer;
        }

        &__list {
            display: flex;
            justify-content: center;
            margin: 0;
            padding: 0;
            list-style: none;
            
            &__item {
                margin-right: 2rem;
                font-size: 1.8rem;
                font-weight: 300;
                cursor: pointer;
            }
        }
    }
`;

export const StyledNavigation = styled.ul`
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
    
    .top__list__item {
        margin-right: 2rem;
        font-size: 1.8rem;
        font-weight: 300;
        cursor: pointer;
    }
`;

export const StyledUserImage = styled.img`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    object-fit: cover;
`;