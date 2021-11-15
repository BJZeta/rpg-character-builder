import ReactDom from "react-dom";
import styled from "styled-components";

export default function RaceModal({ open, onClose, race }) {
  if (!open) return null;

  const { name, speed, ability_bonuses, alignment, languages, traits } = race;

  return ReactDom.createPortal(
    <>
      <Overlay />
      <Modal>
        <h3>{name}</h3>
        <button onClick={onClose}>CANCEL</button>
      </Modal>
    </>,
    document.getElementById("portal")
  );
}

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: "translate(-50%, -50%)";
  z-index: 1001;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;
