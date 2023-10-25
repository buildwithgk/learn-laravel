<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ceri | Dashboard</title>
    <link rel="icon" type="image/svg+xml" href="./images/favicon.png" />
     @viteReactRefresh
    @vite('resources/js/app.js')
</head>
<body>
    <div id="root" class="mainOuter"></div>
</body>
<script>
     var Config={
            user:<?php echo Auth::user() ? Auth::user() : 'null' ?>,
        }
</script>
</html>
