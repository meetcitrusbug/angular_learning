function formToSelect(state) {
  if (!state.id) {
    return state.text;
  }
  var $state = $(
    '<span class="flag-box-span"><img class="flag flag-' +
      state.element.value.toLowerCase() +
      '"/><span class="flag-box-span">' +
      state.text +
      "</span></span>"
  );
  return $state;
}

var ddData = [
  {
    value: 1,
    selected: true,
    imageSrc:
      "https://www.countries-ofthe-world.com/flags-normal/flag-of-Poland.png",
  },
  {
    value: 2,
    selected: false,
    imageSrc:
      "https://www.countries-ofthe-world.com/flags-normal/flag-of-India.png",
  },
  {
    value: 3,
    selected: false,
    imageSrc:
      "https://www.countries-ofthe-world.com/flags-normal/flag-of-United-States-of-America.png",
  },
  {
    value: 4,
    selected: false,
    imageSrc:
      "https://www.countries-ofthe-world.com/flags-normal/flag-of-Japan.png",
  },
];

$("#myDropdown").ddslick({
  data: ddData,
  width: 90,
  selectText: " ",
  imagePosition: "left",
  onSelected: function (selectedData) {
    //callback function: do something with selectedData;
  },
});
