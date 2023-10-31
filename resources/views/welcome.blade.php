<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ceri | Dashboard</title>
    <link rel="icon" type="image/svg+xml" href="./images/favicon.png" />
    <head>
        <meta charset="utf-8">
        <title><%= pageTitle %></title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <meta content="" name="keywords">
        <meta content="" name="description">

        <!-- Google Web Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Saira:wght@500;600;700&display=swap" rel="stylesheet"> 

        <!-- Icon Font Stylesheet -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

        <!-- Libraries Stylesheet -->
        <link href="path/lib/animate/animate.min.css" rel="stylesheet">
        <link href="path/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">

        <!-- Customized Bootstrap Stylesheet -->
        <link href="path/css/bootstrap.min.css" rel="stylesheet">

        <!-- Template Stylesheet -->
        <link href="path/css/style.css" rel="stylesheet">
    </head>
     @viteReactRefresh
    @vite('resources/js/app.js')
</head>
<body>
    <div id="root" class="mainOuter"></div>
        <!-- Back to Top -->
        <a href="#" class="btn btn-secondary btn-square rounded-circle back-to-top"><i class="fa fa-arrow-up text-white"></i></a>

        
        <!-- JavaScript Libraries -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="path/lib/wow/wow.min.js"></script>
        <script src="path/lib/easing/easing.min.js"></script>
        <script src="path/lib/waypoints/waypoints.min.js"></script>
        <script src="path/lib/owlcarousel/owl.carousel.min.js"></script>

        <!-- Template Javascript -->
        <script src="path/js/main.js"></script>
    <script>
        var Config = {
            user: <?php echo Auth::user() ? Auth::user() : 'null'; ?>
        };
    </script>
</body>
</html>
