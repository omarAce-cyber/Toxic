// بيانات المنتجات
let imgs = document.querySelectorAll(".content");

// img.addEventListener('click',(e)=>{

//     console.log("hello")
// })

// console.log(detailes)

let click = false;

imgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    if (!click) {
      img.classList.add("clicked");

      let main = document.querySelector(".main");
      console.log(main);
      main.classList.add("hidden");

      let img_clicked = document.querySelector(".clicked");
      let main2 = document.createElement("div");
      main2.classList.add("main");
      main2.style = `
    display:flex;
    flex-direction:column;
    align-items:center;
    `;
      let container = document.createElement("div");
      container.classList.add("container");

      let img_cont = img_clicked.querySelector(".cont-img");
      let text_cont = img_clicked.querySelector(".cont-text");
      img_cont.classList.add("detail-img-cont");
      text_cont.classList.add("detail-cont-text");
      let size = document.createElement("p");
      let m_size = document.createElement("div");
      let L_size = document.createElement("div");
      let xl_size = document.createElement("div");
      let size_cont = document.createElement("div");
      size_cont.classList.add("size-cont");
      m_size.classList.add("size");
      L_size.classList.add("size");
      xl_size.classList.add("size");

      size.textContent = "size";
      m_size.textContent = "M";
      L_size.textContent = "L";
      xl_size.textContent = "XL";
      size_cont.appendChild(m_size);
      size_cont.appendChild(L_size);
      size_cont.appendChild(xl_size);

      text_cont.appendChild(size);
      text_cont.appendChild(size_cont);
      // img_clicked.classList.remove("content")

      let colors = document.createElement("p");
      let color_div = document.createElement("div");
      let color_div2 = document.createElement("div");
      let color_divs = document.createElement("div");
      text_cont.appendChild(colors);
      color_divs.appendChild(color_div);
      color_divs.appendChild(color_div2);
      text_cont.appendChild(color_divs);
      color_divs.classList.add("size-cont");
      color_div.classList.add("size");
      color_div2.classList.add("size");

      colors.textContent = "COLORS";
      color_div.textContent = "Black";
      color_div2.textContent = "Gray";

      let a_btn = document.createElement("a");
      let buy_btn = document.createElement("input");

      let arrow = document.createElement("i");
      arrow.className = "fa-solid fa-arrow-left fa-2x abs";
      arrow.style = `color: #331e6b;`;

      // arrow.classList.add('abs')
      buy_btn.onclick = function () {
        location.href = "pa.html";
        click = true;
      };
      buy_btn.classList.add("btn");
      buy_btn.value = "Buy Now!";
      buy_btn.type = "button";

      arrow.onclick = function () {
        location.href = "hoodies.html";
        click = true;
      };

    

      img_clicked.prepend(arrow);
      a_btn.appendChild(buy_btn);
      text_cont.appendChild(a_btn);
      document.body.appendChild(main2);
      main2.appendChild(container);
      container.appendChild(img_clicked);

      // click = true;
    }

    //    img.removeEventListener('',arguments.callee)
  });
});

// console.log("test")

// const products = [
//     {
//       id: 1,
//       image: "product1.jpg",
//       size: "M",
//       color: "Red",
//     },
//     {
//       id: 2,
//       image: "product2.jpg",
//       size: "L",
//       color: "Blue",
//     },
//   ];
  
//   // وظيفة لتحديث الـ Summary Order
//   function selectProduct(productId) {
//     const selectedProduct = products.find((product) => product.id === productId);
  
//     document.getElementById("summary-img").src = selectedProduct.image;
//     document.getElementById(
//       "summary-details"
//     ).textContent = `Size: ${selectedProduct.size}, Color: ${selectedProduct.color}`;
//   }
  