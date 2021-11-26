@extends('admin.layouts.main')
@section('admin-page-title')
    Dashboard
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
                    <h4 class="m-0 text-dark">Dashboard</h4>
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
                            <p>Blood Donors</p>
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

                            <p>Doctors</p>
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

                            <p>Hospitals</p>
                        </div>
                        <div class="icon">
                            <i class="fas fa-hospital"></i>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-12">
                    <div class="small-box bg-danger">
                        <div class="inner">
                            <h3>{{ $total_donor }}<sup style="font-size: 20px"></sup></h3>
                            <p>Visitor</p>
                        </div>
                        <div class="icon">
                            <i class="fas fa-glasses"></i>
                        </div>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header border-0">
                            <h3 class="card-title">Leatest Doctors</h3>
                            <div class="card-tools">
                                <a href="{{ route('admin.doctor.list') }}" class="btn btn-sm btn-success">
                                    All Doctors
                                </a>
                            </div>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <table class="table table-striped table-valign-middle">
                                <thead>
                                    <tr>
                                        <th class="font-weight-normal">Name</th>
                                        <th class="font-weight-normal">Specialist</th>
                                        <th class="font-weight-normal">Status</th>
                                        <th class="font-weight-normal">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($leatest_doctors as $doctor)
                                        <tr>
                                            <td>
                                                @if ($doctor->image)
                                                    <img src="{{ asset('/') }}{{ $doctor->image }}"
                                                        alt="{{ $doctor->name }}" class="img-circle img-size-32 mr-2">
                                                @else
                                                    <img src="{{ asset('/') }}images/no-image.png"
                                                        alt="{{ $doctor->name }}" class="img-circle img-size-32 mr-2">
                                                @endif
                                                {{ $doctor->name }}
                                            </td>
                                            <td>{{ $doctor->specialist }}</td>
                                            <td>
                                                @if ($doctor->status == 1)
                                                    <span class="badge badge-success">Active</span>
                                                @else
                                                    <span class="badge badge-danger">Pending</span>
                                                @endif
                                            </td>
                                            <td>
                                                <a href="{{ route('admin.doctor.edit', $doctor->id) }}"
                                                    class="btn btn-sm btn-info">Edit</a>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header border-0">
                            <h3 class="card-title">Leatest Hospital & Clinics</h3>
                            <div class="card-tools">
                                <a href="{{ route('admin.hospital.list') }}" class="btn btn-sm btn-warning">
                                    Hospital & Clinics
                                </a>
                            </div>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <table class="table table-striped table-valign-middle">
                                <thead>
                                    <tr>
                                        <th class="font-weight-normal">Name</th>
                                        <th class="font-weight-normal">Specialist</th>
                                        <th class="font-weight-normal">Status</th>
                                        <th class="font-weight-normal">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($leatest_doctors as $doctor)
                                        <tr>
                                            <td>
                                                @if ($doctor->image)
                                                    <img src="{{ asset('/') }}{{ $doctor->image }}"
                                                        alt="{{ $doctor->name }}" class="img-circle img-size-32 mr-2">
                                                @else
                                                    <img src="{{ asset('/') }}images/no-image.png"
                                                        alt="{{ $doctor->name }}" class="img-circle img-size-32 mr-2">
                                                @endif
                                                {{ $doctor->name }}
                                            </td>
                                            <td>{{ $doctor->specialist }}</td>
                                            <td>
                                                @if ($doctor->status == 1)
                                                    <span class="badge badge-success">Active</span>
                                                @else
                                                    <span class="badge badge-danger">Pending</span>
                                                @endif
                                            </td>
                                            <td>
                                                <a href="{{ route('admin.doctor.edit', $doctor->id) }}"
                                                    class="btn btn-sm  btn-info">Edit</a>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header border-0">
                            <h3 class="card-title">Leatest Blood Donors</h3>
                            <div class="card-tools">
                                <a href="{{ route('admin.blood.donar.list') }}" class="btn btn-sm btn-danger">
                                    All Blood Donors
                                </a>
                            </div>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <table class="table table-striped table-valign-middle">
                                <thead>
                                    <tr>
                                        <th class="font-weight-normal">Name</th>
                                        <th class="font-weight-normal">Blood Group</th>
                                        <th class="font-weight-normal">Mobile</th>
                                        <th class="font-weight-normal">status</th>
                                        <th class="font-weight-normal">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($leatest_blood_donors as $donor)
                                        <tr>
                                            <td>
                                                @if ($donor->image)
                                                    <img src="{{ asset('/') }}{{ $donor->image }}"
                                                        alt="{{ $donor->name }}" class="img-circle img-size-32 mr-2">
                                                @else
                                                    <img src="{{ asset('/') }}images/no-image.png"
                                                        alt="{{ $donor->name }}" class="img-circle img-size-32 mr-2">
                                                @endif
                                                {{ $donor->name }}
                                            </td>
                                            <td>{{ $donor->group }}</td>
                                            <td>
                                                {{ $donor->mobile }}
                                            </td>
                                            <td>
                                                @if ($donor->status == 1)
                                                    <span class="badge badge-success">Active</span>
                                                @else
                                                    <span class="badge badge-danger">Inactive</span>
                                                @endif
                                            </td>
                                            <td>
                                                <a href="{{ route('admin.blood.donar.edit', $donor->id) }}"
                                                    class="btn btn-sm btn-info">Edit</a>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header border-0">
                            <h3 class="card-title">Quick Access</h3>
                            <div class="card-tools">
                                <a href="#" class="btn btn-sm btn-tool">
                                    <i class="fas fa-download"></i>
                                </a>
                                <a href="#" class="btn btn-sm btn-tool">
                                    <i class="fas fa-bars"></i>
                                </a>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
                                <p class="text-success text-xl">
                                    <i class="ion ion-ios-refresh-empty"></i>
                                </p>
                                <p class="d-flex flex-column text-right">
                                    <span class="font-weight-bold">
                                        <i class="ion ion-android-arrow-up text-success"></i> 12%
                                    </span>
                                    <span class="text-muted">CONVERSION RATE</span>
                                </p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
                                <p class="text-warning text-xl">
                                    <i class="ion ion-ios-cart-outline"></i>
                                </p>
                                <p class="d-flex flex-column text-right">
                                    <span class="font-weight-bold">
                                        <i class="ion ion-android-arrow-up text-warning"></i> 0.8%
                                    </span>
                                    <span class="text-muted">SALES RATE</span>
                                </p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mb-0">
                                <p class="text-danger text-xl">
                                    <i class="ion ion-ios-people-outline"></i>
                                </p>
                                <p class="d-flex flex-column text-right">
                                    <span class="font-weight-bold">
                                        <i class="ion ion-android-arrow-down text-danger"></i> 1%
                                    </span>
                                    <span class="text-muted">REGISTRATION RATE</span>
                                </p>
                            </div>
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
