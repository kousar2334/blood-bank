<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $siteNameLogo->site_name }}</title>
    <link rel="shortcut icon" type="image/jpg" href="{{ asset('/') }}{{ $siteNameLogo->favicon }}" />
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Styles -->
</head>

<body>
    <div id="app">
        {{-- <main></main> --}}
    </div>
    <script src="/js/main.js"></script>
</body>

</html>
