window.onload = function() {
	var signin = document.getElementById("sign_in");

	var Img = document.getElementsByClassName("bg_img");
	var Black = document.getElementById("black");
	var Window = document.getElementById("window");
	var zhuce = document.getElementById("zhuce");
	var denglu = document.getElementById("denglu");
	var line1 = document.getElementById("line1");
	var line2 = document.getElementById("line2");
	var quit = document.getElementById("quit");
	var yzm = document.getElementById("yanzhengma");
	var yzm2 = document.getElementById("yanzhengma2");
	var page1 = document.getElementById("page1");
	var page2 = document.getElementById("page2");
	page = null;
	signin.onclick = function() {
		Black.style.display = "block";
		Window.style.display = "block";

	}
	denglu.onclick = function() {
		var page = 1;
		page1.style.display = "block";
		page2.style.display = "none";
		Window.style.height = "450px";

			denglu.setAttribute("class", "color");
			zhuce.setAttribute("class", " ");
			line1.setAttribute("class", "bgcolor");
			line2.setAttribute("class", " ");
			
	
	}
	zhuce.onclick = function() {
		var page = 2;
		page1.style.display = "none";
		page2.style.display = "block";
		Window.style.height = "350px";

			denglu.setAttribute("class", " ");
			zhuce.setAttribute("class", "color");
			line1.setAttribute("class", " ");
			line2.setAttribute("class", "bgcolor");
			
	
	}

	

	quit.onclick = function() {
		Window.style.display = "none";
		Black.style.display = "none";
	}
	yzm.onclick = function() {
		yzm.setAttribute("src", "http://tech.sky31.top/code.php");
	}
	yzm2.onclick = function() {
		yzm2.setAttribute("src", "http://tech.sky31.top/code.php");
	}

}