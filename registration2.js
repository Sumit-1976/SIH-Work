

const form = document.getElementById('cregistrationform');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const mnum = document.getElementById('mnum');
const name = document.getElementById('name');
const dob = document.getElementById('dob');
const occupation = document.getElementById('occupation');
const idtype = document.getElementById('idtype');
const idnum = document.getElementById('idnum');
const gen = document.getElementById('gen');

form.addEventListener('submit' , e =>{
    e.preventDefault();

    validateInputs();
});

const setError = (element,message) => {
    const inputField = element.parentElement;
    const errorDisplay = inputField.querySelector('.error');

    errorDisplay.innerText = message;
    inputField.classList.add('error');
    inputField.classList.remove('success');
}

const setSuccess = element => {
    const inputField = element.parentElement;
    const errorDisplay = inputField.querySelector('.error');

    errorDisplay.innerText = '';
    inputField.classList.add('success');
    inputField.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const stateDistricts = {
    "Delhi": ["Vasant vihar", "District B", "District C"],
    "Bihar": ["Rajan", "District Y", "District Z"],

};


function populateDistricts() {
    const stateDropdown = document.getElementById("state");
    const districtDropdown = document.getElementById("district");
    const selectedState = stateDropdown.value;

    districtDropdown.innerHTML = '<option value="">---Select District---</option>';

    if (selectedState) {
        const districts = stateDistricts[selectedState];
        if (districts) {
            districts.forEach(function (district) {
                const option = document.createElement("option");
                option.value = district;
                option.text = district;
                districtDropdown.appendChild(option);
            });
        }
    }
    
    stateDropdown.addEventListener("change", populateDistricts);
}



const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const mnumValue = mnum.value.trim();
    const nameValue = name.value.trim();
    const dobValue = dob.value.trim();
    const occupationValue = occupation.value.trim();
    const idtypeValue = idtype.value.trim();
    const idnumValue = idnum.value.trim();
    const genValue = gen.value.trim();

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.');
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, 'Password does not match');
    } else {
        setSuccess(password2);
    }

    if(mnumValue === '') {
        setError(mnum, 'Please enter your mobile number.');
    } else if (mnumValue.length < 10) {
        setError(mnum, 'Mobile number should have at least 10 numbers.');
    } else {
        setSuccess(mnum);
    }

    if(nameValue === '') {
        setError(name, 'Please enter your name.');
    } else {
        setSuccess(name);
    }

    if(dobValue === '') {
        setError(dob, 'Please enter your date of birth.');
    } else {
        setSuccess(dob);
    }

    if(occupationValue === '') {
        setError(occupation, 'Please enter your occupation.');
    } else {
        setSuccess(occupation);
    }

    if(idtypeValue === '') {
        setError(idtype, 'Please enter your ID type.');
    } else {
        setSuccess(idtype);
    }

    if(idnumValue === '') {
        setError(idnum, 'Please enter your ID type.');
    } else {
        setSuccess(idnum);
    }

    if(genValue === '') {
        setError(gen, 'Please enter your gender.');
    } else {
        setSuccess(gen);
    }


    
    
    populateDistricts();


};


