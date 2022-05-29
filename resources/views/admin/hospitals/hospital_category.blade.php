@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('Hospital Categories') }}
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
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">{{ translate('Hospital Categories') }}</h3>
                        </div>
                        <div class="card-body">
                            <table id="example1" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>{{ translate('Name') }}</th>
                                        <th>{{ translate('Name') }}</th>
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
                                                @if ($hospital_cat->status == 1)
                                                    <p class="badge badge-success">{{ translate('Active') }}</p>
                                                @else
                                                    <p class="badge badge-danger">{{ translate('Inactive') }}</p>
                                                @endif
                                            </td>
                                            <td class="text-center text-white">
                                                <a href="{{ route('admin.hospital.category.edit', $hospital_cat->id) }}"
                                                    class="btn btn-sm btn-circle primary-soft"><i
                                                        class="fas fa-edit"></i></a>
                                            </td>
                                            <td class="text-right">
                                                <form method="post"
                                                    action="{{ route('admin.hospital.category.delete') }}"
                                                    style="float:right;">
                                                    @csrf
                                                    <input type="hidden" name="id" value="{{ $hospital_cat->id }}">
                                                    <button class="btn btn-sm ml-1 btn-circle danger-soft">
                                                        <i class="fas fa-trash-alt"></i>
                                                    </button>
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
