let base_url = "https://northwind.vercel.app/api/suppliers";
let row = document.querySelector(".allCard");

async function getData() {
  const res = await axios(base_url);
  const data = await res.data;

  data.forEach((element) => {
    row.innerHTML += `
    <div class="col col-3 my-4">
    <div class="img">
      <img src="./asset/image/p1.png" alt="" />
    </div>

    <div class="under-image">
      <h4>${element.contactTitle}</h4>
      <p>${element.companyName}
      </p>
     <div class="buttons">
      <a href="./details.html?id=${element.id}"  class="btn btn-primary" onclick=viewDetails(${element.id})>VIEW DETAILS</a>
      <button class="btn btn-success"  onclick=addFavItem(${element.id}) id=test${element.id}>ADD FAVORITE</button>
      <button class="btn btn-danger" onclick=deleteItem(${element.id}) id=test${element.id}>DELETE</button>
     </div>
    </div>
  </div>
 
    
    `;
  });
}
getData();

async function deleteItem(id) {
  console.log(id);
  await axios.delete(`${base_url}/${id}`);

  document
    .querySelector(`#test${id}`)
    .parentElement.parentElement.parentElement.remove();
}

 function viewDetails() {
  
}
