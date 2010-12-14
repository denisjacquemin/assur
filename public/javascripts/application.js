var quicksearch = null;
document.observe("dom:loaded", function() {
  try {
    quicksearch = new CustomerFilter('customers');
    quicksearch.filter($F('quicksearch'));
  } catch(e){}
  
  
  $$('.focus').invoke('select');


});

function loadBrandsByCategory(brandId) {
    new Ajax.Updater('folder_brands_brand_id', '/brands', {
      parameters: { text: $F('text') }
    });
}