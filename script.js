AFRAME.registerComponent('friends', {
    // schema: {},

    init: function () {
        this.el.addEventListener(
            'click',
            () => {
                location.href = './list.html';
            },
            false
        );

        this.el.addEventListener(
            'raycaster-intersected',
            () => {
                this.el.setAttribute('color', '#0000FF');
            },
            false
        );

        this.el.addEventListener(
            'raycaster-intersected-cleared',
            () => {
                this.el.setAttribute('color', '#FFFFFF');
            },
            false
        );
    }

    // update: function () {
    //     // Do something when component's data is updated.
    // },

    // remove: function () {
    //     // Do something the component or its entity is detached.
    // },

    // tick: function (time, timeDelta) {
    //     // Do something on every scene tick or frame.
    // }
});
