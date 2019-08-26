var intro_play_file_index = 0

var body = document.getElementById("body"); 
body.addEventListener('click', function() {
    playnextintro();
});
var intro_audio_elem = document.getElementById("introaudio"); 
intro_audio_elem.addEventListener("ended",onplayended);

function isPlaying(audelem) { 
    return audelem
        && audelem.currentTime > 0
        && !audelem.paused
        && !audelem.ended
        && audelem.readyState > 2
}

function playnextintro() {
    /// Allows stopping intro recursion later
    if(!isPlaying(intro_audio_elem))
    intro_audio_elem.setAttribute('src', list_intro_audio_files[intro_play_file_index]);
    intro_audio_elem.play();
}

function onplayended() {
    if (enabled_introloop){
        intro_play_file_index = (intro_play_file_index+1)%list_intro_audio_files.length
        intro_audio_elem.setAttribute('src', list_intro_audio_files[intro_play_file_index]);
        intro_audio_elem.play();
    }
}