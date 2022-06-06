class CustomSelect {
    #id;
    #options;
    #currentSelectedOption;

    constructor(id, options) {
        this.#id = id;
        this.#options = options;
        this.#currentSelectedOption;
    }
    
    set selectedOption(data) {
        this.#currentSelectedOption = data;
    }

    get selectedValue() {
        return this.#options.filter(({ value }) => (value === Number(this.#currentSelectedOption)));
    }

    render(container) {
        const selectDropdown = document.createElement('div');
        const selectDropdownButton = document.createElement('button');
        const selectDropdownText = document.createElement('span');
        const selectDropdownList = document.createElement('ul');
        selectDropdown.className = `select-dropdown select-dropdown--${((this.#id))}`;
        selectDropdownButton.className = `select-dropdown__button select-dropdown__button--${((this.#id))}`;
        selectDropdownText.textContent = "Выберите элемент";
        selectDropdownList.className = `select-dropdown__list select-dropdown__list--${((this.#id))}`;

        container.append(selectDropdown);
        selectDropdown.append(selectDropdownButton);
        selectDropdownButton.append(selectDropdownText);
        selectDropdown.append(selectDropdownList);
  
        this.#options.forEach(item => {
            const selectDropdownListItem = document.createElement('li');
            selectDropdownListItem.className = "select-dropdown__list-item";
            selectDropdownListItem.setAttribute("data-value", item.value);
            selectDropdownListItem.textContent = item.text;
            selectDropdownList.append(selectDropdownListItem);
        });
    }
}


document.addEventListener('click', (event) => {
    const { target } = event;
        const taskItemButton = target.closest('.select-dropdown__button');
        if (taskItemButton) {
            document.querySelector('.select-dropdown__list').classList.toggle('active');
        }
        const taskId = target.closest('.select-dropdown__list-item')?.getAttribute('data-value');

        if (taskId){

            const onSelected = document.querySelector('.selected');
            if (onSelected) {
                onSelected.classList.remove('selected');
            }
            // target.closest('.select-dropdown__list-item').classList.add('selected');
            // const onSelected = (target.className.includes('selected'));
            // if (onSelected) {

            // }

            customSelect.selectedOption = taskId;
            console.log('Выбранный элемент', (customSelect.selectedValue)[0]);
            target.closest('.select-dropdown__list-item').classList.add('selected');
            // document.querySelector(`.data-value${taskId}`).classList.add('selected');
            // const elem = (document.querySelector(`.select-dropdown__list-item`));

            // console.log('elem', elem);

            // console.log(elem.dataset.value);

            // const arrayLists = (customSelect.selectedValue.filter(({ text }) => text));
            // arrayLists.forEach(list => {
            //     console.log(list.text);
                
            // });
             // console.log('customSelect.selectedValue', (customSelect.selectedValue.map(({text}) => text)[0]));

            
        }
        
  });
  
  const options = [
    { value: 1, text: "JavaScript" },
    { value: 2, text: "NodeJS" },
    { value: 3, text: "ReactJS" },
    { value: 4, text: "HTML" },
    { value: 5, text: "CSS" }
  ];
  
  const customSelect = new CustomSelect("1223", options);
  const mainContainer = document.querySelector("#container");
  console.log('mainContainer', mainContainer);
  customSelect.render(mainContainer);