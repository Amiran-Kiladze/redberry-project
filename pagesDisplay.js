const controllPersonalPage = document.querySelectorAll(".controll_personal_page");
const controllSkillsPage = document.querySelectorAll(".controll_skills_page");
const controllCovidPage = document.querySelectorAll(".controll_covid_page");
const controllAboutPage = document.querySelectorAll(".controll_about_page");
const controllSubmitPage = document.querySelectorAll(".controll_submit_page");


const personalInformationAll = document.querySelector("#personal_information_all");
const skillsInformationAll = document.querySelector("#skills_information_all");
const covidInformationAll = document.querySelector("#covid_information_all");
const aboutInformationAll = document.querySelector("#about_you_information_all");
const submitButtonPage = document.querySelector("#sumbit_button_page");

const pGoBack = document.querySelector("#go_back");

const controllRightArrow = document.querySelectorAll(".rigt_arrow");
const controllLeftArrow = document.querySelectorAll(".left_arrow");


const btnQuestionnaire = document.querySelector(".btn_questionnaire");
const welcomeFirstPage = document.querySelector("#main_content")

const firstPageDissapear = document.querySelector("#to_make_dissapear")

btnQuestionnaire.addEventListener("click", function(){
    // firstPageDissapear.style.display="none"
    firstPageDissapear.classList.add("display_page")
    btnQuestionnaire.parentElement.parentElement.nextElementSibling.classList.remove("display_page");
})

// selecting inputs for validation 

const firstNameInputValidation = document.querySelector("#firs_name");
const lastNameInputValidation = document.querySelector("#last_name");
const emailInputValidation = document.querySelector("#email");
const phoneInputValidation = document.querySelector("#phone");
const errorElement = document.querySelector(".error")
const phoneValidation = document.querySelector("#phone");



pGoBack.addEventListener("click", function() {
    
    // skillsInformationAll.classList.add("display_page");
    // personalInformationAll.classList.add("display_page");
    // covidInformationAll.classList.add("display_page");
    aboutInformationAll.classList.remove("display_page");
    submitButtonPage.classList.add("display_page");
})






for (let i = 0; i < controllLeftArrow.length; i++) {
 controllLeftArrow[i].addEventListener("click", function() {

    
      controllLeftArrow[i].parentElement.parentElement.parentElement.previousElementSibling.classList.remove("display_page")
      controllLeftArrow[i].parentElement.parentElement.parentElement.classList.add("display_page");
     
 })
}


