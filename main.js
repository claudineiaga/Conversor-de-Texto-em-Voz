var supportMsg = document.getElementById('msg');
var button = document.getElementById('fale');
var speechMsgInput = document.getElementById('speech-msg');
var voiceSelect = document.getElementById('voz');
var volumeInput = document.getElementById('volume');

function loadVoices() {
	var voices = speechSynthesis.getVoices();
	voices.forEach(function(voice, i) {
		var option = document.createElement('option');
		option.value = voice.name;
		option.innerHTML = voice.name;
		voiceSelect.appendChild(option);
	});
}
loadVoices();
window.speechSynthesis.onvoiceschanged = function(e) {
  loadVoices();
};
function speak(text) {
	var msg = new SpeechSynthesisUtterance();
	msg.text = text;
	msg.volume = parseFloat(volumeInput.value);
	if (voiceSelect.value) {
		msg.voice = speechSynthesis.getVoices().filter(function(voice) { 
            return voice.name == voiceSelect.value; 
        })[0];
	}
	window.speechSynthesis.speak(msg);
}
button.addEventListener('click', function(e) {
	if (speechMsgInput.value.length > 0) {
		speak(speechMsgInput.value);
	}
});