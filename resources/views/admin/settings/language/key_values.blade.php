@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('Language key values') }}
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
                <div class="col-lg-12 col-md-12 col-sm-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">{{ $language->name }}</h3>
                            <a href="{{ route('admin.language.list') }}"
                                class="btn btn-info btn-sm float-right text-white">{{ translate('Languages') }}</a>

                        </div>
                        <div class="card-body row">
                            <form class="form-horizontal col-12" action="{{ route('admin.language.update.key.value') }}"
                                method="POST">
                                @csrf
                                <input type="hidden" name="id" value="{{ $language->id }}">
                                <div class="card-body">
                                    <table class="table table-striped table-bordered" cellspacing="0" width="100%">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th width="45%">{{ translate('Key') }}</th>
                                                <th width="45%">{{ translate('Value') }}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach ($lang_keys as $key => $translation)
                                                <tr>
                                                    <td>{{ $key + 1 + ($lang_keys->currentPage() - 1) * $lang_keys->perPage() }}
                                                    </td>
                                                    <td class="key">{{ $translation->lang_value }}</td>
                                                    <td>
                                                        <input type="text" class="form-control value" style="width:100%"
                                                            name="values[{{ $translation->lang_key }}]"
                                                            @if (($traslate_lang = \App\Model\Translations::where('lang', $language->code)->where('lang_key', $translation->lang_key)->latest()->first()) != null) value="{{ $traslate_lang->lang_value }}" @endif>
                                                    </td>
                                                </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                    <div class="form-group mt-2 text-right">
                                        <button type="submit" class="btn btn-success">{{ translate('Save') }}</button>
                                    </div>
                                    <div class="mt-2">
                                        {{ $lang_keys->appends(request()->input())->links() }}
                                    </div>
                                </div>
                            </form>
                        </div>
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
