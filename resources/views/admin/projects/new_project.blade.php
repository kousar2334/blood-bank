@extends('admin.layouts.main')
@section('admin-page-title')
    Admin | New Project
@stop
@section('custom_css')

@stop
@section('admin_content')
    <!-- Main content -->
    <section class="content">
        <!--Start Container fluid-->
        <div class="container-fluid">
            <div class="row">
                <div class="offset-lg-3 mt-4 col-lg-6 col-md-12 col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">New Project</h3>
                            <a href="{{ route('admin.project.list') }}"
                                class="btn btn-success btn-sm float-right text-white">Project Lists</a>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body row">
                            <form role="form" action="{{ route('admin.police.store') }}" method="POST"
                                class="col-lg-12">
                                @csrf
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Title</label>
                                            <input type="text" name="title" value="{{ old('title') }}"
                                                class="form-control" placeholder="Enter ...">
                                            @if ($errors->has('title'))
                                                <small class="text text-danger">{{ $errors->first('title') }}</small>
                                            @endif

                                        </div>

                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Purpose</label>
                                            <input type="text" name="purpose" value="{{ old('purpose') }}"
                                                class="form-control" placeholder="Enter ...">
                                            @if ($errors->has('purpose'))
                                                <small class="text text-danger">{{ $errors->first('purpose') }}</small>
                                            @endif
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Description</label>
                                            <textarea class="form-control" name="description" rows="3"
                                                placeholder="Enter ...">{{ old('description') }}</textarea>
                                        </div>
                                    </div>

                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Location</label>
                                            <input type="text" name="locations" value="{{ old('locations') }}"
                                                class="form-control" placeholder="Enter ...">
                                            @if ($errors->has('locations'))
                                                <small class="text text-danger">{{ $errors->first('locations') }}</small>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Image</label>
                                            <input type="file" name="image" value="{{ old('image') }}"
                                                class="form-control" placeholder="Enter ...">
                                            @if ($errors->has('image'))
                                                <small class="text text-danger">{{ $errors->first('image') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>video Link</label>
                                            <input type="text" name="video_link" value="{{ old('video_link') }}"
                                                class="form-control" placeholder="Enter ...">
                                            @if ($errors->has('video_link'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('video_link') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Donation</label>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="donation_enabale"
                                                    id="donation_enabale1" value="1" checked>
                                                <label class="form-check-label" for="donation_enabale1">
                                                    Enable
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="donation_enabale"
                                                    id="donation_enabale2" value="0">
                                                <label class="form-check-label" for="donation_enabale2">
                                                    Disable
                                                </label>
                                            </div>
                                            @if ($errors->has('donation_enabale'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('donation_enabale') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Donation Target</label>
                                            <input type="text" name="donation_target"
                                                value="{{ old('donation_target') }}" class="form-control"
                                                placeholder="Enter ...">
                                            @if ($errors->has('donation_target'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('donation_target') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Donation Instruction</label>
                                            <textarea class="form-control" name="donation_instruction	" rows="3"
                                                placeholder="Enter ...">{{ old('donation_instruction	') }}</textarea>
                                            @if ($errors->has('donation_instruction'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('donation_instruction') }}</small>
                                            @endif
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <input type="submit" class="btn btn-block bg-gradient-success" value="Save" />
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
