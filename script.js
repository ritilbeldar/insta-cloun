$('.main-story').slick({
    slidesToShow: 5,
});



const msg = document.querySelector(".ri-messenger-line");
const chat_bar = document.querySelector(".main-chat");
const home_right = document.querySelector(".ri-arrow-left-line");


msg.addEventListener("click",function() {
    chat_bar.style.transform = "translatex(0)";
    setTimeout(() => {
        
        main_home.style.display = "none";
    }, 500);
})
home_right.addEventListener("click",function() {
    chat_bar.style.transform = "translatex(100%)";
    main_home.style.display = "initial";
    
})



// post


const cloun_post = document.querySelector(".cloun-post");
const post_done = document.querySelector(".ri-check-line");
const form = document.querySelector("form");
const post_add = document.querySelector(".ri-add-circle-line");
const post_add_name = document.querySelector(".post");
const post_close = document.querySelector("#post-close");
const main_home = document.querySelector(".main-home");


// main-nav
post_add.addEventListener("click",function() {
    post_add_name.style.display = "initial";
    main_home.style.display = "none";

})
post_close.addEventListener("click",function() {
    post_add_name.style.display = "none";
    main_home.style.display = "initial";

})

// post-like-full

const stym_main_cunt = document.querySelector(".main-cunt1");
const stym_like_full = document.querySelector("#sty-like-full");


stym_main_cunt.addEventListener("dblclick",function() {
    stym_like_full.style.display = "initial";
    sty_like_red.style.display= "initial";
    main_cunt_like.style.color= "black";
    setTimeout(() => {
        stym_like_full.style.display = "none";
    }, 700);
})


// anu

const anu_main_cunt = document.querySelector(".anu-img");
const anu_like_full = document.querySelector("#anu-like-full");

anu_main_cunt.addEventListener("dblclick",function() {
    anu_like_full.style.display = "initial";
    anu_like_red.style.display= "initial";
    main_cunt_like.style.color= "black";
    setTimeout(() => {
    anu_like_full.style.display = "none";
    }, 700);
})






post_done.addEventListener("click", function (e) {
    e.preventDefault();
    let dp = form[0].value;
    let username = form[1].value;
    let caption = form[3].value;
    let img_post = form[2].value;

    
    if (!dp.trim()||!username.trim()|| !caption.trim()||!img_post.trim()) {
        return alert("Invalid values!");
    }



    cloun_post.innerHTML += `
    <div class=".main-cunten-all" style=" height:30vmax;"
    <div class="cloun-post" style="height: 23vmax;">
                    <div class="main-cunt">
                        <div class="main-cunt1">
                <img src="${img_post}" alt="">
                </div>
                        </div>
                        <div class="main-cunt1-name">
                            <div class="main-cunt-name-left">
                                <div class="main-cunt1-name-img">
                                    <img src="${dp}" alt="">
                                </div>
                                <h5 style=" color:white;">${username}</h5>
                            </div>
                            <i style=" color:white;" class="ri-more-2-line"></i>
                        </div>
                        <div class="main-like">
                            <div class="main-like-left">
                                <i class="ri-heart-line"></i>
                                <i class="ri-chat-3-line"></i>
                                <img src="/iconizer-instagram-share-icon.svg" alt="">
                            </div>
                            <div class="main-like-right">
                                <img src="/iconizer-saved-icon (1).svg" alt="">
                            </div>
                        </div>
                        <div class="main-view">
                            <h5>2,564 views.Liked by <b> __majoka__ </b></h5>
                            <h5><b>${username}</b><span>${caption}</span></h5>
                        </div>
                        </div>`;


  

    form[0].value = "";
    form[1].value = "";
    form[2].value = "";
    form[3].value = "";
    post_add_name.style.display = "none";
    main_home.style.display = "initial";

});


const search_nav = document.querySelector(".search-box");
const search_bottom_nav = document.querySelector("#home-search-bottom-nav");
const bottom_nav_home = document.querySelector(".ri-home-4-line");
const main_home_secnd = document.querySelector(".main-home-secnd");
const main_pro = document.querySelector(".profile");


// home

const main_home_secnd_fill = document.querySelector(".ri-home-4-fill");

// sarch


const main_home_sarch_fill = document.querySelector(".ri-search-eye-line");


