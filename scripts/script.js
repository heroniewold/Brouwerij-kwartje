function showButton() {
        		document.getElementById("submit-landing").setAttribute("style", "display: block;"); 
        		}

		let date = new Date();

		let form = document.getElementById("year-landing");

		let btn = document.getElementById("button");

		let submit = document.getElementById("submit-landing");

		/* make the button appear when the year is filled in */
		form.oninput = function() {
			showButton();
		}
	
		
		submit.onclick = function() {

			let user_day = document.getElementById("day-landing").value;
			let user_month = document.getElementById("month-landing").value;
			let user_year = document.getElementById("year-landing").value;
			
			if ((date.getFullYear() - 18) > user_year ) {
				window.location.href = "home.html";
				return;
			}
		
			if ((date.getFullYear() - 18) == user_year ) {
				
				if ((date.getMonth() + 1) >= user_month ) {
					
					if (date.getDate() >= user_day) {
						
						window.location.href = "home.html";
					}
					else { 
						alert("Je bent niet oud genoeg!");
					}
				}
				if (date.getMonth() > user_month ) {
					window.location.href = "home.html";
				}
				
			} 
			else {
				alert("Je bent niet oud genoeg!")
			}
		}