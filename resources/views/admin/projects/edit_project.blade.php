@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('Edit Project') }}
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
                            <h3 class="card-title">{{ translate('Edit Project') }}</h3>
                            <a href="{{ route('admin.project.list') }}"
                                class="btn btn-success btn-sm float-right text-white">{{ translate('All Projects') }}</a>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body row">
                            <form role="form" action="{{ route('admin.project.update') }}" method="POST"
                                enctype="multipart/form-data" class="col-lg-12">
                                @csrf
                                <div class="row mb-4">
                                    <div class="col-12">
                                        <ul class="nav nav-tabs nav-fill border-light">
                                            @foreach ($languages as $key => $language)
                                                <li class="nav-item">
                                                    <a class="nav-link @if ($language->code == $lang) active @else bg-soft-dark border-light border-left-0 @endif py-3"
                                                        href="{{ route('admin.project.edit', ['id' => $project->id, 'lang' => $language->code]) }}">

                                                        <span>{{ $language->name }}</span>
                                                    </a>
                                                </li>
                                            @endforeach
                                        </ul>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Name') }}</label>
                                            <input type="hidden" name="id" value="{{ $project->id }}">
                                            <input type="hidden" name="lang" value="{{ $lang }}">
                                            <input type="text" name="name"
                                                value="{{ $project->translation('name', $lang) }}" class="form-control"
                                                placeholder="Enter ...">
                                            @if ($errors->has('name'))
                                                <small class="text text-danger">{{ $errors->first('name') }}</small>
                                            @endif

                                        </div>

                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Purpose') }}</label>
                                            <input type="text" name="purpose"
                                                value="{{ $project->translation('purpose', $lang) }}"
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
                                            <label>{{ translate('Description') }}</label>
                                            <textarea class="form-control" name="description" rows="3"
                                                placeholder="Enter ...">{{ $project->translation('description', $lang) }}</textarea>
                                        </div>
                                    </div>

                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Location') }}</label>
                                            <input type="text" name="locations"
                                                value="{{ $project->translation('locations', $lang) }}"
                                                class="form-control" placeholder="Enter ...">
                                            @if ($errors->has('locations'))
                                                <small class="text text-danger">{{ $errors->first('locations') }}</small>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Image') }}</label>
                                            <input type="file" name="image" value="{{ old('image') }}"
                                                class="form-control" placeholder="Enter ...">
                                            @if ($errors->has('image'))
                                                <small class="text text-danger">{{ $errors->first('image') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('video Link') }}</label>
                                            <input type="text" name="video_link" value="{{ $project->video_link }}"
                                                class="form-control" placeholder="Enter ...">
                                            @if ($errors->has('video_link'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('video_link') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Donation') }}</label>
                                            <div class="form-check">
                                                <input class="form-check-input"
                                                    {{ $project->donation_enabale == '1' ? 'checked' : '' }} type="radio"
                                                    name="donation_enabale" id="donation_enabale1" value="1" checked>
                                                <label class="form-check-label" for="donation_enabale1">
                                                    {{ translate('Enable') }}
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input"
                                                    {{ $project->donation_enabale == '0' ? 'checked' : '' }} type="radio"
                                                    name="donation_enabale" id="donation_enabale2" value="0">
                                                <label class="form-check-label" for="donation_enabale2">
                                                    {{ translate('Disable') }}
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
                                            <label>{{ translate('Donation Target') }}</label>
                                            <input type="text" name="donation_target"
                                                value="{{ $project->donation_target }}" class="form-control"
                                                placeholder="Enter ...">
                                            @if ($errors->has('donation_target'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('donation_target') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Donation Instruction') }}</label>
                                            <textarea class="form-control" name="donation_instruction" rows="3" placeholder="Enter ...">
                                                {{ $project->translation('donation_instruction', $lang) }}
                                            </textarea>
                                            @if ($errors->has('donation_instruction'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('donation_instruction') }}
                                                </small>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Status') }}</label>
                                            <select class="form-control" name="status">
                                                <option {{ $project->status == '1' ? 'selected' : '' }} value="1">
                                                    {{ translate('Active') }}
                                                </option>
                                                <option {{ $project->status == '0' ? 'selected' : '' }} value="0">
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
