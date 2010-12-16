var quicksearch = null;

document.observe("dom:loaded", function() {
  
  // init Quick Search on customers/index
  if ($('quicksearch') != undefined) {
    quicksearch = new CustomerFilter('customers');
    quicksearch.filter($F('quicksearch'));
  }
  
  // put the focus on input with a .focus selector
  $$('.focus').invoke('select');
  
});


//new Ajax.Updater('options', '/testing/update_options', {asynchronous:true, evalScripts:true})">

// returns a list of brands filtered by category_id
function loadBrandsByCategory(category_id) {
    new Ajax.Updater('folder_brands_brand_id', '/brands_by_category', {
      parameters: { category_id: category_id },
      onSuccess: function(t) {
          var json = t.responseText.evalJSON();
          json.each(function(e) {
            alert(a.brand.name);
          });
      }
    });
}

function buildOptions(request, target) {
    var data = request.responseText.evalJSON();
    var select = $(target);
    data.each(function(d, i){
       var opt = new Element('option');
       opt.text = d.brand.name;
       opt.value = d.brand.id;
       select.options.add(opt);
    });
}