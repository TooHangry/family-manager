export const openModal = (div: HTMLDivElement) => {
    div.style.transform = 'scale(1)';

    setTimeout(() => {
        const back = (div.getElementsByClassName('back')[0] as HTMLDivElement);
        if (back)
            back.style.opacity = '0.75';
    }, 300)
}

export const closeModal = (div: HTMLDivElement) => {
    const back = (div.getElementsByClassName('back')[0] as HTMLDivElement);
    if (back)
        back.style.opacity = '0';

    setTimeout(() => {
        div.style.transform = 'scale(0)';

    }, 200)
}