const skillsSelect = document.querySelector("#skills")
let experience = document.querySelector("#experience");
const addSkillBtn = document.querySelector("#btn_add_skill")
const skillsList = document.querySelector("#skills_info");

const controllsDivDown = document.querySelectorAll(".controlls");

// console.log(skillsSelect)


// fetching skiils from server to put them in select html element start 

fetch("https://bootcamp-2022.devtest.ge/api/skills")
.then(res => { return res.json()})
.then (data => {
    for ( let i=0; i<data.length; i++) {
        let option = document.createElement("option");
        option.text = data[i].title;
        option.value = data[i].id;
        option.name ="skills"
        skillsSelect.appendChild(option);
    
    }
})
// fetching skiils from server to put them in select html element end
 
let skillsArray = []
function getSelectValue () {
    let selectedValue = skillsSelect.value
    console.log(selectedValue)
    if (!experience.value) { experience.value= 0 }
    skillsArray.push({id:selectedValue, experience: experience.value})
   
    console.log(skillsArray)
}


addSkillBtn.addEventListener("click", function (e) {
    if(skillsSelect.value===""){}
    else {
    e.preventDefault();

   
    
    let optionSelectedskill =  skillsSelect.options[skillsSelect.selectedIndex];
   

    console.log(optionSelectedskill.id)

    let newDiv = document.createElement("div");
    newDiv.innerHTML = `${optionSelectedskill.text}     
              Years of Experience: ${experience.value} `


        //  styling new skills boxes start
        newDiv.style.fontFamily="Montserrat";
        newDiv.style.width="447px";
        newDiv.style.height="48px";
        newDiv.style.boxSizing="border-box"
        newDiv.style.border="1px solid #525557";
        newDiv.style.marginBottom ="10px";
        newDiv.style.display="flex";
        newDiv.style.alignItems="center";
        newDiv.style.justifyContent="space-evenly";
        //  styling new skills boxes end

    //    after adding lots of skills new boxes cover arrow and bullet controls div so i am moving it down  start
    if (skillsArray.length === 5){
        for (let i =0; i<controllsDivDown.length; i++ ) {
        controllsDivDown[1].style.transform="translateY(50px)"
        }
    }  
     if (skillsArray.length === 6) { 
        controllsDivDown[1].style.transform="translateY(100px)"
    }
     if (skillsArray.length === 7) { 
        controllsDivDown[1].style.transform="translateY(150px)"
    }
    //  arrow and bullet controls div moving down end 
        

        

        // __
    skillsList.append(newDiv)
    getSelectValue()
    // disabling the posibility to choose the same skill twice start 


    optionSelectedskill.disabled = true;
    skillsSelect.value="Skills"

    // disabling the posibility to choose the same skill twice end 


// creating a remove button in each skill box start
    let removeSpan = document.createElement("span")
    // removeSpan.textContent = "-";
    removeSpan.style.width="13px"
    removeSpan.style.height="13px"
    removeSpan.style.borderRadius="50%"
    removeSpan.style.border="2px solid #FE3B1F"
    removeSpan.style.position="relative"
    removeSpan.style.cursor="pointer"
    const removeSpanInside = document.createElement("span");
    removeSpanInside.style.width="10px";
    removeSpanInside.style.height="2px";
    removeSpanInside.style.backgroundColor=" #FE3B1F";
    removeSpanInside.style.top="6px";
    removeSpanInside.style.right="2px";
    removeSpanInside.style.position="absolute";
    removeSpan.appendChild(removeSpanInside);
    newDiv.appendChild(removeSpan);
    // creating a remove button in each skill box end


    removeSpan.addEventListener("click", function (e) {
        removeSpan.parentElement.remove();


       let  myArray = skillsArray.filter(function(obj){
        if (!skillsArray.length) {
            myArray = [];
        } 
    
           return  obj.id !== optionSelectedskill.value
        
             
        })
    skillsArray = myArray;
        


       console.log(skillsArray) 


        
     
        optionSelectedskill.disabled = false;
        
    })
    
}

   




})

// console.log(skillsArray)
