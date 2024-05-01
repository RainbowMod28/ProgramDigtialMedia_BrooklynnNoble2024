// Create audio context
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

// Create oscillators
const primaryOscillator = audioContext.createOscillator();
primaryOscillator.type = 'sawtooth';
primaryOscillator.frequency.value = 440; // Adjust frequency as needed

const textureOscillator = audioContext.createOscillator();
textureOscillator.type = 'square';
textureOscillator.frequency.value = 880; // Adjust frequency as needed

// Create filter
const filter = audioContext.createBiquadFilter();
filter.type = 'lowpass';
filter.frequency.value = 2000; // Initial cutoff frequency
filter.Q.value = 10; // Adjust resonance as needed

// Create modulation (LFO)
const lfo = audioContext.createOscillator();
lfo.frequency.value = 5; // Modulation speed
const lfoGain = audioContext.createGain();
lfoGain.gain.value = 500; // Modulation depth
lfo.connect(lfoGain);
lfoGain.connect(filter.frequency);

// Create envelope
const envelope = audioContext.createGain();
envelope.gain.setValueAtTime(0, audioContext.currentTime);
envelope.gain.linearRampToValueAtTime(1, audioContext.currentTime + 0.1); // Attack
envelope.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + 0.3); // Decay

// Connect nodes
primaryOscillator.connect(envelope);
textureOscillator.connect(envelope);
envelope.connect(filter);
filter.connect(audioContext.destination);

// Start oscillators
primaryOscillator.start();
textureOscillator.start();
lfo.start();

// Trigger the sound effect when canvas is clicked
const canvas = document.getElementById('canvas');
canvas.addEventListener('click', () => {
    // Start the envelope
    envelope.gain.setValueAtTime(0, audioContext.currentTime);
    envelope.gain.linearRampToValueAtTime(1, audioContext.currentTime + 0.1);
    envelope.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.3);
});
