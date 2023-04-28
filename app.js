var courseAPI = "https://633e7c0a83f50e9ba3b19a73.mockapi.io/product";
var main = document.getElementById("main-show-data");
var $ = document.querySelector.bind(document);

const inputName = document.getElementById("input-name");
const inputAuthor = document.getElementById("input-author");
const inputPrice = document.getElementById("input-price");
// const inputDescription = document.getElementById("input-description");
const inputimg = document.getElementById("input-image");

const save = document.querySelector("#save");
const create = document.querySelector("#create");
const updateBtn = document.querySelector("#update-btn");

function start() {
  getCourses(renderCourses);
  handleCreateForm();
  HandleBtnAdd();
}
start();

function getCourses(callback) {
  fetch(courseAPI)
    .then((response) => {
      return response.json();
    })
    .then(callback);
}

function createCourse(data, callback) {
  fetch(courseAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      response.json();
      getCourses(renderCourses);
    })
    .then(callback);
}

//  chỗ cần làm
function handleCreateForm() {
  var createBtn = $("#create");
  createBtn.onclick = function () {
    let formData = {
      name : inputName.value,
      img: inputimg.value,
      list: inputAuthor.value,
      price: inputPrice.value,
      // NXB: inputNXB.value,
      // NamXB: inputNamXB.value,
      // MaHang: inputMaHang.value,
      // TenNhaCungCap: inputTenNhaCungCap.value,
      // NgonNgu: inputNgonNgu.value,
      // TrongluongGr: inputTrongLuong.value,
      // KichThuoc: inputKichThuoc.value,
      // SoTrang: inputSoTrang.value,
      // LoaiBia: inputLoaiBia.value,
      // description: inputDescription.value,
      // cover_url: inputImage.value,
    };
    createCourse(formData, function () {});
  };
}

function updateFind(id) {
  create.style.display = "none";
  save.style.display = "block";
  fetch(courseAPI)
    .then((response) => {
      return response.json();
    })
    .then((x) => {
      var ProductUpdate = x.find((currentValue) => {
        return parseInt(currentValue.id) === id;
      });
      inputName.value = ProductUpdate.name;
      inputimg.value = ProductUpdate.img;
      inputAuthor.value = ProductUpdate.list;
      inputPrice.value = ProductUpdate.price;
      // inputNXB.value = ProductUpdate.NXB;
      // inputNamXB.value = ProductUpdate.NamXB;
      // inputMaHang.value = ProductUpdate.MaHang;
      // inputTenNhaCungCap.value = ProductUpdate.TenNhaCungCap;
      // inputNgonNgu.value = ProductUpdate.NgonNgu;
      // inputTrongLuong.value = ProductUpdate.TrongluongGr;
      // inputKichThuoc.value = ProductUpdate.KichThuoc;
      // inputLoaiBia.value = ProductUpdate.LoaiBia;
      // inputSoTrang.value = ProductUpdate.SoTrang;
      // inputDescription.value = ProductUpdate.description;
      // inputImage.value = ProductUpdate.cover_url;
      // inputBrand.value = ProductUpdate.brand;
      save.onclick = () => {
        HandleUpdateForm(`${ProductUpdate.id}`);
      };
    });
}

function HandleUpdateForm(id) {
  let formData = {
    name : inputName.value,
      img: inputimg.value,
      list: inputAuthor.value,
      price: inputPrice.value,
    // cover_url: inputImage.value,
  };
  UpdateCourse(id, formData, () => {});
}

function HandleDeleteCourses(id) {
  fetch(courseAPI + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    response.json();
    start();
  });
}

function UpdateCourse(id, formData) {
  fetch(courseAPI + "/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }).then((response) => {
    response.json();
    start();
  });
}

function renderCourses(courses) {
  main.innerHTML = courses
    .map((currentValue) => {
      // console.log(currentValue);
      return `
    <tr id="list-courses" >
        <td>${currentValue.id}</td>
        <td>${currentValue.name}</td>
        <td>${currentValue.list}</td>
      
        <td>${parseInt(currentValue.price).toLocaleString()}đ</td>

        <td><img src="${currentValue.img}" alt="${currentValue.name}" style="height:40px;"></td>   
        
        <td class="text-center">
            <button class="btn btn-danger" onclick="HandleDeleteCourses(${
              " " + currentValue.id
            })">Delete</button>
            <button class=" btn btn-warning" id="update-btn" data-toggle="modal" data-target="#myModal" onclick="updateFind(${
              currentValue.id
            })">Update</button>     
        </td>
    </tr>
    `;
    })
    .join("");
}

function HandleBtnAdd() {
  var btnAdd = document.querySelector(".btn-add");
  btnAdd.onclick = () => {
    const save = document.querySelector("#save");
    const create = document.querySelector("#create");
    create.style.display = "block";
    save.style.display = "none";
  };
}
























