music=" ";
music2=" ";

function preload()
{
   song = loadSound("music.mp3");
   song = loadSound("music2.mp3");

}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCanvas(600, 500);
    canvas.center();

    video= createCreate(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
}