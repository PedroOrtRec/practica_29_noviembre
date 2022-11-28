//DECLARACIÓN DE CONSTANTES Y VARIABLES

const ageForm = document.querySelector('#ageForm');
const diagnosisForm = document.querySelector('#diagnosisForm');
const searcherForm = document.querySelector('#searcherForm');
const sectionPatients = document.querySelector('#patientsList');

//PINTAR LA LISTA DE PACIENTES

function printPatients(pPatientsList, pDom) {
    pPatientsList.forEach(patient => printOnePatient(patient, pDom))
}

function printOnePatient(pPatient, pDom) {

    let article = document.createElement('article');
    article.classList.add('card', 'p-2', 'mb-3');
    let h3 = document.createElement('h3');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');



    h3.innerText = pPatient.name + ' ' + pPatient.surname;
    p1.innerText = 'Edad: ' + pPatient.age + ' años';
    p2.innerText = 'NUSS: ' + pPatient.nuss;
    p3.innerText = 'Dolencia: ' + pPatient.diagnosis;


    article.appendChild(h3);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);

    pDom.appendChild(article);
}

printPatients(patients, sectionPatients);


//FILTROS


searcherForm.addEventListener('submit', getDataSearcher)

function getDataSearcher(event) {
    event.preventDefault()
    console.log(event.target.searcher.value)
}










/* <article class="card p-2">
<h3>Nombre y Apellido del Paciente</h3>
<p>Edad del Paciente</p>
<p>Numero de la Seguridad Social</p>
<p>Dolencia</p>
</article> */