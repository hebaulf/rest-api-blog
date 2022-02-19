import { StyledHeader } from './styles';

const Header = () => {
  return (
    <StyledHeader className="header">
      <div className="header__title">
        <span className="header__title--sm">React & Node</span>
        <span className="header__title--lg">Blog</span>
      </div>
      <img className="header__img" src="https://images.unsplash.com/photo-1645105263866-ed2be8e07981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1253&q=80" alt="" />
    </StyledHeader>
  )
}

export default Header;