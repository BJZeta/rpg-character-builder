import ReactDom from "react-dom";
import TraitDetails from "./TraitDetails";
import styled from "styled-components";

export default function RaceModal({ open, onClose, race, icon }) {
  if (!open) return null;

  const {
    name,
    speed,
    ability_bonuses,
    alignment,
    languages,
    traits,
    age,
    size_description,
  } = race;

  return ReactDom.createPortal(
    <>
      <Overlay />
      <Modal>
        <div className="modal-header">
          <h3>Confirm Race</h3>
          <Buttons>
          <button onClick={onClose}>SELECT</button>
          <button onClick={onClose}>CANCEL</button>
        </Buttons>
        </div>
        <div className="modal-top-section">
          <div className="text-section">
            <h3>{name}</h3>
            <p>{`${alignment} ${age} ${size_description}`}</p>
          </div>
          <img src={icon} alt={name} />
        </div>
        <div className="racial-traits">
          <h4>Racial Traits</h4>
          <p>
            {ability_bonuses.map((bonus) => {
              return `${bonus.bonus} ${bonus.ability_score.name} -`;
            })}
          </p>
          <p>
            {traits.map((trait) => {
              return `${trait.name} -`;
            })}
          </p>
        </div>
        <section>
          {traits.map((trait) => {
            return <TraitDetails trait_name={trait.index} />;
          })}
        </section>
        
      </Modal>
    </>,
    document.getElementById("portal")
  );
}

const Modal = styled.div`
  position: fixed;
  top: 10%;
  left: 10%;
  max-width: 550px;
  max-height: 700px;
  transform: "translate(-50%, -50%)";
  z-index: 1001;
  background-color: #fff;
  overflow: scroll;
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

const Buttons = styled.div`
`;
