@extends('admin.layouts.main')
@section('admin-page-title')
    Admin | Projects
@stop
@section('custom_css')
    <!-- DataTables -->
    <link rel="stylesheet" href="{{ asset('/static/backend/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css') }}">
    <link rel="stylesheet"
        href="{{ asset('/static/backend/plugins/datatables-responsive/css/responsive.bootstrap4.min.css') }}">
    <style>
    </style>
@stop
@section('admin_content')
    @php
    if (Session::has('locale')) {
        $locale = Session::get('locale', Config::get('app.locale'));
    } else {
        $locale = 'en';
    }

    @endphp
    <!-- Main content -->
    <section class="content">
        <!--Start Container fluid-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="m-0 card-title">{{ translate('Projects') }}</h4>
                            <a href="{{ route('admin.project.new') }}"
                                class="btn btn-success btn-sm float-right text-white">{{ translate('Add New Project') }}</a>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="doctor_department_table" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>{{ translate('Name') }}</th>
                                        <th>{{ translate('Purpose') }}</th>
                                        <th>{{ translate('Donation target') }}</th>
                                        <th>{{ translate('Donation collected') }}</th>
                                        <th>{{ translate('Status') }}</th>
                                        <th class="text-center">{{ translate('Action') }}</th>
                                        <th class="text-right">{{ translate('Remove') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @php
                                        $counter = 0;
                                    @endphp
                                    @foreach ($projects as $project)
                                        @php
                                            $counter++;
                                        @endphp
                                        <tr>
                                            <td>{{ $counter }}</td>
                                            <td>{{ $project->translation('name', $locale) }}</td>
                                            <td>{{ $project->translation('purpose', $locale) }}</td>
                                            <td>{{ $project->donation_target }}</td>
                                            <td>{{ $project->donation_collection }}</td>

                                            <td>
                                                @if ($project->status == 1)
                                                    <p class="badge badge-success">{{ translate('Active') }}</p>
                                                @else
                                                    <p class="badge badge-danger">{{ translate('Inactive') }}</p>
                                                @endif
                                            </td>
                                            <td class="text-center text-white">
                                                <a href="{{ route('admin.project.edit', ['id' => $project->id, 'lang' => env('DEFAULT_LANGUAGE', 'en')]) }}"
                                                    class="btn btn-sm btn-circle primary-soft"><i
                                                        class="fas fa-edit"></i></a>

                                            </td>
                                            <td class="text-right">
                                                <form method="post" action="{{ route('admin.project.delete') }}"
                                                    style="float:right;">
                                                    @csrf
                                                    <input type="hidden" name="id" value="{{ $project->id }}">
                                                    <button class="btn btn-sm btn-circle danger-soft ml-1"><i
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
