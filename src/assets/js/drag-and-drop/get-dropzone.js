Dropzone.options.myAwesomeDropzone = {
  maxFiles: 1,
  maxFilesize: 1,
  thumbnailWidth: 300,
  thumbnailHeight: 180,
  addRemoveLinks: true,
  dictResponseError: "Server not Configured",
  acceptedFiles: ".png,.jpg,.jpg,.zip,.jpeg",
  init: function () {
    var self = this;
    // config
    self.options.addRemoveLinks = true;
    self.options.dictRemoveFile = "<i class='fe fe-x'></i>";
    //New file added
    self.on("addedfile", function (file) {
      console.log("new file added ", file);
      while (this.files.length > this.options.maxFiles) {
        this.removeFile(this.files[0]);
      }
    });
    // Send file starts
    self.on("sending", function (file) {
      console.log("upload started", file);
      $(".meter").show();
    });

    // File upload Progress
    self.on("totaluploadprogress", function (progress) {
      console.log("progress ", progress);
      $(".roller").width(progress + "%");
    });

    self.on("queuecomplete", function (progress) {
      $(".meter").delay(999).slideUp(999);
    });

    // On removing file
    self.on("removedfile", function (file) {
      console.log(file);
    });
  },
};