search_bottom_nav.addEventListener("click",function() {
    search_nav.style.display = "initial";
    main_reels.style.display = "none";
    main_home_secnd.style.display = "none";
    main_bottom_dp.style.border = "none";


    main_home_secnd_fill.style.color = "black"
    bottom_nav_home.style.display = "initial";


    search_bottom_nav.style.color = "black";
    main_home_sarch_fill.style.display = "initial";


    bottom_nav_heart.style.color = "white"
    bottom_heart_red.style.display = "none";

    main_reels_fill.style.display = "none";
    reel_home.style.height = "30px";





})
bottom_nav_home.addEventListener("click",function() {
    search_nav.style.display = "none";
    main_home_secnd.style.display = "initial";
    main_bottom_dp.style.border = "none";
    main_pro.style.display = "none";

    bottom_heart.style.display = "none";
    main_reels.style.display = "none";
    main_home_secnd.style.display = "initial";
    main_profile.style.display = "none";

    main_home_secnd_fill.style.color = "white"
    bottom_nav_home.style.display = "none";

    bottom_nav_heart.style.color = "white"
    bottom_heart_red.style.display = "none";


    main_reels_fill.style.display = "none";
    reel_home.style.height = "30px";

    search_bottom_nav.style.color = "white";
    main_home_sarch_fill.style.display = "none";

})


// reels


const reel_home = document.querySelector("#rels");
const main_reels = document.querySelector(".main-reel");
const main_reels_fill = document.querySelector("#reel-main-fill");



reel_home.addEventListener("click",function() {
    main_reels.style.display = "initial";
    search_nav.style.display = "none";
    main_home_secnd.style.display = "none";
    main_bottom_dp.style.border = "none";

    main_home_sarch_fill.style.display = "none";
    search_bottom_nav.style.color = "white";

    main_home_secnd_fill.style.color = "black"
    bottom_nav_home.style.display = "initial";

    main_reels_fill.style.display = "initial";


    bottom_nav_heart.style.color = "white"
    bottom_heart_red.style.display = "none";



})

// heart


const bottom_nav_heart = document.querySelector("#bottom_heart_nav");
const bottom_heart = document.querySelector(".bottom-heart");

// heart-fill

const bottom_heart_red = document.querySelector("#heart-red-bottom");



bottom_nav_heart.addEventListener("click",function() {
    bottom_heart.style.display = "initial";
    main_home_secnd.style.display = "none";
    main_reels.style.display = "none";
        main_reels.style.display = "none";
        search_nav.style.display = "none";
    main_profile.style.display = "none";
    main_bottom_dp.style.border = "none";


    bottom_nav_heart.style.color = "black"
    bottom_heart_red.style.display = "initial";

    main_home_secnd_fill.style.color = "black"
    bottom_nav_home.style.display = "initial";

    main_home_sarch_fill.style.display = "none";
    search_bottom_nav.style.color = "white";

    main_reels_fill.style.display = "none";
    reel_home.style.height = "30px";


})
bottom_nav_home.addEventListener("click",function() {
    bottom_heart.style.display = "none";
})



// profail


const main_bottom_dp = document.querySelector("#photo");
const main_profile = document.querySelector(".profile");

main_bottom_dp.addEventListener("click",function() {
    main_profile.style.display = "initial";

    bottom_heart.style.display = "none";
    main_home_secnd.style.display = "none";
    main_reels.style.display = "none";
    main_reels.style.display = "none";
    search_nav.style.display = "none";
    main_bottom_dp.style.border = "2px solid white";

        bottom_nav_heart.style.color = "black"
    bottom_heart_red.style.display = "initial";

    main_home_secnd_fill.style.color = "black"
    bottom_nav_home.style.display = "initial";

    main_home_sarch_fill.style.display = "none";
    search_bottom_nav.style.color = "white";

    main_reels_fill.style.display = "none";
    reel_home.style.height = "30px";

    bottom_nav_heart.style.color = "white"
    bottom_heart_red.style.display = "none";



})

// profile-hili

$('.profile-hili').slick({
  slidesToShow: 5,
});


// my-story

const my_story = document.querySelector(".my-story");
const my_main_story = document.querySelector(".main-story1");
const my_story_img = document.querySelector("#main-story-dp");
const hr2 = document.querySelector("#hr2");






