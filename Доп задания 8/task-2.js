function showSuccessMessage (message) {
    console.log(message);
}

function showErrorMessage (message) {
    console.error(message);
}

function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {
    let errorSymbolPresent = false;
    for (let i = 0; i < text.length; i += 1) {
        if (text[i] === errorSymbol) {
            errorSymbolPresent = true;
            errorCallback (`Найден запрещенный символ "${errorSymbol}" под индексом ${i}`)
        } 
    }
    if (!errorSymbolPresent) {
        successCallback('В данном тексте нет запрещенных символов');
    }
}

const text = 'Привет! Как дела! Давно мы с тобой не виделись.'; 
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);