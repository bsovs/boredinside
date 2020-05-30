var wordlist = [
  ['take a spin', 'spin again. maybe you will find something fun to do :)'],
  ['go on a walk', 'walking is good. go outside, walk around, look at people, look at nature, think about your day and your life and the people in it.'],
  ['clean your room', 'getting something done feels amazing at the end.'],
  ['do your laundry', 'getting something done feels amazing at the end.'],
  ['do some yoga', 'it is great to strech out, relax and get moving after sitting around for hours.'],
  ['take a walk', 'walking is good. go outside, walk around, look at people, look at nature, think about your day and your life and the people in it.'],
  ['drink some water', 'hydro homies. water is good for you, take a gulp and come back to spin again.'],
  ['call up an old friend', 'catch up with an old mate. pick up the phone and talk about the good old days.'],
  ['virtual drinks', 'crack open a cold one with some friends over video chat. some great ones are <a href="https://discordapp.com/" target="_blank">discord</a>, <a href="https://www.skype.com/en/" target="_blank">skype</a> and <a href="https://houseparty.com/" target="_blank">house party</a>.'],
  ['write a story', 'get your creativity going. write something down and run with it. let your mind wander and express your deepest fantasy.'],
  ['start a blog', 'get going on something you love talking about. share your knowledge and ideas with the world!'],
  ['workout', 'get down and do some pushups and situps. calisthenics are fantastic for you and cost nothing! check <a href="https://www.bodybuilding.com/content/what-is-the-best-calisthenics-workout.html" target="_blank">this</a> routine out.'],
  ['play some video games', 'some fun games to pass the time and relax. no matter how many games you normaly play you will love <a href="https://mashable.com/article/best-video-games-beginners-coronavirus/" target="_blank">these</a>'],
  ['listen to music', 'music is great. listen to something new or some classics. just let the time fly by.'],
  ['plan a trip', 'think up your dream vacation and start to plan it all out. it will give you something to do now and something to look forward to in the future.'],
  ['make a bucket list', 'might sound bad but it is nice to write down all the things you would like to do in life. this might change your perspective on what you actually want to be doing with the time you have left.'],
  ['plan a party', 'dream up the best party and talk it over with your mates. it will be amazing to finally get together when this is all over.'],
  ['color', 'get out the good old crayons and start coloring. <a href="https://www.crayola.com/free-coloring-pages/adult-coloring-pages/" target="_blank">here</a> are some great pages to get started'],
  ['cook something', 'get creative. you have the time now, make that dish you always wanted to try but normally takes too long'],
  ['learn a language', 'get started with <a href="https://www.duolingo.com/" target="_blank">duolingo</a> to learn a language you have always been fascinated by'],
  ['learn to knit', 'get some yarn out and  <a href="https://www.paradisefibers.com/pages/knitting-101-knitting-for-beginners" target="_blank">learn how</a> to knit that sweater you always hated.'],
  ['dance!', 'make a playlist of your favorite tunes and just go all out. no one is watching'],
  ['complete a puzzle', 'you have the time now. get going and feel good once it is all done.'],
  ['learn to code', 'if i can make this website you can code as well! check out some great tutorials <a href="https://www.themuse.com/advice/10-free-classes-to-learn-to-code-if-you-have-absolutely-no-idea-where-to-start" target="_blank">here</a>'],
  ['read a book', 'pick up a classic and just go for it. <a href="https://jamesclear.com/best-books" target="_blank">here</a> are some great ideas.'],
  ['look at puppies', '<a href="https://imgur.com/r/puppies/top" target="_blank">thank me later</a>'],
  ['look at kittens', '<a href="https://imgur.com/r/kittens/top/all" target="_blank">thank me later</a>'],
  ['watch netflix', 'yes it is "lazy", but it takes your mind off the news so that\'s a win.'],
  ['watch ted talks', 'watch on <a href="https://www.youtube.com/user/TEDtalksDirector" target="_blank">youtube</a> or explore more on <a href="https://www.ted.com/" target="_blank">ted.com</a>'],
  ['scroll reddit', 'lots of stuff to see <a href="https://www.reddit.com/r/popular/" target="_blank">here</a>'],
  ['try out mix.com', 'lots of websites to explore <a href="https://mix.com/popular" target="_blank">here</a>'],
  ['make a cocktail', 'check out some of the classics <a href="https://www.bonappetit.com/drinks/cocktails/slideshow/classic-cocktail-recipes" target="_blank">here</a>'],
  ['make a dream document', 'use google docs with your mates to write down all your dreams and ideas.'],
  ['lean to play d&d', 'learn how to play <a href="https://www.polygon.com/2018/5/26/17153274/dnd-how-to-play-dungeons-dragons-5e-guide-spells-dice-character-sheets-dm" target="_blank">here</a> and enter into a fantasy world'],
  ['play scrabble', 'play online for free <a href="https://www.isc.ro/" target="_blank">here</a> or get the <a href="https://scrabble.hasbro.com/en-us" target="_blank">app</a>'],
  ['play draw my thing', 'gather some friends or join a lobby and <a href="https://skribbl.io/" target="_blank">get drawing</a>'],
  ['learn origami', 'learn the art of paper folding <a href="https://origami.me/beginners-guide/" target="_blank">here</a>'],
  ['make some music', 'use <a href="https://musiclab.chromeexperiments.com/Song-Maker/" target="_blank">this</a> cool site to make a beat.'],
  ['freestyle rap', 'find a beat <a href="https://freebeats.io/royalty-free-rap-beats" target="_blank">here</a> and rap over it. facetime a friend and have a rap battle.'],
  ['type fast', 'challenge your friends <a href="https://www.typingtest.com/test.html" target="_blank">here</a> to see who can type the fastest!'],
  ['play tetris', 'play <a href="https://tetris.com/play-tetris" target="_blank">here</a> for free! challenge your mates to a high score'],
  ['learn random facts', 'check out <a href="https://www.thefactsite.com/1000-interesting-facts/" target="_blank">these</a> 1000 random facts'],
  ['60-second meditation', 'check out <a href="http://www.pixelthoughts.co/" target="_blank">pixelthoughts</a> to relieve some stress.'],
]

