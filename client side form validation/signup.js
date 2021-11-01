function check(){
   
    let password = document.getElementById('password').value
    let confirm_password = document.getElementById('confirm_password').value
    let pass =document.getElementById('password')
    
    let name = document.getElementById('name')
    let email = document.getElementById('email')

    let pass_msg1 =document.getElementById('pass_msg1')
    let pass_msg2 =document.getElementById('pass_msg2')
    let namemsg =document.getElementById('namemsg')
    let emailmsg =document.getElementById('emailmsg')
   
   
    let pattern =/@+/
    let pattern2=/.com$/i

    


    if (name.value){
        name.style.border="2px solid green"
    }
    else{
        name.style.border="2px solid red"
        namemsg.innerHTML="Name can't be blank"
    }

    if(email.value){
        if(pattern.test(email.value)  & pattern2.test(email.value))
        {
            email.style.border="2px solid green"
        }
        
        else{
            email.style.border="2px solid red"
            emailmsg.innerHTML="Enter correct emailid"
        }
    }
    else{
        emailmsg.innerHTML="Enter emailid"
    }

    if ( ! (pass.value)){
        pass_msg1.innerText="Passaword cant be blank"
        document.getElementById('password').style.border='2px solid red'
        document.getElementById('confirm_password').style.border='2px solid red'
    }
    
    else if (password == confirm_password)
        {
           document.getElementById('password').style.color='green'
           document.getElementById('password').style.border='2px solid green'
           document.getElementById('confirm_password').style.border='2px solid green'
        } 
        else {

            pass_msg1.innerText="Passaword Not Matching"
            pass_msg2.innerText="Password Not Matching"
           
            document.getElementById('confirm_password').style.color='red'
            document.getElementById('password').style.color='red'
           
            document.getElementById('password').style.border='2px solid red'
            document.getElementById('confirm_password').style.border='2px solid red'
        }
    
    
    if ((name.value) && (email.value) && (pass.value)){
        console.log(name.value)
        console.log(email.value)
        console.log(pass.value)
    }
}


