import React from "react";
import styled from "styled-components";
import Logo4Bio from "../../assets/images/logo_4bio.png";
import LogoDrogaraia from "../../assets/images/logo_drogaraia.png";
import LogoDrogasil from "../../assets/images/logo_drogasil.png";
import LogoFarmasil from "../../assets/images/logo_farmasil.png";
import LogoSmall from "../../assets/images/logo_small.png";
import LogoUnivers from "../../assets/images/logo_univers.png";

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 1rem auto;
  flex-wrap: wrap;
  @media all and (max-width: 550px) {
    justify-content: center;
  }

  .copyright {
    color: #868686;
    font-weight: 300;
    font-size: 0.9rem;
  }

  .logos {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    @media all and (max-width: 550px) {
      justify-content: center;
    }

    &__logo {
      margin-right: 1rem;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

function SiteFooter() {
  const logos = [
    { src: LogoDrogaraia, key: 1 },
    { src: LogoDrogasil, key: 2 },
    { src: LogoFarmasil, key: 3 },
    { src: LogoUnivers, key: 4 },
    { src: Logo4Bio, key: 5 }
  ];

  return (
    <Footer className="site-footer">
      <span className="copyright">RD 2017. Todos os direitos reservados</span>

      <ul className="logos">
        {logos.map(logo => (
          <li className="logos__logo" key={logo.key}>
            <img src={logo.src} alt="logo" />
          </li>
        ))}
      </ul>

      <img src={LogoSmall} alt="Logo RaiaDroga" />
    </Footer>
  );
}

export default SiteFooter;
