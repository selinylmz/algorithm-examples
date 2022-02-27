function Result(){
    const radius=document.getElementById('radius').value;
    let result=document.getElementById('result');
    const area=3.14*radius*radius;
    const envoirement=2*3.14*radius;
    result.innerHTML=`Dairenin alani ${area}, cevresi ${envoirement}'dir.`;
}