import { Blogsdata } from "./js/BlogsData.js";


const containerArticule = document.querySelector(".all_blogs_wrapper");

let html = "";

Blogsdata.forEach(({id, title, urlImage, author, published_date, category, text}) => {
    html += 
    `<article class="blogs_post" id="${id}">
        <img class="blogs_img" id="blogs_img" src="${urlImage}" alt="">
        <div class="blogs_content_wrapper" id="blogs_content_wrapper">
            <a href="#" class="blogs_content_tittle" id="blogs_content_tittle">Investors: ${title}</a>
            <p class="blogs_content_publised_date" id="blogs_content_publised_date">${published_date}</p>
            <p class="blogs_content_author" id="blogs_content_author">Author: ${author}</p>
            <p class="blogs_content_category" id="blogs_content_category">${category}</p>
            <p class="blogs_contetnt_preview" id="blogs_contetnt_preview">[Preview] ${text}</p>
        </div>
    </article>`
});

containerArticule.innerHTML = html;


/*
const blogstitle = document.querySelector("#blogs_content_tittle")


blogstitle.addEventListener("click", (e) => {
    e.target.id
    const blogpost = e.target.parentElement.parentElement

    if (e.target.id) {
        blogpost.classList.toggle("blogs_post_show") 
    }
    console.log(blogpost);
})

*/