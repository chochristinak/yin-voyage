import styled from 'styled-components';

const Hamburger = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 10;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Burger = styled.div`
  width: 2rem;
  height: .25rem;
  border-radius: 10px;
  background-color: black;
  transform-origin: 1px;
  transition: all .03s linear;
`;

export default function HamburgerMenu({ isOpen }) {
  return (
    <Hamburger>
      <Burger className="burger burger1" style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }} />
      <Burger className="burger burger2" style={{ transform: isOpen ? "translateX(100%)" : "translateX(0)", opacity: isOpen ? 0 : 1 }} />
      <Burger className="burger burger3" style={{ transform: isOpen ? "rotate(-45deg)" : "rotate(0)" }} />
    </Hamburger>
  );
}