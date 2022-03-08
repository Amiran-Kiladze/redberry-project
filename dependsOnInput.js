const covidTime = document.querySelector("#covid_time");
const divDevtaklTopic = document.querySelector("#div_devtalk_topic");
const vaccinatedTime = document.querySelector("#vaccinated_time");

const covidPositive = document.querySelector("#covid_yes")
const covidNegative = document.querySelector("#covid_no")



covidPositive.addEventListener("click", function(){
    covidTime.classList.remove("display_property")
})

covidNegative.addEventListener("click", function(){
    covidTime.classList.add("display_property")
})


const vaccinatedPositive = document.querySelector("#vaccinated_yes");
const vaccinatedNegative = document.querySelector("#vaccinated_no");

vaccinatedPositive.addEventListener("click", function() {
    vaccinatedTime.classList.remove("display_property")
})

vaccinatedNegative.addEventListener("click", function() {
    vaccinatedTime.classList.add("display_property")
})

const devtalkYes = document.querySelector("#devtalks_yes");
const devtalkNo = document.querySelector("#devtalks_no");

devtalkYes.addEventListener("click", function() {
    divDevtaklTopic.classList.remove("display_property")
})

devtalkNo.addEventListener("click", function() {
    divDevtaklTopic.classList.add("display_property")
})