window.footer = {};
window.footer.load = function(){
  window.footer_logos = [
    { logo : 'home', url : 'https://www.universiteitleiden.nl/en/science/biology' },
    { logo : 'mail', url : 'mailto:igem@science.leidenuniv.nl' },
    { logo : 'face', url : 'https://www.facebook.com/igemleiden/?fref=ts' },
    { logo : 'twit', url : 'https://twitter.com/igem_leiden' },
    { logo : 'yout', url : 'https://www.youtube.com/channel/UC8GsFSVutTryH-KqzgfvSfQ' },
  ];

  // Add auto-layout-tables
  window.tableAutoLayout.addTable( "#footer_logo_table", window.footer_logos, "#footer-logo-cell", 60, function( logo, cell ){
    image_sel_flat = '#footer_' + logo.logo + '_flat';
    image_sel_full = '#footer_' + logo.logo + '_full';

    cell.find(".top").attr( 'src', $( image_sel_full ).attr('src') );
    cell.find(".bottom").attr( 'src', $( image_sel_flat ).attr('src') );

    cell.find("a").attr( 'href', logo.url );
    return cell;
  } );
}

window.include = function( targetSelector, completionHandler ){
  var sourcePage = $( targetSelector ).attr( 'data-source' );
  $.get( sourcePage, function( data ){
      $( targetSelector ).html( data );
      completionHandler();
  }, 'html');
};

window.toTop = function( ){
  $( 'html, body' ).animate({
    scrollTop: 0
  }, 500);
};
