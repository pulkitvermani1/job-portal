//Functions of 1.html

//fun1() switches the login form from Recruiter Login to Student Login  
function fun1() {
    				document.getElementById("divA31").style.display = "none";
					document.getElementById("divA32").style.display = "block";
					document.getElementById("uname").value="";
					document.getElementById("upass").value="";
				}

//fun2() switches the login form from Student Login to Recruiter Login 				
function fun2() {
					document.getElementById("divA31").style.display = "block";
    				document.getElementById("divA32").style.display = "none";
    				document.getElementById("uname").value="";
					document.getElementById("upass").value="";
					document.getElementById("ucode").value="";
				}

//fun3() disables the firm field (for Student Sign in)
function fun3() {
    				document.getElementById("firm").disabled = true;
				}
				
//fun3() enables the firm field (for Job Provider Sign in)				
function fun4() {
					document.getElementById("firm").disabled = false;
				}

//pswtoggle() provide feature of show/hide password for Student Login
function pswtoggle(){
					var x = document.getElementById("upass");
					if(x.type === "password")
						x.type = "text";
					else
						x.type = "password";
				}

//pswtoggle1() provide feature of show/hide password for Job Provide Login
function pswtoggle1(){
					var x = document.getElementById("upass1");
					if(x.type === "password")
						x.type = "text";
					else
						x.type = "password";
				}

//sltoggle() switches from SignUp Field To Login Field
function sltoggle(){
					document.getElementById("divA").style.display = "block";
					document.getElementById("divB").style.display = "none";
}

//sltoggle() switches from Login Field To SignUp Field 
function lstoggle(){
					document.getElementById("divB").style.display = "block";
					document.getElementById("divA").style.display = "none";
}

//pswtoggle1() provide feature of show/hide Unique Code for Job Provide Login
function ucodetoggle(){
					var x = document.getElementById("ucode");
					if(x.type === "password")
						x.type = "text";
					else
						x.type = "password";
				}

//job() provide job search interface on basis of key skills, location, Work Experience etc
function job()
{

}

//recruiter() provide recruiter job search requiring job skill, location et
function recruiter()
{

}

//jobsearch() checks mandatory fields keyskills and/or location
function jobsearch()
{
	var x = document.getElementById("keys").value;
	var y = document.getElemantById("local").value;
	if(x == "" && y == "")
	{
		alert("Key Skill or Location required");
		return false;
	}
	else
	{
		alert("Key Skill or Location required");
		return true;
	}
}


/*
functin to creeate a new field
function myFunction() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "number");
    x.setAttribute("value", "12345");
    document.body.appendChild(x);
}
*?