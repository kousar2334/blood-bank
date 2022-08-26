@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('Users') }}
@stop
@section('custom_css')
    <!-- DataTables -->
    <link rel="stylesheet" href="{{ asset('/backend/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css') }}">
    <link rel="stylesheet" href="{{ asset('/backend/plugins/datatables-responsive/css/responsive.bootstrap4.min.css') }}">
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
                            <h3 class="card-title">{{ translate('Users') }}</h3>
                            <a href="{{ route('admin.user.new.user') }}"
                                class="mr-2 btn btn-success btn-sm float-right text-white">{{ translate('Add New User') }}</a>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="doctor_department_table" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>{{ translate('Image') }}</th>
                                        <th>{{ translate('Name') }}</th>
                                        <th>{{ translate('Email') }}</th>
                                        <th>{{ translate('Mobile') }}</th>
                                        <th>{{ translate('Username') }}</th>
                                        <th>{{ translate('Status') }}</th>
                                        <th class="text-center">{{ translate('Action') }}</th>
                                        <th class="text-right">{{ translate('Remove') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @php
                                        $counter = 0;
                                    @endphp
                                    @foreach ($users as $user)
                                        @php
                                            $counter++;
                                        @endphp
                                        <tr>
                                            <td>{{ $counter }}</td>
                                            <td>
                                                @if ($user->image)
                                                    <img src="{{ asset('/') }}{{ $user->image }}" border="0"
                                                        class="img-circle elevation-1" width="50" height="50" />
                                                @else
                                                    <img src="{{ asset('/') }}images/no-image.png" border="0"
                                                        class="img-circle elevation-1" width="50" height="50" />
                                                @endif
                                            </td>
                                            <td class="bangla-font">{{ $user->first_name }} {{ $user->last_name }}
                                            </td>
                                            <td>{{ $user->email }}</td>
                                            <td>{{ $user->mobile }}</td>
                                            <td>{{ $user->username }}</td>
                                            <td>
                                                @if ($user->status == 1)
                                                    <p class="badge badge-success">{{ translate('Active') }}</p>
                                                @else
                                                    <p class="badge badge-danger">{{ translate('Inactive') }}</p>
                                                @endif
                                            </td>
                                            <td class="text-center text-white">
                                                <a href="{{ route('admin.user.edit', $user->id) }}"
                                                    class="btn btn-sm btn-circle primary-soft"><i
                                                        class="fas fa-edit"></i></a>

                                            </td>
                                            <td class="text-center">
                                                <form method="post" action="{{ route('admin.user.delete') }}">
                                                    @csrf
                                                    <input type="hidden" name="id" value="{{ $user->id }}">
                                                    <button class="btn btn-sm ml-1 btn-circle danger-soft"><i
                                                            class="fas fa-trash-alt"></i></button>
                                                </form>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
