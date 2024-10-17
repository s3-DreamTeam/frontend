import { useRef, useState } from "react";
import { ImageFromExplorerEvent } from "../../utils/imageSelectionHandler";
import { ImageSelectionEmpty } from "./imageSelectionEmpty";
import { ImageSelectionWithImage } from "./imageSelectionWithImage";
import { ImageSelectionLoading } from "./imageSelectionLoading";

export const ImageSelectorCard = ({
    onImageChanged,
    onFileNameChanged,
    onResetSelection
}) => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [imageName, setImageName] = useState('No image');
    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        setImageLoading(true);
        ImageFromExplorerEvent(event, nameChanged, imageLoaded, () => { });
    };

    function clearClicked() {
        setSelectedImage(null);
        setImageName(null);
        onResetSelection();
    }

    function imageLoaded(image) {
        setSelectedImage(image);
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

    return (
        <>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
                ref={fileInputRef}
            />
            {imageLoading
                ? <ImageSelectionLoading />
                : (selectedImage
                    ? <ImageSelectionWithImage
                        onClick={handleSelectImageClicked}
                        onClearClicked={clearClicked}
                        image={selectedImage}
                        imageName={imageName}
                    />
                    : <ImageSelectionEmpty
                        onClick={handleSelectImageClicked}
                    />
                )
            }
        </>
    );
};