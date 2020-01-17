        function login() {
                document.getElementById("reg").style.display = "none";
                document.getElementById("log").style.display = "flex";
            }

		function signin() {
		        document.getElementById("log").style.display = "none";
		        document.getElementById("reg").style.display = "flex";
		    }

        // function store() {
        //     var name = document.getElementById('name').value;
        //     var email = document.getElementById('email').value;
        //     var pass = document.getElementById('pass').value;
        //     var cpass = document.getElementById('cpass').value;
        //     if ($('form').checkValidity()){
        //         // if(name != "" && email != "" && pass != "" && cpass != "" && pass.length>=8)
        //         // {
        //             localStorage.setItem('name', name);
        //             localStorage.setItem('email', email);
        //             localStorage.setItem('pass', pass);
        //             alert("Registration Successfull");
        //             window.location="login.html";
        //         //}
        //     }
            
            // else{
            //     document.getElementById("nameer").innerHTML="Please fill Name fields.....";
            //     document.getElementById("nameer").style.color = "red";
            //     document.getElementById("nameer").style.fontSize = "1vmax";

            //     document.getElementById("emailer").innerHTML="Please fill Email fields.....";
            //     document.getElementById("emailer").style.color = "red";
            //     document.getElementById("emailer").style.fontSize = "1vmax";

            //     document.getElementById("passer").innerHTML="Please fill Password fields.....";
            //     document.getElementById("passer").style.color = "red";
            //     document.getElementById("passer").style.fontSize = "1vmax";

            //     document.getElementById("empty").innerHTML="Please fill Confirm Password fields.....";
            //     document.getElementById("empty").style.color = "red";
            //     document.getElementById("empty").style.fontSize = "1vmax";
            // }
            //}
            // function save(){			

            //     var storedName = localStorage.getItem('name');
            //     var storedEmail = localStorage.getItem('email');
            //     var storedPw = localStorage.getItem('pass');

            //     var userEmail = document.getElementById('lemail').value;
            //     var userPw = document.getElementById('lpass').value;

            //     if($('form').checkValidity()){
            //         if(userEmail == storedEmail && userPw == storedPw) {
                        
            //                 alert("Login Successful !");
            //                 window.location="Welcome.html";
                            
                                        
            //         }else {
            //             alert("Invalid Email or Password !");
                        
            //         }
            //     }
                
            // }
            function upperCase(name){                
                    name.value=name.value.toUpperCase();                
            }
            function namecheck(){
                var usr=/[a-z]/;
                var name = document.getElementById('name');
                // if (name.value == "") {
                //     document.getElementById("nameer").innerHTML="*Name must be filled out....";
                //     document.getElementById("nameer").style.color = "red";
                //     document.getElementById("nameer").style.fontSize = "0.8em";
                // }
                if(!usr.test(name.value)){
                    document.getElementById("nameValidation").innerHTML="*Name must be in Alphabetical format....";
                    document.getElementById("nameValidation").style.color = "#dc3545";
                    document.getElementById("nameValidation").style.fontSize = "0.8em";
                }
                
            }
            function emailcheck(){
                var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var email = document.getElementById('email').value;
                // if(email == ""){
                //     document.getElementById("emailer").innerHTML="*Email must be filled out....";
                //     document.getElementById("emailer").style.color = "red";
                //     document.getElementById("emailer").style.fontSize = "1vmax";
                // }
                if (!filter.test(email)) {
                    document.getElementById("emailValidation").innerHTML="*Email Invalid! Use proper email syntax....";
                    document.getElementById("emailValidation").style.color = "#dc3545";
                    document.getElementById("emailValidation").style.fontSize = "0.8em";
                }
                // else{document.getElementById("emailer").innerHTML="";}
            }
            function passcheck(){
                var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
                var pass = document.getElementById('pass').value;
                // if(pass == "")
                // {
                //     document.getElementById("passer").innerHTML="*Password must be filled out....";
                //     document.getElementById("passer").style.color = "red";
                //     document.getElementById("passer").style.fontSize = "1vmax";
                // }
                if (!pass.match(pattern)||pass.length<8) {
                    document.getElementById("passValidation").innerHTML="*Password must be in 1 Capital,1 small,1 digit and minimum 6 words...";
                    document.getElementById("passValidation").style.color = "#dc3545";
                    document.getElementById("passValidation").style.fontSize = "0.8em";
                }
                // else{document.getElementById("passer").innerHTML="";}
            }
            function cpasscheck(){
                var pass = document.getElementById('pass').value;
                var cpass = document.getElementById('cpass').value;
                if(cpass != pass || cpass=="")
                {
                    document.getElementById("cpassValidation").innerHTML="*Password is not matched....";
                    document.getElementById("cpassValidation").style.color = "#dc3545";
                    document.getElementById("cpassValidation").style.fontSize = "0.8em";
                }
            }

            // function change1(){
            //     var pass= document.getElementById("pass");

            //     if(pass.type=="password"){
            //         document.getElementById("pass").type="text";
            //         document.getElementById("eye1").className="col-1 glyphicon glyphicon-eye-close";				
            //     }
            //     else{
            //         document.getElementById("pass").type="password";
            //         document.getElementById("eye1").className="col-1 glyphicon glyphicon-eye-open";				
            //     }
            // }
            // function change2(){
            //     var pass= document.getElementById("cpass");

            //     if(pass.type=="password"){
            //         document.getElementById("cpass").type="text";
            //         document.getElementById("eye2").className="col-1 glyphicon glyphicon-eye-close";				
            //     }
            //     else{
            //         document.getElementById("cpass").type="password";
            //         document.getElementById("eye2").className="col-1 glyphicon glyphicon-eye-open";				
            //     }
            // }

            // function checkPass(){
            //     var pass=document.getElementById("pass").value;
            //     var cpass=document.getElementById("cpass").value;
            //     if(pass!=cpass){
            //         document.getElementById("empty").innerHTML="Password is not match !....";
            //         document.getElementById("empty").style.color = "red";
            //         document.getElementById("empty").style.fontSize = "1vmax";
            //     }
            //     else{
            //         document.getElementById("empty").innerHTML="Password is matched !....";
            //         document.getElementById("empty").style.color = "green";
            //         document.getElementById("empty").style.fontSize = "1vmax";
            //     }
            // }


            function LoginEmail(){
                var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var lemail = document.getElementById('lemail').value;

                // if(lemail==""){document.getElementById("ler").innerHTML="";}

                if(!filter.test(lemail)) {
                    document.getElementById("lemailValidation").innerHTML="*Not a Valid Email....";
                    document.getElementById("lemailValidation").style.color = "#dc3545";
                    document.getElementById("lemailValidation").style.fontSize = "0.8em";
                }
                		
            }
            // function LoginPass(){
            //     var lpass = document.getElementById('lpass').value;
            //     if(lpass != "")
            //     {
            //         document.getElementById("err").innerHTML="";
            //     }
            
            // }


            (function () {
                'use strict';
                window.addEventListener('load', function () {
                    // Fetch all the forms we want to apply custom Bootstrap validation styles to
                    var forms = document.getElementsByClassName('needs-validation1');
                    // Loop over them and prevent submission
                    var validation = Array.prototype.filter.call(forms, function (form) {
                        form['lgbtn'].addEventListener('click', function (event) {
                            if (form.checkValidity() === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                            else{
                                var storedName = localStorage.getItem('name');
                                var storedEmail = localStorage.getItem('email');
                                var storedPw = localStorage.getItem('pass');
    
                                var userEmail = document.getElementById('lemail').value;
                                var userPw = document.getElementById('lpass').value;
                                
                                if(userEmail == storedEmail && userPw == storedPw) {
                                    // document.getElementById('Loginalert').style.display="block";
                                    window.location="Welcome.html";  
                                }else {
                                     
                                    document.getElementById('Loginalert').style.display="flex";                               
                                }
                            }
                            form.classList.add('was-validated');
                        }, false);
                    });
                }, false);
            })();
    
            (function () {
                'use strict';
                window.addEventListener('load', function () {
                    // Fetch all the forms we want to apply custom Bootstrap validation styles to
                    var forms = document.getElementsByClassName('needs-validation2');
                    // Loop over them and prevent submission
                    var validation = Array.prototype.filter.call(forms, function (form) {
                        form['rgbtn'].addEventListener('click', function (event) {
                            if (form.checkValidity() === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                            else{
                                var name = document.getElementById('name').value;
                                var email = document.getElementById('email').value;
                                var pass = document.getElementById('pass').value;
                                var cpass = document.getElementById('cpass').value;
                                
                                localStorage.setItem('name', name);
                                localStorage.setItem('email', email);
                                localStorage.setItem('pass', pass);
                               
                                window.location="Successfull.html";
                            }
                            form.classList.add('was-validated');
                        }, false);
                    });
                }, false);
            })();

            