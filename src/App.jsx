import { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 80px 20px;
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
`;

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  padding: 40px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.6);
  }
`;

const StyledHeader = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

const BigButton = styled.button`
  padding: 15px 40px;
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.3);
  margin-top: 20px;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(79, 70, 229, 0.4);
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainContainer>
      <h1>Premium Design Experience</h1>

      <GlassCard>
        <StyledHeader>Glass Content Section — Variant A</StyledHeader>
        <ButtonGroup>
          <button className="btn btn-light px-4 rounded-pill">Light</button>
          <button className="btn btn-dark px-4 rounded-pill">Dark</button>
          <button className="btn btn-outline-primary px-4 rounded-pill">Primary</button>
          <button className="btn btn-outline-success px-4 rounded-pill">Success</button>
          <button className="btn btn-outline-danger px-4 rounded-pill">Danger</button>
        </ButtonGroup>
      </GlassCard>

      <GlassCard>
        <StyledHeader>Interactive Components — Variant B</StyledHeader>
        <ButtonGroup>
          <button className="btn btn-light px-4 rounded-pill">Light</button>
          <button className="btn btn-dark px-4 rounded-pill">Dark</button>
          <button className="btn btn-outline-primary px-4 rounded-pill">Primary</button>
          <button className="btn btn-outline-success px-4 rounded-pill">Success</button>
          <button className="btn btn-outline-danger px-4 rounded-pill">Danger</button>
        </ButtonGroup>
      </GlassCard>

      <BigButton onClick={() => setCount(count + 1)}>
        Active Count: {count}
      </BigButton>
    </MainContainer>
  )
}

export default App
