(function () {
    'use strict';
    
    var popup = document.querySelector('.setup');
    var listpopup = document.querySelector('.setup-similar');
    var inputName = popup.querySelector('.setup-user-name');
    var dragZONE = popup.querySelector('.upload');

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

        dragZONE.addEventListener('mousedown', function (e) {
            enableDrag(e);
        });
    }

    function enableDrag(e) {
        var draggable = false;

        window.popupStartCoords = {
            x: popup.offsetLeft,
            y: popup.offsetTop
        };

        var startCoords = {
            x: e.pageX,
            y: e.pageY
        };

        function onMouseMove(moveEvt) {
            moveEvt.preventDefault();
            draggable = true;

            var shift = {
                x: startCoords.x - moveEvt.pageX,
                y: startCoords.y - moveEvt.pageY
            };

            startCoords = {
                x: moveEvt.pageX,
                y: moveEvt.pageY
            };

            popup.style.top = (popup.offsetTop - shift.y) + 'px';
            popup.style.left = (popup.offsetLeft - shift.x) + 'px';
        }

        function onMouseUp(upEvt) {
            upEvt.preventDefault();

            if (draggable) {
                var onClickPreventDefault = function (e) {
                    e.preventDefault();
                    draggable = false;
                    this.removeEventListener('click', onClickPreventDefault);
                };
                dragZONE.addEventListener('click', onClickPreventDefault);
            }

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }


    function setPopupHandler(e) {
        if (window.util.isEscEvent(e) && inputName !== document.activeElement) {
            closePopup();
        }
    }

    window.openPopup = function() {
        popup.classList.remove('hidden');
        listpopup.classList.remove('hidden');
        document.addEventListener('keydown', setPopupHandler);

        if (window.popupStartCoords) {
            popup.style.top = window.popupStartCoords.y + 'px';
            popup.style.left = window.popupStartCoords.x + 'px';
        }
    };

    window.closePopup = function() {
        popup.classList.add('hidden');
        document.removeEventListener('keydown', setPopupHandler);
    };

    window.addEventListener('load', function () {
        setHandlers();
    });
})();