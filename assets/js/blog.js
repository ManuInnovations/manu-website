window.onload = function(){

var blogDiv = document.getElementById('blog-posts');

var previousBlog = blogDiv.firstChild;

var newBlog = document.createElement('div');
newBlog.setAttribute('class', 'row blog_post');
blogDiv.insertBefore(newBlog, previousBlog);

newBlog.innerHTML = `
    <div class="col-md-8">
      <h2>Why Python Should be your New Best Friend</h2>
      <h3>By Anna-Marie Vos</h3>
      <p><span class="fa fa-calendar"></span> Posted on August 22, 2017</p>
      <p id="lead">If like me, you’ve considered learning a new programming language, but wonder which one to pick first? I recommend Python. Let me tell you why it’s awesome.</p>
      <h3><a href="#more">MORE</a></h3>
      <div id="more">
        <p>I am a big fan of Python. It’s an easy to read programming language and it works across all platforms (Windows, Linux and OS). It comes pre-installed on Linux, but I’d recommend you upgrade to the latest version (3.6.1, when I last checked). </p>
        <p>Originally, I decided to learn Python because it’s widely used to program machine learning algorithms, which I am keen to experiment with. Another reason was that it is used on some nifty open source software packages such as Dynamo and Blender.</p>
        <p>Overall, it’s a pretty cool programming language to learn. Most of the libraries are easy to install and you can quickly create little apps, without too much effort. If you want to make desktop apps, Python can help you do that. There are some really great tutorials and Udemy courses to help you on your way.</p>
        <p>There are a number of pitfalls to be aware of.</p>
        <ul>
          <p><b>Python 2 versus Python 3</b></p>
          <li>There are subtle differences between 2.7 and 3.5 or later. Some of the libraries haven’t been updated for over 3 years and it can be troublesome. MySql in particular caused me some grief.</li>
          <p><b>Virtual Environments</b></p>
          <li>I recommend using virtual environments when you make apps in Python. It keeps your apps neatly packaged.</li>
          <p><b>Making Code work between Linux and Windows</b></p>
          <li>Keep in mind that you will require different packages depending on which OS the app is interacting with.</li>
        </ul>
        <p>Overall I found Python easy to read. Documentation is thorough and fairly easy to follow.  Functions such as For Loops, for example, are very straight-forward to write. Oh, and there are NO semi-colons!  I strongly recommend it as a beginner programming language.</p>
      </div>
      <h3><a href="#blog">HIDE</a></h3>

    </div>
`

}

  //
	// 	<div class="row" id="appdev">
  //     <div class="col-md-8">
  //       <h2>How to know which of your Brilliant App Ideas to actually develop?</h2>
  //       <h3>By Janie Tito</h3>
  //       <p><span class="fa fa-calendar"></span> Posted on August 7, 2017</p>
  //       <!-- Post Content -->
  //       <p id="lead">We all do it. Come up against a problem or an irksome task and think 'I should make an app to do that' (or at least, I wish I knew how to).  But how to decide which of the hundreds of awesome, sure-to-succeed ideas should you really pursue. There's a couple of important boxes to tick first.</p>
  //       <h3><a href="#more">MORE</a></h3>
  //       <div id="more">
  //       <p>When I had kids I always dreamed of them learning te reo Māori, and ideally being in bilingual classrooms, and that wish came true at our local Primary. It was Day 1 at the new school, when Brilliant Idea Number 135 hit me - an app to help teach te reo Māori language, aimed at (you guessed it) Primary aged children.</p>
  //       <ul>
  //         <li>
  //           <p><b>The first thing you should do is find out if anyone else thinks its a problem that needs solving too.</b></p>
  //         </li>
  //       </ul>
  //       <p>Turns out that the teachers agreed with me - Yes! they cried, we would love an app to help us teach the pronunciation of the letters and words.</p>
  //       <p>The next thing I would recommend (and this is not what I did but I'll explain why later), is:
  //       <ul>
  //          <li><p><b>Do some Market Validation.</b></p></li>
  //       </ul>
  //       <p>During Startup Weekend Wellington this year, I learnt a valuable lesson. Just because you think the idea rocks, doesn't mean Joe Bloggs is going to want to pay for it, let alone use it. You MUST go and ask people. And not just people who like you, such as your Granny, who will tell you it's the best thing since sliced bread.  Go ask the local dairy owner, and randoms on the street.</p>
  //       <p>OK, so you've got some feedback to encourage you to carry on.</p>
  //       <ul>
  //         <li><p><b>The sooner you can get a basic working prototype out to the users, the better.</b></p></li>
  //       </ul>
  //       <p>With my idea, Kōrero Mai was born in Enspiral Dev Academy, during a whirl-wind 5 days development frenzy. A team of 4 spent 12 hour days creating a really great app. It had a way for teachers to log-in and it automatically recorded student progress. It was amazing!  Turns out when the real users, the teachers, tried it out they didn't really prioritise the fancy progress tracker. It was a 'nice-to-have'. Big learning there - don't assume to know what will be most useful to your users.</p>
  //       <p>We were on a tight time-frame, so Market Validation got chucked to the curb. But don't you do that. Doing it will save you time and potentially a lot of money.</p>
  //       <p>So my next version of the app was stripped down to the basics. It's simple. It has one or two main functions, and it's going to be a solid product to start with.  That's the other thing:
  //       <ul>
  //         <li><p><b>Start small, start simple and then just put it out there.</b></p></li>
  //       </ul>
  //       <p>If you try and tweak a product until it's perfect, you'll never launch it.</p>
  //       <p>Here are my two Kōrero Mai versions.</p>
  //       <img src="assets/images/blog/KMversion1.png" />
  //       <p></p>
  //       <img src="assets/images/blog/KMversion2.png" />
  //       <p>I think there is one other thing that helped with the decision whether or not to develop this app, and it's the most important for me:
  //       <ul>
  //         <li><p><b>PASSION.</b></p></li>
  //       </ul>
  //       <p>I'm interested in this app succeeding! It's an important issue for me, to contribute towards the survival of te reo Māori. This helps me to stay motivated - app development can be long and difficult. But if you love what you are doing, you will be able to manage the hard times.</p>
  //       <p>So before you jump on board the app band-wagon, think about doing a bit of work and research - but once you have, and are keen to give it a go, get in touch. I'd love to help your Brilliant App Idea come alive. </p>
  //       <h3><a href="#blog">Hide</a></h3>
  //       </div>
  //     </div>
  //     <div class="col-md-4">
  //       <h2>Past Posts</h2>
  //       <p>No other posts.</p>
  //
  //       <!-- Blog Categories Well -->
  //       <div class="well">
  //         <h4>Blog Categories</h4>
  //           <div class="row">
  //               <div class="col-lg-6">
  //                   <ul class="list-unstyled">
  //                       <li><a href="#appdev">App development</a>
  //                       </li>
  //                   </ul>
  //               </div>
  //           </div>
  //           <!-- /.row -->
  //       </div>
  //       <!-- Blog Search Well -->
  //       <!-- <div class="well"> -->
  //           <!-- <h4>Blog Search</h4>
  //           <div class="input-group">
  //               <input type="text" class="form-control">
  //               <span class="input-group-btn">
  //                   <button class="btn btn-default" type="button">
  //                       <span class="fa fa-search"></span>
  //               </button>
  //               </span>
  //           </div> -->
  //           <!-- /.input-group -->
  //       <!-- </div> -->
  //     <!-- </div> -->
  //   </div>
  // </div><!-- Row end -->
