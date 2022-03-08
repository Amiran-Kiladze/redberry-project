const mainForm = document.querySelector("#mainform");
const submitButton = document.querySelector("#btn");
const sumbitPageDiv = document.querySelector("#sumbit_button_page");
const firstPageRocketeer = document.querySelector("#to_make_dissapear");


const thanksForJoining = document.querySelector(".thanks_for_joining");



mainForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let firstName = document.querySelector("#firs_name").value;
    let lastName = document.querySelector("#last_name").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let skills = document.querySelector("#skills");
    let experience = document.querySelector("#experience").value;
    let workPreferenceRadio = document.querySelector('input[name="work_preference"]:checked').value;
    let hadCovidRadio = document.querySelector('input[name="had_covid"]:checked').value;
    let hadCovidAt = document.querySelector("#had_covid_at").value;
    let vaccinatedQuestion = document.querySelector('input[name="vaccinated"]:checked').value;
    let vaccinatedAt = document.querySelector("#vaccinated_at").value;
    let devtalkQuestion = document.querySelector('input[name="will_organize_devtalk"]:checked').value;
    let devtalkTopic = document.querySelector("#devtalk_topic").value;
    let specialText = document.querySelector("#something_special").value;

    

    if (!devtalkTopic) {
        devtalkTopic = "nothing"; 
    }

    if (!specialText) {
        specialText = "nothing"
    }

    if (!hadCovidAt) {
        hadCovidAt = "1000-01-01" 
    }

    if (!vaccinatedAt) {
        vaccinatedAt = "1000-01-01"
    }

    if (hadCovidRadio ==="true") {
        hadCovidRadio = true;
    } else {
        hadCovidRadio=false;
    }

    if (vaccinatedQuestion === "true") {
        vaccinatedQuestion = true;
    } else {
        vaccinatedQuestion = false;
    }

    if (devtalkQuestion ==="true") {
        devtalkQuestion = true;
    } else {
        devtalkQuestion = false;
    }

    if (phone === "") {
        phone="empty";
    }




    fetch("https://bootcamp-2022.devtest.ge/api/application", {
        method:"POST",
        body: JSON.stringify({
            token: "022ff462-db48-4b7f-b4e4-c71a58809515",
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            skills: skillsArray,
            work_preference: workPreferenceRadio,
            had_covid: hadCovidRadio,
           
            had_covid_at:  hadCovidAt,
          
            vaccinated: vaccinatedQuestion,
       
            vaccinated_at: vaccinatedAt,

            will_organize_devtalk: devtalkQuestion,
        
            devtalk_topic: devtalkTopic,
            something_special: specialText

        }),
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
        }
    })
   

    sumbitPageDiv.style.display = "none"
    thanksForJoining.classList.remove("last_display");
    setTimeout(() => {
        thanksForJoining.classList.add("last_display");
        firstPageRocketeer.classList.remove("display_page"); 
    }, 3000 )

     
     
})












