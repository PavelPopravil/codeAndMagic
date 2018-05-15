(function () {
    'use strict';
    
    var popup = document.querySelector('.setup');
    var listpopup = document.querySelector('.setup-similar');
    var inputName = popup.querySelector('.setup-user-name');
    var dragZONE = popup.querySelector('.setup-user-pic');

    function setHandlers() {
        var opener = document.querySelector('.setup-open');
        var closer = document.querySelector('.setup-close');
        opener.addEventListener('click', openPopup);
        closer.addEventListener('click', closePopup);
        opener.addEventListener('keydown', function (e) {
            if (window.util.isEscEvent(e)) {
                openPopup();
            }
        });
        closer.addEventListener('keydown', function (e) {
            if (window.util.isEntEvent(e)) {
                closePopup();
            }
        });
        dragZONE.addEventListener('mousedown', enableDrag)
    }

    function enableDrag() {
        document.addEventListener('mousemove', function (e) {
            console.log(e);
        });
    }

    function setPopupHandler(e) {
        if (window.util.isEscEvent(e) && inputName !== document.activeElement) {
            closePopup();
        }
    }

    function openPopup() {
        popup.classList.remove('hidden');
        listpopup.classList.remove('hidden');
        document.addEventListener('keydown', setPopupHandler);
    }

    function closePopup() {
        popup.classList.add('hidden');
        document.removeEventListener('keydown', setPopupHandler);
    }

    window.addEventListener('load', function () {
        setHandlers();
    });

})();