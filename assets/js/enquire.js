const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const skills = document.querySelector("#skills");
const jobTitle = document.querySelector("#job-title");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const country = document.querySelector("#country");
const state = document.querySelector("#state");
const city = document.querySelector("#city");
const zip = document.querySelector("#zip");
const salary = document.querySelector("#salary");
const experience = document.querySelector("#experience");
const resume = document.querySelector("#resume");

function sendEmail() {

    if(!firstName.value || !lastName.value || !skills.value || !jobTitle.value || !email.value || !phone.value || !country.value || !state.value || !city.value || !zip.value || !salary.value || !experience.value || !resume.value) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: `Try to fill out the empty box in the form`,
            showConfirmButton: false,
            timer: 1500
          });
    }
    else{
         const bodyMessage = ` Full Name: ${firstName.value} ${lastName.value}  
Skills: ${skills.value}  
Job Title: ${jobTitle.value}  
Email: ${email.value}  
Phone Number: ${phone.value}  
Country: ${country.value}  
State: ${state.value}  
City: ${city.value}  
Zip: ${zip.value}  
Salary: ${salary.value}  
Years of Experience: ${experience.value}`;
         
    console.log(bodyMessage)
    var param = {
        to_name:"ASHRA Tech. Customer Support Enquire Team",
        from_name:"ASHRA Tech. Customer Service Enquire Team",
        message:bodyMessage
    }

 const service_Id = "service_b0ni5sd";
 const template_Id = "template_msngyjf"

    emailjs.send(service_Id,template_Id,param).then((res) =>{


        Swal.fire({
            position: "center",
            icon: "success",
            title: `We will reach to contact you`,
            showConfirmButton: false,
            timer: 1500
          });


        document.getElementById("first-name").value = "";
        document.getElementById("last-name").value = "";
        document.getElementById("skills").value = "";
        document.getElementById("job-title").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("country").value = "";
        document.getElementById("state").value = "";
        document.getElementById("city").value = "";
        document.getElementById("zip").value = "";
        document.getElementById("salary").value = "";
        document.getElementById("experience").value = "";
        document.getElementById("resume-upload").value = "";
        

      
        }

        
    ).catch((err)=>console.log(err));


  
    }
   
}


