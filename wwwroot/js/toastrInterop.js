// wwwroot/js/toastrInterop.js

window.toastrInterop = function (message, title)
{
    if (message == "success") {
        toastr.success(title);
    }
    if (message == "error") {
        toastr.error(title);
    }
    if (message == "warning") {
        toastr.warning(title);
    }
    if (message == "info") {
        toastr.info(title);
    }
}
