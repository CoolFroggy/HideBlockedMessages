//META { "name": "HideBlockedMessages","authorId":"149955518377492481","website":"https://github.com/CoolFroggy/HideBlockedMessages","source":"https://raw.githubusercontent.com/CoolFroggy/HideBlockedMessages/master/HideBlockedMessages.plugin.js"} *//
global.HideBlockedMessages = function () {
	class HideBlockedMessages
	{
		getName() {
		  return "Hide Blocked Messages";
		}

		getDescription() {
		  return "Compatible with Discord update 28feb2020.";
		}

		getAuthor() {
		  return "CoolFroggy";
		}

		getVersion() {
		  return "1.0.2";
		}
		
		load() {
		}
		
		async start()
		{
			$(document).ready(
				function() {
					$('.groupStart-23k01U').has('.cozy-3raOZG').has('.container-3FojY8').has('.blockedSystemMessage-2Rk1ek').css('display','none');
				}
			);
			return document.addEventListener("scroll", onLoad, true);
		}
		
		stop()
		{
			$('.groupStart-23k01U').has('.cozy-3raOZG').has('.container-3FojY8').has('.blockedSystemMessage-2Rk1ek').css('display','grid');
			return document.removeEventListener("scroll", onLoad, true);
		}
		
	};
	
	onLoad = function (event) {
		$('.groupStart-23k01U').has('.cozy-3raOZG').has('.container-3FojY8').has('.blockedSystemMessage-2Rk1ek').css('display','none');
	}
	
	return HideBlockedMessages;
}.call(this);
