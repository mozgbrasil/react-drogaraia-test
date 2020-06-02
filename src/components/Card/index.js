import React, { useState } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: #fff;

  .card {
    &__header {
      background: ${props => props.color};
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 2rem;
    }

    &__img-wrapper {
       margin: 0 auto;
    }

    &__img {
      max-width: 100%;
      display: block;
    }

    &__title {
      font-size: 1.5rem;
      font-weight: 300;
      color: #fff;
      margin: 0;
      margin-top: 2rem;
      text-align: center;
    }

    &__content {
      font-size: .9rem;
      padding: 1rem;
      font-weight: 300;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__show-more {
      overflow-y: ${props => (props.showOverflow ? "scroll" : "hidden")};
      max-height: 3rem;
      line-height: 1.25;
    }

    &__footer {
      padding: 1rem;
      text-align: right;
      font-size: 1.2rem;
    }

    &__action {
      background ${props => props.color};
      color: #fff;
      border: none;
      padding: .5rem;
      cursor: pointer;
      font-size: 1.2rem;
    }
  }
`;

function Card(props) {
  const [showOverflow, setShowOverflow] = useState(false);
  const toggleShowOverflow = () => {
    setShowOverflow(!showOverflow);
  };

  function CardText() {
    const showTextOnly = props.text && !showOverflow;

    if (showTextOnly) {
      return <p>{props.text}</p>;
    }

    return (
      <p className="card__show-more">
        {props.text}
        {props.showMoreText}
      </p>
    );
  }

  return (
    <CardWrapper
      color={props.color}
      className="card"
      showOverflow={showOverflow}
    >
      <div className="card__header">
        <div className="card__img-wrapper">
          <img className="card__img" src={props.img} alt="plataform" />
        </div>
        <p className="card__title">{props.title}</p>
      </div>
      <div className="card__content">
        <CardText />
      </div>
      <div className="card__footer">
        <button
          onClick={props.showMoreText ? toggleShowOverflow : props.action}
          className="card__action"
        >
          {props.btnText}
        </button>
      </div>
    </CardWrapper>
  );
}

export default Card;
