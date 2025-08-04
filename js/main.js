const playPauseBtn = document.getElementById('playPauseBtn');
const waveformContainer = document.getElementById('waveform-container');

const wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: '#0f0',
  progressColor: '#007BFF',
  height: 60,
  responsive: true,
  barWidth: 3,
  barGap: 2,
});

wavesurfer.load('media/cyberdo.mp3');

playPauseBtn.addEventListener('click', () => {
  if (wavesurfer.isPlaying()) {
    wavesurfer.pause();
    playPauseBtn.textContent = '► Play Audio';
    waveformContainer.style.display = 'none';
  } else {
    wavesurfer.play();
    playPauseBtn.textContent = '❚❚ Pause Audio';
    waveformContainer.style.display = 'block';
  }
});

wavesurfer.on('finish', () => {
  playPauseBtn.textContent = '► Play Audio';
  waveformContainer.style.display = 'none';
});