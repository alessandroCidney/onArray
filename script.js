const $sectionThreeArrays = document.querySelector('.section-three-arrays');

const $inputAddText = document.querySelector('input#add-item');
const $inputAddSubmit = document.querySelector('input#input-add-submit');
const $inputDeleteItemSubmit = document.querySelector('input#input-delete-item-submit');
const $inputDeleteArraySubmit = document.querySelector('input#input-delete-array-submit');
const $inputRadioFirst = document.querySelector('input#at-first');
const $inputRadioEnd = document.querySelector('input#at-the-end');

var geralArray = [ ];

var atualizacoes = 0;

// Itens relacionados às animações

    // Animação do H1

    const $sectionOneH1 = document.querySelector('.section-one-h1');

    function breakLetters(elemento) {
        const arrayLetters = elemento.innerHTML.split('');
        elemento.innerHTML = '';

        arrayLetters.forEach((letra, i) => {
            setTimeout(() => elemento.innerHTML += letra, 100 * i);
        });
    }
            breakLetters($sectionOneH1);

// Itens relacionados ao controle

    // Mostrar array

    function showArray() {

        $sectionThreeArrays.innerHTML = "[ ";

        if (geralArray.length == 0) {

            $sectionThreeArrays.innerHTML = "Adicione novos arrays";

        } else {

            geralArray.forEach((value, index) => {

                if (index == (geralArray.length - 1)) {     // Quando for o último elemento

                    $sectionThreeArrays.innerHTML += `${value}`;

                } else {

                    $sectionThreeArrays.innerHTML += `${value}, `; // Para qualquer outro elemento do geralArray

                }

                
            });

            $sectionThreeArrays.innerHTML += " ]";

        }

    }

    // Adicionar item

    $inputAddSubmit.addEventListener('click', () => {

        let addItem = $inputAddText.value;

        if($inputRadioFirst.checked == true) {

            geralArray.unshift(addItem);

        } else {

            geralArray.push(addItem);

        }

        showArray();
    });

    // Remover item

    $inputDeleteItemSubmit.addEventListener('click', () => {

        if($inputRadioFirst.checked == true) {

            geralArray.shift();

        } else {
            
            geralArray.pop();

        }

        showArray();

    });

    