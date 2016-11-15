/* Color Bag Functions */
function colorchoice(){	
	if(document.getElementById('rightsidechoice').style.display == "none")
	{
		document.getElementById('rightsidechoice').style.display = "block"
		document.getElementById('colormessage').innerHTML = "<p>Select a bag part!</p>"
		slidebag(1);
	}
	else
	{
		clear();
		slidebag(2);
	}
}

function colorsection(section){
	if(section == 1)
	{
		document.getElementById('bagselect').style.borderWidth = "0px";
		document.getElementById('strapselect').style.borderWidth = "1px";
	}
	else
	{
		document.getElementById('strapselect').style.borderWidth = "0px";
		document.getElementById('bagselect').style.borderWidth = "1px";
	}
	
	color(section);
}

function color(section){
	var colors = [
		"0,0,0",
		"200,43,83",
		"102,102,102",
		"107,53,14",
		"252,91,42",
		"144,5,31",
		"86,91,80",
		"49,152,204",
		"197,202,55",
		"215,32,44"
	];
	
	colordisplay = "";
	var func = "onclick='colorswap(3)'";
		
	for(i = 0; i < colors.length; i++)
	{
		
		colordisplay += "<div onclick='colorswap(" + i + "," +section + ");' class='circleborder'>";
		colordisplay += "<div id='circle-0" + i + "' class='circle'></div>";
		colordisplay += "</div>";
		if((i + 1) % 5 == 0)
			colordisplay += "<br>";
	}
	
	document.getElementById('colormessage').innerHTML = colordisplay;
	
	for(j = 0; j < colors.length; j++)
	{
		var id = "circle-0" + j;
		document.getElementById(id).style.backgroundColor = "rgb(" + colors[j] + ")";
	}
}

function colorswap(x, section)
{
	var colors = [
		"0,0,0",
		"200,43,83",
		"102,102,102",
		"107,53,14",
		"252,91,42",
		"144,5,31",
		"86,91,80",
		"49,152,204",
		"197,202,55",
		"215,32,44"
	];
	
	if(section == 1)
	{
		document.getElementById("frontstrap").style.backgroundColor = "rgb(" + colors[x] + ")";
		document.getElementById("smallstrap").style.backgroundColor = "rgb(" + colors[x] + ")";
		document.getElementById("buckletop").style.backgroundColor = "rgb(" + colors[x] + ")";
		document.getElementById("backstrap").style.backgroundColor = "rgba(" + colors[x] + ",.4)";
		highlightbagbtn();
	}
	else
	{
		document.getElementById("bag").style.backgroundColor = "rgb(" + colors[x] + ")";
		highlightbagbtn();
	}
	
}

function highlightbagbtn()
{
	var strap = document.getElementById("backstrap").style.backgroundColor;
	var bag = document.getElementById("bag").style.backgroundColor;
	
	
	if(strap != "" && bag != "")
		document.getElementById('btn-bag').style.borderWidth = "1px";
}
/* Waterproof Functions */
function waterproof()
{
	slidebag(2);
	var black = "<div id='waterproof-choices'><div onclick='waterproofColor(1)' class='large-circleborder'><div class='circleblack'></div></div>";
	var brown = "<div onclick='waterproofColor(2)' class='large-circleborder'><div class='circlebrown'></div></div></div>"
	
	if(document.getElementById('colormessage').innerHTML != black + brown)
	{
		document.getElementById('colormessage').innerHTML = black + brown;
	}
	else
	{
		document.getElementById('colormessage').innerHTML = "";
	}
}

function waterproofColor(choice)
{
	document.getElementById('btn-waterproof').style.borderWidth = "1px";
	if(choice == 1)
		document.getElementById('bottom').style.backgroundColor = "rgb(43,44,61)";
	else
		document.getElementById('bottom').style.backgroundColor = "rgb(87,65,67)";
}

/* Zipper Functions */
function zipper()
{
	slidebag(2);
	var on = '<img class="zipperchoice" onclick="zipperChoice(true);" src="assets/design/zipperbtn.png">';
	var off = '<img class="zipperchoice" onclick="zipperChoice(false);" src="assets/design/zipperbtn-no.png">';
	
	if(document.getElementById('colormessage').innerHTML != on + off)
	{
		document.getElementById('colormessage').innerHTML = on + off;
	}
	else
	{
		document.getElementById('colormessage').innerHTML = "";
	}
}

function zipperChoice(choice)
{
	if(choice == true)
	{
		document.getElementById('btn-zipper').style.borderWidth = "1px";
	}
	else
	{
		document.getElementById('btn-zipper').style.borderWidth = "0px";
	}
}

