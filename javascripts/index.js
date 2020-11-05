let mylatesttap, currIndex = 1,
    inverted = !1;

const stickers = [
  	{name: 'Bowl', filename: 'bowl-sticker.png'},
    {name: 'Car', filename: 'car-sticker.png'},
    {name: 'Cat', filename: 'cat-sticker.png'},
    {name: 'Choi', filename: 'choi-sticker.png'},
    {name: 'Cloud', filename: 'cloud-sticker.png'},
    {name: 'Double Happiness', filename: 'double-happiness-sticker.png'},
    {name: 'Face Mask', filename: 'face-mask-sticker.png'},
    {name: 'Fan', filename: 'fan-sticker.png'},
    {name: 'Field', filename: 'field-sticker.png'},
    {name: 'Fish Diner', filename: 'fish-diner-sticker.png'},
    {name: 'Frog', filename: 'frog-sticker.png'},
    {name: 'Mahjong', filename: 'mahjong-sticker.png'},
    {name: 'Melody', filename: 'melody-sticker.png'},
    {name: 'Mountain', filename: 'mountain-sticker.png'},
    {name: 'Octopus', filename: 'octopus-sticker.png'},
  	{name: 'PC Room', filename: 'pcroom-sticker.png'},
    {name: 'Penguin', filename: 'pengu-sticker.png'},
    {name: 'Red Panda', filename: 'redpanda-sticker.png'},
    {name: 'Shoes', filename: 'shoes-sticker.png'},
  	{name: 'Soy Sauce', filename: 'soy-sauce-sticker.png'},
    {name: 'Tea Set', filename: 'teaset-sticker.png'},
    {name: 'Toilet Bowl', filename: 'toiletbowl-sticker.png'},
  	{name: 'Train', filename: 'train-sticker.png'},
    {name: 'Wang Wang', filename: 'wangwang-sticker.png'},
];

populateStickers();

function populateStickers() {
  const toolsDiv = document.querySelector('.tools');
  stickers.forEach(sticker => {
    let newImg = document.createElement("img");
    newImg.width = 50;
    newImg.height = 50;
    newImg.alt = `${sticker.name} Sticker`;
    newImg.title = `Sage ${sticker.name}`;
    newImg.src = `images/${sticker.filename}`;
    newImg.onclick = () => chooseSticker(newImg);
    newImg.classList.add('icon');
    newImg.classList.add('pen');
    newImg.style.marginTop = '15px';
    toolsDiv.appendChild(newImg);
  });
  	
}

function toTop(t) {
    let e = (new Date).getTime() - mylatesttap;
    e < 400 && e > 0 ? t.parentNode.removeChild(t) : (t.style.zIndex = `${currIndex}`, currIndex += 1), mylatesttap = (new Date).getTime()
}

function dragMoveListener(t) {
    let e = t.target,
        s = (parseFloat(e.getAttribute("data-x")) || 0) + t.dx,
        a = (parseFloat(e.getAttribute("data-y")) || 0) + t.dy;
    e.style.webkitTransform = e.style.transform = "translate(" + s + "px, " + a + "px)", e.setAttribute("data-x", s), e.setAttribute("data-y", a)
}

function chooseSticker(t) {
    let e = document.createElement("IMG");
    e.className = "sticker sticker-drag", e.src = t.src, e.title = "Sticker!", e.onclick = function() {
        toTop(this)
    }, document.getElementById("board").appendChild(e), toTop(e), $(t).hasClass("inverted") && e.classList.add("inverted")
}

function invert() {
    inverted = !inverted, $("img").map(function() {
        $(this).toggleClass("inverted")
    })
}

function swap() {
    $(".board").toggleClass("board--off"), $(".board2").toggleClass("board--off"), $("#insta").toggleClass("black"), $("#insta").toggleClass("white"), $("#footer").toggleClass("black"), $("#footer").toggleClass("white")
}

interact(".sticker-drag").draggable({
    listeners: {
        move: window.dragMoveListener
    },
    inertia: !0,
    modifiers: [interact.modifiers.restrictRect({
        restriction: "parent",
        endOnly: !0
    })]
}).resizable({
    edges: {
        right: !0,
        bottom: !0
    },
    listeners: {
        move(t) {
            let e = t.target,
                s = parseFloat(e.getAttribute("data-x")) || 0,
                a = parseFloat(e.getAttribute("data-y")) || 0;
            e.style.width = t.rect.width + "px", e.style.height = t.rect.height + "px", e.setAttribute("data-x", s), e.setAttribute("data-y", a)
        }
    },
    modifiers: [interact.modifiers.aspectRatio({
        ratio: 1
    }), interact.modifiers.restrictEdges({
        outer: "parent"
    }), interact.modifiers.restrictSize({
        min: {
            width: 50,
            height: 50
        },
        max: {
            width: 200,
            height: 200
        }
    })],
    inertia: !0
}), $(document).ready(function() {
    let t = {
        body: $(".menu"),
        button: $(".button"),
        tools: $(".tools"),
        message: $(".message")
    };
    t.button.click(function() {
        t.body.toggleClass("menu--closed"), t.body.toggleClass("menu--open"), t.tools.toggleClass("tools--visible"), t.tools.toggleClass("tools--hidden"), t.message.toggleClass("message--open"), t.message.toggleClass("message--closed")
    })
});


// const welcome = "Welcome to Sage's playground!";
// const rule1 = "You can click on the spinning logo to reveal Sage's current sticker collection. Click a sticker to add it to the board. You can drag, move to front or resize the sticker.";
// const rule2 = "Delete a sticker by double tapping.";
// const rule3 = "Click on the slider to toggle the background image.";
// const enjoy = "Enjoy!";
// const speed = 50;

// function openModal() {
//     setTimeout(() => {
//         const modal = $('#info-modal');
//         modal.toggleClass('info-modal--closed');
//         modal.toggleClass('info-modal--open');
//         const modalBody = $('#info-modal-body');
//         const newLine = document.createElement("BR");
//         setTimeout(async () => {
//             await typeWriter(welcome);
//             // typeWriter(rule1);
//         }, 1000);
//     }, 1000);
// }

// let i = 0;
// async function typeWriter(txt) {

//     while (i < txt.length){
//         document.getElementById("info-modal-body").innerHTML += txt.charAt(i);
//         i++;
//         setTimeout('', speed);
//     }
// }

// var app = document.getElementById('app');
// var typewriter = new Typewriter(app, {
//     loop: true
// });

// openModal();