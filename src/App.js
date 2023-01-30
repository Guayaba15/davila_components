import "./styles.css";
import styled from "styled-components";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <h1>David Dávila Barrios</h1>
        <h2> Práctica de Componentes</h2>

        <Button>Normal</Button>
        <Button primary>Primary</Button>
        <br />

        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
      </div>
    </div>
  );
}
