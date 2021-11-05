@extends('admin.layouts.main')
@section('admin-page-title')
    Hospitals & Clinics List
@stop
@section('custom_css')
    <link rel="stylesheet" href="{{ asset('/backend/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css') }}">
    <link rel="stylesheet" href="{{ asset('/backend/plugins/datatables-responsive/css/responsive.bootstrap4.min.css') }}">
    <style>
        .img-hospital {
            float: left;
            height: 150px;
            width: 250px;
        }

        .custom_td {
            padding-left: 1px;
            padding-right: 1px;
        }

    </style>
@stop
@section('admin_content')
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h4 class="m-0 text-dark">Hospitals & Clinics List</h4>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}"><i class="fas fa-home"></i>
                                Dashboard</a></li>
                        <li class="breadcrumb-item"><a href="{{ route('admin.blood.donar.list') }}">Hospitals &
                                Clinics</a></li>
                        <li class="breadcrumb-item active">Hospitals & Clinics List</li>
                    </ol>
                </div>
            </div>
        </div><!-- /.container-fluid -->
    </section>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
        <!--Start Container fluid-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            {{-- <h3 class="card-title">Hospitals & Clinics</h3> --}}
                            <a href="{{ route('admin.hospital.add') }}"
                                class="btn btn-info btn-sm float-right text-white">Add New Hospital</a>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="hospital_list" class="table table-bordered table-striped dataTable">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Mobile 2</th>
                                        <th>Address</th>
                                        <th>Status</th>
                                        <th class="text-center">Action</th>
                                        <th class="text-right">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
    <!--Modal-->
    <div class="modal fade show" id="details-modal" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Hospital Details</h4>
                    <button type="button" class="close" onclick="closeModal()" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="card card-widget widget-user-2">
                        <!-- Add the bg color to the header using any of the bg-* classes -->
                        <div class="widget-user-header bg-info">
                            <div>
                                <img class="img-hospital mr-2" src="#">
                            </div>
                            <!-- /.widget-user-image -->
                            <h3 class="widget-user-username name">Nadia Carmichael</h3>
                            <h5 class="widget-user-desc type">Lead Developer</h5>
                        </div>
                        <div class="card-footer p-0">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Email <span class="float-right email">01773340092</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Phone <span class="float-right phone">01773340092</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Mobile <span class="float-right mobile">01773340092, 014465592</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Address <span class="float-right address">address</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Description <span class="float-right description">Description</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>

@stop
@section('custom_script')
    <script src="{{ asset('/backend/plugins/datatables/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('/backend/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('/backend/plugins/datatables-responsive/js/dataTables.responsive.min.js') }}"></script>
    <script src="{{ asset('/backend/plugins/datatables-responsive/js/responsive.bootstrap4.min.js') }}"></script>
    <script>
        $(document).ready(function() {
            //data table
            $(function() {
                $('#hospital_list').DataTable({
                    processing: true,
                    serverSide: true,
                    ajax: '{!! route('admin.hospital.list.data.table') !!}',
                    columns: [{
                            data: 'id',
                            name: 'id'
                        },
                        {
                            data: 'image',
                            name: 'image',
                            orderable: false,
                            searchable: false
                        },
                        {
                            data: 'name',
                            name: 'name',
                            searchable: true
                        },
                        {
                            data: 'category',
                            name: 'Category',
                            searchable: true
                        },
                        {
                            data: 'email',
                            name: 'email',
                            searchable: true
                        },
                        {
                            data: 'mobile_1',
                            name: 'mobile'
                        },
                        {
                            data: 'mobile_2',
                            name: 'mobile 2'
                        },
                        {
                            data: 'address',
                            name: 'address'
                        },
                        {
                            data: 'status',
                            name: 'status'
                        },
                        {
                            data: 'action',
                            name: 'action',
                            orderable: false,
                            searchable: false,
                            class: 'custom_td'
                        },
                        {
                            data: 'remove',
                            name: 'remove',
                            orderable: false,
                            searchable: false,
                            class: 'custom_td'
                        }
                    ],
                    order: [0, 'desc']
                });
            });
        });
        //hospital details
        function viewDetails(id) {
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')
                }
            });
            $.ajax({
                type: 'POST',
                url: '{!! route('admin.hospital.details') !!}',
                data: {
                    'id': id
                },
                success: function(data) {
                    if (data.success) {
                        $('.name').html(data.hospital.name);
                        $('.type').html(data.hospital.category.name);
                        $('.email').html(data.hospital.email);
                        $('.phone').html(data.hospital.phone);
                        $('.mobile').html(data.hospital.mobile_1);
                        $('.address').html(data.hospital.address);
                        $('.description').html(data.hospital.description);
                        if (data.hospital.image) {
                            var source = "{{ asset('/') }}" + data.hospital.image;
                            $('.img-hospital').attr('src', source);
                        }

                    }
                    $("#details-modal").show('fadeOut');
                }

            });
        }

        function closeModal() {
            $("#details-modal").hide('fadeIn');
        }
    </script>
@stop
