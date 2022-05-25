@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('Edit Language') }}
@stop
@section('custom_css')
@stop
@section('admin_content')
    </section>
    <!-- /.content-header -->
    <!-- Main content -->
    <section class="content">
        <!--Start Container fluid-->
        <div class="container-fluid">
            <div class="row">
                <div class="offset-lg-3 col-lg-6 col-md-12 col-sm-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">{{ translate('Language Information') }}</h3>
                            <a href="{{ route('admin.language.list') }}"
                                class="btn btn-info btn-sm float-right text-white">{{ translate('Languages') }}</a>

                        </div>
                        <!-- /.card-header -->
                        <div class="card-body row">
                            <form role="form" action="{{ route('admin.language.update') }}" method="POST"
                                class="col-md-12">
                                @csrf
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Name') }}</label>
                                            <input type="hidden" name="id" value="{{ $lan->id }}">
                                            <input type="text" name="name" value="{{ $lan->name }}"
                                                class="form-control" placeholder="Enter Name...">
                                            @if ($errors->has('name'))
                                                <small class="text text-danger">{{ $errors->first('name') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Code') }}</label>
                                            <input type="text" name="code" value="{{ $lan->code }}"
                                                class="form-control" placeholder="Enter Code...">
                                            @if ($errors->has('code'))
                                                <small class="text text-danger">{{ $errors->first('code') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Status') }}</label>
                                            <select class="form-control" name="status">
                                                <option {{ $lan->status == '1' ? 'selected' : '' }} value="1">
                                                    {{ translate('Active') }}
                                                </option>
                                                <option {{ $lan->status == '0' ? 'selected' : '' }} value="0">
                                                    {{ translate('Inactive') }}
                                                </option>
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
                                            value="{{ translate('Update') }}" />
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
