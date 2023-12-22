var siteName=document.getElementById("siteName");
var url=document.getElementById("url");

var arr=[];

 if (localStorage.getItem("bookmarks") != null ){

    
   arr= JSON.parse(localStorage.getItem("bookmarks"));
 dData();

 }
 else{
    
 }


function addSite() {
    var site={
        name:siteName.value ,
        link:url.value
    };
if (site.name==""&&site.link=="") {
  document.getElementById('alert').classList.remove("d-none")
  
}
else{
  document.getElementById('alert').classList.add("d-none")
  arr.push(site);
    localStorage.setItem("bookmarks" ,JSON.stringify(arr));
}

    
   
   dData(); 
   
}
 function clear() {
    siteName.value="";
    url.value="";
 }
function dData() {
    var items="";
    for(var i=0;i<arr.length;i++){
        items+=`<tr>
        <td>${i+1}</td>
        <td>${arr[i].name}</td>
        <td><a href="${arr[i].link}" target="_blank" class="btn btn-success text-capitalize  w-50"><i class="fa-solid fa-eye"></i>${arr[i].name}</a></td>
        <td><button class="btn btn-danger text-capitalize w-50" onclick="rData(${i})"><i class="fa-solid fa-triangle-exclamation"></i> delet</button></td>
    </tr>`;

    
    }
    document.getElementById("tb").innerHTML=items;
  clear();

}

function rData(index) {
   arr.splice(index , 1);
   localStorage.setItem("bookmarks" ,JSON.stringify (arr));

   dData();
}
