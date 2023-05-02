document.getElementById("htmlCode").value="<div>\n\n</div>";
document.getElementById("cssCode").value="<style>\n\n</style>";
document.getElementById("jsCode").value="<script>\n\n</script>";

function restoreSavedItems() {
    cssCode.value = localStorage.getItem("CSS-CODE");
    htmlCode.value = localStorage.getItem("HTML-CODE");
    jsCode.value = localStorage.getItem("JS-CODE");
}
restoreSavedItems();

function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = ""+document.getElementById("cssCode").value+"";
    var jsCode = ""+document.getElementById("jsCode").value+"";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    console.log(localStorage.getItem("HTML CODE"));
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();

    localStorage.setItem("HTML-CODE",htmlCode);
    localStorage.setItem("CSS-CODE",cssCode);
    localStorage.setItem("JS-CODE",jsCode);
}

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";

    console.log(localStorage.setItem("HTML CODE",htmlCode));
    console.log(localStorage.setItem("CSS CODE",cssCode));
    console.log(localStorage.setItem("JS CODE",jsCode));   
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}
