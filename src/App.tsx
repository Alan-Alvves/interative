import { Title, Texto2 } from "./components/title/Title";
import { Button, Button2 } from "./components/button/Button";
import './components/button/Button.css'
import "./styles/global.css";
import Star from './images/icon-star.svg';

function App() {
  return (
    <div className="container">
      <div className="containerBox">
        <div className="starStyle">
        <img src={Star} alt="icon-star" />
        </div>
        <Title texto="How did we do?"/> 
        <Texto2 texto2="Please let us know we did with your support request. All feedback is appreciated to help us improve our offering!"/>
        <div className="buttonDiv">
          <Button text="1"/>
          <Button text="2"/>
          <Button text="3"/>
          <Button text="4"/>
          <Button text="5"/>
        </div>
        <div className="buttonDiv2">
        <Button2 text="SUBMIT"/>
        </div>
      </div>
    </div>
  );
}

export default App;
