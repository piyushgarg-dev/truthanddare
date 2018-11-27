var truth = new Array();
var dare=new Array();
function choice_truth()
{
    
    
    truth.push("What was the last thing you searched for on your phone?");
    truth.push("True or false? You have a crush on [fill in the blank]");
    truth.push("Do you pick your nose?");
    truth.push("Have you ever farted loudly in class?");
    truth.push("Who is your secret crush?");
    truth.push("Who is the sexiest person in this room?");
    truth.push("Do you think you'll marry your current girlfriend/boyfriend?");
    truth.push("If you could only hear one song for the rest of your life, what would it be?");
    truth.push("If you were reborn, what decade would you want to be born in?");
    truth.push("What is your biggest fear?");
    
    let randtruth=(Math.floor(Math.random()*truth.length));
    alert(truth[randtruth]);
}

function choice_dare()
{
    
    
    dare.push("Let someone put lipstick on your lips.");
    dare.push("Eat something and then talk with your mouth full");
    dare.push("Sit on the lap of a guy for 10 minutes.");
    dare.push("Fill your mouth with water and try singing a song");
    dare.push("Call up your crush and declare your love for him/her");
    dare.push("Remove the socks of a person sitting next to you with your teeth.");
    dare.push("Yell at the top of your voice.");
    dare.push("Talk continuously for ten whole minutes");
    dare.push("Have someone wrap tape around your neck");
    dare.push("Go out on the road and say ‘I LOVE YOU’ to the first person you see.");
    
    let randdare=(Math.floor(Math.random()*dare.length));
    alert(dare[randdare]);
    
}

function adddare()
{
    var nodebutton=document.getElementById('newbutton');
    var node=document.getElementById('inputid');
    node.style.visibility='visible';
    nodebutton.style.visibility='visible';
    
    
}

function addtruth()
{
    var nodebutton=document.getElementById('newbutton1');
    var node=document.getElementById('inputid');
    node.style.visibility='visible';
    nodebutton.style.visibility='visible';
}

function addnewdares()
{
    var bb=document.getElementById('newbutton1');
    var node=document.getElementById('inputid');
    var newdare=node.value;
    dare.push(newdare);
    node.value="";
    
}
function addnewtruths()
{
    var bb=document.getElementById('newbutton1');
    var node1=document.getElementById('inputid');
    var newtruth=node1.value;
    truth.push(newtruth);
    node.value="";
    alert("donne")
}