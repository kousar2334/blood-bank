@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('Blood Donors') }}
@stop
@section('custom_css')
    {{-- <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="//cdn.datatables.net/1.10.7/css/jquery.dataTables.min.css"> --}}
    <!-- DataTables -->
    <link rel="stylesheet" href="{{ asset('/static/backend/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css') }}">
    <link rel="stylesheet"
        href="{{ asset('/static/backend/plugins/datatables-responsive/css/responsive.bootstrap4.min.css') }}">
@stop
@section('admin_content')
    <!-- Main content -->
    <section class="content">
        <!--Start Container fluid-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">{{ translate('Blood Donors') }}</h3>
                            <a href="{{ route('admin.blood.donar.add') }}"
                                class="btn btn-danger btn-sm float-right text-white">{{ translate('Add New Blood Donor') }}</a>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="donor_list" class="table table-bordered table-striped dataTable">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>{{ translate('Image') }}</th>
                                        <th>{{ translate('Name') }}</th>
                                        <th>{{ translate('Blood Group') }}</th>
                                        <th>{{ translate('Email') }}</th>
                                        <th>{{ translate('Mobile') }}</th>
                                        <th>{{ translate('Alternative Mobile') }}</th>
                                        <th>{{ translate('Address') }}</th>
                                        <th>{{ translate('Status') }}</th>
                                        <th class="text-center">{{ translate('Action') }}</th>
                                        <th class="text-right">{{ translate('Remove') }}</th>
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

@stop
@section('custom_script')
    <script src="{{ asset('/static/backend/plugins/datatables/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('/static/backend/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('/static/backend/plugins/datatables-responsive/js/dataTables.responsive.min.js') }}"></script>
    <script src="{{ asset('/static/backend/plugins/datatables-responsive/js/responsive.bootstrap4.min.js') }}"></script>
    <script>
        $(document).ready(function() {
            $(".del-close").click(function() {
                $(".del-modal").hide('fadeIn');

            });
            //data tab
            $(function() {
                $('#donor_list').DataTable({
                    processing: true,
                    serverSide: true,
                    ajax: '{!! route('admin.blood.donar.list.data.table') !!}',
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
                            name: 'name'
                        },
                        {
                            data: 'group',
                            name: 'Blood Group',
                            searchable: true
                        },
                        {
                            data: 'email',
                            name: 'email'
                        },
                        {
                            data: 'mobile',
                            name: 'mobile'
                        },
                        {
                            data: 'mobile2',
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
                            searchable: false
                        },
                        {
                            data: 'remove',
                            name: 'remove',
                            orderable: false,
                            searchable: false
                        }
                    ],
                    order: [0, 'desc']
                });
            });
        });
        //Delete record modal open
        function displayDeleteModal(id) {
            console.log(id);
            $(".del-modal").hide('fadeIn');
            $(".modal" + id).show('fadeOut');
        }

        function hideDeleteAlert() {
            $(".del-modal").hide('fadeIn');
        };
    </script>
@stop
