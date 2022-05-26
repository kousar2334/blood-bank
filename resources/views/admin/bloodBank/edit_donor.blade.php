@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('Edit Blood Donor Infomation') }}
@stop
@section('custom_css')
@stop
@section('admin_content')
    <!-- Main content -->
    <section class="content">
        <!--Start Container fluid-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-sm-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">{{ translate('Blood Donor Information') }}</h3>
                            <a href="{{ route('admin.blood.donar.list') }}"
                                class="btn btn-danger btn-sm float-right text-white">{{ translate('Blood Donors') }}</a>
                            <a href="{{ route('admin.blood.donar.add') }}"
                                class="btn btn-success btn-sm float-right text-white mr-2">{{ translate('Add New Donor') }}</a>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body row">
                            <div class="col-lg-7">
                                <form role="form" action="{{ route('admin.blood.donar.update') }}" method="POST"
                                    enctype="multipart/form-data">
                                    @csrf
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <input type="hidden" name="id" value="{{ $donor->id }}">
                                            <!-- text input -->
                                            <div class="form-group">
                                                <label>{{ translate('Name') }}<span class="text-danger">*</span></label>
                                                <input type="text" name="name" value="{{ $donor->name }}"
                                                    class="form-control" placeholder="Enter Name">
                                                @if ($errors->has('name'))
                                                    <small class="text text-danger">{{ $errors->first('name') }}</small>
                                                @endif

                                            </div>

                                        </div>
                                        <div class="col-sm-6">
                                            <!-- text input -->
                                            <div class="form-group">
                                                <label>{{ translate('Blood Group') }}<span
                                                        class="text-danger">*</span></label>
                                                <select class="form-control" name="blood_group"
                                                    value="{{ $donor->blood_group }}">
                                                    @foreach ($b_groups as $bg)
                                                        <option {{ $donor->blood_group == $bg->id ? 'selected' : '' }}
                                                            value="{{ $bg->id }}">{{ $bg->name }}</option>
                                                    @endforeach
                                                </select>
                                                @if ($errors->has('blood_group'))
                                                    <small
                                                        class="text text-danger">{{ $errors->first('blood_group') }}</small>
                                                @endif
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <!-- text input -->
                                            <div class="form-group">
                                                <label>{{ translate('Mobile') }}<span
                                                        class="text-danger">*</span></label>
                                                <input type="text" name="mobile" value="{{ $donor->mobile }}"
                                                    class="form-control" placeholder="Enter Mobile">
                                                @if ($errors->has('mobile'))
                                                    <small
                                                        class="text text-danger">{{ $errors->first('mobile') }}</small>
                                                @endif

                                            </div>

                                        </div>
                                        <div class="col-sm-6">
                                            <!-- text input -->
                                            <div class="form-group">
                                                <label>{{ translate('Alternative Mobile') }}</label>
                                                <input type="text" name="mobile_2" value="{{ $donor->mobile2 }}"
                                                    class="form-control" placeholder="Enter Mobile">
                                                @if ($errors->has('mobile'))
                                                    <small
                                                        class="text text-danger">{{ $errors->first('mobile_2') }}</small>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <!-- text input -->
                                            <div class="form-group">
                                                <label>{{ translate('Email') }}</label>
                                                <input type="email" name="email" value="{{ $donor->email }}"
                                                    class="form-control" placeholder="Enter Email">
                                                @if ($errors->has('email'))
                                                    <small class="text text-danger">{{ $errors->first('email') }}</small>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <!-- text input -->
                                            <div class="form-group">
                                                <label>{{ translate('Image') }}</label>
                                                <input type="file" name="image" value="{{ old('image') }}"
                                                    class="form-control" placeholder="Enter ...">
                                                @if ($errors->has('image'))
                                                    <small class="text text-danger">{{ $errors->first('image') }}</small>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <!-- textarea -->
                                            <div class="form-group">
                                                <label>{{ translate('Address') }}</label>
                                                <textarea class="form-control" name="address" rows="3" placeholder="Enter Address">{{ $donor->address }}</textarea>
                                                @if ($errors->has('address'))
                                                    <small
                                                        class="text text-danger">{{ $errors->first('address') }}</small>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <!-- textarea -->
                                            <div class="form-group">
                                                <label>{{ translate('Status') }}</label>
                                                <select class="form-control" name="status">
                                                    <option {{ $donor->status == '1' ? 'selected' : '' }} value="1">
                                                        {{ translate('Active') }}
                                                    </option>
                                                    <option {{ $donor->status == '0' ? 'selected' : '' }} value="0">
                                                        {{ translate('Inactive') }}
                                                    </option>

                                                </select>

                                                @if ($errors->has('status'))
                                                    <small
                                                        class="text text-danger">{{ $errors->first('status') }}</small>
                                                @endif
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <input type="submit" class="btn btn-block btn-success btn-flat"
                                                value="{{ translate('Update') }}" />
                                        </div>
                                    </div>
                                </form>

                            </div>
                            <div class="offset-lg-1 col-lg-4">
                                <div class="card card-widget widget-user mt-4">
                                    <!-- Add the bg color to the header using any of the bg-* classes -->
                                    <div class="widget-user-header bg-info">
                                        <h3 class="widget-user-username">{{ $donor->name }}</h3>
                                        <h5 class="widget-user-desc">{{ translate('Blood Donor') }}</h5>
                                    </div>
                                    <div class="widget-user-image">
                                        @if ($donor->image)
                                            <img class="img-circle elevation-2" src="{{ asset('/' . $donor->image) }}"
                                                alt="User Avatar">
                                        @endif
                                    </div>
                                    <div class="card-footer">
                                        <div class="row">
                                            <div class="col-sm-4 border-right">
                                                <div class="description-block">
                                                    <h5 class="description-header">{{ $donor->mobile }}</h5>
                                                    <span class="description-text">{{ translate('Mobile') }}</span>
                                                </div>
                                                <!-- /.description-block -->
                                            </div>
                                            <!-- /.col -->
                                            <div class="col-sm-4 border-right">
                                                <div class="description-block">
                                                    <h5 class="description-header">
                                                        @foreach ($b_groups as $bg)
                                                            @if ($donor->blood_group == $bg->id)
                                                                {{ $bg->name }}
                                                            @endif
                                                        @endforeach
                                                    </h5>
                                                    <span class="description-text">{{ translate('Blood Group') }}</span>
                                                </div>
                                                <!-- /.description-block -->
                                            </div>
                                            <!-- /.col -->
                                            <div class="col-sm-4">
                                                <div class="description-block">
                                                    <h5 class="description-header">
                                                        @if ($donor->status == 1)
                                                            <span
                                                                class="badge badge-success">{{ translate('Active') }}</span>
                                                        @else
                                                            <span
                                                                class="badge badge-danger">{{ translate('Inactive') }}</span>
                                                        @endif
                                                    </h5>
                                                    <span class="description-text">{{ translate('Status') }}</span>
                                                </div>
                                                <!-- /.description-block -->
                                            </div>
                                            <!-- /.col -->
                                        </div>
                                        <!-- /.row -->
                                    </div>
                                </div>
                            </div>

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
