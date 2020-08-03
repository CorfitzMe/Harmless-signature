/**
 * Harmless Signature by @CorfitzMe
 * Find me: https://www.corfitz.me
 */
(function (u) {
    // Create a new `Image` instance
    const i = new Image();

    i.onload = function () {
        // Inside here we already have the dimensions of the loaded image
        const style = [
            // Hacky way of forcing image's viewport using `font-size`
            'font-size: 1px;',

            // Hacky way of forcing a middle/center anchor point for the image
            `padding: ${this.height * 0.5}px ${this.width * 0.5}px;`,

            // Set image dimensions
            `background-size: ${this.width}px ${this.height}px;`,

            // Set image URL
            `background: url(${u});`,
        ].join(' ');

        // notice the spaces after %c
        console.log(
            '%c %c  Made by Corfitz%c.',
            style,
            'font-weight: bold; font-size: 13px;line-height:40px;',
            'color: #00ff00; font-size: 16px;'
        );
    };

    // Actually loads the image
    i.src = u;
})(
    'https://admin.corfitz.me/storage/uploads/2019/06/06/5cf96fb5e6234console-signature.png'
);