window.footer = {};
window.footer.load = function(){
  window.footer_logos = [
    { logo_flat : 'image03.png', logo : 'image02.png', url : 'https://www.universiteitleiden.nl/en/science/biology' },
    { logo_flat : 'image05.png', logo : 'image04.png', url : 'mailto:igem@science.leidenuniv.nl' },
    { logo_flat : 'image01.png', logo : 'image00.png', url : 'https://www.facebook.com/igemleiden/?fref=ts' },
    { logo_flat : 'image07.png', logo : 'image06.png', url : 'https://twitter.com/igem_leiden' },
    { logo_flat : 'image09.png', logo : 'image08.png', url : 'https://www.youtube.com/channel/UC8GsFSVutTryH-KqzgfvSfQ' },
  ];

  // Add auto-layout-tables
  window.tableAutoLayout.addTable( "#footer_logo_table", window.footer_logos, "#footer-logo-cell", 60, function( logo, cell ){
    cell.find(".top").attr( 'src', 'images/Footer/' + logo.logo );
    cell.find(".bottom").attr( 'src', 'images/Footer/' + logo.logo_flat );
    cell.find("a").attr( 'href', logo.url );
    return cell;
  } );
}

window.include = function( targetSelector, sourcePage, completionHandler ){
  $.get( sourcePage, function( data ){
      $( targetSelector ).html( data );
      completionHandler();
  }, 'html');
};
