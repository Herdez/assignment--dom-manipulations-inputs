document.querySelector("#reset-field button").addEventListener('click',function(){
  // TASK #1

})


document.querySelector("#validate-field button").addEventListener('click',function(){
  // TASK #2

})


document.querySelector("#calculate-items button").addEventListener('click',function(){
  // TASK #3

})


document.querySelector("#select-to-show-more button").addEventListener('click',function(){
  // TASK #4
  var tops = document.querySelectorAll('.show-options select option');
  tops.forEach(function(item){
  		if (item.selected === true) {
  			document.querySelector('.img-box').innerHTML = '<img src="./images/' + item.dataset.img + '">';
  			document.querySelector('.model').innerText = item.value;
  			document.querySelector('.msrp').innerText = item.dataset.msrp;
  			document.querySelector('.mpg').innerText = item.dataset.mpg;
  			document.querySelector('.edmunds').innerText = item.dataset.edmunds;
  		}
  });

})
