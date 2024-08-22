let menu = document.querySelector('.menu-icon');


menu.onclick = () => {
    menu.classList.toggle("move")
};
// js email fuction
function validate(){
    let name=document.querySelector(".name")
    let email=document.querySelector(".email")
    let msg=document.querySelector(".message")
    let SendBt=document.querySelector(".fbtn")
    
    SendBt.addEventListener('click' , (e)=>{
        e.preventDefault();
        if (name.value =='' || email.value =='' || msg.value == '') {
            enptyerror();
        }
        else{
            sendmail(name.value , email.value , msg.value);
            success();
        }
    });
}
validate(); 
function sendmail(name,email,msg) {
    emailjs.send("service_39apo0l","template_k8fg2n8",{
        from_name: email,
        to_name: name,
        message: msg,
        
        });
    
}
function enptyerror(){
    swal({
        title: "Oh No .....!",
        text: "faildS cannot be that",
        icon:"error",
        
      });
}
function success(){
    swal({
        title: "Good job",
        text: "Thancks",
        icon:"success",
        
      });
}
