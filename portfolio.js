$(document).ready(function() {


var projectData = [{
		"project": {
			"description": "Freecodecamp project",
			"name": "Simon game",
			"url": "https://drwilliamssteven.github.io/Simon-game/simon-game.html"	,	
			"imgurl": "screenshots/simon.png"
		}
	},	{
		"project": {
			"description": "Freecodecamp project",
			"name": "Tic Tac Toe",
			"url": "https://rawgit.com/DrWilliamsSteven/tictactoe/master/tictactoe.html"	,
			"imgurl": "screenshots/tictactoe.png"
		}
	},	{
		"project": {
			"description": "Freecodecamp project",
			"name": "Pomodoro Clock",
			"url": "https://rawgit.com/DrWilliamsSteven/pomodoro-clock/master/pomodoro.html",
			"imgurl": "screenshots/pomodoro.png"
		}
	},	{
		"project": {
			"description": "Freecodecamp project",
			"name": "Calculator",
			"url": "https://rawgit.com/DrWilliamsSteven/calculator/master/calculator.html"	,
			"imgurl": "screenshots/calculator.png"			
		}
	},{
		"project": {
			"description": "Freecodecamp project",
			"name": "Codepen clone",
			"url": "https://rawgit.com/DrWilliamsSteven/codepen-clone/master/codepenclone.html",
			"imgurl": "screenshots/codepenclone.png"			
		}
	},{
		"project": {
			"description": "Freecodecamp project",
			"name": "Local weather",
			"url": "http://codepen.io/drwilliamssteven/full/wzAEWE/"	,
			"imgurl": "screenshots/local-weather.png"
		}
	}	
	];

	var getProjects = function() {
		for (var i = 0; i < projectData.length; i++) {
					
				// get project info for  container
				var displayname = projectData[i].project.name;
				var linkurl = projectData[i].project.url;
				var imgurl = projectData[i].project.imgurl;
				var description_full = projectData[i].project.description;
				if (description_full.length < 50) {
					var description = description_full;
				} else {
					var description = description_full.substring(0, description_full.indexOf(" ", 50)) + "...";
				}

			//build html container and fill with project info
			var html = "";

			html += "<div class='gallery_container'>";
			html += "<div class= ' '>";
			
			html += "<a href='" + linkurl + "'>";
			html +=  '<div class="project_img">';
			html +=  "<img src='" + imgurl +  "' alt='"  + displayname + "'>";
			html += "</div>";
							
			html += "</div>";
			html += "</div>";		

			

			var div = document.getElementById('gallery');
			div.innerHTML += html;

		}
	};

	getProjects();
	
});