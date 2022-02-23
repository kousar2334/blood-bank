<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <!-- meta -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="shortcut icon" type="image/jpg" href="{{ asset('/') }}{{ $siteNameLogo->favicon }}" />
    <meta name="robots" content="index, follow">
    <title>{!! $meta['meta_title'] !!}</title>
    <meta name="description" content="{!! $meta['meta_description'] !!}" />
    <meta name="keywords" content="{{ $meta['meta_keywords'] }}">

    <!-- Twitter Card data -->
    <meta name="twitter:card" content="product">
    <meta name="twitter:site" content="@publisher_handle">
    <meta name="twitter:title" content="{!! $meta['meta_title'] !!}">
    <meta name="twitter:description" content="{!! $meta['meta_description'] !!}">
    <meta name="twitter:creator" content="@author_handle">
    <meta name="twitter:image" content="{{ asset('/') }}{{ $meta['meta_image'] }}">

    <!-- Open Graph data -->
    <meta property="og:title" content="{!! $meta['meta_title'] !!}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{ url()->full() }}" />
    <meta property="og:image" content="{{ asset('/') }}{{ $meta['meta_image'] }}" />
    <meta property="og:description" content="{!! $meta['meta_description'] !!}" />
    <meta property="og:site_name" content="{{ $siteNameLogo->site_name }}" />
    <meta property="fb:app_id" content="{{ env('FACEBOOK_PIXEL_ID') }}">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        @media (min-width: 1200px) {
            .container {
                max-width: 1140px !important;
            }
        }

        :root {
            --primaryColor: blue;
        }

    </style>
</head>

<body>
    <div id="app">
        {{-- <main></main> --}}
    </div>
    @if ($theme === 'default')
        <script src="{{ mix('/js/template/default/main.js') }}" defer></script>
    @endif
    @if ($theme === 'templateOne')
        <script src="{{ mix('/js/template/templateOne/main.js') }}" defer></script>
    @endif
</body>

</html>
