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
                                <input type="file" hidden multiple>
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
        let files = []; //this is a global variable and we'll use it inside multiple functions
        button.onclick = () => {
            input.click(); //if user click on the button then the input also clicked
        }
        input.addEventListener("change", function() {
            //getting user select file and [0] this means if user select multiple files then we'll select only the first one
            files = this.files;
            dropArea.classList.add("active");
            showFile(); //calling function
        });
        //If user drop File on DropArea
        dropArea.addEventListener("drop", (event) => {
            event.preventDefault(); //preventing from default behaviour
            //getting user select file and [0] this means if user select multiple files then we'll select only the first one
            files = event.dataTransfer.files;
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


        // function showFile() {
        //     console.log(files.length);
        //     for (let i = 0; i < files.length; i++) {
        //         let fileType = files[i].type; //getting selected file type

        //         let validExtensions = ["image/jpeg", "image/jpg",
        //             "image/png"
        //         ]; //adding some valid image extensions in array
        //         if (validExtensions.includes(fileType)) { //if user selected file is an image file
        //             let fileReader = new FileReader(); //creating new FileReader object
        //             fileReader.onload = () => {
        //                 let fileURL = fileReader.result; //passing user file source in fileURL variable
        //                 let imgTag =
        //                     `<img src="${fileURL}" alt="image" width="100px">`; //creating an img tag and passing user selected file source inside src attribute
        //                 dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
        //             }
        //             fileReader.readAsDataURL(files[i]);
        //         } else {
        //             toaster.error('error');
        //             dropArea.classList.remove("active");
        //             dragText.textContent = "Drag & Drop to Upload File";
        //         }
        //     }

        // }
        function showFile() {
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            var formData = new FormData();
            let TotalFiles = files.length;

            for (let i = 0; i < TotalFiles; i++) {
                formData.append('files' + i, files[i]);

            }
            formData.append('TotalFiles', TotalFiles);
            // console.log(formData);
            // $.post('{{ route('admin.media.manager.file.store') }}', {
            //     _token: '{{ csrf_token() }}',
            //     data: formData,
            //     dataType: 'json',
            // }, function(data) {
            //     console.log(data);
            // });
            $.ajax({
                type: 'POST',
                url: "{{ route('admin.media.manager.file.store') }}",
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                dataType: 'json',
                success: (data) => {

                    alert('Files has been uploaded using jQuery ajax');
                },
                error: function(data) {
                    alert(data.responseJSON.errors.files[0]);
                    console.log(data.responseJSON.errors);
                }
            });

        }
    </script>
@stop
