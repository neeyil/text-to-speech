// https://blog.bitsrc.io/building-a-text-to-speech-application-with-javascript-in-3-easy-steps-fdf6aeddfb68

// https://bit.dev/blog/-extracting-and-reusing-pre-existing-components-using-bit-add-l28qlxpz/

const textarea = document.getElementById('text');
const speakButton = document.getElementById('speak');
const voicesSelect = document.getElementById('voices');
const rateInput = document.getElementById('rate');

let voices = [];

function populateVoices() {
    voices = speechSynthesis.getVoices();
    voices.forEach((voice, i) => {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = `${voice.name} (${voice.lang})`;
        voicesSelect.appendChild(option);
    });
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);

speakButton.addEventListener('click', () => {
    let text = textarea.value;
    let utterance = new SpeechSynthesisUtterance(text);

    // Get selected voice
    let selectedVoiceIndex = voicesSelect.value;
    utterance.voice = voices[selectedVoiceIndex];

    // Get rate
    utterance.rate = rateInput.value;

    speechSynthesis.speak(utterance);
});