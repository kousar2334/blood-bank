@extends('admin.layouts.main')
@section('admin-page-title')
    Doctors
@stop
@section('custom_css')
    {{-- <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="//cdn.datatables.net/1.10.7/css/jquery.dataTables.min.css"> --}}
    <!-- DataTables -->
    <link rel="stylesheet" href="{{ asset('/static/backend/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css') }}">
    <link rel="stylesheet"
        href="{{ asset('/static/backend/plugins/datatables-responsive/css/responsive.bootstrap4.min.css') }}">
    <style>
        .action {
            text-align: center;
            cursor: pointer;
        }

        p {
            margin-bottom: 2px;
        }

        #name {
            color: cornflowerblue
        }

        #specialist {
            font-weight: 700;
            color: red
        }

        #position {
            font-weight: 600;
            color: cornflowerblue;
        }

        #working_place,
        #qualification,
        #mobile {
            font-size: 14px;
        }

        .chamber-list {
            /* border: 1px solid;
                                            border-style: dotted; */
            padding: 15px;
        }

    </style>
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
                            <h3 class="card-title">Doctors</h3>
                            <a href="{{ route('admin.doctor.add') }}"
                                class="btn btn-success btn-sm float-right text-white">Add New Doctor</a>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="doctor_list" class="table table-bordered table-striped dataTable">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Dept.</th>
                                        <th>Position</th>
                                        <th>Specialist</th>
                                        <th>Institution</th>
                                        <th>Mobile</th>
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
    <div class="modal fade show" id="details-modal" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    {{-- <h4 class="modal-title">Doctor Details</h4> --}}
                    <button type="button" class="close" onclick="closeModal()" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="card card-widget widget-user-2">
                        <div class="row">

                            <div class="col-12 text-center p-3">
                                <img class="img-circle doctor-image" src="{{ asset('/static/images/no-image.png') }}"
                                    width="100px">
                                <h3 id="name"></h3>
                                <p id="qualification"></p>
                                <p id="specialist"></p>
                                <p id="position"></p>
                                <p id="working_place"></p>
                                <p id="mobile"></p>
                            </div>
                        </div>
                        <div class="row chambers px-5 pt-0 text-center mb-3">
                            <p>Chambers</p>
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
    <script src="{{ asset('/static/backend/plugins/datatables/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('/static/backend/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('/static/backend/plugins/datatables-responsive/js/dataTables.responsive.min.js') }}"></script>
    <script src="{{ asset('/static/backend/plugins/datatables-responsive/js/responsive.bootstrap4.min.js') }}"></script>
    <script>
        $(document).ready(function() {
            //data tab
            $(function() {
                $('#doctor_list').DataTable({
                    processing: true,
                    serverSide: true,
                    ajax: '{!! route('admin.doctor.list.data.table') !!}',
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
                            data: 'department',
                            searchable: true
                        },
                        {
                            data: 'position',
                            name: 'positions'
                        },
                        {
                            data: 'specialist',
                            name: 'specialist'
                        },
                        {
                            data: 'working_place',
                            name: 'working_place'
                        },
                        {
                            data: 'mobile',
                            name: 'mobile'
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
                            class: 'action'
                        },
                        {
                            data: 'remove',
                            name: 'remove',
                            class: 'action'
                        }
                    ],
                    order: [0, 'desc']
                });
            });
        });
        //Get  doctor details
        function viewDetails(id) {
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')
                }
            });
            $.ajax({
                type: 'POST',
                url: '{!! route('admin.doctor.details') !!}',
                data: {
                    'id': id
                },
                success: function(data) {
                    if (data.success) {
                        $('#name').html(data.doc_info.name);
                        $('#qualification').html(data.doc_info.qualification);
                        $('#specialist').html(data.doc_info.specialist);
                        $('#position').html(data.doc_info.position);
                        $('#working_place').html(data.doc_info.working_place);
                        $('#mobile').html(data.doc_info.mobile);
                        $('.chambers').html("");

                        if (data.doc_info.image) {
                            var source = "{{ asset('/') }}" + data.doc_info.image;
                            $('.doctor-image').attr('src', source);
                        } else {
                            var source = "{{ asset('/static/images/no-image.png') }}";
                            $('.doctor-image').attr('src', source);
                        }
                        if (data.doc_info.chambers) {
                            for (let i = 0; i < data.doc_info.chambers.length; i++) {
                                $(".chambers").append("<div class='col-6 chamber-list'><p>" + data.doc_info
                                    .chambers[i]
                                    .chamber + "</p></div>");
                            }
                        }
                        $("#details-modal").show('fadeOut');

                    } else {
                        alert('No Details Found');
                    }
                }

            });
        }
        //Close details modal
        function closeModal() {
            $("#details-modal").hide('fadeIn');
        }
    </script>
@stop
