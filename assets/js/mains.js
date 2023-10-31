let closebtn = document.getElementById('closebtn');
let resultContent = document.getElementById('content');
let resultContainerParent = document.getElementById('result-container');

let limit = document.getElementById('limit');
let sentences = document.getElementById('sentences');

let form = document.querySelector('#form-container > form')

closebtn.addEventListener('click', () =>{
    resultContainerParent.style.display = 'none';
});

form.addEventListener('submit',function(event) {
    event.preventDefault();
    resultContent.innerHTML = "";
    if(sentences == null || sentences == undefined || sentences.value.trim().length <= 0 || limit.value.trim() == 0 || !isNumberFromInput(Number(limit.value.trim())) ){
        let para = document.createElement('p');
        para.innerText = 'Please enter a valid sentence (string) and limit (integer)';
        let hr = document.createElement('hr');
        resultContent.appendChild(para);
        resultContent.appendChild(hr);
    }else{
        let valueLimit = limit.value.trim();
        let sentencesValue = sentences.value;
        let count = 1;
        while(count <= valueLimit){
            let para = document.createElement('p');
            para.innerText = count + " - " + sentencesValue;
            let hr = document.createElement('hr');
            resultContent.appendChild(para);
            resultContent.appendChild(hr);
            count++;
        }
    }
    resultContainerParent.style.display = 'flex';
});

function isNumberFromInput(values) {
    return typeof values === 'number' && Number.isInteger(values);
}