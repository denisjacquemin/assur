var quicksearch = null;
document.observe("dom:loaded", function() {
  try {
    quicksearch = new CustomerFilter('customers');
    quicksearch.filter($F('quicksearch'));
  } catch(e){}
  $$('.focus').invoke('select');

});