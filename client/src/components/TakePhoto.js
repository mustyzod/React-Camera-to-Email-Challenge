import React, { useState } from 'react';
// import React from 'react';

import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import ImagePreview from './ImagePreview';
import 'react-html5-camera-photo/build/css/index.css';
import SendMailBtn from './SendMailBtn';
import styled from 'styled-components';

const PreviewWrapper = styled.div`
    width:260px;
    margin:0 auto;
`;

const TakePhoto = ({ setSnapPhoto }) => {
    const [dataUri, setDataUri] = useState('');
    // const [imageNumber, setImageNumber] = useState(0);

    // function handleTakePhoto(dataUri) {
    //     // Do stuff with the photo...
    //     // downloadImageFile(dataUri, imageNumber);
    //     // setImageNumber(imageNumber + 1);
    //     console.log('takePhoto');
    //     // alert(dataUri);
    // }


    function handleTakePhotoAnimationDone(dataUri) {
        // console.log('takePhoto');
        setDataUri(dataUri);
        // setMailButton(true);
        // handleCameraStop();
    }




    const isFullscreen = false;
    return (
        <React.Fragment>
            {
                (dataUri)
                    ?
                    <PreviewWrapper>
                        <ImagePreview dataUri={dataUri}
                            isFullscreen={isFullscreen}
                        />
                        <SendMailBtn dataUri={dataUri} setDataUri={setDataUri} />
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