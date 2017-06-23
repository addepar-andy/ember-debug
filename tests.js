function doMyThing() {
  function go() {
    let filterContainer = document.getElementById('qunit-modulefilter-container');
    let filterDropdown = document.getElementById('qunit-modulefilter');

    if (!filterContainer || !filterDropdown) {
      window.setTimeout(go, 500);
      return;
    }

    const ALL_OPTIONS = {};

    let searchOptions = document.createElement('datalist');
    searchOptions.id = 'qunit-modulefilter-but-gooder';
    let existingOptions = filterDropdown.children;
    for (let i = 0; i < existingOptions.length; i++) {
      let newOption = searchOptions.appendChild(document.createElement('option'));
      let existingOption = existingOptions[i].text;
      ALL_OPTIONS[existingOption] = i;
      newOption.appendChild(document.createTextNode(existingOption));
    }

    let searchBox = document.createElement('input');
    searchBox.setAttribute('list', searchOptions.id);

    searchBox.addEventListener('input', function() {
      let val = searchBox.value;
      console.log(val);
      if (ALL_OPTIONS[val]) {
        filterDropdown.selectedIndex = ALL_OPTIONS[val];
        filterDropdown.dispatchEvent(new Event('change'));
      }
    });

    filterContainer.insertBefore(searchOptions, filterDropdown);
    filterContainer.insertBefore(searchBox, filterDropdown);

  }

  go();
}

var script = document.createElement('script'),
    code   = document.createTextNode('(' + doMyThing + ')();');
script.appendChild(code);
(document.body || document.head || document.documentElement).appendChild(script);