var monotype;
function monogram()
{
	var temp = prompt("Enter your monogram");
	
	if(temp != null && temp != "")
	{
		document.getElementById('btn-monogram').style.borderWidth = "1px";
		monotype = temp;
	}
}

function complete()
{
	var color = false;
	var waterproof = false;
	var zipper = false;
	var monogram = false;
	
	var strap = document.getElementById("backstrap").style.backgroundColor;
	var bag = document.getElementById("bag").style.backgroundColor;
	
	if(document.getElementById('btn-bag').style.borderWidth == "1px")
		color = true;
	
	if(document.getElementById('btn-waterproof').style.borderWidth == "1px")
		waterproof = true;
	
	if(document.getElementById('btn-zipper').style.borderWidth == "1px")
		zipper = true;
	
	if(document.getElementById('btn-monogram').style.borderWidth == "1px")
		monogram = monotype;
	
	var statement = [
		"Nice Bag",
		"\nBag Color: ",
		bag,
		"\nStrap Color: ",
		strap,
		"\nZipper: ",
		zipper,
		"\nMonogram: ",
		monogram
	].join('');
	
	if(!color)
		alert("Enter A Color!");	
	else if(!waterproof) 
		alert("Choose a waterproof color!");
	else
		alert(statement);
}	

/* Share Functions */
function share(input)
{
	var tags = [
		"#ilovemymerin",
		"#wheresmymerin",
		"#colormymerin",
		"#whatsinmymerin"
	];
	
	document.getElementById('sharetext').innerHTML = tags[input - 1];
}

function socialmedia(input)
{
	var text = [
		"Instagram",
		"Twitter",
		"Facebook",
		"Pinterest"
	];
	
	document.getElementById('temptext').innerHTML = text[input - 1];
}

/* Styles and Interface Functions */
function slidebag(dir){
	if(dir == 1)
	{
		document.getElementById("bagcolor").style.marginLeft = "20";
	}
	else
	{	clearcolor();
		document.getElementById("bagcolor").style.marginLeft = "auto";
	}
}

function clearcolor(){
	document.getElementById('rightsidechoice').style.display = "none";
}

function clear(){
	document.getElementById('colormessage').innerHTML = "";
	document.getElementById('rightsidechoice').style.display = "none";
	document.getElementById('bagselect').style.borderWidth = "0px";
	document.getElementById('strapselect').style.borderWidth = "0px";
}

/* Review Functions */
function review(rank)
{
	for(i = 1; i <= 5; i++)
	{
		var id = "rank" + i;
		document.getElementById(id).style.backgroundColor = "#FFFFFF";
	}
	
	for(i = 1; i <= rank; i++)
	{
		var id = "rank" + i;
		document.getElementById(id).style.backgroundColor = "#E1E100";
	}
}

function sendReview()
{
	document.getElementById('textreview').innerHTML = "";
	document.getElementById('reviewmessage').innerHTML = "Thanks for the feedback!<br><br>";
}

/* Temporary Settings Function */
function settingchanges(){
	alert("Database Inactive!");
}

function logout(){
	alert("You can't log out if you've never logged in!");
}

/* Page Functions */
function topmenu()
{
	var menu = [
		"<div class='container'>",
			"<nav class='navbar navbar-fixed-top' style='position:fixed;'>",
				"<div onclick='pages(0);' class='brand'>",
					"<img alt='Merin Logo' src='assets/topmenu/flowerbtn-green.png'>",
				"</div>",
				"<div class='dropdown pull-right'>",
					"<button class='dropbtn dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>&#9776;</button>",
					"<ul class='dropdown-menu col-xs-12' aria-labelledby='dropdownMenu1'>",
						"<li onclick='pages(3);'>Reviews</li>",
						"<li onclick='pages(4);'>Settings</li>",
						"<li onclick='pages(5);'>Your Merin</li>",
						"<li onclick='logout();' style='color:red;'>Log Out</li>",
					"</ul>",
				"</div>",
			"</nav>",
			"<div class='center-block'>"
	].join('');
	return menu
}

function footer()
{
	var footer = [
		"</div>",
		"<div class='footer navbar-fixed-bottom container-fluid'>",
		"<div class='footnav-section'>",
		"<img onclick='pages(0);' src='assets/footmenu/flowerbtn-white.png'>",
		"</div>",
		"<div class='footnav-section'>",
		"<img onclick='pages(1);' src='assets/footmenu/colorbtn.png'>",
		"</div>",
		"<div class='footnav-section'>",
		"<img onclick='pages(2);' src='assets/footmenu/sharebtn.png'>",
		"</div>",
		"</div>",
		"</div>"
	].join('');
	
	return footer;
}

