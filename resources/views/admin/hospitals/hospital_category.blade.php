@extends('admin.layouts.main')
@section('admin-page-title')
    Admin | Hospital Categories
@stop
@section('custom_css')
    <!-- DataTables -->
    <link rel="stylesheet" href="{{ asset('/backend/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css') }}">
    <link rel="stylesheet"
        href="{{ asset('/backend/plugins/datatables-responsive/css/responsive.bootstrap4.min.css') }}">
@stop
@section('admin_content')
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h4 class="m-0 text-dark">Hospital Categories</h4>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}"><i class="fas fa-home"></i>
                                Dashboard</a></li>
                        <li class="breadcrumb-item"><a href="{{ route('admin.blood.donar.list') }}">Hospital & Clinic</a>
                        </li>
                        <li class="breadcrumb-item active">Hospitals Categories</li>
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
                            <h3 class="card-title">Blood Groups List</h3>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="example1" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Bangla Name</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @php
                                        $counter = 0;
                                    @endphp
                                    @foreach ($hospital_cats as $hospital_cat)
                                        @php
                                            $counter++;
                                        @endphp
                                        <tr>
                                            <td>{{ $counter }}</td>
                                            <td>{{ $hospital_cat->name }}
                                            </td>
                                            <td>{{ $hospital_cat->bn_name }}</td>
                                            <td>{{ $hospital_cat->description }}</td>
                                            <td>
                                                @if($hospital_cat->status==1)
                                                <p class="badge badge-success">Actice</p>
                                                @else
                                                <p class="badge badge-danger">Inactive</p>
                                                @endif
                                            </td>
                                            <td class="text-right text-white">
                                                <a href="{{ route('admin.hospital.category.edit', $hospital_cat->id) }}"
                                                    class="btn btn-sm btn-info"><i class="fas fa-edit"></i></a>
                                                <div
                                                    class="del-modal <?php echo 'modal' . $counter; ?>">
                                                    <p><b>Record delete confirmation.</b></p>
                                                    <p>Are you want to really delete ?</p>

                                                    <button
                                                        class="btn btn-info py-1 del-close float-left delete-model-cansel-btn">Cancel</button>
                                                    <form method="post" action="{{ route('admin.hospital.category.delete') }}"
                                                        style="float:right;">
                                                        @csrf
                                                        <input type="hidden" name="id" value="{{ $hospital_cat->id }}">
                                                        <button class="btn btn-danger py-1">Confirm</button>
                                                    </form>
                                                </div>
                                                <a href="#" class="btn btn-sm btn-danger"
                                                    onclick="displayDeleteModal({{ $hospital_cat->id }})"
                                                    title="Delete Item"> <i class="fas fa-trash"></i></a>
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
        $(document).ready(function() {
            $(".del-close").click(function() {
                $(".del-modal").hide('fadeIn');

            });


        });
        function displayDeleteModal(id) {
            $(".del-modal").hide('fadeIn');
            $(".modal" + id).show('fadeOut');
        }
    </script>
@stop
