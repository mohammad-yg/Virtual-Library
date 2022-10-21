export function formatPrice(price:number){
  var strPrice = price.toString();
  strPrice = strPrice.replace(',', '');
  var x = strPrice.split('.');
  var y = x[0];
  var z = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(y))
    y = y.replace(rgx, '$1' + ',' + '$2');
  return y + z;
}
