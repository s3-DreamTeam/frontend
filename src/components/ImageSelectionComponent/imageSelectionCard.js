import { useEffect, useRef, useState } from "react";
import { ImageFromExplorerEvent } from "../../utils/imageSelectionHandler";
import { ImageSelectionEmpty } from "./imageSelectionEmpty";
import { ImageSelectionWithImage } from "./imageSelectionWithImage";
import { ImageSelectionLoading } from "./imageSelectionLoading";

export const ImageSelectorCard = ({
    onImageChanged,
    onFileNameChanged,
    onResetSelection,
    isError,
    image = null,
    disabled
}) => {

    //const [selectedImage, setSelectedImage] = useState(image);
    const [imageLoading, setImageLoading] = useState(false);
    const [imageName, setImageName] = useState('No image');
    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        setImageLoading(true);
        ImageFromExplorerEvent(event, nameChanged, imageLoaded, () => { });
    };

    function clearClicked() {
        setImageName(null);
        onResetSelection();
    }

    function imageLoaded(image) {
        setImageLoading(false);
        onImageChanged(image);
    }

    function nameChanged(name) {
        setImageName(name);
        onFileNameChanged(name);
    }

    const handleSelectImageClicked = () => {
        fileInputRef.current.click();
    };

    // Otherwise the image does not show itself as reset when the value does.
    useEffect(() => {
    }, [image]);

    return (
        <>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
                ref={fileInputRef}
                disabled={disabled}
            />
            {imageLoading
                ? <ImageSelectionLoading />
                : (image
                    ? <ImageSelectionWithImage
                        onClick={handleSelectImageClicked}
                        onClearClicked={clearClicked}
                        image={image}
                        imageName={imageName}
                        disabled={disabled}
                    />
                    : <ImageSelectionEmpty
                        isError={isError}
                        onClick={handleSelectImageClicked}
                        disabled={disabled}
                    />
                )
            }
        </>
    );
};