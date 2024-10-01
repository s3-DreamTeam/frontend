// For all quick tests to implement somewhere

import { useState } from "react";



const TEST = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        console.log("handleImageChange: " + e.target.files);
        const data = new FileReader();
        data.addEventListener('load', () => {
            setImage(data.result);
        });
        data.readAsDataURL(e.target.files[0]);
    };

    console.log(image);

    return (
        <div>
            <input
                type="file"
                onChange={handleImageChange}
            />
            <br />
            <img
                src={image}
                height='100%'
                width='100%'
            />
        </div>
    );
};

export default TEST;