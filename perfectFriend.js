const names = ['Sam','Moon','Tuba','Sipu','Sadia','Nadia'];
function perfectFriend(names){
   for(let i=0; i <= names.length; i++)
   {
       if(names[i].length == 5){
           const name = names[i];
           return name;
       }  
   }
 }