(function () {
    'use strict';

    var setupForm = document.querySelector('.setup-wizard-form');
    var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var fireBallColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
    var wizardsLength = 4;
    var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
    var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
    var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
    var fireBall = document.querySelector('.setup-fireball-wrap');

    function setColorHandlers() {
        wizardCoat.addEventListener('click', function () {
            this.style.fill = window.util.randomVal(coatColors);
        });
        wizardEyes.addEventListener('click', function () {
            this.style.fill = window.util.randomVal(eyesColors);
        });
        fireBall.addEventListener('click', function () {
            this.style.background = window.util.randomVal(fireBallColors);
        })
    }

    function validateWizardName() {
        var inputObj = {
            element: document.querySelector('.setup-user-name'),
            maxLength: 25,
            minLength: 2,
            noValueinputObjMessage: 'Введите имя персонажа'
        };
        window.util.inputValidation(inputObj);
    }

    function generateName(arr, arr2) {
        return arr[Math.round(Math.random() * (arr.length - 1))] + ' ' + arr2[Math.round(Math.random() * (arr2.length - 1))];
    }

    function drawWizards(data) {
        var wrap = document.querySelector('.setup-similar-list');
        var fragment = document.createDocumentFragment();

        for (var i = 0; i < wizardsLength; i++) {
            fragment.appendChild(renderWizards(window.util.randomVal(data)));
        }

        wrap.appendChild(fragment);
    }

    function renderWizards(wizard) {
        var templateClone = template.cloneNode(true);
        templateClone.querySelector('.setup-similar-label').textContent = wizard.name;
        templateClone.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
        templateClone.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
        return templateClone;
    }

    function createMessageBlock(message) {
        var messageBlock = document.createElement('div');
        messageBlock.classList.add('message-block');
        messageBlock.innerText = message;
        document.body.append(messageBlock);
        setTimeout(function () {
            messageBlock.remove();
        }, 5000);
    }

    function setFormHandlers() {
        setupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            backend.load('POST', 'https://js.dump.academy/code-and-magick', window.closePopup, createMessageBlock, new FormData(this));
        })
    }

    window.onload = function () {
        validateWizardName();
        setColorHandlers();
        backend.load('GET', 'https://js.dump.academy/code-and-magick/data', drawWizards, createMessageBlock);
        setFormHandlers();
    };

})();



