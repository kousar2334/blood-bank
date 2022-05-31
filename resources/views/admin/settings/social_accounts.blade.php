@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('Social Accounts') }}
@stop
@section('custom_css')
@stop
@section('admin_content')
    <!-- Main content -->
    <section class="content">
        <!--Start Container fluid-->
        <div class="container-fluid">
            <div class="row">
                <div class="offset-lg-3 col-lg-6 col-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">{{ translate('Social Accounts') }}</h3>
                        </div>
                        <div class="card-body">
                            <form role="form" action="{{ route('admin.settings.social.acconts.update') }}" method="POST">
                                @csrf
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>{{ translate('Facebook') }}</label>
                                            <input type="hidden" name="id" value="{{ $accounts->id }}">
                                            <input type="text" name="fb_link" value="{{ $accounts->fb_link }}"
                                                class="form-control" placeholder="Enter facebook page link">
                                            @if ($errors->has('fb_link'))
                                                <small class="text text-danger">{{ $errors->first('fb_link') }}</small>
                                            @endif
                                        </div>

                                        <div class="form-group">
                                            <label>{{ translate('Twitter') }}</label>
                                            <input type="text" name="twitter_link" value="{{ $accounts->twitter_link }}"
                                                class="form-control" placeholder="Enter twitter account link">
                                            @if ($errors->has('twitter_link'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('twitter_link') }}</small>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>{{ translate('Youtube') }}</label>
                                            <input type="text" name="youtube_link" value="{{ $accounts->youtube_link }}"
                                                class="form-control" placeholder="Enter youtube channel link">
                                            @if ($errors->has('youtube_link'))
                                                <small
                                                    class="text text-danger">{{ $errors->first('youtube_link') }}</small>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group text-right mt-2">
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

@stop
