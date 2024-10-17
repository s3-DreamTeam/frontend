export function ImageFromExplorerEvent(event, onNameLoaded, onImageLoaded, onError) {

    try {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                onImageLoaded(e.target.result);
            };
            reader.readAsDataURL(file);
            onNameLoaded(file.name);
        }
    } catch {
        console.error("FAILED TO LOAD IMAGE");
        onError();
    }
}