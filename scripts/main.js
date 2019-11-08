// assign variables
let media = document.querySelectorAll('.media');
let albumCovers = document.querySelectorAll('.album-cover');
let players = document.querySelectorAll('audio');

// function to hide all divs
function hideAll() {
  media.forEach(function(el) {
    el.style.display = 'none';
  });
}

// run that function right away
hideAll();

// when any animal is clicked, make the suitable div appear
albumCovers.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAll();

    // here is a switch statement to handle opening the right div

    switch (e.target.getAttribute('id')) {
      case 'bullets':
        document.querySelector('#album1')
        	.style.display = 'block';
        break;
      case 'revenge':
        document.querySelector('#album2')
        	.style.display = 'block';
        break;
      case 'parade':
        document.querySelector('#album3')
        .style.display = 'block';
        break;
      case 'danger':
        document.querySelector('#album4')
        .style.display = 'block';
        break;
    } // end of switch
    // switch does not need default for this


    players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });


  } // end of function for clicking

}); // end of forEach()
