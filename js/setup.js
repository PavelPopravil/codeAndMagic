(function () {
    'use strict';

    var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var secondNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
    var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
    var fireBallColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
    var wizardsLength = 4;
    var wizards = [];
    var inputName = document.querySelector('.setup-user-name');
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

    function validateForm() {
        inputName.addEventListener('input', function (e) {
            var trg = e.target;
            var valLength = trg.value.length;
            var maxLength = this.getAttribute('maxlength') || 25;
            var minLength = this.getAttribute('minlength') || 2;

            if (!valLength) {
                trg.setCustomValidity('Введите имя персонажа');
            } else if (valLength > maxLength) {
                trg.setCustomValidity('Должно быть не более ' + maxLength + ' символа.');
            } else if (valLength < minLength) {
                trg.setCustomValidity('Должно быть не менее ' + minLength + ' символа.');
            } else {
                trg.setCustomValidity('');
            }
        });
    }

    function generateName(arr, arr2) {
        return arr[Math.round(Math.random() * (arr.length - 1))] + ' ' + arr2[Math.round(Math.random() * (arr2.length - 1))];
    }

    function drawWizards() {
        var wrap = document.querySelector('.setup-similar-list');
        var fragment = document.createDocumentFragment();

        for (var i = 0; i < wizards.length; i++) {
            fragment.appendChild(renderWizards(wizards[i]));
        }

        wrap.appendChild(fragment);
    }

    function renderWizards(wizard) {
        var templateClone = template.cloneNode(true);
        templateClone.querySelector('.setup-similar-label').textContent = wizard.name;
        templateClone.querySelector('.wizard-coat').style.fill = wizard.coatColor;
        templateClone.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
        return templateClone;
    }

    function createWizardsData() {
        function Wizard(name, coatColor, eyesColor) {
            this.name = name;
            this.coatColor = coatColor;
            this.eyesColor = eyesColor;
        }

        for (var i = 0; i < wizardsLength; i++) {
            var name = new Wizard(generateName(firstNames, secondNames), window.util.randomVal(coatColors), window.util.randomVal(eyesColors));
            wizards.push(name);
        }
    }

    window.onload = function () {
        createWizardsData();
        drawWizards();
        validateForm();
        setColorHandlers();
    };

})();



