@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('Themes') }}
@stop
@section('custom_css')
    <style>
        .theme-card {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px;
        }

        .theme-image {
            margin-top: 0;
            width: 216px;
            border: 1px solid #f6f6f6;
            border-radius: 2px;
        }

        .theme-image img {
            display: block;
            width: 100%;
        }

    </style>
@stop
@section('admin_content')
    <!-- Main content -->
    <section class="content">
        <!--Start Container fluid-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">{{ translate('Themes') }}</h3>
                        </div>
                        <div class="card-body row">
                            @foreach ($themes as $theme)
                                <div class="col-lg-4 p-4">
                                    <form action="{{ route('admin.settings.themes.activate') }}" method="POST">
                                        @csrf
                                        <input type="hidden" name="theme" value="{{ $theme->id }}">
                                        <div class="card card-widget widget-user mt-4">
                                            <div class="theme-card">
                                                <div class="content">
                                                    @if ($theme->code === $activeTheme)
                                                        <div class="badge badge-success">{{ translate('Active') }}</div>
                                                    @endif
                                                    <p>{{ $theme->description }}</p><span>Version: 1.0.0</span>
                                                </div>
                                                <div class="theme-image">
                                                    <img src="{{ asset('/') }}{{ $theme->image }}">
                                                </div>
                                            </div>
                                            <div class="card-footer row m-0 p-2 justify-content-between">
                                                <div class="col-sm-6">
                                                    <h6 class="mt-1 font-weight-bolder">{{ $theme->name }}</h6>
                                                </div>
                                                <div class="d-flex justify-content-sm-end col-sm-6 p-0">
                                                    @if ($theme->code != $activeTheme)
                                                        <button type="submit"
                                                            class="btn btn-sm btn-info float-right">{{ translate('Activate') }}</button>
                                                    @endif
                                                </div>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            @endforeach
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </div>
    </section>
@stop
@section('custom_script')

@stop
