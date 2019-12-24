import React, {
  useState
} from 'react';
import './App.css';
import styled from 'styled-components';
import TakePhoto from './components/TakePhoto';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

const Container = styled.div`
    padding: 5rem;
    background-color: #f3f3f3;
    width: 400px;
    height: auto;
    margin: 0 auto;
`;
const Appstart = styled.div`
  margin: 0 auto;
  width: 100px;
  height: 100px;
  background-color: #53ce3475;
  color:white;
  font-family:san-serif;
  font-size: xx-large;
  border-radius: 15px;
  text-align: center;
  line-height: 90px;
  cursor:pointer;
  -webkit-box-shadow: 2px 5px 3px 2px rgba(0,0,0,0.75);
`;


const App = () => {
  const [snapPhoto, setSnapPhoto] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const AppStartBtn = () => {
    return (
      <Appstart
        onClick={
          () => setSnapPhoto(true)
        }>
        Start
      </Appstart>
    );
  }

  return (
    <Container>
      <SweetAlert
        show={showAlert}
        title="Success!"
        text="Photo Successfully Sent!"
        onConfirm={() => setShowAlert(false)}
      />
      {
        (snapPhoto === false)
          ?
          <AppStartBtn />
          :
          <TakePhoto
            setSnapPhoto={setSnapPhoto}
            setShowAlert={setShowAlert}
          />
      }
    </Container>
  );
}

export default App;