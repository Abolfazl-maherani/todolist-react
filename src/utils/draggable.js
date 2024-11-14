export function draggable(draggableElement, dropzoneElement, options = {}) {
    this.draggableElement = draggableElement;
    this.dropzoneElement = dropzoneElement;

    const setupEvents = () => {
        const itemsOfElement = document.querySelectorAll(draggableElement)
        if (itemsOfElement?.length) {
            itemsOfElement.forEach((element) => {
                element.draggable = true;

            })
            const itemsOfDropzoneElement = document.querySelectorAll(draggableElement)
            if (dropzoneElement?.length) {
                itemsOfDropzoneElement.forEach(element => {
                    element.addEventListener('dragover', (e) => {
                        e.preventDefault()
                    })
                })
            }
        }
    }
}