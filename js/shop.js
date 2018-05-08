(function () {
    'use strict';

    var shop = document.querySelector('.setup-artifacts-shop');
    var dragItem = null;
    var artifacts = document.querySelector('.setup-artifacts');

    function setDragHandlers() {
        shop.addEventListener('dragstart', function (e) {
            dragItem = e.target.cloneNode(true);
            e.dataTransfer.setData('text/plain', dragItem.alt)
        });

        artifacts.addEventListener('dragover', function (e) {
            e.preventDefault();
            return false;
        });

        artifacts.addEventListener('dragenter', function (e) {
            e.target.style.background = 'rgba(255, 0, 0, .5)';
            e.preventDefault();
        });

        artifacts.addEventListener('dragleave', function (e) {
            e.target.style.background = '';
            e.preventDefault();
        });

        artifacts.addEventListener('drop', function (e) {
            console.log(e.target.hasChildNodes());
            if (e.target.hasChildNodes()) {
                console.log('full');
                return false;
            } else {
                e.target.style.background = '';
                e.target.appendChild(dragItem);
                e.preventDefault();
                console.log('not-full');
            }
        });
    }

    window.addEventListener('load', function () {
        setDragHandlers();
    });
})();