//DECLARACIÓN DE CONSTANTES Y VARIABLES
const minAge = document.querySelector('#minAge');
const maxAge = document.querySelector('#maxAge');
const buttonAge = document.querySelector('#buttonAge');
const diagnosisSelect = document.querySelector('#diagnosisSelect');
const searcherInput = document.querySelector('#searcher');
const resetSearcher = document.querySelector('#resetSearcher')
const sectionPatients = document.querySelector('#patientsList');
let patientsList = patients;

//EVENTOS

buttonAge.addEventListener('click', getDataAge);
diagnosisSelect.addEventListener('change', getDataDiagnosis);
searcherInput.addEventListener('input', getDataSearcher);
resetSearcher.addEventListener('click', resetSearch);


//FILTRO DE EDAD

function getDataAge() {
    let min = minAge.value;
    let max = maxAge.value;

    if (max !== "" && min !== "") {
        let filterPatient = filterByAge(patientsList, Number(min), Number(max));
        printPatients(filterPatient, sectionPatients);
    } else {
        printPatients(patientsList, sectionPatients);
    }

    minAge.value = '';
    maxAge.value = '';

}

function filterByAge(pPatientsList, pMin, pMax) {
    return pPatientsList.filter(patient => patient.age >= pMin && patient.age <= pMax);
}

// CREAR LISTA FILTRADA DE DOLENCIAS

function filterDiagnosis() {

    let diagnosisList = patientsList.map(patient => patient.diagnosis);

    diagnosisList = diagnosisList.filter((oneDiagnosis, index) => diagnosisList.indexOf(oneDiagnosis) === index);

    addDiagnosis(diagnosisList);
}

//AÑADIR LAS DOLENCIAS AL SELECTOR

function addDiagnosis(pDiagnosisList) {
    for (oneDiagnosis of pDiagnosisList) {
        diagnosisSelect.innerHTML += `<option value="${oneDiagnosis}">${oneDiagnosis}</option>`
    }

}

filterDiagnosis()

// FILTRO POR DOLENCIA

function filterByDiagnosis(pPatientsList, pDiagnosis) {
    return pPatientsList.filter(patient => patient.diagnosis === pDiagnosis);
}

function getDataDiagnosis() {
    let diagnosis = diagnosisSelect.value;

    if (diagnosis !== 'Todas') {

        let filterPatient = filterByDiagnosis(patientsList, diagnosis);
        printPatients(filterPatient, sectionPatients);
    } else {
        printPatients(patientsList, sectionPatients);
    }

}

// FILTRO POR DATOS PERSONALES

function getDataSearcher() {
    let searcher = searcherInput.value;

    if (searcher !== '') {
        let filterPatient = filterBySearcher(patientsList, searcher);
        printPatients(filterPatient, sectionPatients);
    } else {
        printPatients(patientsList, sectionPatients);
    }
}

function filterBySearcher(pPatientsList, pSearch) {
    return pPatientsList.filter(patient => patient.name.toLowerCase().includes(pSearch.toLowerCase()) || patient.surname.toLowerCase().includes(pSearch.toLowerCase()) || patient.nuss.toLowerCase().includes(pSearch.toLowerCase()));
}

//RESETEAR BUSCADOR

function resetSearch() {
    searcherInput.value = '';
    printPatients(patientsList, sectionPatients);
}

//PINTAR LA LISTA DE PACIENTES

function printPatients(pPatientsList, pDom) {
    pDom.innerHTML = ''
    if (pPatientsList.length !== 0) {
        pPatientsList.forEach(patient => printOnePatient(patient, pDom))
    } else {
        pDom.innerHTML = `<article class="card p-2"> <h3>No hay coincidencias</h3></article>`
    }
}

function printOnePatient(pPatient, pDom) {

    let article = document.createElement('article');
    article.classList.add('card', 'mb-1');
    let h3 = document.createElement('h3');
    h3.classList.add('bg-info', 'p-1');
    let articleDiv = document.createElement('div');
    articleDiv.classList.add('p-1');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    p1.classList.add('mb-1');
    p2.classList.add('mb-1');
    p3.classList.add('mb-1');



    h3.innerText = pPatient.name + ' ' + pPatient.surname;
    p1.innerText = 'Edad: ' + pPatient.age + ' años';
    p2.innerText = 'NUSS: ' + pPatient.nuss;
    p3.innerText = 'Dolencia: ' + pPatient.diagnosis;


    article.appendChild(h3)
    article.appendChild(articleDiv);
    articleDiv.appendChild(p1);
    articleDiv.appendChild(p2);
    articleDiv.appendChild(p3);

    pDom.appendChild(article);
}

printPatients(patientsList, sectionPatients);