window.onload = function(){

  //show all text while klicking on the button "Read more" and hide part of text when to click "Show less"
    var readMoreButtons = document.querySelectorAll(".blog-btn")

    readMoreButtons = Array.from(readMoreButtons)

    readMoreButtons.forEach(function(btn){
        btn.addEventListener("click", function(event){
            
            var button = event.target
            var article = button.parentElement
            var text = article.querySelector("p")
            if(text.classList.contains("blog-deployed")){
                text.classList.remove("blog-deployed")
                button.textContent = "Read more..."
            }else {
                text.classList.add("blog-deployed")
                 button.textContent = "Show less"
            }
            

        })
    })


// form validation

var submitButton = document.querySelector(".btn-reg")
var fields = document.querySelectorAll("input", "select")
var numberOnly = document.querySelector(".numbers-only")
var select = document.querySelector(".select-form")

//Adding events 'focus' and 'blur' for all inputs
    for (var i = 0; i < fields.length; i++){
        fields[i].addEventListener("focus", function(event){
            var element = event.target.parentElement.querySelector(".wrong-input")
            element.textContent = ""
        });

        
        numberOnly.addEventListener("keypress", function(event){
            var value = event.target.value.replace(/[^\d]/g, "")
            if(event.which < 48 || event.which > 57 || value.length > 10){
                event.preventDefault()
            }
        });


        fields[i].addEventListener("blur", function(event){
            var element = event.target.parentElement.querySelector(".wrong-input")
            var error = validator[event.target.name] ? validator[event.target.name](event.target.value) : false
            if (error){
                submitButton.disabled = true
                event.target.classList.add("invalid")
            }else{
                event.target.classList.remove("invalid")
                if (checkIfEmpty(fields)){
                    submitButton.disabled = false
                }
        
            }
            element.textContent = error ? error : ""
        });

   }
//Adding event 'change' for select
        select.addEventListener("change", function(event){
            var element = event.target.parentElement.querySelector(".wrong-input")
            var error = validator[event.target.name] ? validator[event.target.name](event.target.value) : false
            if (error){
                submitButton.disabled = true
                event.target.classList.add("invalid")
            }else{
                event.target.classList.remove("invalid")
                if (checkIfEmpty(fields) ){
                    console.log(select.value)
                    submitButton.disabled = false
                }
            }
            element.textContent = error ? error : ""
        });

//checking if all fields are filled
    function checkIfEmpty(fields){
        for (var i = 0; i < fields.length; i++){
            if((fields[i].classList.contains("invalid")) || (select.classList.contains("invalid"))){
                  return false
            }
        }
        return true
    }


// error messages for all inputs and select field
var validator = {
    userFirstname: function(inputText){
        if (inputText === "") {
            return "You can't leave this field empty"
        } else if (inputText.length < 3 || inputText.length > 30) {
            return "Invalid first name"    
        } else if(!/^[A-Za-z\-\s]*$/g.test(inputText)){
            return "You can't use numbers in your first name"
        }
        return false
    },

 
    userLastname: function(inputText){
        if(inputText === ""){
            return "You can't leave this field empty"
        } else if (inputText.length < 3 || inputText.length > 30){
            return "Invalid last name" 
        } else if (!/^[A-Za-z\-\s]*$/g.test(inputText)){
            return "You can't use numbers in your last name"
        }
    },

    city: function(inputText){
        if(inputText === ""){
            return "You can't leave this field empty"
        } else if (inputText.length < 2 || inputText.length > 30){
            return "Invalid city name" 
        } else if (!/^[A-Za-z\-\s]*$/g.test(inputText)){
            return "You can't use numbers in city name"
        }
    },

    email: function(inputText){
        if(inputText === ""){
            return "You can't leave this field empty"
        } else if (inputText.length < 3 || inputText.length > 30){
            return "Invalid email address" 
        } else if (!/^[A-Za-z0-9._]+@[a-z]+\.[a-z]{2,3}/g.test(inputText)){
            return "Please, enter correct email address"
        }
    },

    number: function(inputText){
        if(inputText === ""){
            return "You can't leave this field empty"
        } else if (inputText.length < 10 || inputText.length > 14){
            return "Invalid phone number" 
        // } else if (!/^\+(?:[0-9] ?){6,14}[0-9]$/g.test(inputText)){
        //     return "Please, enter correct phone number"
        }
    }, 

    password: function(inputText){
        if(inputText === ""){
            return "You can't leave this field empty"
        } else if (inputText.length < 8 || inputText.length > 30){
            return "Password should be at least 8 characters" 
        } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/g.test(inputText)){
            return "Password should contain uppercase letters and numbers"
        }
    },

    cnfmPassword: function(inputText){
        var pass = document.querySelector('.user-password')
        if(inputText === ""){
            return "You can't leave this field empty"
        } else if (inputText !== pass.value){
            return "Please enter the same password in both fields"
        }
    },

    select: function(selectText){
        var pass = document.querySelector('.select')
        if(selectText === "Choose country"){
            return "You must choose your country"
        } 
    }

}



}









































     




