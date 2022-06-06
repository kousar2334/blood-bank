@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('Media') }}
@stop
@section('custom_css')

@stop
@section('admin_content')
    </section>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">{{ translate('Media') }}</h3>
                            <a href="{{ route('admin.media.manager.file.upload') }}"
                                class="btn btn-info btn-sm float-right text-white">{{ translate('Upload New File') }}</a>

                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-2">
                                    <div class="form-group">

                                        <select class="form-control" name="cat_id">
                                            <option>Type</option>
                                        </select>
                                        @if ($errors->has('cat_id'))
                                            <small class="text text-danger">{{ $errors->first('cat_id') }}</small>
                                        @endif
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="form-group">
                                        <select class="form-control" name="cat_id">
                                            <option>Type</option>
                                        </select>
                                        @if ($errors->has('cat_id'))
                                            <small class="text text-danger">{{ $errors->first('cat_id') }}</small>
                                        @endif
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="form-group">

                                        <input type="text" name="phone" class="form-control" placeholder="Enter Phone">
                                        @if ($errors->has('phone'))
                                            <small class="text text-danger">{{ $errors->first('phone') }}</small>
                                        @endif
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="form-group">

                                        <a href="{{ route('admin.media.manager.file.upload') }}"
                                            class="btn btn-info btn-sm  text-white">{{ translate('Upload New File') }}</a>

                                    </div>
                                </div>
                            </div>
                            <div class="gutters-5 row">
                                @foreach ($files as $file)
                                    <div class="col-auto w-140px w-lg-220px">
                                        <div class="media-file-box">
                                            <div class="dropdown-file">
                                                <button type="button" class="btn dropdown-toggle" data-toggle="dropdown"
                                                    aria-expanded="false">
                                                </button>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a href="#" class="dropdown-item" data-toggle="modal"
                                                        data-target="#modal-default">
                                                        <i class="fas fa-info ml-1 mr-2" aria-hidden="true"></i>
                                                        <span> Details Info</span>
                                                    </a>
                                                    <a href="https://demo.activeitzone.com/ecommerce/public/uploads/all/NCTG8i6iUz5EmeyGa2cqTXMz2xj6TbEMTbEfNGZF.png"
                                                        target="_blank" download="Flash Deal 4.png" class="dropdown-item">
                                                        <i class="fas fa-download mr-2" aria-hidden="true"></i>
                                                        <span> Download</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item"
                                                        onclick="copyUrl(this)"
                                                        data-url="https://demo.activeitzone.com/ecommerce/public/uploads/all/NCTG8i6iUz5EmeyGa2cqTXMz2xj6TbEMTbEfNGZF.png">
                                                        <i class="fas fa-link mr-2"></i>
                                                        <span> Copy Link</span>
                                                    </a>
                                                    <a href="javascript:void(0)" class="dropdown-item confirm-alert"
                                                        data-href="https://demo.activeitzone.com/ecommerce/admin/uploaded-files/destroy/1308"
                                                        data-target="#delete-modal">
                                                        <i class="fas fa-trash mr-2" aria-hidden="true"></i>
                                                        <span> Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="card card-file media-uploader-select c-default"
                                                title="Flash Deal 4.png">
                                                <div class="card-file-thumb">
                                                    <img src="{{ asset('/') . $file->path }}" class="img-fit">
                                                </div>
                                                <div class="card-body">
                                                    <h6 class="d-flex">
                                                        <span class="text-truncate title">{{ $file->name }}</span>
                                                    </h6>
                                                    <p>{{ $file->size }}KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                            <div class="mt-2">
                                {{ $files->appends(request()->input())->links() }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade show" id="modal-default">
            <div class="modal-dialog modal-dialog-right">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ translate('File Info') }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <div class="form-group">
                                <label>File Name</label>
                                <input type="text" class="form-control"
                                    value="uploads/all/PSXnLLFoKCogpGRiTPT9pR8DlkdAi6SlzFYNAA8S.zip" disabled="">
                            </div>
                            <div class="form-group">
                                <label>File Type</label>
                                <input type="text" class="form-control" value="archive" disabled="">
                            </div>
                            <div class="form-group">
                                <label>File Size</label>
                                <input type="text" class="form-control" value="82.72 MB" disabled="">
                            </div>
                            <div class="form-group">
                                <label>Uploaded By</label>
                                <input type="text" class="form-control" value="William C. Schroyer" disabled="">
                            </div>
                            <div class="form-group">
                                <label>Uploaded At</label>
                                <input type="text" class="form-control" value="2022-04-27 20:08:21" disabled="">
                            </div>
                            <div class="form-group text-center">
                                <a class="btn btn-secondary"
                                    href="https://demo.activeitzone.com/ecommerce/public/uploads/all/PSXnLLFoKCogpGRiTPT9pR8DlkdAi6SlzFYNAA8S.zip"
                                    target="_blank" download="updates.zip">Download</a>
                                <a class="btn btn-secondary"
                                    href="https://demo.activeitzone.com/ecommerce/public/uploads/all/PSXnLLFoKCogpGRiTPT9pR8DlkdAi6SlzFYNAA8S.zip"
                                    target="_blank" download="updates.zip">Copy Link</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

@stop
@section('custom_script')
    <script type="text/javascript">
        function detailsInfo(e) {
            $('#info-modal-content').html(
                '<div class="c-preloader text-center absolute-center"><i class="las la-spinner la-spin la-3x opacity-70"></i></div>'
            );
            var id = $(e).data('id')
            $('#info-modal').modal('show');
            $.post('https://demo.activeitzone.com/ecommerce/admin/uploaded-files/file-info', {
                _token: media.data.csrf,
                id: id
            }, function(data) {
                $('#info-modal-content').html(data);
                // console.log(data);
            });
        }

        function copyUrl(e) {
            var url = $(e).data('url');
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val(url).select();
            try {
                document.execCommand("copy");
                media.plugins.notify('success', 'Link copied to clipboard');
            } catch (err) {
                media.plugins.notify('danger', 'Oops, unable to copy');
            }
            $temp.remove();
        }

        function sort_uploads(el) {
            $('#sort_uploads').submit();
        }
    </script>

    <script type="text/javascript">
        function menuSearch() {
            var filter, item;
            filter = $("#menu-search").val().toUpperCase();
            items = $("#main-menu").find("a");
            items = items.filter(function(i, item) {
                if ($(item).find(".media-side-nav-text")[0].innerText.toUpperCase().indexOf(filter) > -1 && $(item)
                    .attr('href') !== '#') {
                    return item;
                }
            });

            if (filter !== '') {
                $("#main-menu").addClass('d-none');
                $("#search-menu").html('')
                if (items.length > 0) {
                    for (i = 0; i < items.length; i++) {
                        const text = $(items[i]).find(".media-side-nav-text")[0].innerText;
                        const link = $(items[i]).attr('href');
                        $("#search-menu").append(
                            `<li class="media-side-nav-item"><a href="${link}" class="media-side-nav-link"><i class="las la-ellipsis-h media-side-nav-icon"></i><span>${text}</span></a></li`
                        );
                    }
                } else {
                    $("#search-menu").html(
                        `<li class="media-side-nav-item"><span	class="text-center text-muted d-block">Nothing found</span></li>`
                    );
                }
            } else {
                $("#main-menu").removeClass('d-none');
                $("#search-menu").html('')
            }
        }
    </script>
@stop
