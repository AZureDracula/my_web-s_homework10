function load(){
	var xmlhttp;
	var Window   = document.getElementById("window");
 	var output   = document.getElementById("output");
	var under    = document.getElementById("under");
	var username = document.getElementById("value1").value;
	var password = document.getElementById("value2").value;
	var code     = document.getElementById("yanzhengma_input1").value;
    var p1		 = document.getElementById("p1");
	var p2		 = document.getElementById("p2");
	var p3		 = document.getElementById("p3");
	var wrong1   = document.getElementById("wrong_1");
	var wrong2	 = document.getElementById("wrong_2");
	var wrong3	 = document.getElementById("wrong_3");
	var wrong4	 = document.getElementById("wrong_4");
	var xmlhttp=new XMLHttpRequest();

 	Window.style.top="10%"
 	Window.style.height="550px"
	

	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{	
			
			alert("登陆呐~~~~~");
			jsonText = JSON.parse(xmlhttp.responseText);
   			showResponse(jsonText);
        	console.log(jsonText);
   			
   			
   			
		}
		
	}
	
	xmlhttp.open("POST","https://test.acver.xyz/login.php",false);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("username="+username+"&password="+password+"&code="+code);
	
	function showResponse(jsonText) {
	switch(jsonText.data.sex){
    							case "0":
      								sex = "男	";
     								break;
    							case "1":
      								sex = "女	";
      								break;
  							}

	console.log(jsonText.data.sex);
	switch(jsonText.code)
  {
  	case 0:
      
      alert("登陆成功");
      
      wrong1.style.display="none";
      wrong2.style.display="none";
      wrong3.style.display="none";
      wrong4.style.display="none";
      
    	break;
 		case 1:
      wrong1.style.display="block";
      wrong2.style.display="none";
      wrong3.style.display="none";
      wrong4.style.display="none";
      output.style.display="none";
      break;
  	case 2:
      wrong1.style.display="none";
      wrong2.style.display="block";
      wrong3.style.display="none";
      wrong4.style.display="none";
      output.style.display="none";
      break;
    case 3:
      wrong1.style.display="none";
      wrong2.style.display="none";
      wrong3.style.display="block";
      wrong4.style.display="none";
      output.style.display="none";
      
   	 	break;
  	case 4:
  	  wrong1.style.display="none";
      wrong2.style.display="none";
      wrong3.style.display="none";
      wrong4.style.display="block";
      output.style.display="none";
    	break;
 	}
	output.innerHTML="	姓名："+jsonText.data.name+ "<br>"+"	年龄："+jsonText.data.age +"岁	"+ "<br>"+"	性别："+ sex +"性      "+ "<br>"+"	电话号码："+ jsonText.data.other.phone + "<br>"+"	家庭住址："+jsonText.data.other.address;
	
	
	
	
	
	
	
	
	
	
	
	}
	
}