<?php
for($i=1; $i<=50; $i++){
if($i%3==0 && $i%7==0){
echo 'arkademy';
}


 
else if($i%3==0){
echo 'arka';
}
else if($i%7==0){
echo 'demy';
}

else{
echo $i;
}

}
?>