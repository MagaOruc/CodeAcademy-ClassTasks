let button =document.querySelector(".goback")

button.addEventListener("click",function
(){
    window.location="index.html"
})

let id=new URLSearchParams(window.location.search).get("id")
let base_url = "https://northwind.vercel.app/api/suppliers/";
let details =document.querySelector('.details')


async function createData (){
    const res =await axios (`${base_url}${id}`)
    const data= await res.data
    console.log(data);
    data.forEach(element => {
        details.innerHTML=`
        <div class="info">
        <h1>contactName <br> ${element.companyName}</h1>
        <p>Company Name <br>${element.contactName}</p>
      </div>
        `





       

        



        
    });
}

createData()