var description = [];

function buildSlotItem (text) {
    return $('<div>').addClass('slottt-machine-recipe__item')
                     .text(text)
}

function buildSlotContents ($container, wordlist) {
  description = [];
  $items = wordlist.map(function(subarray) {
	  description.push(subarray[1]);
	  return buildSlotItem(subarray[0]);
  });
  $container.append($items);
  
}

function popPushNItems ($container, n) {
    $children = $container.find('.slottt-machine-recipe__item');
    $children.slice(0, n).insertAfter($children.last());

    if (n === $children.length) {
      popPushNItems($container, 1);
    }
}

// After the slide animation is complete, we want to pop some items off
// the front of the container and push them onto the end. This is
// so the animation can slide upward infinitely without adding
// inifinte div elements inside the container.
function rotateContents ($container, n) {
    setTimeout(function () {	
		
      popPushNItems($container, n);
      $container.css({top: 0});
	  
	   $children = $container.find('.slottt-machine-recipe__item');
	  
	  var found = wordlist.find(function(element) {
		 if(element[0] == $children.first().text()){
			  return element;
			}
		});	
	$('#text_bubble').html(found[1]);
	  
	 $("#text_bubble").removeClass('move_out');
	 $("#text_bubble").addClass('move');
	 $(".slottt-machine-recipe").addClass('move_spinner');
	 
    }, 100);    
}

function randomSlotttIndex(max) {
  var randIndex = (Math.random() * max | 0);
  return (randIndex > max/3) ? randIndex : randomSlotttIndex(max);
}

  
function animate() {
	
	 $("#text_bubble").addClass('move_out');
	
  var wordIndex = randomSlotttIndex(wordlist.length);
  $wordbox.animate({top: -wordIndex*150}, 500, 'swing', function () {
    rotateContents($wordbox, wordIndex);
  });
}


$(function () {
  $wordbox = $('#wordbox .slottt-machine-recipe__items_container');
  buildSlotContents($wordbox, wordlist);  
  buildSlotContents($wordbox, wordlist);  
  buildSlotContents($wordbox, wordlist);  
  buildSlotContents($wordbox, wordlist);  
  
  $("#spin_click").on("click", animate);
  
  $("#disqus_click").click(function() {
    $('html, body').animate({
		'marginTop': '-100vh',
    }, 800);
	
	$('#disqus_click').css(
		'display', 'none'
    );
	$('#up_click').css(
		'display', 'inherit'
    );
	
	});
	
  $("#up_click").click(function() {
    $('html, body').animate({
		'marginTop': '0vh',
    }, 800);
	
	$('#disqus_click').css(
		'display', 'inherit'
    );
	$('#up_click').css(
		'display', 'none'
    );
	
	});
  
});
