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
    console.log(sentences.value.trim().length);
    console.log(limit.value.trim());
    if(limit == null || limit == undefined || sentences == null || sentences == undefined || sentences.value.trim().length <= 0 || isNaN(Number.parseInt(limit.value.trim())) || limit.value.trim() == 0){
        let para = document.createElement('p');
        para.innerText = 'Please enter a valid sentence and limit';
        let hr = document.createElement('hr');
        resultContent.appendChild(para);
        resultContent.appendChild(hr);
    }else{
        let valueLimit = limit.value;
        let sentencesValue = sentences.value;
        let count = 0;
        while(count < valueLimit){
            let para = document.createElement('p');
            para.innerText = sentencesValue;
            let hr = document.createElement('hr');
            resultContent.appendChild(para);
            resultContent.appendChild(hr);
            count++;
        }
    }
    resultContainerParent.style.display = 'flex';
});