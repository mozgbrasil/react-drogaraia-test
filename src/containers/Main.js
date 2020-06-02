import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import DesktopImg from "../assets/images/desktop-responsive-design.png";
import MobileImg from "../assets/images/mobile-responsive-design.png";
import TabletImg from "../assets/images/tablets-responsive-design.png";
import Card from "../components/Card";
import Popup from "../components/Poppup";

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;

  .title {
    text-align: center;
    font-size: 4rem;
    line-height: 1;
    color: #007f56;
    font-weight: 300;
    letter-spacing: -0.05em;

    @media all and (max-width: 550px) {
      font-size: 3rem;
    }
  }

  .subtitle {
    color: #868686;
    font-weight: 300;
    font-size: 2rem;
    text-align: center;
    margin: 0 20%;

    @media all and (max-width: 550px) {
      font-size: 1.5rem;
    }
  }

  .bold {
    font-weight: 800;
  }

  .colors {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    &__circle {
      width: 20px;
      height: 20px;
      display: block;
      border-radius: 50%;
      margin-right: 0.5rem;

      @media all and (max-width: 550px) {
        width: 15px;
        height: 15px;
      }
    }

    &__code {
      font-size: 2rem;
      font-weight: 300;
      @media all and (max-width: 550px) {
        font-size: 1.2rem;
      }
    }

    li {
      display: flex;
      align-items: center;
      margin-right: 1rem;
      color: #868686;
    }
  }

  .cards-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .card {
    width: 31%;
    @media all and (max-width: 550px) {
      width: 100%;
      margin-bottom: 2rem;
    }
  }
`;

function Content(props) {
  const colors = ["#007f56", "#868686", "#FE9481", "#FCDA92", "#9C8CB9"];
  const [readMore, setReadMore] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [altTheme, setAltTheme] = useState(true);
  const onReadMore = () => {
    setReadMore(!readMore);
  };
  const onShowPopup = () => {
    setShowPopup(true);
  };
  const onChangeTheme = () => {
    setAltTheme(!altTheme);
    return props.onChangeTheme(altTheme);
  };
  const cards = [
    {
      color: "#FE9481",
      img: DesktopImg,
      title: "Site Responsivo DESKTOP",
      text:
        "Quando pressionado o botão Leia mais... o restante da informação deverá aparecer em scroll down.",
      showMoreText: `Quando pressionado o botão Leia mais... o restante da informação deverá aparecer em scroll down.
      Quando pressionado o botão Leia mais... o restante da informação deverá aparecer em scroll down.`,
      btnText: "Leia mais...",
      action: onReadMore
    },
    {
      color: "#FCDA92",
      img: TabletImg,
      title: "Site Responsivo TABLET",
      text:
        "Quando pressionado o botão Leia mais... informação deverá aparecer completa em um popup na tela.",
      btnText: "Leia mais...",
      action: onShowPopup
    },
    {
      color: "#9C8CB9",
      img: MobileImg,
      title: "Site Responsivo MOBILE",
      text:
        "Quando pressionado o botão alterar tema modifique o tema do site para blackfriday a seu gosto.",
      btnText: "Alterar tema",
      action: onChangeTheme
    }
  ];
  const popupText =
    "A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real.";

  return (
    <Main className="Main">
      <h2 className="title">
        Crie este site <span className="bold">responsivo</span> com{" "}
        <span className="bold">REACT</span> utilizando{" "}
        <span className="bold">styled-components</span>
      </h2>

      <h3 className="subtitle">
        A fonte utilizada é a Open Sans de 300 a 800. exemplo: "Open Sans",
        Helvetica, sans-serif, arial; Já as cores são:
      </h3>

      <ul className="colors">
        {colors.map((color, i) => (
          <li key={i}>
            <span
              className="colors__circle"
              style={{ background: color }}
            ></span>
            <span className="colors__code">{color}</span>
          </li>
        ))}
      </ul>

      <section className="cards-section">
        {cards.map((card, i) => (
          <Card
            color={card.color}
            title={card.title}
            text={card.text}
            showMoreText={card.showMoreText}
            img={card.img}
            btnText={card.btnText}
            action={card.action}
            key={i}
          />
        ))}
      </section>

      <Popup
        onClose={() => setShowPopup(false)}
        show={showPopup}
        text={popupText}
      />
    </Main>
  );
}

const mapStateToProps = state => ({
  showAltTheme: state.showAltTheme
});

const mapDispatchToProps = dispatch => ({
  onChangeTheme: value => {
    dispatch({ type: "CHANGE_THEME", value });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
