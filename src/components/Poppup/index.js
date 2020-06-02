import React from "react";
import styled from "styled-components";

const PopupWrapper = styled.div`
  width: 400px;
  max-width: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  background: #fff;
  display: ${props => (props.show ? "block" : "none")};

  .popup {
    &__text {
      padding: 2rem;
      word-wrap: break-word;
      font-weight: 300;
    }

    &__footer {
      padding: 1rem 2rem;
      text-align: right;
    }

    &__btn {
      border: none;
      padding: 0.5rem;
      cursor: pointer;
    }
  }
`;

function Popup(props) {
  return (
    <PopupWrapper className="popup" show={props.show}>
      <div>
        <p className="popup__text">{props.text}</p>
      </div>
      <hr />
      <div className="popup__footer">
        <button className="popup__btn" onClick={props.onClose}>
          Fechar
        </button>
      </div>
    </PopupWrapper>
  );
}

export default Popup;
