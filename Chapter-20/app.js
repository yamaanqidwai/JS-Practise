// Nested For Loops
var songs = ["Metamorphisis", "Fatality", "Rapture", "Kerosene"];
var type = ["Remix", "Slowed"];
var playlist = [];
for (var i = 0; i < songs.length; i++) {
  for (var j = 0; j < type.length; j++) {
    playlist.push(songs[i] + " " + type[j]);
  }
}
