// ========================================== api hot =================
// let dataProduct;
const products = document.querySelector(".mid-hang");
function showData(products, data) {
  products.innerHTML = data.length
    ? data
        .map((item, index) => {
          return `
          <!--1--><div class="item">
          <div class="image">
              <a href="trangcon.html">
                  <img class="img" src="${item.img}" alt="">
              </a>
              <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <div class="thongtin">
              <a href="trangcon.html">
                 ${item.name}
              </a>
              <p>${item.list}</p>
              <span class="gia-tien">
                  <strong>${item.price}₫</strong>
                 
              </span>
              <div class="sub-hang">
                   <label for="">Còn Hàng</label>
               
              </div>
              <div class="checkout">
      <a class="button1" href="">
        <span class="btn1">Thanh Toán </span>
      </a>
    </div>
          </div>
      </div>




                `;
        })
        .join(" ")
    : "<div>Dữ liệu trống</div>";
}
document.addEventListener("DOMContentLoaded", () => {
  const BASE_URL = "https://633e7c0a83f50e9ba3b19a73.mockapi.io/product";

  fetch(BASE_URL)
    .then((response) => response.json())
    .then((data) => {
      showData(products, data);

      // thực hiện chức năng search

      const input = document.querySelector(".kill");
      input.addEventListener("keyup", (event) => {
        const target = event.target;
        console.log(target);
        const value = target.value;
        const convertToLowerCase = value.toLowerCase();
        const filterData = data.filter((item) =>
          item.name.toLowerCase().includes(convertToLowerCase)
        );
        showData(products, filterData);
      });
      dataProduct = data;
      const namex = document.querySelector(".name").innerHTML;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});















``
var mainData;

fetch("https://633e7c0a83f50e9ba3b19a73.mockapi.io/list")
  .then((respnse) => respnse.json())
  .then((data) => {
    console.log(data);
    mainData = data;
    const mainProduct = document.querySelector(".product-container-lists");

    mainProduct.innerHTML = data
      .map((item) => {
        return `
        <div class="product col-md-3 col-sm-3 col-3 ">
        <img src="${item.img}" alt="Product 1">
              <h3> ${item.name}</h3>
              <p>${item.list}</p>
              <span>${item.price}₫</span>
              <button class="btn-addToCart" onClick="handleAddToCart(${item.id})">Add to Cart</button>
            </div>
            `;
      })
      .join(" ");








    //   const input = document.querySelector(".product-container-lists");
    //   input.addEventListener("keyup", (event) => {
    //     const target = event.target;
    //     console.log(target);
    //     const value = target.value;
    //     const convertToLowerCase = value.toLowerCase();
    //     const filterData = data.filter((item) =>
    //       item.name.toLowerCase().includes(convertToLowerCase)
    //     );
    //     showData(products, filterData);
    //   });
    //   dataProduct = data;
    //   const namex = document.querySelector(".name").innerHTML;
    // })
    // .catch((error) => {
    //   console.error("Error:", error);
    // });






  });
