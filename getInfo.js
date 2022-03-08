
const infoCards = document.querySelector (".info_cards")


fetch("https://bootcamp-2022.devtest.ge/api/applications?token=022ff462-db48-4b7f-b4e4-c71a58809515")
.then(response => {
   return response.json()
})
.then (data => {
    for ( let i=0; i<data.length; i++) {
        const divShowInfo = document.createElement("div");
        divShowInfo.classList.add("show_info");
        divShowInfo.style.cursor="pointer";
        infoCards.appendChild(divShowInfo);
        console.log(data);
        
        const number = document.createElement("span")
        number.textContent = [i + 1] ;
        number.style.marginLeft ="20px"
        divShowInfo.appendChild(number);
       
        const divInfo = document.createElement("div")
        divInfo.classList.add("display_toggle")
        divInfo.classList.add("information")

        // personal information ________________ :

        const personalInfoDiv = document.createElement("div")
        personalInfoDiv.innerHTML = `<h2>Personal Information</h2 <br> 
        First Name:             ${data[i].first_name} <br>
         Last Name:${data[i].last_name} <br> E Mail: ${data[i].email} <br>
         Phone: ${data[i].phone} `;
        //  divInfo.appendChild(personalInfoDiv);
         personalInfoDiv.style.width ="473px";
         personalInfoDiv.style.height =" 299px";
         personalInfoDiv.style.display ="flex";
         personalInfoDiv.style.flexDirection ="column";
         personalInfoDiv.style.justifyContent ="space-evenly";
         

        //  skills ___________
        const skillsetDiv = document.createElement("div")
        const skillsetHeading = document.createElement("h2")
        skillsetHeading.textContent="Skillset"
        skillsetDiv.appendChild(skillsetHeading) 

        for (let j=0; j<data[i].skills.length; j++) {
            console.log(data[i].skills[j].id, data[i].skills[j].experience )
            

            if (data[i].skills[j].id === 1) {
                 data[i].skills[j].id ="HTML"
            }
            
            if (data[i].skills[j].id === 2) {
                data[i].skills[j].id ="CSS"
           }

           if (data[i].skills[j].id === 3) {
            data[i].skills[j].id ="PHP"
           }

           if (data[i].skills[j].id === 4) {
           data[i].skills[j].id ="Laravel"
           } 

           if (data[i].skills[j].id === 5) {
             data[i].skills[j].id ="React.js"
           } 

           if (data[i].skills[j].id === 6) {
              data[i].skills[j].id ="Vue.js"
           } 

           if (data[i].skills[j].id === 7) {
             data[i].skills[j].id ="Svelte"
            } 

           if (data[i].skills[j].id === 8) {
             data[i].skills[j].id ="Angular"
             }


            let pSkills = document.createElement("p");
            pSkills.innerText =  ` ${data[i].skills[j].id} Years of experience: ${data[i].skills[j].experience}`

            

        skillsetDiv.appendChild(pSkills)

        skillsetDiv.style.width="449px";
        // skillsetDiv.style.height="152px";
        skillsetDiv.style.display="flex";
        skillsetDiv.style.flexDirection="column";
        // skillsetDiv.style.justifyContent="space-evenly";
        skillsetDiv.style.marginTop="58px";


          
        }
    
        
        //  divInfo.appendChild(skillsetDiv) 


        //  style personal and skill start
        const firstRow = document.createElement("div")
        firstRow.style.width="1154px";
        // firstRow.style.height="299px";
        firstRow.style.display="flex";
        firstRow.style.justifyContent="center";
        firstRow.style.alignContent="center";
        firstRow.style.fontStyle="italic";

        firstRow.appendChild(personalInfoDiv)
        firstRow.appendChild(skillsetDiv)

        divInfo.appendChild(firstRow)



        
        //  style personal and skill end
         

        //  Covid Situatuon _________ :
        // how would you prefer to work ? ___________
        const divCovidSituation =  document.createElement("div")
        const covidHeading = document.createElement("h2")
        covidHeading.textContent = "Covid Situation";
        const pTagPreferToWork = document.createElement("p");
        pTagPreferToWork.textContent = "how would you prefer to work?";
        divCovidSituation.appendChild(covidHeading);
        divCovidSituation.appendChild(pTagPreferToWork);

        const inputWorkSpace1 = document.createElement("input")
        const inputWorkSpace2 = document.createElement("input")
        const inputWorkSpace3 = document.createElement("input")

        const label1 = document.createElement("label");
        const label2 = document.createElement("label");
        const label3 = document.createElement("label");

        label1.textContent ="From Sairme Office";
        label2.textContent ="From Home";
        label3.textContent ="Hybrid";

        label1.for="input1"
        label2.for="input2"
        label3.for="input3"

        inputWorkSpace1.name =`work_preference${[i]}`
        inputWorkSpace1.value ="from_office"
        inputWorkSpace1.type ="radio"
        inputWorkSpace1.id ="input1";

        inputWorkSpace2.name =`work_preference${[i]}`
        inputWorkSpace2.value ="from_home"
        inputWorkSpace2.type ="radio"
        inputWorkSpace2.id ="input2";

        inputWorkSpace3.name =`work_preference${[i]}`
        inputWorkSpace3.value ="hybrid"
        inputWorkSpace3.type ="radio"
        inputWorkSpace3.id ="input3";

        

        if (data[i].work_preference==="from_office") {
            inputWorkSpace1.checked = true;
            inputWorkSpace2.disabled =true;
            inputWorkSpace3.disabled =true;
        } else if (data[i].work_preference==="from_home") {
            inputWorkSpace2.checked = true;
            inputWorkSpace1.disabled =true;
            inputWorkSpace3.disabled =true;
        } else if  (data[i].work_preference==="hybrid") {
            inputWorkSpace3.checked = true;
            inputWorkSpace2.disabled =true;
            inputWorkSpace1.disabled =true;
        }


        divCovidSituation.appendChild(inputWorkSpace1)
        divCovidSituation.appendChild(label1)
        divCovidSituation.appendChild(inputWorkSpace2)
        divCovidSituation.appendChild(label2)
        divCovidSituation.appendChild(inputWorkSpace3)
        divCovidSituation.appendChild(label3)


        // Did you have covid ? _______________

        const pTagCovidHad = document.createElement("p");
        pTagCovidHad.textContent = "Did you have covid19?";
        divCovidSituation.appendChild(pTagCovidHad);

        const inputCovidYes = document.createElement("input");
        const inputCovidNo = document.createElement("input");

        inputCovidYes.type="radio";
        inputCovidYes.id="covid_yes";
        inputCovidNo.type="radio";
        inputCovidNo.id="covid_no";

        const labelCovidYes = document.createElement("label");
        const labelCovidNo = document.createElement("label");

        labelCovidYes.textContent="Yes";
        labelCovidNo.textContent="No";
        labelCovidYes.for ="covid_yes";
        labelCovidNo.for ="covid_no";

        divCovidSituation.appendChild(inputCovidYes);
        divCovidSituation.appendChild(labelCovidYes);
        divCovidSituation.appendChild(inputCovidNo);
        divCovidSituation.appendChild(labelCovidNo);

        if (data[i].had_covid===true){
            inputCovidYes.checked = true;
            inputCovidNo.disabled = true;
        } else if (data[i].had_covid===false) {
          
            inputCovidNo.checked = true;
            inputCovidYes.disabled = true;
        }

    //    covid date _____________________

    const pTagCovidDate = document.createElement("p");
    pTagCovidDate.textContent = "When did you have covid?"
    divCovidSituation.appendChild(pTagCovidDate)
    const inputCovidDate = document.createElement("input");
    inputCovidDate.type="date"
    inputCovidDate.value = data[i].had_covid_at;
    inputCovidDate.disabled = true;
    if(data[i].had_covid_at ==="1000-01-01"){
        inputCovidDate.style.display ="none";
        pTagCovidDate.style.display="none";
    }

    inputCovidDate.style.width="349px";
    inputCovidDate.style.height="54px";
    inputCovidDate.style.border="1px solid #525557";

    divCovidSituation.appendChild(inputCovidDate)

    // Have you been vaccinated ? __________

    const pTagVaccinated = document.createElement("p");
    pTagVaccinated.textContent ="Have you been vacinated?";
    divCovidSituation.appendChild(pTagVaccinated);

    const inputRadioVaccinatedYes = document.createElement("input");
    const inputRadioVaccinatedNo = document.createElement("input");

    inputRadioVaccinatedYes.type = "radio";
    inputRadioVaccinatedYes.id = "vacinated_yes_radio";
    inputRadioVaccinatedNo.type = "radio";
    inputRadioVaccinatedNo.id = "vacinated_no_radio";

    const labelVaccinatedYes = document.createElement("label");
    const labelVaccinatedNo = document.createElement("label");

    labelVaccinatedYes.textContent ="Yes";
    labelVaccinatedNo.textContent ="No";
    labelVaccinatedYes.for="vacinated_yes_radio";
    labelVaccinatedNo.for="vacinated_no_radio";



    divCovidSituation.appendChild(inputRadioVaccinatedYes);
    divCovidSituation.appendChild(labelVaccinatedYes)
    divCovidSituation.appendChild(inputRadioVaccinatedNo);
    divCovidSituation.appendChild(labelVaccinatedNo)

    if(data[i].vaccinated === true) {
        inputRadioVaccinatedYes.checked = true;
        inputRadioVaccinatedNo.disabled = true;
    } else if (data[i].vaccinated === false) {
        inputRadioVaccinatedNo.checked = true;
        inputRadioVaccinatedYes.disabled=true;
    }


    // when did you get vaccinated ? __________

    const pTagDateVaccinated = document.createElement("p");
    pTagDateVaccinated.textContent="When did you get covid vaccine?";
    divCovidSituation.appendChild(pTagDateVaccinated);

    const inputVaccinatedDate = document.createElement("input");
    inputVaccinatedDate.type="date"
    inputVaccinatedDate.value = data[i].vaccinated_at;
    inputVaccinatedDate.disabled = true;
    if(data[i].vaccinated_at ==="1000-01-01"){
        inputVaccinatedDate.style.display ="none";
        pTagDateVaccinated.style.display="none";

    }
    inputVaccinatedDate.style.width="349px";
    inputVaccinatedDate.style.height="54px";
    inputVaccinatedDate.style.border="1px solid #525557";

    divCovidSituation.appendChild(inputVaccinatedDate); 

// styles
    divCovidSituation.style.display ="flex";
    divCovidSituation.style.flexDirection ="column";
    divCovidSituation.style.justifyContent ="space-evenly";
    // divCovidSituation.style.alignItems ="center";

    divCovidSituation.style.width="647px";
    divCovidSituation.style.height="905px";
    divCovidSituation.style.marginLeft="110px";

// _____

        

        // ___________________
        // insight _______________
        // Would you attend devtalks ? _______________________
        const insightDiv = document.createElement("div");
        
        const insightHeading = document.createElement("h2");
        insightHeading.textContent = "Insight";
        insightDiv.appendChild(insightHeading);

        const pTagAttendDevTalks = document.createElement("p");
        pTagAttendDevTalks.textContent= "Would you attend Devtalks and maybe also organize your own?"
        insightDiv.appendChild(pTagAttendDevTalks);

        const inputRadioDevTalkYes = document.createElement("input");
        const inputRadioDevTalkNo = document.createElement("input");

        inputRadioDevTalkYes.type = "radio";
        inputRadioDevTalkYes.id = "devtalk_yes_radio";
        inputRadioDevTalkNo.type = "radio";
        inputRadioDevTalkNo.id = "devtalk_no_radio";

         const labelDevTalkYes = document.createElement("label");
         const labelDevTalkNo = document.createElement("label");

         labelDevTalkYes.textContent ="Yes";
         labelDevTalkNo.textContent ="No";
        labelDevTalkYes.for="devtalk_yes_radio";
        labelDevTalkNo.for="devtalk_no_radio";

        if(data[i].will_organize_devtalk === true) {
            inputRadioDevTalkYes.checked = true;
            inputRadioDevTalkNo.disabled = true;
        } else if (data[i].will_organize_devtalk === false) {
            inputRadioDevTalkNo.checked = true;
            inputRadioDevTalkYes.disabled = true;
        }

        insightDiv.appendChild(inputRadioDevTalkYes);
        insightDiv.appendChild(labelDevTalkYes);
        insightDiv.appendChild(inputRadioDevTalkNo);
        insightDiv.appendChild(labelDevTalkNo);

        // what would you speak about _________________

        const pTagDevTalkTopic = document.createElement("p");
        pTagDevTalkTopic.textContent="What would you speak about at Devtalk?";
        insightDiv.appendChild(pTagDevTalkTopic);

        const textAreaDevTalkTopic = document.createElement("textarea");
        textAreaDevTalkTopic.value = data[i].devtalk_topic;
        textAreaDevTalkTopic.cols ="40";
        textAreaDevTalkTopic.rows ="8";
        textAreaDevTalkTopic.style.resize="none";
       

       
        textAreaDevTalkTopic.disabled = true;

        if (data[i].devtalk_topic ==="nothing") {
            pTagDevTalkTopic.style.display="none";
            textAreaDevTalkTopic.style.display="none";

        }
        insightDiv.appendChild(textAreaDevTalkTopic);

        // something special ___________________
        const pTagSpecial = document.createElement("p");
        pTagSpecial.textContent = "Tell us something special";
        insightDiv.appendChild(pTagSpecial);

        const textAreaSpecial = document.createElement("textarea");
        textAreaSpecial.value= data[i].something_special;
        textAreaSpecial.cols="35";
        textAreaSpecial.rows="6";
        textAreaSpecial.style.resize="none";
        textAreaSpecial.disabled=true;

        insightDiv.appendChild(textAreaSpecial);

        // ____________
        insightDiv.style.width="449px";
        insightDiv.style.height="626px";
        insightDiv.style.display="flex";
        insightDiv.style.flexDirection="column";
        insightDiv.style.justifyContent="space-evenly";
        insightDiv.style.marginTop="58px";
        insightDiv.style.marginRight="225px";
    
        insightDiv.style.transform="translateY(-50px)";


        // 

        
        // styles
        divInfo.style.fontFamily="Montserrat";
        
        divInfo.style.fontWeight="normal";
        

        // 

        // covid about you style start
        const secondRow = document.createElement("div");
        secondRow.style.width="1154px";
        secondRow.style.height="905px";
        secondRow.style.display="flex";
        secondRow.style.justifyContent="center";
        secondRow.style.alignContent="center";


        secondRow.appendChild(divCovidSituation)
        secondRow.appendChild(insightDiv)
        divInfo.appendChild(secondRow)

        // covid about you style end





// _______________________


        
        
        infoCards.appendChild(divInfo)
        divShowInfo.addEventListener("click", function() {
            divInfo.classList.toggle("display_toggle")
        })
    }
})




