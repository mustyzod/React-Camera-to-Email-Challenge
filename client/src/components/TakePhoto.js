import React, { useState } from 'react';

import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import ImagePreview from './ImagePreview';
import 'react-html5-camera-photo/build/css/index.css';
import SendMailBtn from './SendMailBtn';
import styled from 'styled-components';

const PreviewWrapper = styled.div`
    width:260px;
    margin:0 auto;
`;
const Buttons = styled.div`
    margin:0 auto;
    width:260px;
    height:50px;
    border:solid 1px #14610a;
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
const TakePhoto = ({ setSnapPhoto, setShowAlert }) => {
    const [dataUri, setDataUri] = useState('');


    const handleTakePhotoAnimationDone = (dataUri) => {
        // console.log('takePhoto');
        setDataUri(dataUri);
    }

    const isFullscreen = false;
    return (
        <React.Fragment>
            <Buttons bgColor={"#ccc"} onClick={() => setSnapPhoto(false)}>
                Home
            </Buttons>
            {
                (dataUri)
                    ?
                    <PreviewWrapper>
                        <ImagePreview dataUri={dataUri}
                            isFullscreen={isFullscreen}
                        />
                        <SendMailBtn
                            dataUri={dataUri}
                            setDataUri={setDataUri}
                            setShowAlert={setShowAlert} s
                            setSnapPhoto={setSnapPhoto}
                        />
                    </PreviewWrapper>
                    :
                    <PreviewWrapper>
                        <Camera
                            onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
                            isFullscreen={isFullscreen}
                            idealFacingMode={FACING_MODES.ENVIRONMENT}
                        />
                    </PreviewWrapper>
            }
        </React.Fragment>
    );
}
export default TakePhoto;