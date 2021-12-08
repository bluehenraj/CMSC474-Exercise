$(document).ready(function() {
    console.log("ready!");

    $("#go").click((e)=>{
        let fname = $("#fname").val();
        let lname = $("#lname").val();
        if(fname && lname){
            $("#jumbotron").html(String(fname) + " " + String(lname));
        }

        e.preventDefault();
    });
});