do {
    var errMessage = false;
    var str = prompt('Enter day of the week below:', '');
    if (str == null) {
        break;
    } else {
        var day = str.toLowerCase();
        switch (day) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
                alert('Working day');
                break;
            case 'saturday':
            case 'sunday':
                alert('Weekend');
                break;
            default: (str == '') ? errMessage = true : errMessage = confirm('Can not define, please try another value');
        }
    }
} while (errMessage != false);