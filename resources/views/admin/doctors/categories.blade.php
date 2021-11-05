@extends('admin.layouts.main')
@section('admin-page-title')
    Admin | Docotr's Departments
@stop
@section('custom_css')
    <!-- DataTables -->
    <link rel="stylesheet" href="{{ asset('/backend/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css') }}">
    <link rel="stylesheet" href="{{ asset('/backend/plugins/datatables-responsive/css/responsive.bootstrap4.min.css') }}">
@stop
@section('admin_content')
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h4 class="m-0 text-dark">Doctor's Departments</h4>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}"><i class="fas fa-home"></i>
                                Dashboard</a></li>
                        <li class="breadcrumb-item"><a href="{{ route('admin.blood.donar.list') }}">Doctors</a>
                        </li>
                        <li class="breadcrumb-item active">Doctor's Departments</li>
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
                            {{-- <h3 class="card-title">Doctor's Categories</h3> --}}
                            <a href="{{ route('admin.doctor.category.add') }}"
                                class="btn btn-info btn-sm float-right text-white">Add New Departments</a>
                            <a href="{{ route('admin.doctor.list') }}"
                                class="btn btn-danger btn-sm float-right text-white mr-2">All Doctors</a>
                            <a href="{{ route('admin.doctor.add') }}"
                                class="mr-2 btn btn-success btn-sm float-right text-white">Add New Doctor</a>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="doctor_department_table" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Bangla Name</th>
                                        <th>Icon</th>
                                        <th>Image</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th class="text-center">Action</th>
                                        <th class="text-right">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @php
                                        $counter = 0;
                                    @endphp
                                    @foreach ($doctor_categories as $cat)
                                        @php
                                            $counter++;
                                        @endphp
                                        <tr>
                                            <td>{{ $counter }}</td>
                                            <td class="bangla-font">{{ $cat->name }}</td>
                                            <td class="bangla-font">{{ $cat->bn_name }}</td>
                                            <td>
                                                @if ($cat->icon)
                                                    <img src="{{ asset('/') }}{{ $cat->icon }}" border="0"
                                                        class="img-circle elevation-1" width="50" height="50" />
                                                @else
                                                    <img src="{{ asset('/') }}images/no-image.png" border="0"
                                                        class="img-circle elevation-1" width="50" height="50" />
                                                @endif
                                            </td>
                                            <td>
                                                @if ($cat->image)
                                                    <img src="{{ asset('/') }}{{ $cat->image }}" border="0"
                                                        class="img-circle elevation-1" width="50" height="50" />
                                                @else
                                                    <img src="{{ asset('/') }}images/no-image.png" border="0"
                                                        class="img-circle elevation-1" width="50" height="50" />
                                                @endif
                                            </td>
                                            <td>{{ $cat->description }}</td>
                                            <td>
                                                @if ($cat->status == 1)
                                                    <p class="badge badge-success">Actice</p>
                                                @else
                                                    <p class="badge badge-danger">Inactive</p>
                                                @endif
                                            </td>
                                            <td class="text-center text-white">
                                                <a href="{{ route('admin.doctor.category.edit', $cat->id) }}"
                                                    class="btn btn-sm btn-info"><i class="fas fa-edit"></i></a>

                                            </td>
                                            <td class="text-right">
                                                <form method="post" action="{{ route('admin.doctor.category.delete') }}"
                                                    style="float:right;">
                                                    @csrf
                                                    <input type="hidden" name="id" value="{{ $cat->id }}">
                                                    <button class="btn btn-sm ml-1"><i
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
    <script src="{{ asset('/backend/plugins/datatables/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('/backend/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('/backend/plugins/datatables-responsive/js/dataTables.responsive.min.js') }}"></script>
    <script src="{{ asset('/backend/plugins/datatables-responsive/js/responsive.bootstrap4.min.js') }}"></script>
    <script>
        $(function() {
            $("#doctor_department_table").DataTable({
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
