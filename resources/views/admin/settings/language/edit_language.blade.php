@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('Edit Language') }}
@stop
@section('custom_css')
    <!-- Select2 -->
    <link rel="stylesheet" href="{{ asset('/static/backend/plugins/select2/css/select2.min.css') }}">
    <link rel="stylesheet"
        href="{{ asset('/static/backend/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css') }}">
@stop
@section('admin_content')
    </section>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="offset-lg-3 col-lg-6 col-md-12 col-sm-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">{{ translate('Language Information') }}</h3>
                            <a href="{{ route('admin.language.list') }}"
                                class="btn btn-info btn-sm float-right text-white">
                                {{ translate('Languages') }}
                            </a>
                        </div>
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
                                            <select class="langCodeSelect form-control" name="code">
                                                <option value="{{ $lan->code }}" data-image="{{ $lan->code }}">
                                                    {{ $lan->code }}
                                                </option>
                                                @foreach (\File::files(base_path('public/flags')) as $path)
                                                    <option value="{{ pathinfo($path)['filename'] }}"
                                                        data-image="{{ pathinfo($path)['filename'] }}">
                                                        {{ pathinfo($path)['filename'] }}
                                                    </option>
                                                @endforeach
                                            </select>
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
                                <div class="form-group mt-2 text-right">
                                    <input type="submit" class="btn btn-success" value="{{ translate('Update') }}" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

@stop
@section('custom_script')
    <!-- Select2 -->
    <script src="{{ asset('/static/backend/plugins/select2/js/select2.full.min.js') }}"></script>
    <script>
        $(document).ready(function() {
            $('.langCodeSelect').select2({
                theme: 'bootstrap4',
                templateResult: formatState,
                templateSelection: formatState
            });
        });
        //Generate language code select options
        function formatState(opt) {
            if (!opt.id) {
                return opt.text.toUpperCase();
            }
            var image = $(opt.element).attr('data-image');
            var optimage = 'flags/' + image + '.png';
            if (!optimage) {
                return opt.text.toUpperCase();
            } else {
                var $opt = $(
                    '<span><img src="/' + optimage + '" width="20px" class="mr-2" /> ' + opt.text
                    .toUpperCase() + '</span>'
                );
                return $opt;
            }
        };
    </script>
@stop
