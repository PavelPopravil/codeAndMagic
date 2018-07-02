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
    var wizards = [];
    var eyesColor;
    var coatColor;
    var timer = null;

    function validateWizardName() {
        var inputObj = {
            element: document.querySelector('.setup-user-name'),
            maxLength: 25,
            minLength: 2,
            noValueinputObjMessage: 'Введите имя персонажа'
        };
        window.util.inputValidation(inputObj);
    }

    function setColorHandlers() {
        wizardCoat.addEventListener('click', function () {
            var newColor = window.util.randomVal(coatColors);
            this.style.fill = newColor;
            coatColor = newColor;
            clearTimeout(timer);
            timer = setTimeout(function () {
                sortWizards();
            }, 500);

        });
        wizardEyes.addEventListener('click', function () {
            var newColor = window.util.randomVal(eyesColors);
            this.style.fill = newColor;
            eyesColor = newColor;
            clearTimeout(timer);
            timer = setTimeout(function () {
                sortWizards();
            }, 500);
        });
        fireBall.addEventListener('click', function () {
            window.mainWizard.fireBallColor = window.util.randomVal(fireBallColors);
            this.style.background = window.mainWizard.fireBallColor;
        })
    }

    function getRank(wizard) {
        var rank = 0;
        if (wizard.colorCoat === coatColor) {
            rank += 2;
        }
        if (wizard.colorEyes === eyesColor) {
            rank += 1;
        }
        return rank;
    }

    function sortWizards() {
        var sortedArr = wizards.slice(0).sort(function (a, b) {
            return getRank(b) - getRank(a);
        });
        drawWizards(sortedArr);
    }

    function drawWizards(data) {
        var wrap = document.querySelector('.setup-similar-list');
        wrap.innerHTML = '';
        var fragment = data.reduce(function (frg, item, i) {
            if (i < wizardsLength) {
                frg.append(renderWizard(item));
            }
            return frg;
        }, document.createDocumentFragment());
        wrap.appendChild(fragment);
    }

    function renderWizard(wizard) {
        var templateClone = template.cloneNode(true);
        templateClone.querySelector('.setup-similar-label').textContent = wizard.name;
        templateClone.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
        templateClone.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
        return templateClone;
    }

    function getWizards(data) {
        wizards = data;
        sortWizards();
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
        backend.load('GET', 'https://js.dump.academy/code-and-magick/data', getWizards, createMessageBlock);
        setFormHandlers();
    };

})();



