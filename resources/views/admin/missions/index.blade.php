@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('Our Missions') }}
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
                            <h3 class="card-title">{{ translate('Our Missions') }}</h3>
                            <a href="{{ route('admin.doctor.category.add') }}"
                                class="btn btn-info btn-sm float-right text-white">{{ translate('Add New Mission') }}</a>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="doctor_department_table" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>{{ translate('Title') }}</th>
                                        <th>{{ translate('Icon') }}</th>
                                        <th>{{ translate('Description') }}</th>
                                        <th>{{ translate('Status') }}</th>
                                        <th class="text-center">{{ translate('Action') }}</th>
                                        <th class="text-right">{{ translate('Remove') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @php
                                        $counter = 0;
                                    @endphp
                                    @foreach ($missions as $cat)
                                        @php
                                            $counter++;
                                        @endphp
                                        <tr>
                                            <td>{{ $counter }}</td>
                                            <td>{{ $cat->name }}</td>
                                            <td>{{ $cat->bn_name }}</td>
                                            <td>
                                                @if ($cat->icon)
                                                    <img src="{{ asset('/') }}{{ $cat->icon }}" border="0"
                                                        class="img-circle elevation-1" width="50" height="50" />
                                                @else
                                                    <img src="{{ asset('/') }}static/images/no-image.png" border="0"
                                                        class="img-circle elevation-1" width="50" height="50" />
                                                @endif
                                            </td>
                                            <td>
                                                @if ($cat->image)
                                                    <img src="{{ asset('/') }}{{ $cat->image }}" border="0"
                                                        class="img-circle elevation-1" width="50" height="50" />
                                                @else
                                                    <img src="{{ asset('/') }}static/images/no-image.png" border="0"
                                                        class="img-circle elevation-1" width="50" height="50" />
                                                @endif
                                            </td>
                                            <td>{{ $cat->description }}</td>
                                            <td>
                                                @if ($cat->status == 1)
                                                    <p class="badge badge-success">{{ translate('Active') }}</p>
                                                @else
                                                    <p class="badge badge-danger">{{ translate('Inactive') }}</p>
                                                @endif
                                            </td>
                                            <td class="text-center text-white">
                                                <a href="{{ route('admin.doctor.category.edit', $cat->id) }}"
                                                    class="btn btn-sm btn-circle primary-soft"><i
                                                        class="fas fa-edit"></i></a>

                                            </td>
                                            <td class="text-right">
                                                <form method="post" action="{{ route('admin.doctor.category.delete') }}"
                                                    style="float:right;">
                                                    @csrf
                                                    <input type="hidden" name="id" value="{{ $cat->id }}">
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
