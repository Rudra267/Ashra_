const Fname = document.getElementById("Fname");
const Lname = document.getElementById("Lname");
const email = document.getElementById("email");
const phone = document.getElementById("PhoneNumber");
const subject = document.getElementById("Subject");
const mess = document.getElementById("message");

function sendEmail() {

    if(!Fname.value || !Lname.value || !email.value || !phone.value || !mess.value){
        Swal.fire({
            position: "center",
            icon: "error",
            title: `Try to fill out the empty box in the form`,
            showConfirmButton: false,
            timer: 1500
          });
    }
    else{
         const bodyMessage = `Subject: ${subject.value} Full Name: ${Fname.value} ${Lname.value} Email: ${email.value} Phone Number: ${phone.value} Message: ${mess.value} `;
         
    console.log(bodyMessage)
    var param = {
        to_name:"ASHRA Tech. Customer Support Team",
        from_name:"ASHRA Tech. Customer Service Team",
        message:bodyMessage
    }

 const service_Id = "service_rwm0pzn";
 const template_Id = "template_cvnwjpa"

    emailjs.send(service_Id,template_Id,param).then((res) =>{
            document.getElementById("Fname").value = "",
            document.getElementById("Lname").value = "",
            document.getElementById("email").value = "",
            document.getElementById("PhoneNumber").value = "",
            document.getElementById("message").value = "",
            document.getElementById("Subject").value = "",

            Swal.fire({
                position: "center",
                icon: "success",
                title: `We will reach to contact you`,
                showConfirmButton: false,
                timer: 1500
              });
        }

        
    ).catch((err)=>console.log(err));


  
    }
   
}


