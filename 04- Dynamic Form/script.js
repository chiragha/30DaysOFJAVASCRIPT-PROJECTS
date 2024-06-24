var head = document.getElementById('head');
var moreField = document.getElementById('add_fields');
var field2 = document.getElementById('field2');

moreField.onclick = function(){
    var newField = document.createElement('input');
    var input_tags = head.getElementsByTagName('input');
    newField.setAttribute('type', 'text');
    newField.setAttribute('name', 'head[]');
    newField.setAttribute('class', 'head');
    newField.setAttribute('size', 50);
    newField.setAttribute('placeholder', 'Another Field');
    head.appendChild(newField);
    if(input_tags.length >= 2){
        document.getElementById("field2").style.visibility="visible";
        
    }
}

field2.onclick = function(){
    var input_tags = head.getElementsByTagName('input');
    if(input_tags.length >= 2){
        head.removeChild(input_tags[(input_tags.length)-1]);
        if(input_tags.length < 2){
            document.getElementById("field2").style.visibility="hidden";
        }
    }
}