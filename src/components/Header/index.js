import React from "react";
import styled from "styled-components";
import Logo from "../../assets/images/logo.png";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  max-width: 1200px;
  padding-bottom: 0.5rem;
  margin: 0 auto;

  .site-header {
    &__img-wrapper {
      width: 15%;
      display: flex;
      align-items: center;

      @media all and (max-width: 650px) {
        width: 20%;
      }

      @media all and (max-width: 430px) {
        display: none;
      }
    }

    &__img {
      width: 100%;
    }
  }

  .navigation {
    font-size: 1.5em;
    color: #007f56;

    @media all and (max-width: 430px) {
      width: 100%;
    }

    &__list {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;

      @media all and (max-width: 430px) {
        justify-content: center;
      }
    }

    &__item {
      margin-right: 1rem;

      &:last-child {
        margin-right: 0;
      }
    }

    &__item-text {
      font-weight: 300;
      color: #007f56;
      text-transform: uppercase;
      font-size: 1.2rem;
      cursor: pointer;

      &:hover {
        color: #fe9481;
        text-decoration: underline;
      }

      @media all and (max-width: 590px) {
        font-size: 1rem;
      }
    }
  }
`;

function SiteHeader() {
  return (
    <Header className="site-header">
      <div className="site-header__img-wrapper">
        <img
          className="site-header__img"
          src={Logo}
          alt="Logo RaiaDrogasil S.A"
        />
      </div>

      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <span className="navigation__item-text">HTML5</span>
          </li>
          <li className="navigation__item">
            <span className="navigation__item-text">CSS3</span>
          </li>
          <li className="navigation__item">
            <span className="navigation__item-text">Javascript</span>
          </li>
          <li className="navigation__item">
            <span className="navigation__item-text">React</span>
          </li>
          <li className="navigation__item">
            <span className="navigation__item-text">Redux</span>
          </li>
        </ul>
      </nav>
    </Header>
  );
}

export default SiteHeader;
