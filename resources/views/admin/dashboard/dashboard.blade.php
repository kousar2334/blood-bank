@extends('admin.layouts.main')
@section('admin-page-title')
    Admin Dashboard
@stop
@section('admin_content')
    <div class="row dashboard_container">
        <div class="col-12 dashboard_content">
            <div class="widget-box">
                <div class="widget-title">
                    <div class="row m-0">
                        <div class="col-md-6 pl-0 col-sm-12">
                            <h3 class="m-0">Dashboard</h3>
                            <div class="breadcum">
                                <ul class="list-group list-group-horizontal">
                                    <li class="active"><a href="{{ route('admin.dashboard') }}"><i class="fas fa-home"></i>
                                            Dashboard</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                        </div>
                    </div>
                </div>
                <div class="widget-content padding pt-2">

                </div>
            </div>
        </div>

    </div>
    <script>
        $(document).ready(function() {
            $('#example').DataTable({
                "PaginationType": "bootstrap",
            });
        });

    </script>
@stop
