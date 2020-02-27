//META { "name": "HideBlockedMessages","source":"https://raw.githubusercontent.com/CoolFroggy/HideBlockedMessages/master/HideBlockedMessages.plugin.js"} *//
global.HideBlockedMessages = function () {
	class HideBlockedMessages
	{
		getName() {
		  return "Hide Blocked Messages";
		}

		getDescription() {
		  return "Compatible with new Discord update 27feb2020.";
		}

		getAuthor() {
		  return "CoolFroggy";
		}

		getVersion() {
		  return "2";
		}
		
		load() {
		}
		
		async start()
		{
			$(document).ready(
				function() {
					$('.groupStart-23k01U').has('.wrapper-2a6GCs').has('.contents-2mQqc9').has('.blockedSystemMessage-2Rk1ek').css('display','none');
				}
			);
			return document.addEventListener("scroll", onLoad, true);
		}
		
		stop()
		{
			$('.groupStart-23k01U').has('.container-3FojY8').has('.blockedSystemMessage-2Rk1ek').css('display','grid');
			return document.removeEventListener("scroll", onLoad, true);
		}
		
	};
	
	onLoad = function (event) {
		$('.groupStart-23k01U').has('.container-3FojY8').has('.blockedSystemMessage-2Rk1ek').css('display','none');
	}
	
	return HideBlockedMessages;
}.call(this);
