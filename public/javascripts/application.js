var quicksearch = null;

document.observe("dom:loaded", function() {
  
  // init Quick Search on customers/index
  if ($('qs-target') != undefined) {
    quicksearch = new CustomerFilter('qs-target');
    quicksearch.filter($F('quicksearch'));
  }
  
  // put the focus on input with a .focus selector
  $$('.focus').invoke('select');
  
});

// build a collection of <option> and add it to the target (<select>)
function buildOptions(request, target, selectedOptionValue) {
    var data = request.responseText.evalJSON();
    var oldSelect = $(target);
    var newSelect = new Element('select', {id: target});
    data.each(function(d, i){
       var opt = new Element('option');
       opt.text = d.name;
       opt.value = d.id;
       newSelect.options.add(opt);
    });
    oldSelect.replace(newSelect);
    newSelect.value = selectedOptionValue;
}

// remove an option from a select
function remove_option_by_value(select, value) {
    if ($(select) != undefined) {
        $(select).select('option[value=' + value + ']').invoke('remove');
        $(select).value = '';
        
    }
}

function reload_options(url, selectId) {
    var selectedOption = $F(selectId);
	new Ajax.Request(url, {
		onSuccess: function(response) {
			buildOptions(response, selectId, selectedOption);
    	}
	});
}