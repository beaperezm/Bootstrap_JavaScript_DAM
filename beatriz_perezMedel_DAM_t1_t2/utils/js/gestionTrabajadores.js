const button = document.querySelector("#bttn");
const selectDepartment = document.querySelector("#floatingSelect");
const itOption = document.querySelector("#it");
const marketingOption = document.querySelector("#marketing");
const ventasOption = document.querySelector("#ventas");
const adminOption = document.querySelector("#admin");
const parentUl = document.getElementById('ulWorkers');
const getInputName = document.querySelector(".input-name");
const getInputSurname = document.querySelector(".input-surname");


const addWorkerListener = button.addEventListener ('click', (event) => {
    event.preventDefault();
    addWorker();
    choosingDepartment();
    //Accediendo al form
    const getForm = document.querySelector('.form');
    //Borrando los datos del form
    getForm.reset();
})

//Añadiendo nodos en el DOM:

function addWorker() {
    if(getInputName.value.length > 0 && getInputSurname.value.length > 0 && selectDepartment.value != "Departamento:") {
        const liWorkers = document.createElement('li');
        liWorkers.classList.add("listGroup");
        liWorkers.classList.add("animate__animated");
        liWorkers.classList.add("animate__backInRight");
        const liWorkersText = document.createTextNode(`${getInputName.value} ${getInputSurname.value}`);
        liWorkers.appendChild(liWorkersText);
        parentUl.appendChild(liWorkers);
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Faltan datos, los campos nombre, apellido y departamento son obligatorios',
            icon: 'error'
          })
    }
    
}


//TRABAJANDO CON EL SELECT

//creando función para sumar trabajadores de cada dpto:

function choosingDepartment() {
    let option = selectDepartment.value;
    console.log(option);
    if(getInputName.value.length > 0 && getInputSurname.value.length > 0 && option != "Departamento:") {
        switch(option) {
            case '1':
                itOption.innerHTML++;
                break;
            case '2':
                marketingOption.innerHTML++
                break;
            case '3':
                ventasOption.innerHTML++;
                break;
            case '4':
               adminOption.innerHTML++;
                break;
        }

    }
    
}
