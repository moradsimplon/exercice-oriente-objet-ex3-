  infos=[];
   position= 0 ;
  function infoProduit (titre , phrase , description){

    this.titre = titre;
    this.phrase = phrase;
    this.description = description;

  }
  function cardProduit() {

    this.infoProduit = function () {

      valtitre = $("#title").val() ;
      valphs = $("#phscatch").val();
      valdesc = $("#description").val() ;
      infos.push(valtitre);
      infos.push(valphs);
      infos.push(valdesc);
    }
    this.card = function() {
       $(".listcard").append("<div class='cards col-md-3'><p class='title1'>" + infos[0] + "</p><p class='phscatch1'>" + infos[1] + "</p><p class='descript1'>" + infos[2] + "</p></div>");
position ++ ;
   }
 }
  var creer = $("#submit").click(function() {
    var  produit = new cardProduit();
     produit.infoProduit();
     produit.card();
     $('input','form')
    //  .not(':button, :submit, :reset, :hidden')
     .val('')

    //  .removeAttr('checked')
    //  .removeAttr('selected');
  });

  // infos=[];
