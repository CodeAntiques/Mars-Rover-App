canvas=document.getElementById("a");
ctx=canvas.getContext("2d");
nasarray=["M1.jpg","M2.jpg","M3.jpg","M4.jpg","M5.jpg","M6.jpg","M7.jpg","M8.jpg","M9.jpg","M1.jpg","M10.jpg"];
r=Math.floor(Math.random()*10);

bgi=nasarray[r];
ri="rover.png";

rx=10;
ry=10;

rw=60;
rh=50;

function add(){
    bgt=new Image();
    bgt.onload=uploadbackground;
     bgt.src=bgi;

     rt=new Image();
    rt.onload=uploadrover;
     rt.src=ri;
}

function uploadbackground(){
    ctx.drawImage(bgt,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rt,rx,ry,rw,rh);
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){
    keypressed=e.keyCode;
    if (keypressed=='37') {
    left();
    }
    if (keypressed=='39') {
        right();
        }
        if (keypressed=='38') {
            up();
            }
            if (keypressed=='40') {
                down();
                }
}

function left(){
    if (rx>=0) {
        rx=rx-10;
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if (rx<=940) {
        rx=rx+10;
        uploadbackground();
        uploadrover();
    }
}

function up(){
    if (ry>=0) {
        ry=ry-10;
        uploadbackground();
        uploadrover();
    }
}

function down(){
    if (ry<=750) {
        ry=ry+10;
        uploadbackground();
        uploadrover();
    }
}

