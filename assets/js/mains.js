let closebtn = document.getElementById('closebtn');
let closebtnSelect = document.getElementById('closebtn-select');

let resultContent = document.getElementById('content');
let resultContainerParent = document.getElementById('result-container');
let selectContainer = document.getElementById('select-container');
let selectImage = document.getElementById('selectImage');
let contentSelect = document.getElementById('content-select');
let resultSelect = document.getElementById('result-select');

let limit = document.getElementById('limit');
let sentences = document.getElementById('sentences');

let form = document.querySelector('#form-container > form');

const images = ['img_mountains_wide.jpg', 'img_nature_wide.jpg', 'img_snow_wide.jpg', 'img_band_ny.jpg'];

selectImage.addEventListener('change', function(event){
    event.preventDefault();
    contentSelect.innerHTML = "";
    let index = this.value;
    let imageIndex = images[index];
    if(imageIndex < 0 || imageIndex == null || imageIndex == undefined){
        let para = document.createElement('p');
        para.innerText = 'Please enter a valid image';
        let hr = document.createElement('hr');
        contentSelect.appendChild(para);
        contentSelect.appendChild(hr);
    }else{
        let image = document.createElement('img');
        image.src = "./assets/images/" + imageIndex;
        image.width = '400';
        image.height = '300';
        console.log(image);
        let hr = document.createElement('hr');
        contentSelect.appendChild(image);
        contentSelect.appendChild(hr);
    }
    resultSelect.style.display = 'flex';
})

closebtnSelect.addEventListener('click', () =>{
    resultSelect.style.display = 'none';
});

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
            if(count % 2 === 0){
                para.style.backgroundColor = 'rgb(158, 185, 179)';
                para.style.color = 'black';
            }

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