function pages(pagenum)
{
	content = topmenu();
	/*  Home Page */
	if(pagenum == 0)
	{
		content += [
			"<div class='homepage'>",
				"<img src='assets/home/banner_03.jpg'>",
				"<img src='assets/home/bag_03.jpg'>",
			"</div>"
		].join('');
	}
	/* Bag Coloring Page */
	else if(pagenum == 1)
	{
		content += [
			"<div onclick='colorchoice();' class='designnav-images'>",
				"<img id='btn-bag' src='assets/design/bagbtn.png'>",
			"</div>",
			"<div onclick='waterproof();' class='designnav-images'>",
				"<img id='btn-waterproof' src='assets/design/waterproofbtn.png'>",
			"</div>",
			"<div onclick='zipper();' class='designnav-images'>",
				"<img id='btn-zipper' src='assets/design/zipperbtn.png'>",
			"</div>",
			"<div onclick='monogram();' class='designnav-images'>",
				"<img id='btn-monogram' src='assets/design/monogrambtn.png'>",
			"</div>",
			"<div id='bagcolor'>",
				"<div id='backstrap-border'><div id='backstrap'></div></div>",
				"<div id='innerbag'><img src='assets/design/bagparts/02_static-innerbag.png'></div>",
				"<div id='bag-border'><div id='bag'></div></div>",
				"<div id='logo'><img src='assets/design/bagparts/04_static-logo.png'></div>",
				"<div id='frontstrap-border'><div id='frontstrap'></div></div>",
				"<div id='bagtag'><img src='assets/design/bagparts/06_static-tag.png'></div>",
				"<div id='bottom-border'><div id='bottom'></div></div>",
				"<div id='buckletop-border'><div id='buckletop'></div></div>",
				"<div id='buckle'><img src='assets/design/bagparts/11_static-buckle.png'></div>",
				"<div id='stiches'><img src='assets/design/bagparts/stiches.png'></div>",
				"<div id='smallstrap-border'><div id='smallstrap'></div></div>",
				"<div id='extrastich2'><img src='assets/design/bagparts/08_static-extrastich.png'></div>",
			"</div>",
			"<div id='rightsidechoice' style='display:none;'>",
				"<img id='strapselect' onclick='colorsection(1)' src='assets/design/strap.png'>",
				"<img id='bagselect' onclick='colorsection(2)' src='assets/design/center.png'>",
			"</div>",
			"<div id='colormessage'></div>",
			"<div id='design-complete' onclick='complete();'><img src='assets/arrows/arrow-large.png'></div>"
		].join('');
	}
	/* Share Page */
	else if(pagenum == 2)
	{
		content +=[
			"<div id='sharepage'>",
				//ilovemymerin:
				"<div onclick='share(1);' class='sharenav'>",
					"<img src='assets/social/ilovemymerin.png'>",
				"</div>",
				//wheresmymerin:
				
				"<div onclick='share(2);' class='sharenav'>",
					"<img src='assets/social/wheresmymerin.png'>",
				"</div>",
				//colormymerin:
				"<div onclick='share(3);' class='sharenav'>",
					"<img src='assets/social/colormymerin.png'>",
				"</div>",
				
				//whatmymerin:
				"<div onclick='share(4);' class='sharenav'>",
					"<img src='assets/social/whatsinmymerin.png'>",
				"</div>",
				
				"<div style='clear:both'></div>",
				"<p id='sharetext'><br></p>",
				
				"<div id='picturearea'>",
					"<img src='assets/social/picturescreen.jpg'>",
				"</div>",
				
				"<div id='socialmedia'>",
					"<div onclick='socialmedia(1);' class='sharenav-lower'>",
						"<img src='assets/social/instagrambtn.png'>",
					"</div>",
					
					"<div onclick='socialmedia(2);' class='sharenav-lower'>",
						"<img src='assets/social/twitterbtn.png'>",
					"</div>",
					
					"<div onclick='socialmedia(3);' class='sharenav-lower'>",
						"<img src='assets/social/facebookbtn.png'>",
					"</div>",
					
					"<div onclick='socialmedia(4);' class='sharenav-lower'>",
						"<img src='assets/social/pinterestbtn.png'>",
					"</div>",
					
				"</div>",
				"<div style='clear:both'></div>",
				"<h2 id='temptext'><br></h2>",
			"</div>"
		].join('');
	}
	/* Reviews Page */
	else if(pagenum == 3)
	{
		content += [
			"<div class='reviews'>",
				"<h3 id='reviewmessage'>Tell us how you like your Merin!<br>We are listening!</h3>",
				"<div class='rankposition'>",
					"<div id='rank1-border' onclick='review(1)'><div id='rank1'></div></div>",
					"<div id='rank2-border' onclick='review(2)'><div id='rank2'></div></div>",
					"<div id='rank3-border' onclick='review(3)'><div id='rank3'></div></div>",
					"<div id='rank4-border' onclick='review(4)'><div id='rank4'></div></div>",
					"<div id='rank5-border' onclick='review(5)'><div id='rank5'></div></div>",
				"</div>",
				"<textarea id='textreview' rows='10' cols='40' placeholder='Write here'></textarea><br>",
				"<div onclick='sendReview();'><img src='assets/arrows/arrow-large.png'></div>",
			"</div>"
		].join('');
	}
	/* Settings Page */
	else if(pagenum == 4)
	{
		content += [
			"<div id='settingspage'>",
				"<h2>Settings</h2>",
				"<form>",
					"<div class='settingsection'><img src='assets/social/instagrambtn.png'><input type='text' placeholder='Instagram'></div>",
					
					"<div class='settingsection'><img src='assets/social/twitterbtn.png'><input type='text' placeholder='Twitter'></div>",
					
					"<div class='settingsection'><img src='assets/social/facebookbtn.png'><input type='text' placeholder='Facebook'></div>",
					
					"<div class='settingsection'><img src='assets/social/pinterestbtn.png'><input type='text' placeholder='Pinterest'></div>",
					
					"<div class='settingsection'><input type='text' placeholder='Create New Password' name='password' style='margin-left:25px'></div>",
				"</form>",
			"</div>",
			"<img id='settingssubmit' onclick='settingchanges()' src='assets/arrows/arrow-large.png'>"
		].join('');
	}
	/* Your Merin Page */
	else if(pagenum == 5)
	{
		content += [
			"<div class='yourmerin'>",
				"<h2>MERIN BAGS</h2>",
				"<p>Big waterproof bottom canvas totes in a fresh classic design for the mom or dad on the go.</p>",
				"<hr>",
				"<div class='yourmerin-largeimg'>",
				"<h3>MEDIUM MERIN TOTE</h3>",
				"<img src='assets/yourmerin/medium_merin.png'>",
				"<p class='bold'>Dimensions:</p>",
				"<p>20” tall, 14”long x 8.5” wide.</p>",
				"<p>100% cotton canvas body (soft, flexible canvas)</p>",
				"<p>Very water-resistant fabric bottom (TPU-backed polyester) – keeping your stuff dry for longer.</p>",
				"<p>All interior pockets are made out of the same water-resistant fabric – keeping your dry from wet and wet from dry (4 interior pockets and one exterior pocket).</p>",
				"<p>Cell phone slip and interior key clip – so you can find what you need quickly.</p>",
				"<p>Cell phone slip and interior key clip – so you can find what you need quickly.</p>",
				"<p>Detachable cross-body strap that can double as a sling-pack strap.</p>",
				"<hr>",
			
				"<h3>BIG MERIN TOTE</h3>",
				"<img src='assets/yourmerin/big_merin.png'>",
				"<p class='bold'>Dimensions:</p>",
				"<p>24” long, 21” tall, 8.5” wide.</p>",
				"<p>100% cotton canvas body.</p>",
				"<p>Very water-resistant fabric bottom (TPU-backed polyester) – keeping your stuff dry for longer.</p>",
				"<p>All interior pockets are made out of the same water-resistant fabric – keeping your dry from wet and wet from dry (4 interior pockets and one exterior pocket).</p>",
				"<p>Cell phone slip and interior key clip – so you can find what you need quickly.</p>",
				"<p>Poly blend webbing that holds it’s vibrant color and sits softly on your shoulder.</p>",
				"<p>Detachable cross-body strap that can double as a sling-Pack strap.</p>",
				"<hr>",
				"</div>",
				"<h3>CLEAN MERIN</h3>",
				"<img src='assets/yourmerin/washing_instructions.png'>",
				"<h4>WASH INSTRUCTIONS:</h4>",
				"<p>Please wash your merin with a gentle detergent, by itself in your machine and hang dry!</p>",
				"<p>Your Merin should wear and wash like your favorite pair of jeans, developing a soft patina of love over time, with fading as a natural part of it's life cycle.</p>",
				"<h4>HAPPINESS GUARANTEED</h4>",
				"<p>Your Merin is backed by a happiness guarantee.  If you're not happy, we will do whatever it takes to make you happy.  With this spirit in mind, we invite you to email us directly if you're not 100% satisfied with our product.</p>",
				"<br><br><br><br>",
			"</div>"
		].join('');
	}
	
	content += footer();
	document.body.innerHTML = content;
	
}