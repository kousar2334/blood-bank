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
                    <!-- /.info-box -->
                </div>
                <!-- /.col -->
                <div class="col-md-3 col-sm-6 col-12">
                    <div class="small-box bg-info">
                        <div class="inner">
                          <h3>53<sup style="font-size: 20px"></sup></h3>
          
                          <p>Doctors</p>
                        </div>
                        <div class="icon">
                          <i class="fas fa-user-md"></i>
                        </div>
                      </div>
                    <!-- /.info-box -->
                </div>
                <!-- /.col -->
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
                    <!-- /.info-box -->
                </div>
                <!-- /.col -->
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
                    <!-- /.info-box -->
                </div>
                <!-- /.col -->
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header border-0">
                            <h3 class="card-title font-weight-bold">Leatest Blood Requests</h3>
                            <div class="card-tools">
                                <a href="#" class="btn btn-sm btn-info">
                                    All Requests
                                </a>
                            </div>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <table class="table table-striped table-valign-middle">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Blood Group</th>
                                        <th>Quantity(Bag)</th>
                                        <th>Time</th>
                                        <th>Mobile</th>
                                        <th>status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($leatest_blood_donors as $donor)
                                        <tr>
                                            <td>
                                                @if ($donor->status == 1)
                                                <img src="{{ asset('/') }}backend/static/icon/blood2.png"
                                                alt="{{ $donor->name }}" class="img-circle img-size-32 mr-2">
                                            @else
                                            <img src="{{ asset('/') }}backend/static/icon/blood1.gif"
                                            alt="{{ $donor->name }}" class="img-circle img-size-32 mr-2">
                                            @endif
                                                
                                                {{ $donor->name }}
                                            </td>
                                            <td>{{ $donor->group }}</td>
                                            <td>{{ $donor->id }}</td>
                                            <td>Friday 5 PM</td>
                                            <td>
                                                {{ $donor->mobile }}
                                            </td>
                                            <td>
                                                @if ($donor->status == 1)
                                                    <span class="badge badge-success">Solved</span>
                                                @else
                                                    <span class="badge badge-danger">Pending</span>
                                                @endif
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- /.card -->
                    <div class="card">
                        <div class="card-header border-0">
                            <div class="d-flex justify-content-between">
                                <h3 class="card-title">Online Visitors</h3>
                                <a href="javascript:void(0);">View Report</a>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="d-flex">
                                <p class="d-flex flex-column">
                                    <span class="text-bold text-lg">820</span>
                                    <span>Visitors Over Time</span>
                                </p>
                                <p class="ml-auto d-flex flex-column text-right">
                                    <span class="text-success">
                                        <i class="fas fa-arrow-up"></i> 12.5%
                                    </span>
                                    <span class="text-muted">Since last week</span>
                                </p>
                            </div>
                            <!-- /.d-flex -->

                            <div class="position-relative mb-4">
                                <canvas id="visitors-chart" height="200"></canvas>
                            </div>

                            <div class="d-flex flex-row justify-content-end">
                                <span class="mr-2">
                                    <i class="fas fa-square text-primary"></i> This Week
                                </span>

                                <span>
                                    <i class="fas fa-square text-gray"></i> Last Week
                                </span>
                            </div>
                        </div>
                    </div>


                    <!-- /.card -->
                </div>

                <!-- /.col-md-6 -->
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header border-0">
                            <h3 class="card-title font-weight-bold">Leatest Blood Donors</h3>
                            <div class="card-tools">
                                <a href="#" class="btn btn-sm btn-info">
                                    All Donors
                                </a>
                            </div>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <table class="table table-striped table-valign-middle">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Blood Group</th>
                                        <th>Mobile</th>
                                        <th>status</th>
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
                                                    <img src="{{ asset('/') }}backend/static/icon/blood.jpeg"
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
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- /.card -->

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
                            <!-- /.d-flex -->
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
                            <!-- /.d-flex -->
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
                            <!-- /.d-flex -->
                        </div>
                    </div>
                </div>
                <!-- /.col-md-6 -->
            </div>
            <!-- /.row -->
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
