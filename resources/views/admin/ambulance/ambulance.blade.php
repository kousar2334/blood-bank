@extends('admin.layouts.main')
@section('admin-page-title')
    Admin | Ambulance List
@stop
@section('custom_css')
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
                            <h3 class="card-title">Ambulances</h3>
                            <a href="{{ route('admin.ambulance.category.add') }}"
                                class="btn btn-success btn-sm float-right text-white">New Category</a>
                            <a href="{{ route('admin.ambulance.add') }}"
                                class="btn btn-danger btn-sm float-right text-white mr-2">New Ambulance</a>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="ambulance_table" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Bangla Name</th>
                                        <th>Phone</th>
                                        <th>Mobile 1</th>
                                        <th>Mobile 2</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                        <th class="text-right">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @php
                                        $counter = 0;
                                    @endphp
                                    @foreach ($all as $ambulance)
                                        @php
                                            $counter++;
                                        @endphp
                                        <tr>
                                            <td>{{ $counter }}</td>
                                            <td>{{ $ambulance->name }}
                                            </td>
                                            <td>{{ $ambulance->bn_name }}</td>
                                            <td>{{ $ambulance->phone }}</td>
                                            <td>{{ $ambulance->mobile_1 }}</td>
                                            <td>{{ $ambulance->mobile_2 }}</td>
                                            <td>{{ $ambulance->description }}</td>
                                            <td>
                                                @if ($ambulance->status == 1)
                                                    <p class="badge badge-success">Actice</p>
                                                @else
                                                    <p class="badge badge-danger">Inactive</p>
                                                @endif
                                            </td>
                                            <td class="text-center text-white">
                                                <a href="{{ route('admin.ambulance.edit', $ambulance->id) }}"
                                                    class="btn btn-sm btn-circle primary-soft"><i
                                                        class="fas fa-edit"></i></a>
                                            </td>
                                            <td class="text-right">
                                                <form method="post" action="{{ route('admin.ambulance.delete') }}"
                                                    style="float:right;">
                                                    @csrf
                                                    <input type="hidden" name="id" value="{{ $ambulance->id }}">
                                                    <button class="btn btn-sm ml-1 btn-circle danger-soft"><i
                                                            class="fas fa-trash-alt"></i></button>
                                                </form>
                                            </td>
                                        </tr>
                                    @endforeach
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
    <!--data table-->
    <script src="{{ asset('/static/backend/plugins/datatables/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('/static/backend/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('/static/backend/plugins/datatables-responsive/js/dataTables.responsive.min.js') }}"></script>
    <script src="{{ asset('/static/backend/plugins/datatables-responsive/js/responsive.bootstrap4.min.js') }}"></script>
    <script>
        $(function() {
            $("#ambulance_table").DataTable({
                "paging": true,
                "lengthChange": true,
                "searching": true,
                "ordering": true,
                "info": true,
                "autoWidth": false,
                "responsive": true,
            });

        });
    </script>
@stop
