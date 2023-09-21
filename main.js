/* render

*/
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
    songs: [
        {
            name: "Nevada",
            singer: "Vicetone",
            path: "./assets/music/song1.mp3",
            image: "./assets/img/song1.png",
        },
        {
            name: "Summertime",
            singer: "K-391",
            path: "./assets/music/song2.mp3",
            image: "./assets/img/song2.png",
        },
        {
            name: "TheFatRat",
            singer: "Laura Brehm",
            path: "./assets/music/song3.mp3",
            image: "./assets/img/song3.png",
        },
        {
            name: "Lost Frequencies",
            singer: "Janieck Devy",
            path: "./assets/music/song4.mp3",
            image: "./assets/img/song4.png",
        },
        {
            name: "Đen",
            singer: "Giang Pham",
            path: "./assets/music/song5.mp3",
            image: "./assets/img/song5.png",
        },
        {
            name: "Lemon Tree",
            singer: "DJ DESA REMIX",
            path: "./assets/music/song6.mp3",
            image: "./assets/img/song6.png",
        },
        {
            name: "Maroon 5 ",
            singer: "Sugar",
            path: "./assets/music/song7.mp3",
            image: "./assets/img/song7.png",
        },
        {
            name: "Westlife ",
            singer: "My Love",
            path: "./assets/music/song8.mp3",
            image: "./assets/img/song8.png",
        },
    ],
    render: function () {
        console.log(123);
    },
    start: function () {
        this.render();
    },
};

app.start();
