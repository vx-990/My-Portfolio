const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");
let playing = false;

function toggleMusic(){
  if(!playing){
    music.volume = 0.4;

    music.play()
      .then(() => {
        btn.innerHTML = "🔊";
        playing = true;
      })
      .catch(err => {
        console.log("Audio blocked:", err);
        alert("Click the page first, then press the music button again.");
      });

  } else {
    music.pause();
    btn.innerHTML = "🔇";
    playing = false;
  }
}
