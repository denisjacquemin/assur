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

// build a collection of <option> and add it to the target (<select>)
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