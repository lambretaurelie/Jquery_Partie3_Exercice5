$(function(){
  //on détermine la hauteur de ma fenetre de l'écran
  heightWindow=$(window).height();
  //on détermine la largeur de ma fenetre de l'écran
  widthWindow=$(window).width();
  $('#controler').keydown(function(event) {
    //on détermine la position hotizontal de notre div
    positionX=$('#square').offset().left;
    //on détermine la position vartical de notre div
    positionY=$('#square').offset().top;
    switch(event.keyCode){
      case 37: //déplacer vers la gauche
      if(positionX <= 0){
        $('#square').css('margin-left',widthWindow -55);
      }else{
        $('#square').css('margin-left','-=10px');
      }
      break;
      case 38: //déplacer vers le haut
      if(positionY <= 0){
        $('#square').css('margin-top',heightWindow -55);
      }else{
        $('#square').css('margin-top','-=10px') ;
      }
      break;
      case 39: //déplacer vers la droite
      if(positionX >= widthWindow -55){
        $('#square').css('margin-left',0);
      }else{
        $('#square').css('margin-left','+=10px');
      }
      break;
      case 40: //déplacer vers le bas
      if(positionY >= heightWindow -55){
        $('#square').css('margin-top',0);
      }else{
        $('#square').css('margin-top','+=10px');
      }
      break;
    }
  });
});
