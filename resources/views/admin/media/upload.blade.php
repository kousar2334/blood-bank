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

        /**
                                                                                                                                                                                            *Media modal
                                                                                                                                                                                            **/



        .modal.fade .modal-dialog-right {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            height: 100%;
            margin: 0;
            width: 400px;
            max-width: 80vw;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-flow: column nowrap;
            flex-flow: column nowrap;
            background-color: #fff;
            -ms-flex-line-pack: center;
            align-content: center;
            -webkit-transform: translate(50px, 0);
            transform: translate(50px, 0);
        }

        .modal-dialog-right .modal-content {
            height: 100%;
            border: 0;
            border-radius: 0;
            right: 50px;
        }

        .modal-content .modal-header {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            position: relative;
            padding: 12px 25px;
            border-bottom: 1px solid #ebedf2;
            min-height: 60px;
            background-color: transparent;
        }


        .drag-area {
            border: 2px dashed #fff;
            height: 500px;
            width: 100%;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background-color: darkgrey;
        }

        .drag-area.active {
            border: 2px solid #fff;
        }

        .drag-area .icon {
            font-size: 100px;
            color: #fff;
        }

        .drag-area header {
            font-size: 30px;
            font-weight: 500;
            color: #fff;
        }

        .drag-area span {
            font-size: 25px;
            font-weight: 500;
            color: #fff;
            margin: 10px 0 15px 0;
        }

        .drag-area button {
            padding: 10px 25px;
            font-size: 20px;
            font-weight: 500;
            border: none;
            outline: none;
            background: #fff;
            color: #5256ad;
            border-radius: 5px;
            cursor: pointer;
        }

        .drag-area img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 5px;
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
                            <h3 class="card-title">{{ translate('File Upload') }}</h3>
                            <a href="{{ route('admin.media.manager') }}"
                                class="btn btn-info btn-sm float-right text-white">{{ translate('Media') }}</a>

                        </div>
                        <div class="card-body">
                            <div class="drag-area">
                                <div class="icon"><i class="fas fa-cloud-upload-alt"></i></div>
                                <h2 class="header">Drag & Drop to Upload File</h2>
                                <span>OR</span>
                                <button>Browse File</button>
                                <input type="file" hidden>
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
        //selecting all required elements
        const dropArea = document.querySelector(".drag-area"),
            dragText = dropArea.querySelector(".header"),
            button = dropArea.querySelector("button"),
            input = dropArea.querySelector("input");
        let file; //this is a global variable and we'll use it inside multiple functions
        button.onclick = () => {
            input.click(); //if user click on the button then the input also clicked
        }
        input.addEventListener("change", function() {
            //getting user select file and [0] this means if user select multiple files then we'll select only the first one
            file = this.files[0];
            dropArea.classList.add("active");
            showFile(); //calling function
        });
        //If user Drag File Over DropArea
        dropArea.addEventListener("dragover", (event) => {
            event.preventDefault(); //preventing from default behaviour
            dropArea.classList.add("active");
            dragText.textContent = "Release to Upload File";
        });
        //If user leave dragged File from DropArea
        dropArea.addEventListener("dragleave", () => {
            dropArea.classList.remove("active");
            dragText.textContent = "Drag & Drop to Upload File";
        });
        //If user drop File on DropArea
        dropArea.addEventListener("drop", (event) => {
            event.preventDefault(); //preventing from default behaviour
            //getting user select file and [0] this means if user select multiple files then we'll select only the first one
            file = event.dataTransfer.files[0];
            showFile(); //calling function
        });

        function showFile() {
            let fileType = file.type; //getting selected file type
            let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
            if (validExtensions.includes(fileType)) { //if user selected file is an image file
                let fileReader = new FileReader(); //creating new FileReader object
                fileReader.onload = () => {
                    let fileURL = fileReader.result; //passing user file source in fileURL variable
                    // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
                    let imgTag =
                    `<img src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src attribute
                    dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
                }
                fileReader.readAsDataURL(file);
            } else {
                alert("This is not an Image File!");
                dropArea.classList.remove("active");
                dragText.textContent = "Drag & Drop to Upload File";
            }
        }




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
