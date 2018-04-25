(function () {
    'use strict';
    
    var popup = document.querySelector('.setup');
    var listpopup = document.querySelector('.setup-similar');
    var inputName = popup.querySelector('.setup-user-name');
    
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

    window.onload = function () {
        setHandlers();
    };
    
})();