my_main_story.addEventListener("click",function() {
    my_story.style.display = "initial";
    main_home_secnd.style.display = "none";
    setTimeout(() => {
        
        hr2.style.width = "95%";
    }, 100);
    
    
    setTimeout(() => {
            my_story.style.display = "none";
            main_home_secnd.style.display = "initial";
             my_story_img.style.border = "none"
            }, 2000);
})
my_story.addEventListener("click",function(){
    my_story.style.display = "none";
    main_home_secnd.style.display = "initial";
    my_story_img.style.border = "none" ;
})
// story1

const story1 = document.querySelector(".main-story-ener1");
const main_story2 = document.querySelector(".main-story2");
const stayam_story_img = document.querySelector("#satyamm");
const main_post_dp_status = document.querySelector("#first-dp");
const hr3 = document.querySelector("#hr3");







main_story2.addEventListener("click",function() {
    story1.style.display = "initial";
    main_home_secnd.style.display = "none";
    setTimeout(() => {
        
        hr3.style.width = "95%";
    }, 100);
    setTimeout(() => {
        story1.style.display = "none";
    main_home_secnd.style.display = "initial";
    stayam_story_img.style.border = "none"
    main_post_dp_status.style.border = "none"
    }, 2000);
})

story1.addEventListener("click",function(){
    story1.style.display = "none";
    main_home_secnd.style.display = "initial";
    stayam_story_img.style.border = "none"
    main_post_dp_status.style.border = "none"
})

main_post_dp_status.addEventListener("click",function() {
    story1.style.display = "initial";
    main_home_secnd.style.display = "none";
    setTimeout(() => {
        
        hr3.style.width = "95%";
    }, 100);

    setTimeout(() => {
        story1.style.display = "none";
        main_home_secnd.style.display = "initial";
        stayam_story_img.style.border = "none"
        main_post_dp_status.style.border = "none"
    }, 2000);
})

// som

const main_story_som = document.querySelector("#som");
const som_ener_story = document.querySelector(".main-story-ener2");
const hr4 = document.querySelector("#hr4");



main_story_som.addEventListener("click",function() {
    som_ener_story.style.display = "initial";
    main_home_secnd.style.display = "none";
    setTimeout(() => {
        
        hr4.style.width = "95%";
    }, 100);
    setTimeout(() => {
        som_ener_story.style.display = "none";
    main_home_secnd.style.display = "initial";
    main_story_som.style.border = "none"
    }, 2000);
})

som_ener_story.addEventListener("click",function(){
    som_ener_story.style.display = "none";
    main_home_secnd.style.display = "initial";
    main_story_som.style.border = "none" ;
})


// cohotee

const main_story_chotee = document.querySelector("#choteee");
const chotee_ener_story = document.querySelector(".main-story-ener3");
const hr5 = document.querySelector("#hr5");



main_story_chotee.addEventListener("click",function() {
    chotee_ener_story.style.display = "initial";
    main_home_secnd.style.display = "none";
    setTimeout(() => {
        
        hr5.style.width = "95%";
    }, 100);
    setTimeout(() => {
        chotee_ener_story.style.display = "none";
        main_home_secnd.style.display = "initial";
        main_story_chotee.style.border = "none"
    }, 2000);
})
chotee_ener_story.addEventListener("click",function(){
    chotee_ener_story.style.display = "none";
    main_home_secnd.style.display = "initial";
    main_story_chotee.style.border = "none" ;
})


// ankita

const main_story_ankita = document.querySelector("#ankitaa");
const ankita_ener_story = document.querySelector(".main-story-ener4");
const hr6 = document.querySelector("#hr6");



main_story_ankita.addEventListener("click",function() {
    ankita_ener_story.style.display = "initial";
    main_home_secnd.style.display = "none";
    setTimeout(() => {
        
        hr6.style.width = "95%";
    }, 100);
    setTimeout(() => {
        ankita_ener_story.style.display = "none";
    main_home_secnd.style.display = "initial";
    main_story_ankita.style.border = "none"
    }, 2000);
})
ankita_ener_story.addEventListener("click",function(){
    ankita_ener_story.style.display = "none";
    main_home_secnd.style.display = "initial";
    main_story_ankita.style.border = "none" ;
})


