<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta content='width=device-width, initial-scale=1, maximum-scale=1.0; user-scalable=0;' name='viewport' />
        <title>Website Builder and e-Learning - Bookmark</title>
        <meta name="description" content="Make your mark online with Bookmark's powerful yet simple website builder and e-learning platform." />
        <meta name="alexaVerifyID" content="zVKcyV6L57gHScytcDwTkz6Hdgg"/>
        <meta name="keywords" content="website builder, bookmark, e-learning, elearning, free website" />
        <link href="//bookmark.com/assets/ico/favicon.ico" rel="shortcut icon" type="image/x-icon" >
        <link media="all" type="text/css" rel="stylesheet" href="http://bookmark.com/assets/css/bootstrap.css">

        <link media="all" type="text/css" rel="stylesheet" href="http://bookmark.com/assets/css/style.css">

		<script src="http://bookmark.com/assets/js/init.js"></script>

		<script src="http://bookmark.com/assets/js/jquery.js"></script>

		<script src="http://bookmark.com/assets/js/site/coming_soon/index.js"></script>

        <!--     Fonts     -->
        <link href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.css" rel="stylesheet">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700' rel='stylesheet' type='text/css'>
    </head>
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-44682452-1', 'auto');
        ga('send', 'pageview');
    </script>
    <body>

        <div class="container logo-top">
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="https://www.facebook.com/bookmark.com"  target="_blank">
                        <i class="fa fa-facebook-square"></i>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/bookmark"  target="_blank">
                        <i class="fa fa-twitter"></i>
                    </a>
                </li>
            </ul>
            <div class="logo-bookmark"></div>
            <h5 class="motto slogan">Build a Free website and make your mark</h5>
        </div>
        <div class="main background">
            <div class="cover black" data-color="black"></div>
            <div class="container">
                <h1 class="logo cursive">
                    SOMETHING<br/><span>AWESOME</span><br/>IS IN THE WORKS
                </h1>
                <div class="content tekst">
                    <h5 class="motto"><br/>Bookmark is a powerful yet simple cloud-based website development and e-learning platform.</h5>
                    <div class="subscribe">
                        <div class="row">
                            <div class="form-wrap">
                                <div id="msg"></div>
                                <form class="form-inline" id="sform" role="form">
                                    <div class="form-group">
                                        <label class="sr-only" for="email" >Email address</label>
                                        <input type="email" id="email" name="email" class="form-control transparent" placeholder="Your email here...">
                                    </div>
                                    <button type="button" id="submit" class="btn btn-primary btn-fill">Submit</button>
                                </form>
                            </div>
                            <h5 class="info-text" style="text-weight:100">
                                Enter your e-mail address to be the first to preview Bookmark when we launch.<br/>
                                Survey - After 24 hours we will email you a short 10 question survey,<br/>
                                If you choose to complete it we will give you 6 months Free Bookmark Pro as a thank you.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="water-banner"><a href="http://bookmark.com/charity-water/" target="_blank"></a></div>
            <div class="footer">
                <div class="container">
                    <span>© 2014 - Bookmark Your Life Inc.</span>
                </div>
            </div>
        </div>
    </body>
    <script src="http://bookmark.com/assets/js/bootstrap.min.js"></script>

</html>