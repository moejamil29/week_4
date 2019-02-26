window.addEventListener('keydown', function(e){

})

// let keyTemplate = document.querySelector( '#key-template' );

// let keys = [
//     { key: 'A', name: 'boom', code: 65 },
//     { key: 'S', name: 'clap', code: 83 },
//     { key: 'D', name: 'hi-hat', code: 68 },
//     { key: 'F', name: 'kick', code: 70 },
//     { key: 'G', name: 'open-hat', code: 71 },
//     { key: 'H', name: 'ride', code: 72 },
//     { key: 'J', name: 'snare', code: 74 },
//     { key: 'K', name: 'tink', code: 75 },
//     { key: 'L', name: 'tom', code: 76 },
//   ];

// // /**
// //  * Key binding method
// //  *
// //  * Expects to be called via `Key.call()` on items from `keys` array
// //  */
// let Key = function() {
//     let key = this;
  
//     /**
//      * Create the DOM element from the template
//      */
//     key.element = document.createElement('div');
//     key.element.classList.add('key');
    
//     // replace the template tags with the data for this key
//     key.element.innerHTML = keyTemplate.innerHTML.replace( 
//       /{{ key\.(key|name|code) }}/g, 
//       ( fullMatch, match ) => key[ match ] 
//     );
    
//     // ... etc ...
  
//     // the audio element for this key
//     key.audio = key.element.querySelector('audio');
    
//     // play the sound file associated with this key
//     key.play = function () {
  
//       // ... etc ...
//     }
//   } // end: Key()

//   keys.forEach( key => Key.call( key ) );


// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     e.target.classList.remove('playing');
//   }
//   function playSound(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     if (!audio) return;
//     key.classList.add('playing');
//     audio.currentTime = 0;
//     audio.play();
//   }
//   const keys = Array.from(document.querySelectorAll('.key'));
//   keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//   window.addEventListener('keydown', playSound);