import React, {useState} from 'react';
import './App.css';

function App() {

    const [quote, setQuote] = useState([
      {
        text:"My Dear, Find what you love and let it kill you. Let it drain you of your all. Let it cling onto your back and weigh you down into eventual nothingness. Let it kill you and let it devour your remains. For all things will kill you, both slowly and fastly, but it's much better to be killed by a lover.",
        author:"Charles Bukowski",
        backgroundImage: "url(https://c4.wallpaperflare.com/wallpaper/916/657/97/anime-your-name-hd-wallpaper-preview.jpg)",
        // color: "white"
      },
      {
        text:"The ones who say \"You can't\" and \"You won't\" are probably the ones scared that \"You will\" ",
        author:"Ziad K. Abdelnour",
        backgroundImage: "url(https://staticg.sportskeeda.com/editor/2022/04/569a9-16494651884301-1920.jpg)"
      },
      {//2
        text:"Just because it's hard doesn't mean it's impossible. You can do it.",
        author:"Lysa Terkeurst",
        backgroundImage: "url(https://i.etsystatic.com/40957748/r/il/e4efaa/4810125152/il_fullxfull.4810125152_23ir.jpg)"
      },
      {
        text:"Inspired by thr fear of being average",
        author:"Renu Kalathil",
        backgroundImage: "url(https://wallpapers.com/images/hd/aesthetic-anime-background-uniiofevfptrbv8t.jpg)"
      },
      {//4
        text:"You get what you work for not what you wish for",
        author:"Evelyn Jess",
        backgroundImage: "url(https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg)",
        // color: "white" //not good
      },
      {
        text:"I respect any person who can put their ego aside and say \"I made a mistake I apologize for that and I am correcting the behaviour\"",
        author:"Sylvester Mcnutt III",
        backgroundImage: "url(https://www.hdwallpapers.in/download/anime_nature_horizon_sky_silhouette_background_hd_anime-HD.jpg)",
        // color: "white"
      },
      {//6
        text:"Just because they carry it well doesn't mean it isn't heavy",
        author:"Christin Lewis",
        backgroundImage: "url(https://wallpapercave.com/wp/wp8495963.jpg)",
        // color: "white"
      },
      {
        text:"Scars are the proof you're stronger than what tried to hurt you, duckling. Don't be ashamed of them",
        author:"August Clearwing",
        backgroundImage: "url(https://rare-gallery.com/uploads/posts/306277-Dabi-Tomura-Shigaraki-My-Hero-Academia-4K.jpg)",
        // color: "white" 
      },
      {//8
        text:"The scariest thing about me is that I am the result of a happy childhood",
        author:"Unknown",
        backgroundImage: "url(https://images8.alphacoders.com/131/1318148.png)"
      },
      {
        text:"The best way to keep a prisoner from escaping is to make sure he never knows he's in prison",
        author:"Fyodor Dostoevsky",
        backgroundImage: "url(https://nefariousreviews.files.wordpress.com/2020/06/the-promised-neverland-featured.jpg)",
        // color: "white"
      },
      {//10
        text:"When you are not fed love on a silver spoon you learn to lick it off knives",
        author:"Lauren Eden",
        backgroundImage: "url(https://rare-gallery.com/uploads/posts/306277-Dabi-Tomura-Shigaraki-My-Hero-Academia-4K.jpg)",
        
      },
      {
        text:"Don't take criticism from people you would never go to for advice",
        author:"Morgan Freeman",
        backgroundImage: "url(https://i.pinimg.com/originals/be/19/21/be19218de045957e550df3b420f10add.png)",
        // color: "white"
      },
      {//12
        text:"It takes a great deal of bravery to stand up to our Enemies but just as much to stand up to our Friends",
        author:"Dumbledore (J. K. Rowling)",
        backgroundImage: "url(https://c4.wallpaperflare.com/wallpaper/600/980/965/anime-girls-street-night-anime-4k-hd-wallpaper-preview.jpg)",
        // color: "white"
      },
      {
        text:"If you don't heal what hurt you, you'll bleed on people who didn't cut you",
        author:"Saachi Baat",
        backgroundImage: "url(https://e0.pxfuel.com/wallpapers/860/160/desktop-wallpaper-anime-landscape-cityscape-scenic-sunset-pink-scenery-anime.jpg)",
        // color: "white"
      },
      {
        text:"You don't know me, you only know what I allow you to know",
        author:"Kirma",
        backgroundImage: "url(https://wallpaperaccess.com/full/3870213.jpg)",
        // color: "white"
      },
      {//15
        text:"There comes a time in your life when you have to choose between turning the Page or closing the Book",
        author:"Josh Jameson",
        backgroundImage: "url(https://images.hdqwalls.com/download/starry-sky-anime-girl-4k-6j-1366x768.jpg)",
        // color: "white"
      },
      {
        text:"If you have been brutally broken but still have the courage to be gentle to other living beings, than you're a badass with a hear of an angle",
        author:"Keanu Reeves",
        backgroundImage: "url(https://i.pinimg.com/736x/36/68/c8/3668c82ed11c44671952c756ff89836d.jpg)",
      },
      {
        text:"Keep the ones who heard you when you never said a word",
        author:"Jon York",
        backgroundImage: "url(https://media.tenor.com/8fCoAFhaseUAAAAd/aesthetic-anime.gif)",
        // color: "white"
      },
      {//18
        text:"I went throught my darkest time alone, so sorry if i act like i don't need anyone",
        author:"Tommy Shelby",
        backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yvfZIHaOszPMKCHZgGm987jWMehAmvH1iHm45YCrzPfNObMy)"
      },
      {
        text:"Don't be afraid of being Different be afraid of being the same as everyone else",
        author:"Anonymous",
        backgroundImage: "url(https://wallpaperboat.com/wp-content/uploads/2020/06/03/42361/aesthetic-anime-04.jpg)"
      },
      {
        text:"Sometimes you must Hurt in order to Know, Fall in order to Grouw, Lose in order to Gain because life's greatest lessons are learned through Pain",
        author:"Naruto",
        backgroundImage: "url(https://wallpaper.dog/large/17056.jpg)"
      },
      {//21
        text:"Those who break the rules are scums but those who abandon their friends are worse than scums",
        author:"Hatake Kakashi",
        backgroundImage: "url(https://rukminim1.flixcart.com/image/850/1000/xif0q/poster/c/p/1/medium-anime-scenery-beautiful-nature-dreamworld-anime-aesthetic-original-imagkzhg4sg75df2.jpeg?q=90)"
      },
      {
        text:"Those who don't understand true pain can never understand true peace",
        author:"Pain",
        backgroundImage: "url(https://wallpapercave.com/wp/wp3790948.jpg)"
      },
      {
        text:"Just walk the path you believe in. And don't forget you're the main character of your own life story.",
        author:"Anonymous",
        backgroundImage: "url(https://wallpapercave.com/wp/wp5305066.jpg)"
      },
      {
        text:"Before you ask why Someone Hates you Ask yourself why you Care",
        author:"Tiffany Alvord",
        backgroundImage: "url(https://c4.wallpaperflare.com/wallpaper/389/923/684/anime-landscape-sunset-sky-painting-wallpaper-thumb.jpg)",
      },
      {//25
        text:"Sometimes your Heart needs more time to accept what your Mind already knows",
        author:"Anonymous",
        backgroundImage: "url(https://wallpaperaccess.com/full/2526094.png)"
      },
      {
        text:"Work for a cause, not for applause... live life to express, not to impress",
        author:"Lichtenstein",
        backgroundImage: "url(https://wallpapercave.com/wp/wp5294606.jpg)"
      },
      {//27
        text: "Work wiser, not harder don't work hard when it's pointless, you need to know the differece when you really need to try or to give up!",
        author: "Anonymous",
        backgroundImage: "url(https://wallpapercave.com/wp/wp6065609.jpg)"
      },
      {
        text: "It's foolish to fear what we have yet to see and know",
        author:"Masashi Kishimoto",
        backgroundImage: "url(https://jw-webmagazine.com/wp-content/uploads/2020/03/Kimetsu-no-YaibaDemon-Slayer.jpg)",
        // color: "white"
      },
      {
        text: "A friend is someone who can see the truth and pain even when you're fooling everyone else",
        author: "Anonymous",
        backgroundImage: "url(https://i.pinimg.com/originals/58/31/f1/5831f15440769f236b7c24caf658c9f3.jpg)"
      },
      {//30
        text: "Life is too ironic, it takes sadness to know what happiness is, Absence to value Presence, and Noise to value Silence",
        author: "Abhysheq Shukla, KARMA",
        backgroundImage: "url(https://media.tenor.com/CILQW2C8YKQAAAAC/hells-paradise-hell%27s-paradise.gif)"
      },
      {
        text: "The worst type of people are intelligent and manipulative",
        author:"Anonymous",
        backgroundImage: "url(https://wallpapercave.com/wp/wp6788481.jpg)",
        // color: "white"
      },
      {
        text: "Not every person is going to uderstand you and that okay, they have a right to their opinion and you have EVERY RIGHT to IGNORE it",
        author: "Anonymous",
        backgroundImage: "url(https://c4.wallpaperflare.com/wallpaper/937/244/922/jujutsu-kaisen-anime-boys-anime-satoru-gojo-hd-wallpaper-preview.jpg)",
        // color: "white"
      },
      {//33
        text: "Don't judge my choices if you don't understand my reasons",
        author: "Anonymous",
        backgroundImage: "url(https://images5.alphacoders.com/605/605597.jpg)",
        // color: "white"
      },
      {
        text: "There's no advantage to hurrying through life",
        author: "Shikamaru Nara",
        backgroundImage: "url(https://wallpapercave.com/wp/wp11732646.jpg)",
      },
      {//35
        text: "If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be!",
        author: "Naruto",
        backgroundImage: "url(https://wallpapercave.com/wp/wp10256710.jpg)",
        // color: "white"
      },
      {
        text: "You can say something hurfull in 10 seconds, but 10 years later, the wounds are still there",
        author: "Joel Osteen",
        backgroundImage: "url(https://wallpapercave.com/wp/wp8080238.jpg)",
        // color: "white"
      },
      {
        text: "Be nice? NO, people take ADVANTAGE of that shit",
        author:"Anonymous",
        backgroundImage: "url(https://e0.pxfuel.com/wallpapers/415/88/desktop-wallpaper-farms-landscape-village-sunset-anime-dual-wide-wide-21-9-widescreen-ultrawide-anime.jpg)",
        // color: "white"
      },
      {
        text: "If someone THREATENED you. Don't say \"Why me?\" and say \"Try me\"",
        author:"I.V.E",
        backgroundImage: "url(https://cdn.epicstream.com/images/ncavvykf/epicstream/05cacb652cb6cd3ec0d73ee486b884a641403994-1920x1080.jpg?auto=format)"
      },
      {
        text: "I am not lazy I'm just conserving energy",
        author:"Houtarou Oreki",
        backgroundImage: "url(https://e1.pxfuel.com/desktop-wallpaper/200/809/desktop-wallpaper-houtarou-oreki-bot-on-twitter-hyouka-oreki.jpg)"
      }
    ]);


    const [randomQuote, setRandomQuote] = useState ('');
    const [randomAuthor, setRandomeAuthor] = useState ('');
    const [backgroundImage, setBackgroundImage] = useState ('');
    const [textColor, setTextColor] = useState ('');

    const generateRandomQuote = () => {
        // const generateRandomQuote = quote[17]
        const generateRandomQuote = quote[Math.floor(Math.random() * quote.length)]; //random index & assings it to randomQuote
        setRandomQuote (generateRandomQuote.text);
        setRandomeAuthor (generateRandomQuote.author);
        setBackgroundImage (generateRandomQuote.backgroundImage);
        setTextColor (generateRandomQuote.color);
    };

    const handleTweetClick = () => {
      const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${randomQuote} - ${randomAuthor}`)}`;
      window.open(tweetUrl, '_blank');
    };

  return (
    <div className='container'>
      <div id="quote-box" style={{backgroundImage: backgroundImage, color: textColor}}>
        <div id="cover">
          <div id="text">
            <p>{randomQuote}</p>
          </div>
          <div id="author">
            <p> - {randomAuthor}</p>
          </div>
          <div className='card_footer'>
            <button id="tweet-quote" onClick={handleTweetClick}>Tweet</button>
            <button id="new-quote" onClick={generateRandomQuote}>New Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
