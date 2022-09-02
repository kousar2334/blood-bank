@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('Dashboard') }}
@stop
@section('custom_css')
    <style>
        .img-size-32 {
            height: 32px;
        }
    </style>
@stop
@section('admin_content')
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    {{-- <h4 class="m-0 text-dark">Dashboard</h4> --}}
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 col-sm-6 col-12">
                    <div class="small-box bg-success">
                        <div class="inner">
                            <h3>{{ $total_donor }}<sup style="font-size: 20px"></sup></h3>
                            <p class="">{{ translate('Blood Donors') }}</p>
                        </div>
                        <div class="icon">
                            <i class="fas fa-users"></i>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-12">
                    <div class="small-box bg-info">
                        <div class="inner">
                            <h3>{{ $total_doctor }}<sup style="font-size: 20px"></sup></h3>

                            <p class="">{{ translate('Doctors') }}</p>
                        </div>
                        <div class="icon">
                            <i class="fas fa-user-md"></i>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-12">
                    <div class="small-box bg-warning">
                        <div class="inner">
                            <h3>{{ $total_hospital }}<sup style="font-size: 20px"></sup></h3>

                            <p class="">{{ translate('Hospitals') }}</p>
                        </div>
                        <div class="icon">
                            <i class="fas fa-hospital"></i>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-12">
                    <div class="small-box bg-danger">
                        <div class="inner">
                            <h3>{{ $toatal_visitor }}<sup style="font-size: 20px"></sup></h3>
                            <p class="">{{ translate('Visitors') }}</p>
                        </div>
                        <div class="icon">
                            <i class="fas fa-glasses"></i>
                        </div>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="card mt-3">
                        <div class="card-header py-3">
                            <h3 class="card-title ">{{ translate('Latest Doctors') }}</h3>
                            <div class="card-tools">
                                <a href="{{ route('admin.doctor.list') }}" class="btn btn-sm btn-success ">
                                    {{ translate('Doctors') }}
                                </a>
                            </div>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <table class="table table-striped table-valign-middle">
                                <thead>
                                    <tr>
                                        <th class="font-weight-normal ">{{ translate('Name') }}</th>
                                        <th class="font-weight-normal ">{{ translate('Specialist') }}</th>
                                        <th class="font-weight-normal ">{{ translate('Status') }}</th>
                                        <th class="font-weight-normal ">{{ translate('Action') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($leatest_doctors as $doctor)
                                        <tr>
                                            <td class="">
                                                @if ($doctor->image)
                                                    <img src="{{ asset('/') }}{{ $doctor->image }}"
                                                        alt="{{ $doctor->name }}" class="img-circle img-size-32 mr-2">
                                                @else
                                                    <img src="{{ asset('/') }}static/images/no-image.png"
                                                        alt="{{ $doctor->name }}" class="img-circle img-size-32 mr-2">
                                                @endif
                                                {{ $doctor->name }}
                                            </td>
                                            <td class="">{{ $doctor->specialist }}</td>
                                            <td>
                                                @if ($doctor->status == 1)
                                                    <span class="badge badge-success">{{ translate('Active') }}</span>
                                                @else
                                                    <span class="badge badge-danger">{{ translate('Inactive') }}</span>
                                                @endif
                                            </td>
                                            <td>
                                                <a href="{{ route('admin.doctor.edit', $doctor->id) }}"
                                                    class="btn btn-sm btn-circle primary-soft"><i
                                                        class="fas fa-edit"></i></a>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card mt-4">
                        <div class="card-header py-3">
                            <h3 class="card-title ">{{ translate('Latest Hospitals') }}</h3>
                            <div class="card-tools">
                                <a href="{{ route('admin.hospital.list') }}" class="btn btn-sm btn-success ">
                                    {{ translate('All Hospitals') }}
                                </a>
                            </div>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <table class="table table-striped table-valign-middle">
                                <thead>
                                    <tr>
                                        <th class="font-weight-normal ">{{ translate('Name') }}</th>
                                        <th class="font-weight-normal ">{{ translate('Category') }}</th>
                                        <th class="font-weight-normal ">{{ translate('Status') }}</th>
                                        <th class="font-weight-normal ">{{ translate('Action') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($leatest_hospitals as $hospital)
                                        <tr>
                                            <td class="">
                                                @if ($hospital->image)
                                                    <img src="{{ asset('/') }}{{ $hospital->image }}"
                                                        alt="{{ $hospital->name }}" class="img-circle img-size-32 mr-2">
                                                @else
                                                    <img src="{{ asset('/') }}static/images/no-image.png"
                                                        alt="{{ $hospital->name }}" class="img-circle img-size-32 mr-2">
                                                @endif
                                                {{ $hospital->name }}
                                            </td>
                                            <td class="">{{ $hospital->category }}</td>
                                            <td>
                                                @if ($hospital->status == 1)
                                                    <span class="badge badge-success">{{ translate('Active') }}</span>
                                                @else
                                                    <span class="badge badge-danger">{{ translate('Inactive') }}</span>
                                                @endif
                                            </td>
                                            <td>
                                                <a href="{{ route('admin.hospital.edit', $hospital->id) }}"
                                                    class="btn btn-sm  primary-soft btn-circle"><i
                                                        class="fas fa-edit"></i></a>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card mt-3">
                        <div class="card-header py-3">
                            <h3 class="card-title ">{{ translate('Leatest Donors') }}</h3>
                            <div class="card-tools">
                                <a href="{{ route('admin.blood.donar.list') }}" class="btn btn-sm btn-success ">
                                    {{ translate('All Donors') }}
                                </a>
                            </div>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <table class="table table-striped table-valign-middle">
                                <thead>
                                    <tr>
                                        <th class="font-weight-normal ">{{ translate('Name') }}</th>
                                        <th class="font-weight-normal ">{{ translate('Blood Group') }}</th>
                                        <th class="font-weight-normal ">{{ translate('Mobile') }}</th>
                                        <th class="font-weight-normal ">{{ translate('Status') }}</th>
                                        <th class="font-weight-normal ">{{ translate('Action') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($leatest_blood_donors as $donor)
                                        <tr>
                                            <td class="">
                                                @if ($donor->image)
                                                    <img src="{{ asset('/') }}{{ $donor->image }}"
                                                        alt="{{ $donor->name }}" class="img-circle img-size-32 mr-2">
                                                @else
                                                    <img src="{{ asset('/') }}static/images/no-image.png"
                                                        alt="{{ $donor->name }}" class="img-circle img-size-32 mr-2">
                                                @endif
                                                {{ $donor->name }}
                                            </td class="">
                                            <td>{{ $donor->group }}</td>
                                            <td class="">
                                                {{ $donor->mobile }}
                                            </td>
                                            <td>
                                                @if ($donor->status == 1)
                                                    <span class="badge badge-success">{{ translate('Active') }}</span>
                                                @else
                                                    <span class="badge badge-danger">{{ translate('Inactive') }}</span>
                                                @endif
                                            </td>
                                            <td>
                                                <a href="{{ route('admin.blood.donar.edit', $donor->id) }}"
                                                    class="btn btn-sm primary-soft btn-circle"><i
                                                        class="fas fa-edit"></i></a>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card mt-4">
                        <div class="card-header py-3">
                            <h3 class="card-title ">{{ translate('Leatest Ambulance') }}</h3>
                            <div class="card-tools">
                                <a href="{{ route('admin.ambulance.all') }}" class="btn btn-sm btn-success ">
                                    {{ translate('Ambulances') }}
                                </a>
                            </div>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <table class="table table-striped table-valign-middle">
                                <thead>
                                    <tr>
                                        <th class="font-weight-normal ">{{ translate('Name') }}</th>
                                        <th class="font-weight-normal ">{{ translate('Category') }}</th>
                                        <th class="font-weight-normal ">{{ translate('Status') }}</th>
                                        <th class="font-weight-normal ">{{ translate('Action') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($leatest_ambulances as $ambulance)
                                        <tr>
                                            <td class="">
                                                @if ($ambulance->image)
                                                    <img src="{{ asset('/') }}{{ $ambulance->image }}"
                                                        alt="{{ $ambulance->name }}" class="img-circle img-size-32 mr-2">
                                                @else
                                                    <img src="{{ asset('/') }}static/images/no-image.png"
                                                        alt="{{ $ambulance->name }}" class="img-circle img-size-32 mr-2">
                                                @endif
                                                {{ $ambulance->name }}
                                            </td>
                                            <td class="">{{ $ambulance->category }}</td>
                                            <td>
                                                @if ($ambulance->status == 1)
                                                    <span class="badge badge-success">{{ translate('Active') }}</span>
                                                @else
                                                    <span class="badge badge-danger">{{ translate('Inactive') }}</span>
                                                @endif
                                            </td>
                                            <td>
                                                <a href="{{ route('admin.ambulance.edit', $ambulance->id) }}"
                                                    class="btn btn-sm  primary-soft btn-circle"><i
                                                        class="fas fa-edit"></i></a>
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
        <!-- /.container-fluid -->
    </div>
    <!-- /.content -->
@stop
@section('custom_script')
    <script src="{{ asset('/') }}backend/plugins/chart.js/Chart.min.js"></script>
    <script src="{{ asset('/') }}backend/dist/js/demo.js"></script>
    <script src="{{ asset('/') }}backend/dist/js/pages/dashboard3.js"></script>
@stop
