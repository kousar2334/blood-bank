@extends('admin.layouts.main')
@section('admin-page-title')
    Admin | Edit Police Stations
@stop
@section('admin_content')
    <!-- Main content -->
    <section class="content">
        <!--Start Container fluid-->
        <div class="container-fluid">
            <div class="row">
                <div class="mt-4 offset-lg-3 col-lg-6 col-md-12 col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Update Police Station</h3>
                            <a href="{{ route('admin.police.list') }}"
                                class="btn btn-success btn-sm float-right text-white">Police
                                Station List</a>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body row">
                            <form role="form" action="{{ route('admin.police.update') }}" method="POST"
                                class="col-lg-12">
                                @csrf
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input type="hidden" name="id" value="{{ $police->id }}">
                                            <input type="text" name="name" value="{{ $police->name }}"
                                                class="form-control" placeholder="Enter ...">
                                            @if ($errors->has('name'))
                                                <small class="text text-danger">{{ $errors->first('name') }}</small>
                                            @endif

                                        </div>

                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Phone</label>
                                            <input type="text" name="phone" value="{{ $police->phone }}"
                                                class="form-control" placeholder="Enter ...">
                                            @if ($errors->has('phone'))
                                                <small class="text text-danger">{{ $errors->first('phone') }}</small>
                                            @endif
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Mobile 1</label>
                                            <input type="text" name="mobile_1" value="{{ $police->mobile_1 }}"
                                                class="form-control" placeholder="Enter ...">
                                            @if ($errors->has('mobile_1'))
                                                <small class="text text-danger">{{ $errors->first('mobile_1') }}</small>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Mobile 2</label>
                                            <input type="text" name="mobile_2" value="{{ $police->mobile_2 }}"
                                                class="form-control" placeholder="Enter ...">
                                            @if ($errors->has('mobile_2'))
                                                <small class="text text-danger">{{ $errors->first('mobile_2') }}</small>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Status</label>
                                            <select class="form-control" name="status">
                                                <option {{ $police->status == '1' ? 'selected' : '' }} value="1">
                                                    Active</option>
                                                <option {{ $police->status == '0' ? 'selected' : '' }} value="0">
                                                    Inactive</option>

                                            </select>

                                            @if ($errors->has('status'))
                                                <small class="text text-danger">{{ $errors->first('status') }}</small>
                                            @endif
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <input type="submit" class="btn btn-block bg-gradient-success"
                                            value="Update Police Station" />
                                    </div>

                                </div>
                            </form>
                        </div>
                        <!-- /.card-body -->
                    </div>
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

@stop
