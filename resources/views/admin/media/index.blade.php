@extends('admin.layouts.main')
@section('admin-page-title')
    {{ translate('Media') }}
@stop
@section('custom_css')
    <style>
        .gutters-5 {
            margin-right: -5px;
            margin-left: -5px;
        }

        .gutters-5>.col,
        .gutters-5>[class*="col-"] {
            padding-right: 5px;
            padding-left: 5px;
        }

        .w-140px,
        .size-140px {
            width: 140px;
        }

        .card-file .card-body {
            padding: 10px 0 0;
        }

        @media screen and (min-width: 992px) {

            .w-lg-220px,
            .size-lg-220px {
                width: 220px;
            }
        }


        .media-file-box {
            position: relative;
        }

        .media-file-box:before {
            content: "";
            display: block;
            padding-top: 100%;
        }

        *,
        ::after,
        ::before {
            box-sizing: border-box;
        }

        .media-file-box .dropdown-file {
            position: absolute;
            top: 6px;
            right: 9px;
            z-index: 1;
        }

        .media-file-box .dropdown-file>a {
            color: #5a5a5a;
            font-size: 22px;
            background: #f5f6fa;
            cursor: pointer;
        }

        a:not([href]) {
            color: inherit;
            text-decoration: none;
        }

        .media-file-box .card-file {
            cursor: pointer;
            overflow: hidden;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            opacity: 1;
        }

        .card-file {
            padding: 8px;
            position: relative;
            border-color: rgb(223, 224, 228);
            transition: all 0.2s ease-in-out;
            margin-bottom: 20px;
        }

        .c-default {
            cursor: default !important;
        }

        .img-fit {
            max-height: 100%;
            width: 100%;
            object-fit: cover;
        }

        .card .card-body {
            padding: 20px 25px;
            border-radius: 4px;
        }

        .card-body {
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            min-height: 1px;
            padding: 1.25rem;
        }

        .card-file .card-body h6 {
            font-size: 0.8rem;
            margin-bottom: 0;
        }

        .media-file-box .dropdown-file {
            position: absolute;
            top: 6px;
            right: 9px;
            z-index: 1;
        }

        .media-file-box .dropdown-file>a {
            color: #5a5a5a;
            font-size: 22px;
            background: #f5f6fa;
            cursor: pointer;
        }

        a:not([href]) {
            color: inherit;
            text-decoration: none;
        }

        .media-file-box .card-file .card-file-thumb {
            position: absolute;
            width: calc(100% - 16px);
            top: 8px px;
            left: 8px;
            height: calc(100% - 55px);
        }

        .card-file .card-file-thumb {
            height: 120px;
            background-color: #f5f6fa;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .media-file-box .card-file .card-body {
            position: absolute;
            width: calc(100% - 16px);
            bottom: 5px;
            left: 8px;
        }

        .card-file .card-body {
            padding: 10px 0 0;
        }

        .card-file .card-body p {
            margin-bottom: 0;
            font-size: 9px;
            color: #8392a5;
        }

        .show.dropdown-menu {
            visibility: visible;
            opacity: 1;
            margin-top: 0 !important;
        }

        .dropdown-menu.show {
            display: block;
        }

        .dropdown-menu[x-placement^=bottom],
        .dropdown-menu[x-placement^=left],
        .dropdown-menu[x-placement^=right],
        .dropdown-menu[x-placement^=top] {
            right: auto;
            bottom: auto;
        }

        .dropdown-menu {
            border-color: #e2e5ec;
            margin: 0;
            border-radius: 0;
            min-width: 14rem;
            font-size: inherit;
            padding: 0;
            -webkit-box-shadow: 0 0 50px 0 rgb(82 63 105 / 15%);
            box-shadow: 0 0 50px 0 rgb(82 63 105 / 15%);
            padding: 0.5rem 0;
            border-radius: 4px;
            max-width: 100%;
        }

        .dropdown-item {
            display: block;
            width: 100%;
            padding: 0.5rem 1.1rem;
            clear: both;
            font-weight: 400;
            color: #74788d;
            text-align: inherit;
            white-space: nowrap;
            background-color: transparent;
            border: 0;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

    </style>
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
                        </div>
                        <div class="card-body">
                            <div class="gutters-5 row">
                                <div class="col-auto w-140px w-lg-220px">
                                    <div class="media-file-box">
                                        <div class="dropdown-file">
                                            <a class="dropdown-link" data-toggle="dropdown">
                                                <i class="fas fa-caret-square-down" aria-hidden="true"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a href="javascript:void(0)" class="dropdown-item"
                                                    onclick="detailsInfo(this)" data-id="1308">
                                                    <i class="fas fa-info ml-1 mr-2" aria-hidden="true"></i>
                                                    <span> Details Info</span>
                                                </a>
                                                <a href="https://demo.activeitzone.com/ecommerce/public/uploads/all/NCTG8i6iUz5EmeyGa2cqTXMz2xj6TbEMTbEfNGZF.png"
                                                    target="_blank" download="Flash Deal 4.png" class="dropdown-item">
                                                    <i class="fas fa-download mr-2" aria-hidden="true"></i>
                                                    <span> Download</span>
                                                </a>
                                                <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)"
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
                                                <img src="https://demo.activeitzone.com/ecommerce/public/uploads/all/NCTG8i6iUz5EmeyGa2cqTXMz2xj6TbEMTbEfNGZF.png"
                                                    class="img-fit">
                                            </div>
                                            <div class="card-body">
                                                <h6 class="d-flex">
                                                    <span class="text-truncate title">Flash Deal 4</span>
                                                    <span class="ext">.png</span>
                                                </h6>
                                                <p>242.34 KB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto w-140px w-lg-220px">
                                    <div class="media-file-box">
                                        <div class="dropdown-file">
                                            <a class="dropdown-link" data-toggle="dropdown">
                                                <i class="fas fa-caret-square-down" aria-hidden="true"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a href="javascript:void(0)" class="dropdown-item"
                                                    onclick="detailsInfo(this)" data-id="1308">
                                                    <i class="fas fa-info ml-1 mr-2" aria-hidden="true"></i>
                                                    <span> Details Info</span>
                                                </a>
                                                <a href="https://demo.activeitzone.com/ecommerce/public/uploads/all/NCTG8i6iUz5EmeyGa2cqTXMz2xj6TbEMTbEfNGZF.png"
                                                    target="_blank" download="Flash Deal 4.png" class="dropdown-item">
                                                    <i class="fas fa-download mr-2" aria-hidden="true"></i>
                                                    <span> Download</span>
                                                </a>
                                                <a href="javascript:void(0)" class="dropdown-item" onclick="copyUrl(this)"
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
                                                ffjhjhj
                                                {{-- <img src="https://demo.activeitzone.com/ecommerce/public/uploads/all/NCTG8i6iUz5EmeyGa2cqTXMz2xj6TbEMTbEfNGZF.png"
                                                    class="img-fit"> --}}
                                            </div>
                                            <div class="card-body">
                                                <h6 class="d-flex">
                                                    <span class="text-truncate title">Flash Deal 4</span>
                                                    <span class="ext">.png</span>
                                                </h6>
                                                <p>242.34 KB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
