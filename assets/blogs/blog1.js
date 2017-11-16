window.addEventListener('load',blog)
function blog(){

var blogDiv = document.getElementById('blog-posts');
var previousBlog = blogDiv.firstChild;
var newBlog = document.createElement('div');

var index = document.getElementById('index');
var indexItem = document.createElement("LI");

//change the blogID and BlogTitle
var blogId = 1;
var blogTitle = 'Why Python should be your new best friend';

var showBlog = 'more'+blogId;
var hideBlog = 'hide'+blogId;

//change your name and the date, tags change automatically
var blogStart = (`
  <div id=${"blog"+blogId}>
    <h2 style="text-align: center">${blogTitle}</h2>
    <h3>By Anna-Marie Vos</h3>
    <p><span class="fa fa-calendar"></span> Posted on August 22, 2017</p>
`)
//add your main paraghaph here
var blogLead = (`
  <p class="lead">
    If like me, you’ve considered learning a new programming language,
    but wonder which one to pick first? I recommend Python.
    Let me tell you why it’s awesome.
  </p>
  `)
  //add the rest of your blog here
var blogMore = (`
  <p>
    I am a big fan of Python.
    It’s an easy to read programming language and it works
    across all platforms (Windows, Linux and OS). It comes
    pre-installed on Linux, but I’d recommend you upgrade to
    the latest version (3.6.1, when I last checked).
  </p>
  <p>
    Originally, I decided to learn Python because it’s widely
    used to program machine learning algorithms, which I am keen
    to experiment with. Another reason was that it is used on some
    nifty open source software packages such as Dynamo and Blender.
  </p>
  <p>
    Overall, it’s a pretty cool programming language to learn.
    Most of the libraries are easy to install and you can quickly
    create little apps, without too much effort. If you want to
    make desktop apps, Python can help you do that. There are some
    really great tutorials and Udemy courses to help you on your way.
  </p>
  <p>There are a number of pitfalls to be aware of.</p>
  <ul>
    <p><b>Python 2 versus Python 3</b></p>
    <li>
      <p>
        There are subtle differences between 2.7 and
        3.5 or later. Some of the libraries haven’t been
        updated for over 3 years and it can be troublesome.
        MySql in particular caused me some grief.
      </p>
    </li>
    <p><b>Virtual Environments</b></p>
    <li>
      <p>
        I recommend using virtual environments when you make apps
        in Python. It keeps your apps neatly packaged.
      </p>
    </li>
    <p><b>Making Code work between Linux and Windows</b></p>
    <li>
      <p>
        Keep in mind that you will require different packages
        depending on which OS the app is interacting with.
      </p>
    </li>
  </ul>
  <p>
    Overall I found Python easy to read. Documentation is thorough
    and fairly easy to follow.  Functions such as For Loops, for
    example, are very straight-forward to write. Oh, and there
    are NO semi-colons!  I strongly recommend it as a
    beginner programming language.
  </p>
`)

//the rest is just functionality, so no touchy

var indexItemText = (`
  <a href=${"#"+"blog"+blogId}>${blogTitle}</a>
`)

var blogSetup = (`
    <div id=${showBlog}>
      <h3><a style=" display:block; text-align:left">MORE</a></h3>
    </div>
    <div id=${hideBlog} style="display:none" >
      <h3><a  href="#blog">HIDE</a></h3>
    </div>
  </div>
  `)

indexItem.innerHTML = indexItemText;
index.appendChild(indexItem);

newBlog.setAttribute('class', 'col-md-8 blog_post');
blogDiv.insertBefore(newBlog, previousBlog);

newBlog.innerHTML = blogStart+blogLead+blogSetup

  var moreDiv = document.getElementById(showBlog);
  moreDiv.addEventListener('click',showMore);

  var hideDiv = document.getElementById(hideBlog);
  hideDiv.addEventListener('click',hideMore);

  function showMore(){
    hideDiv.removeAttribute("style")
    moreDiv.innerHTML = blogMore
  }
  function hideMore(){
    while (moreDiv.hasChildNodes()) {
      moreDiv.removeChild(moreDiv.firstChild);
    }
    moreDiv.innerHTML = `
      <h3><a style="display:block; text-align:left">MORE</a></h3>
    `
    hideDiv.setAttribute("style", "display: none");
  }
}
