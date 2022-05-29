@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('Ambulances') }}
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
                            <h3 class="card-title">{{ translate('Ambulances') }}</h3>
                            <a href="{{ route('admin.ambulance.category.add') }}"
                                class="btn btn-success btn-sm float-right text-white">{{ translate('Add New Category') }}</a>
                            <a href="{{ route('admin.ambulance.add') }}"
                                class="btn btn-info btn-sm float-right text-white mr-2">{{ translate('Add New Ambulance') }}</a>
                        </div>
                        <div class="card-body">
                            <table id="ambulance_table" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>{{ translate('Name') }}</th>
                                        <th>{{ translate('Name') }}</th>
                                        <th>{{ translate('Phone') }}</th>
                                        <th>{{ translate('Mobile') }}</th>
                                        <th>{{ translate('Alternative Mobile') }}</th>
                                        <th>{{ translate('Description') }}</th>
                                        <th>{{ translate('Status') }}</th>
                                        <th>{{ translate('Action') }}</th>
                                        <th class="text-right">{{ translate('Remove') }}</th>
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
                                                    <p class="badge badge-success">{{ translate('Active') }}</p>
                                                @else
                                                    <p class="badge badge-danger">{{ translate('Inactive') }}</p>
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
                    </div>
                </div>
            </div>
        </div>
    </section>
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
