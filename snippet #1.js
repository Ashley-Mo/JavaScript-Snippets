var elements =document.getElementsByTagName("td");
for(var i=0;i<=elements.length;i++){
    var element= document.getElementsByTagName("td")[i];
    var text= element.innerHTML;
if(text.startsWith("https://")){
    element.innerHTML ="<a href = '" + text+ "'>"+text + "/a>";
}

}
