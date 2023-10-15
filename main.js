//https://teachablemachine.withgoogle.com/models/V8UekE2Te/model.json
function startClassification()
{
  navigator.mediaDevices.getUserMedia({
    audio:true,
    video:false
  });   
  classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/V8UekE2Te/model.json',modelReady);
  
}

function modelReady()
{
 classifier.classify(gotResults);

}

var dog=0;
var cat=0;

function gotResults(error,results)
{
  if(error){
    console.error(error);
  }
  else{
    console.log(results) ;
    
    document.getElementById("result_label").innerHTML='Detected voice is of: '+results[0].label;
    document.getElementById("result_count").innerHTML='Detected dog- '+dog+' detected cat- '+cat;
    img= document.getElementById("animal_img");
    if(results[0].label=="barking")
    {
      img.src='bark.gif';
      dog=dog+1;
    
    }
    else if(results[0].label=="cat")
    {
      img.src='meow.gif';
      cat=cat+1;
    
    }
    else
    {
      img.src='listen.gif';
    }
  } 
}