import { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
  background-color: #707583e1;
  color: white;
`;

const Page1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
  background-color: #414345e1;
  color: white;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #2563eb;
  }
`;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Page>
        <h1>This is a styled components - for div with special styles</h1>
        <div>
          <button className="btn btn-light">Light</button>
          <button className="btn btn-dark">Dark</button>
          <button className="btn btn-outline-primary">Primary</button>
          <button className="btn btn-outline-success">Success</button>
          <button className="btn btn-outline-danger">Danger</button>
        </div>
      </Page>
      <br></br>
      <Page1>
        <h1>This is a styled components - for div with special styles</h1>
        <div>
          <button className="btn btn-light">Light</button>
          <button className="btn btn-dark">Dark</button>
          <button className="btn btn-outline-primary">Primary</button>
          <button className="btn btn-outline-success">Success</button>
          <button className="btn btn-outline-danger">Danger</button>
        </div>
      </Page1>

      <br />
      <Button onClick={() => setCount(count + 1)}>
        Count is {count}
      </Button>
    </>
  )
}

export default App
