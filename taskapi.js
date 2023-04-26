var xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.responseType ='json';
xhr.send();
xhr.onload = function(){
    var responseobj=xhr.response;
    console.log(responseobj);
    for( var i=0;i<responseobj.length;i++){
        console.log(responseobj[i].population);
        console.log(responseobj[i].flag);
        console.log(responseobj[i].region);
        console.log(responseobj[i].subregion);

    }
}