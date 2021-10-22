<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="_token" content="{{ csrf_token() }}">
    <title>
        @yield('admin-page-title')
    </title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{ asset('/backend/plugins/fontawesome-free/css/all.min.css') }}">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Tempusdominus Bbootstrap 4 -->
    <link rel="stylesheet"
        href="{{ asset('/backend/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css') }}">
    <!-- iCheck -->
    <link rel="stylesheet" href="{{ asset('/backend/plugins/icheck-bootstrap/icheck-bootstrap.min.css') }}">
    <!-- JQVMap -->

    <!-- Theme style -->
    <link rel="stylesheet" href="{{ asset('/backend/dist/css/adminlte.min.css') }}">
    <!--bangla font-->
    <link rel="stylesheet" href="{{ asset('/common/bangla_font.css') }}">
    <!-- overlayScrollbars -->
    <link rel="stylesheet" href="{{ asset('/backend/plugins/overlayScrollbars/css/OverlayScrollbars.min.css') }}">
    <!-- Google Font: Source Sans Pro -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
    <link rel="stylesheet" href="http://cdn.bootcss.com/toastr.js/latest/css/toastr.min.css">
    <!--Tostr-->
    <link rel="stylesheet" type="text/css" href="{{ asset('/backend/css/toastr.min.css') }}">
    <!-- jQuery -->
    <script src="{{ asset('/backend/plugins/jquery/jquery.min.js') }}"></script>
    @yield('custom_css')
    <style>
        .content-header .breadcrumb {
            line-height: 1.5rem;
        }

        a {
            color: black;
        }

        [class*=sidebar-dark] .nav-legacy.nav-sidebar>.nav-item .nav-treeview,
        [class*=sidebar-dark] .nav-legacy.nav-sidebar>.nav-item>.nav-treeview {
            background: #000408;
        }

        .del-modal {
            position: absolute;
            background-color: white;
            box-shadow: 0 0 6px 1px grey;
            z-index: 999;
            right: 99px;
            margin-top: -115px;
            display: none;
            padding: 20px;
            border-radius: 5px;
            color: black;
        }

        .del-modal::after {
            content: ' ';
            width: 0px;
            height: 0px;
            border-top: 10px solid transparent;
            border-left: 10px solid white;
            border-bottom: 10px solid transparent;
            border-right: 10px solid transparent;
            position: absolute;
            top: 60%;
            left: 100%;
            margin-left: 0px;
        }

        .delete-model-cansel-btn {
            background-color: #808080a6;
            border-color: #808080a6;
        }

        .nav-icon {
            color: #d81b60
        }

    </style>
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
    <script src="{{ asset('/backend/plugins/jquery-ui/jquery-ui.min.js') }}"></script>
    <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
    <script>
        $.widget.bridge('uibutton', $.ui.button)
    </script>
    <!-- Bootstrap 4 -->
    <script src="{{ asset('/backend/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <!-- ChartJS -->
    <script src="{{ asset('/backend/plugins/chart.js/Chart.min.js') }}"></script>
    <!-- Sparkline -->
    <script src="{{ asset('/backend/plugins/sparklines/sparkline.js') }}"></script>
    <!-- JQVMap -->
    {{-- <script src="{{ asset('/backend/plugins/jqvmap/jquery.vmap.min.js') }}"></script>
    <script src="{{ asset('/backend/plugins/jqvmap/maps/jquery.vmap.usa.js') }}"></script> --}}
    <!-- jQuery Knob Chart -->
    <script src="{{ asset('/backend/plugins/jquery-knob/jquery.knob.min.js') }}"></script>
    <!-- daterangepicker -->
    <script src="{{ asset('/backend/plugins/moment/moment.min.js') }}"></script>
    <script src="{{ asset('/backend/plugins/daterangepicker/daterangepicker.js') }}"></script>
    <!-- Tempusdominus Bootstrap 4 -->
    <script src="{{ asset('/backend/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js') }}">
    </script>
    <!-- Summernote -->
    {{-- <script src="{{ asset('/backend/plugins/summernote/summernote-bs4.min.js') }}"></script> --}}
    <!-- overlayScrollbars -->
    <script src="{{ asset('/backend/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js') }}">
    </script>
    <!-- AdminLTE App -->
    <script src="{{ asset('/backend/dist/js/adminlte.js') }}"></script>
    <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
    {{-- <script src="{{ asset('/backend/dist/js/pages/dashboard.js') }}"></script> --}}
    <!-- AdminLTE for demo purposes -->
    <script src="{{ asset('/backend/dist/js/demo.js') }}"></script>
    <!--Toaster-->
    <script src="{{ asset('/backend/js/toastr.min.js') }}"></script>
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
