import React from 'react'
import styled from 'styled-components';
import axios from 'axios';

const BtnWrapper = styled.div`
    width:260px;
    display:flex;
    flex-direction:row;
`;
const Buttons = styled.div`
    width:inherit;
    height:50px;
    border:solid 1px #173c0ed4;
    background-color:${props => (props.bgColor) ? props.bgColor : '#ccc'};
    border-radius:5px;
    color:white;
    font-family:san-serif;
    font-size: xx-large;
    border-radius: 5px;
    text-align: center;
    line-height: 40px;
    cursor:pointer;
`;
const SendMailBtn = ({ dataUri, setDataUri, setShowAlert, setSnapPhoto }) => {
    const SendMail = (dataUri) => {
        const body = {
            base64Data: dataUri
        };
        axios.post('/api/upload', body)
            .then(response => {
                setShowAlert(true);
                setSnapPhoto(false);
                // console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <BtnWrapper>
            <Buttons bgColor={'#bd1414c4'} onClick={() => setDataUri('')}>
                Retake
            </Buttons>
            <Buttons bgColor={'#53ce3475'} onClick={() => SendMail(dataUri)}>
                Send
            </Buttons>
        </BtnWrapper>
    )
}

export default SendMailBtn;
