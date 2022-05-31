<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="_token" content="{{ csrf_token() }}">
    <title>
        {{ translate('Admin') }} | @yield('admin-page-title')
    </title>
    <link rel="shortcut icon" type="image/jpg" href="{{ asset('/static/common/img/favicon.png') }}" />
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{ asset('/static/backend/plugins/fontawesome-free/css/all.min.css') }}">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Tempusdominus Bbootstrap 4 -->
    <link rel="stylesheet"
        href="{{ asset('/static/backend/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css') }}">
    <!-- iCheck -->
    <link rel="stylesheet" href="{{ asset('/static/backend/plugins/icheck-bootstrap/icheck-bootstrap.min.css') }}">
    <!-- JQVMap -->

    <!-- Theme style -->
    <link rel="stylesheet" href="{{ asset('/static/backend/dist/css/adminlte.min.css') }}">
    <!--bangla font-->
    <link rel="stylesheet" href="{{ asset('/static/common/bangla_font.css') }}">
    <!--custom btn style-->
    <link rel="stylesheet" href="{{ asset('/static/common/css/btn.css') }}">
    <!-- overlayScrollbars -->
    <link rel="stylesheet"
        href="{{ asset('/static/backend/plugins/overlayScrollbars/css/OverlayScrollbars.min.css') }}">
    <!-- Google Font: Source Sans Pro -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
    <link rel="stylesheet" href="http://cdn.bootcss.com/toastr.js/latest/css/toastr.min.css">
    <!--Tostr-->
    <link rel="stylesheet" type="text/css" href="{{ asset('/static/backend/css/toastr.min.css') }}">
    <!-- jQuery -->
    <script src="{{ asset('/static/backend/plugins/jquery/jquery.min.js') }}"></script>
    <style>
        .main-footer .col-md-6 span {
            display: block;
            margin: 0 0 15px;
        }

        .main-footer .col-md-6 span sub {
            bottom: auto;
            margin-bottom: 6px;
            display: inline-block;
            line-height: 1;
            vertical-align: bottom;
            color: #aaa;
            margin-left: 4px;
        }

        sub,
        sup {
            position: relative;
            font-size: .75em;
            line-height: 0;
            vertical-align: baseline;
        }

        .main-footer .col-md-6 div {
            color: #777;
            font-size: 12px;
            line-height: 1.6;
        }

        .main-footer .col-md-2 ul {
            list-style: none;
            margin: 0;
            padding: 0;
            line-height: 1.7;
        }

        .main-footer .col-md-2 ul li {
            margin: 0;
            padding: 0;
        }

        .main-footer .col-md-2 ul li a {
            text-decoration: none;
            color: #888;
            font-size: 13px;
        }

        label {
            font-weight: normal !important;
        }

        body {
            font-family: "SolaimanLipiNormal";
        }

    </style>
    @yield('custom_css')

</head>

<body class="layout-fixed layout-navbar-fixed">
    <div class="wrapper">

        <!-- Navbar -->
        @include('admin.layouts.header')
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        @include('admin.layouts.navbar')
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            @yield('admin_content')
        </div>
        <!-- /.content-wrapper -->
        @include('admin.layouts.footer')

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->
    </div>
    <!-- ./wrapper -->
    <!-- jQuery UI 1.11.4 -->
    <script src="{{ asset('/static/backend/plugins/jquery-ui/jquery-ui.min.js') }}"></script>
    <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
    <script>
        $.widget.bridge('uibutton', $.ui.button)
    </script>
    <!-- Bootstrap 4 -->
    <script src="{{ asset('/static/backend/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>

    <!-- Sparkline -->
    <script src="{{ asset('/static/backend/plugins/sparklines/sparkline.js') }}"></script>

    <!-- Tempusdominus Bootstrap 4 -->
    <script src="{{ asset('/static/backend/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js') }}">
    </script>

    <!-- overlayScrollbars -->
    <script src="{{ asset('/static/backend/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js') }}"></script>
    <!-- AdminLTE App -->
    <script src="{{ asset('/static/backend/dist/js/adminlte.js') }}"></script>

    <!--Toaster-->
    <script src="{{ asset('/static/backend/js/toastr.min.js') }}"></script>
    {!! Toastr::message() !!}
    <script>
        @if (count($errors) > 0)
            @foreach ($errors->all() as $error)
                toastr.error("{{ $error }}");
            @endforeach
        @endif
    </script>
    <!--End toaster-->
    @yield('custom_script')
</body class="hold-transition sidebar-mini layout-navbar-fixed">

</html>