// khaan

const main_story_khan = document.querySelector("#khann");
const khan_ener_story = document.querySelector(".main-story-ener5");
const hr7 = document.querySelector("#hr7");



main_story_khan.addEventListener("click",function() {
    khan_ener_story.style.display = "initial";
    main_home_secnd.style.display = "none";
    setTimeout(() => {
        
        hr7.style.width = "95%";
    }, 100);
    setTimeout(() => {
        khan_ener_story.style.display = "none";
    main_home_secnd.style.display = "initial";
    main_story_khan.style.border = "none"
    }, 2000);
})
khan_ener_story.addEventListener("click",function(){
    khan_ener_story.style.display = "none";
    main_home_secnd.style.display = "initial";
    main_story_khan.style.border = "none" ;
})


// somika

const main_story_somika = document.querySelector("#somikaa");
const somika_ener_story = document.querySelector(".main-story-ener6");
const hr8 = document.querySelector("#hr8");



main_story_somika.addEventListener("click",function() {
    somika_ener_story.style.display = "initial";
    main_home_secnd.style.display = "none";
    setTimeout(() => {
        
        hr8.style.width = "95%";
    }, 100);
    setTimeout(() => {
        somika_ener_story.style.display = "none";
        main_home_secnd.style.display = "initial";
        main_story_somika.style.border = "none"
    }, 2000);
})
somika_ener_story.addEventListener("click",function(){
    somika_ener_story.style.display = "none";
    main_home_secnd.style.display = "initial";
    main_story_somika.style.border = "none" ;
})

// main-cint-nav-bar

const cunt_navbar = document.querySelector("#hyee");
const main_cunt_navbar = document.querySelector(".main-cunt-nav-bar");
const main_cunt_all = document.querySelector(".Report");



cunt_navbar.addEventListener("click",function() {
    main_cunt_navbar.style.transform = "translatex(0)";
})


main_cunt_all.addEventListener("click",function() {
    main_cunt_navbar.style.transform = "translatex(-100%)";
    // main_cunt_navbar.style.display = "none";
})




// main-cuntect-like-button


const main_cunt_like = document.querySelector("#sty-like");
const anu_like = document.querySelector("#anu-like");

const sty_like_red = document.querySelector("#heart-red1");
const anu_like_red = document.querySelector("#heart-red2");



main_cunt_like.addEventListener("click",function() {
    sty_like_red.style.display= "initial";
    main_cunt_like.style.color= "black";
    
    
})
anu_like.addEventListener("click",function() {
    anu_like_red.style.display= "initial";
    anu_like.style.color= "black";
    
})


// main-buttuon



const anu_save_main = document.querySelector("#anu-save-main");
const anu_save = document.querySelector("#anu-save");

const sty_save = document.querySelector("#sty-save");
const sty_save_main = document.querySelector("#sty-save-main");



anu_save_main.addEventListener("click",function() {
    anu_save.style.display= "initial";
    anu_save_main.style.color= "black";
    
    
})
sty_save_main.addEventListener("click",function() {
    sty_save.style.display= "initial";
    sty_save_main.style.color= "black";
    
})



// chat-genral

const chat_gernal = document.querySelector("#name2");
const chat_primiry = document.querySelector("#name1");
const chat_req = document.querySelector("#name3");
const chat_req_back = document.querySelector("#chat-req-back");


const chat_gernal_mian = document.querySelector(".chat-general");
const chat_gernal_line = document.querySelector("#chat-general-line");
const chat_req_main = document.querySelector(".chat-req");



chat_gernal.addEventListener("click",function(){
    chat_gernal_mian.style.display = "initial";
    chat_gernal_line.style.transform = "translatex(0)";
    chat_primiry.style.border = "black";
})
chat_primiry.addEventListener("click",function(){
    chat_gernal_mian.style.display = "none";
    chat_gernal_line.style.transform = "translatex(-117%)";
})
chat_req.addEventListener("click",function(){
    chat_gernal_line.style.display = "none";
        chat_req_main.style.display = "initial";


})


chat_req_back.addEventListener("click",function(){
    chat_gernal_line.style.display = "initial";
    chat_req_main.style.display = "none";
})