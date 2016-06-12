<html>
<head>
    <title>

    </title>
    <link href="css/ukedager.css" type="text/css" rel="stylesheet" />
    <link href="css/hamburger.css" type="text/css" rel="stylesheet" />
    <link href="css/oppskrift.css" type="text/css" rel="stylesheet" />
    <link href="css/general.css" type="text/css" rel="stylesheet" />
    <script src="js/jquery-2.2.3.min.js"></script>
    <script src="js/hamburger.js"></script>
    <script src="js/btnClick.js"></script>
    <script src="js/swipeHandler.js"></script>
    <script src="js/liHandler.js"></script>
    <script src="js/classDepartment/main.js"></script>

    <link href='https://fonts.googleapis.com/css?family=Archivo+Narrow' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Merriweather' rel='stylesheet' type='text/css'>
</head>
<body>
    
    <button class="c-hamburger c-hamburger--htx">
        <span>toggle menu</span>
    </button>

    <div id="swipeBox" ontouchstart="touchStart(event,'swipeBox');" ontouchend="touchEnd(event);" ontouchmove="touchMove(event);" ontouchcancel="touchCancel(event);">
        <div id="currentDay">
            
        </div>
        <div id="currentDayEX">
            <p id="dayName">MAN</p>
        </div>
    </div>
    <section>
        <div id="foodTitle">
            <p id="foodTitleText">NAME</p>
        </div>
        <div id="foodDesc">
            <p id="foodDescText">DESCRIPTION</p>
        </div>
        <div id="ingredienserKnapp" class="knapp" onclick="expand('ingredienserKnapp');">
            
            <p>INGREDIENSER</p>
            <ul id="ingredienserKnappList" class="list">
            </ul>
        </div>
        <div id="fremgangsKnapp" class="knapp" onclick="expand('fremgangsKnapp');">
            
            <p>FREMGANGSM&Aring;TE</p>
            <ol id="fremgangsKnappList" class="list">
            </ol>
        </div>

    </section>

    <textarea id="filInput" style="width:0px; opacity:0;"><?php include('ingredienser.txt'); ?></textarea>
</body>
</html>
