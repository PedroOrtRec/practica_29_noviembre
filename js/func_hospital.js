//DECLARACIÓN DE CONSTANTES Y VARIABLES

const ageForm = document.querySelector('#ageForm');
const diagnosisForm = document.querySelector('#diagnosisForm');
const searcherForm = document.querySelector('#searcherForm');
const sectionPatients = document.querySelector('#patientsList');

var patientsList = patients;

//FILTROS

searcherForm.addEventListener('submit', filterSearcher)

function filterSearcher(event) {
    event.preventDefault();
    console.log(event.target.searcher.value);

}

//PINTAR LA LISTA DE PACIENTES

function printPatients(pPatientsList, pDom) {
    pPatientsList.forEach(patient => printOnePatient(patient, pDom))
}

function printOnePatient(pPatient, pDom) {

    let article = document.createElement('article');
    article.classList.add('card', 'mb-1');
    let h3 = document.createElement('h3');
    h3.classList.add('bg-info');
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




console.log(patientsList)







/* <article class="card p-2">
<h3>Nombre y Apellido del Paciente</h3>
<p>Edad del Paciente</p>
<p>Numero de la Seguridad Social</p>
<p>Dolencia</p>
</article> */