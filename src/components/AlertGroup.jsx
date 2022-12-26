import Swal from "sweetalert2";

export default function AlertSuccess(message) {
    Swal.fire({
        title: message,
        icon: "success",
        showConfirmButton: false,
        background: "#7cfc00",
        timer: 3000,
        timerProgressBar: true,
        toast: true,
        position: "bottom-end",
    });
}

export function AlertError(status, message) {
    Swal.fire({
        title: `Error: ${status}`,
        text: `El error es: ${message}`,
        icon: "error",
        showConfirmButton: false,
        background: "#8b0000",
        timer: 5000,
        timerProgressBar: true,
        toast: true,
        position: "bottom-end",
    });
}
