'use strict';
window.setupInit = function () {
    var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var secondNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
    var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
    var wizardsLength = 4;
    var wizards = [];

    function generateName(arr, arr2) {
        return arr[Math.round(Math.random() * (arr.length - 1))] + ' ' + arr2[Math.round(Math.random() * (arr2.length - 1))];
    }

    function genereteColor(arr) {
        return arr[Math.round(Math.random() * (arr.length - 1))];
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
            var name = new Wizard(generateName(firstNames, secondNames), genereteColor(coatColors), genereteColor(eyesColors));
            wizards.push(name);
        }
    }

    function showSetup() {
        var block = document.querySelector('.setup');
        var listBlock = document.querySelector('.setup-similar');
        block.classList.remove('hidden');
        listBlock.classList.remove('hidden');
    }

    window.onload = function () {
        showSetup();
        createWizardsData();
        drawWizards();
    };
};

window.setupInit();



