$(document).ready(function() {


var projectData = [{
		"project": {
			"description": "Freecodecamp project",
			"name": "Simon game",
			"url": "https://rawgit.com/DrWilliamsSteven/Simon-game/master/simon-game.html"			
		}
	},	{
		"project": {
			"description": "Freecodecamp project",
			"name": "Tic Tac Toe",
			"url": "https://rawgit.com/DrWilliamsSteven/tictactoe/master/tictactoe.html"			
		}
	},	{
		"project": {
			"description": "Freecodecamp project",
			"name": "Pomodoro Clock",
			"url": "https://rawgit.com/DrWilliamsSteven/pomodoro-clock/master/pomodoro.html"			
		}
	},	{
		"project": {
			"description": "Freecodecamp project",
			"name": "Calculator",
			"url": "https://rawgit.com/DrWilliamsSteven/calculator/master/calculator.html"			
		}
	},{
		"project": {
			"description": "Freecodecamp project",
			"name": "Codepen clone",
			"url": "https://rawgit.com/DrWilliamsSteven/codepen-clone/master/codepenclone.html"			
		}
	},{
		"project": {
			"description": "Freecodecamp project",
			"name": "Local weather",
			"url": "http://codepen.io/drwilliamssteven/full/wzAEWE/"			
		}
	},




	
	];

	var getProjects = function() {
		for (var i = 0; i < projectData.length; i++) {

					
				// get user info for streamer container
				var displayname = projectData[i].project.name;
				var linkurl = projectData[i].project.url;
				var description_full = projectData[i].project.description;
				if (description_full.length < 50) {
					var description = description_full;
				} else {
					var description = description_full.substring(0, description_full.indexOf(" ", 50)) + "...";
				}


			//build html container and fill with streamer info
			var html = "";

			html += "<div class='col-sm-6 col-md-4'>";
			html +=  '<div class="thumbnail">';
			html +=  "<iframe src='" + linkurl +  "' alt='"  + displayname + "'></iframe>";
			html += '<div class="caption">';
			html += "<h3>'" +displayname + "'</h3>";
			html += "<p>'" + description + "'</p>"
			html += "</div>";
			html += "</div>";
			html += "</div>";
			

			

			var div = document.getElementById('gallery');
			div.innerHTML += html;

		}
	};

	getProjects();
	
});