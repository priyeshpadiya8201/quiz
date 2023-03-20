// -------------------- Edit quiz form -------------------------------------
var form = document.querySelector("#register_form");
var input = form.querySelectorAll("INPUT");
var addBtn = document.querySelector("#quiz_edit");
var model= document.querySelector(".model");
var closeBtn = document.querySelector(".close-icon")
addBtn.onclick = function()
{
    model.classList.add("active");
}
closeBtn.addEventListener("click", ()=>
{
    model.classList.remove("active");
    // var i;
    // for(i=0;i<input.length;i++)
    // {
    //     input[i].value = " ";
    // }
})      
                    // <th>No</th>
                    // <th>Name</th>
                    // <th>E-mail</th>
                    // <th>Subject</th>
                    // <th>Score</th>
var userQuiz = [];
var no = document.querySelector("#id_no");
var nm = document.querySelector("#U_name");
var mail =document.querySelector("#mail");
var subject = document.querySelector("#subject");
var form = document.querySelector("#register_form");