for (let i = 0; i < controllRightArrow.length; i++) {
    controllRightArrow[0].addEventListener("click", function() {

      
            //    personal info validation 
    

     if(firstNameInputValidation.value.trim().length < 2  ) {
        errorElement.textContent = "First name should have at least 2 characters";
      }

     else  if(lastNameInputValidation.value.trim().length < 2) {
        errorElement.textContent = "Last name should have at least 2 characters ";
    }

     else if(!emailInputValidation.value.includes("@") || emailInputValidation.value.length < 4 || emailInputValidation.value.indexOf("@") === 0 || emailInputValidation.value.indexOf("@") === emailInputValidation.value.length - 1) {
        errorElement.textContent = "Enter valid email it should contain @, it should't start with @ it should't end with @";
    } 
     
    else if (phoneValidation.value && phoneValidation.value.replace(/ /g,'').length !== 13 || phoneValidation.value && !phoneValidation.value.includes("+995") ) {
        errorElement.textContent = "Enter valid Georgian number starting with +995 or leave it blank to continue";
    }
   
        else {
        errorElement.textContent = "";
        controllSkillsPage[1].style.backgroundColor ="rgba(254, 59, 31, 1)";
        controllPersonalPage[1].style.cursor ="pointer";
        controllRightArrow[0].parentElement.parentElement.parentElement.classList.add("display_page");
        controllRightArrow[0].parentElement.parentElement.parentElement.nextElementSibling.classList.remove("display_page");

        // navigation with bullets start
        for (let i = 0; i < controllPersonalPage.length; i++) {
            controllPersonalPage[1].addEventListener("click", function() {
        
                
                personalInformationAll.classList.remove("display_page");
                skillsInformationAll.classList.add("display_page");
                // covidInformationAll.classList.add("display_page");
                // aboutInformationAll.classList.add("display_page");
                // submitButtonPage.classList.add("display_page");
              
        
            });
        }

        // navigation with bullets end 

        } 

    } )

          //    personal info validation end
        //   skills validation start




          controllRightArrow[1].addEventListener("click", function() {

            const errorElement2 = document.querySelector(".error2")

        if(!skillsArray.length > 0) {
            errorElement2.textContent= "You should add at least one programming language";
           
        } 

        

        else {
            errorElement2.textContent="";
            controllSkillsPage[2].style.backgroundColor ="rgba(254, 59, 31, 1)";
            controllCovidPage[2].style.backgroundColor="rgba(254, 59, 31, 1)";


            controllSkillsPage[2].style.cursor="pointer";
            controllPersonalPage[2].style.cursor ="pointer";

            controllRightArrow[1].parentElement.parentElement.parentElement.classList.add("display_page");
            controllRightArrow[1].parentElement.parentElement.parentElement.nextElementSibling.classList.remove("display_page");

              //  navigation with bullets start
        for (let i = 0; i < controllPersonalPage.length; i++) {
            controllPersonalPage[2].addEventListener("click", function() {
        
                
                personalInformationAll.classList.remove("display_page");
                skillsInformationAll.classList.add("display_page");
                covidInformationAll.classList.add("display_page");
                aboutInformationAll.classList.add("display_page");
                submitButtonPage.classList.add("display_page");
        
            });
        } 
        for (let i = 0; i < controllSkillsPage.length; i++) {
            controllSkillsPage[2].addEventListener("click", function() {
                skillsInformationAll.classList.remove("display_page");
                personalInformationAll.classList.add("display_page");
                covidInformationAll.classList.add("display_page");
                aboutInformationAll.classList.add("display_page");
                submitButtonPage.classList.add("display_page");
            
            
            })
        }

        // navigation with bullets end
        }

          })
          
        //   skill validation end

        // covid validations start 

        const errorElement3 = document.querySelector(".error3");
        const officeRadioValidation = document.querySelector("#office");
        const homeRadioValidation = document.querySelector("#home");
        const hybridRadioValidation = document.querySelector("#hybrid");

        const covidRadioYesValidation = document.querySelector("#covid_yes");
        const covidRadioNoValidation = document.querySelector("#covid_no");


        const hadCovidAtValidation = document.querySelector("#had_covid_at");

        const vaccinatedYesRadioValidation = document.querySelector("#vaccinated_yes");
        const vaccinatedNoRadioValidation = document.querySelector("#vaccinated_no");
        const vaccinatedAtValidation = document.querySelector("#vaccinated_at")

        


      
        controllRightArrow[2].addEventListener("click", function() {
            if ( officeRadioValidation.checked === false && homeRadioValidation.checked === false && hybridRadioValidation.checked === false ) {
                    
                    errorElement3.textContent = "Enter which wokring space do you prefer";
                    

            } 
            else if (covidRadioYesValidation.checked === false && covidRadioNoValidation.checked === false ) {
              
                errorElement3.textContent = "Enter if you had covid or not";
                

            } 
            else if (covidRadioYesValidation.checked === true && !hadCovidAtValidation.value) {
                
                errorElement3.textContent = "Enter the date when you had covid";
               
            }

            else if (vaccinatedYesRadioValidation.checked ===false && vaccinatedNoRadioValidation.checked === false) {
             
                errorElement3.textContent = "Enter if you have been vacinated";
               
            }

            else if (vaccinatedYesRadioValidation.checked === true && !vaccinatedAtValidation.value ) {
                
                errorElement3.textContent = "Enter the date when you got last covid vaccine ";
                

            }




            else {
                errorElement3.textContent = "";
                controllSkillsPage[3].style.backgroundColor ="rgba(254, 59, 31, 1)";
                controllCovidPage[3].style.backgroundColor="rgba(254, 59, 31, 1)";
                controllAboutPage[3].style.backgroundColor="rgba(254, 59, 31, 1)";

                controllSkillsPage[3].style.cursor="pointer";
                controllPersonalPage[3].style.cursor ="pointer";
                controllCovidPage[3].style.cursor="pointer";


                controllRightArrow[2].parentElement.parentElement.parentElement.classList.add("display_page");
                controllRightArrow[2].parentElement.parentElement.parentElement.nextElementSibling.classList.remove("display_page");

                   // navigation with bullets start
        for (let i = 0; i < controllPersonalPage.length; i++) {
            controllPersonalPage[3].addEventListener("click", function() {
        
                
                personalInformationAll.classList.remove("display_page");
                skillsInformationAll.classList.add("display_page");
                covidInformationAll.classList.add("display_page");
                aboutInformationAll.classList.add("display_page");
                submitButtonPage.classList.add("display_page");
        
            });
        } 
        for (let i = 0; i < controllSkillsPage.length; i++) {
            controllSkillsPage[3].addEventListener("click", function() {
                skillsInformationAll.classList.remove("display_page");
                personalInformationAll.classList.add("display_page");
                covidInformationAll.classList.add("display_page");
                aboutInformationAll.classList.add("display_page");
                submitButtonPage.classList.add("display_page");
            
            
            })
        }  


        for (let i = 0; i < controllCovidPage.length; i++) {
            controllCovidPage[3].addEventListener("click", function() {
                skillsInformationAll.classList.add("display_page");
                personalInformationAll.classList.add("display_page");
                covidInformationAll.classList.remove("display_page");
                aboutInformationAll.classList.add("display_page");
                submitButtonPage.classList.add("display_page");
            
            })
        }

        //   navigation with bullets end

            }

        })


        // covid validations end 


        // about you validation start 

        const errorElement4 = document.querySelector(".error4");
        const devtalkRadioYesValidation = document.querySelector("#devtalks_yes");
        const devtalkRadioNoValidation = document.querySelector("#devtalks_no");
        const devtalkTopicValidation = document.querySelector("#devtalk_topic")
        const specialValidation = document.querySelector("#something_special");




        controllRightArrow[3].addEventListener("click", function() {

            if (devtalkRadioYesValidation.checked === false && devtalkRadioNoValidation.checked === false ) {
                errorElement4.textContent = "Enter if you will organize Devtalks";
               
            } 

            else if (devtalkRadioYesValidation.checked === true && !devtalkTopicValidation.value.trim()   ) {
                errorElement4.textContent = "Enter Devtalk topic";
              
            }

            else if (!specialValidation.value.trim()) {
                errorElement4.textContent = "Tell us something special";
               
            }
            else {
                errorElement4.textContent=""
                // controllSkillsPage[4].style.backgroundColor ="rgba(254, 59, 31, 1)";
                controllRightArrow[3].parentElement.parentElement.parentElement.classList.add("display_page");
                controllRightArrow[3].parentElement.parentElement.parentElement.nextElementSibling.classList.remove("display_page");
                

            }

        })

 

        // about you validation end 


        
        

          
    
  
    
}




