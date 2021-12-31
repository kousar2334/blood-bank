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
                            <h3>{{ $toatal_visitor }}<sup style="font-size: 20px"></sup></h3>
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
                        <div class="card-header py-3">
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
                                            <td class="bangla-font">
                                                @if ($doctor->image)
                                                    <img src="{{ asset('/') }}{{ $doctor->image }}"
                                                        alt="{{ $doctor->name }}" class="img-circle img-size-32 mr-2">
                                                @else
                                                    <img src="{{ asset('/') }}images/no-image.png"
                                                        alt="{{ $doctor->name }}" class="img-circle img-size-32 mr-2">
                                                @endif
                                                {{ $doctor->name }}
                                            </td>
                                            <td class="bangla-font">{{ $doctor->specialist }}</td>
                                            <td>
                                                @if ($doctor->status == 1)
                                                    <span class="badge badge-success">Active</span>
                                                @else
                                                    <span class="badge badge-danger">Pending</span>
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
                    <div class="card">
                        <div class="card-header py-3">
                            <h3 class="card-title">Leatest Hospital & Clinics</h3>
                            <div class="card-tools">
                                <a href="{{ route('admin.hospital.list') }}" class="btn btn-sm btn-success">
                                    Hospital & Clinics
                                </a>
                            </div>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <table class="table table-striped table-valign-middle">
                                <thead>
                                    <tr>
                                        <th class="font-weight-normal">Name</th>
                                        <th class="font-weight-normal">Category</th>
                                        <th class="font-weight-normal">Status</th>
                                        <th class="font-weight-normal">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($leatest_hospitals as $hospital)
                                        <tr>
                                            <td class="bangla-font">
                                                @if ($hospital->image)
                                                    <img src="{{ asset('/') }}{{ $hospital->image }}"
                                                        alt="{{ $hospital->name }}" class="img-circle img-size-32 mr-2">
                                                @else
                                                    <img src="{{ asset('/') }}images/no-image.png"
                                                        alt="{{ $hospital->name }}" class="img-circle img-size-32 mr-2">
                                                @endif
                                                {{ $hospital->name }}
                                            </td>
                                            <td class="bangla-font">{{ $hospital->category }}</td>
                                            <td>
                                                @if ($hospital->status == 1)
                                                    <span class="badge badge-success">Active</span>
                                                @else
                                                    <span class="badge badge-danger">Pending</span>
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
                    <div class="card">
                        <div class="card-header py-3">
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
                                            <td class="bangla-font">
                                                @if ($doctor->image)
                                                    <img src="{{ asset('/') }}{{ $doctor->image }}"
                                                        alt="{{ $doctor->name }}" class="img-circle img-size-32 mr-2">
                                                @else
                                                    <img src="{{ asset('/') }}images/no-image.png"
                                                        alt="{{ $doctor->name }}" class="img-circle img-size-32 mr-2">
                                                @endif
                                                {{ $doctor->name }}
                                            </td>
                                            <td class="bangla-font">{{ $doctor->specialist }}</td>
                                            <td>
                                                @if ($doctor->status == 1)
                                                    <span class="badge badge-success">Active</span>
                                                @else
                                                    <span class="badge badge-danger">Pending</span>
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
                    <div class="card">
                        <div class="card-header py-3">
                            <h3 class="card-title">Leatest Ambulances</h3>
                            <div class="card-tools">
                                <a href="{{ route('admin.ambulance.all') }}" class="btn btn-sm btn-success">
                                    Ambulances
                                </a>
                            </div>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <table class="table table-striped table-valign-middle">
                                <thead>
                                    <tr>
                                        <th class="font-weight-normal">Name</th>
                                        <th class="font-weight-normal">Category</th>
                                        <th class="font-weight-normal">Status</th>
                                        <th class="font-weight-normal">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($leatest_ambulances as $ambulance)
                                        <tr>
                                            <td class="bangla-font">
                                                @if ($ambulance->image)
                                                    <img src="{{ asset('/') }}{{ $ambulance->image }}"
                                                        alt="{{ $ambulance->name }}"
                                                        class="img-circle img-size-32 mr-2">
                                                @else
                                                    <img src="{{ asset('/') }}images/no-image.png"
                                                        alt="{{ $ambulance->name }}"
                                                        class="img-circle img-size-32 mr-2">
                                                @endif
                                                {{ $ambulance->name }}
                                            </td>
                                            <td class="bangla-font">{{ $ambulance->category }}</td>
                                            <td>
                                                @if ($ambulance->status == 1)
                                                    <span class="badge badge-success">Active</span>
                                                @else
                                                    <span class="badge badge-danger">Pending</span>
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
