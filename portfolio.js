$(document).ready(function() {


var projectsData = [{
		"project": {
			"description": "Freecodecamp project",
			"name": "Simon game",
			"url": "https://www.twitch.tv/freecodecamp"			
		}
	},
	
	{
		"project": {
			"description": "Freecodecamp project",
			"name": "Tic Tac Toe",
			"url": "https://www.twitch.tv/freecodecamp"			
		}
	}
	
	
	
	];

	var getprojectts = function() {
		for (var i = 0; i < projectData.length; i++) {

			if (projectData[i].project === null || projectData[i].project === undefined) {
			
				var displayname = projectData[i]..project.name;
				var imageurl = imageurl + "test";
				var description = "";
				var streamerurl = projectData[i].project === null ? 'https://www.twitch.tv/' + displayname : 'https://www.twitch.tv/';				
				streamerurl = encodeURI(streamerurl);				
				var onlineStatus= projectData[i].stream === null ? "offline" : "unavailable";
			} else {
			
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

			html += "<div class='streamer " + onlineStatus + "'>";
			html += "<img class='streamer-component' id='thumbnail' src='" + imageurl + "' alt='streamer logo'>";
			html += "<div class='streamer-component' id='caption'>";
			html += "<h3><a id='username' href='" + streamerurl + "' target='_blank'>" + displayname + "</a></h3>";
			html += "<p id='status'>" + displayname + " is currently " + onlineStatus + "</p>";
			html += "<p id='contentdescription'>" + description + "</p>";
			html += "</div>";
			html += "</div>";

			var div = document.getElementById('gallery');
			div.innerHTML += html;

		}
	};

	getStreamers();
});