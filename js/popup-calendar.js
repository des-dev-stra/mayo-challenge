mobiscroll.setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

$(function () {

    $('#dob').mobiscroll().datepicker({
        controls: ['calendar'],
        touchUi: true
    });

    var instance = $('#demo-mobile-picker-button').mobiscroll().datepicker({
        controls: ['calendar'],
        touchUi: true,
        showOnClick: false,
        showOnFocus: false
    }).mobiscroll('getInst');

    instance.setVal(new Date(), true);

    $('#demo-mobile-picker-mobiscroll').mobiscroll().datepicker({
        controls: ['calendar'],
        touchUi: true
    });

    $('#demo-mobile-picker-inline').mobiscroll().datepicker({
        controls: ['calendar'],
        touchUi: true,
        display: 'inline'
    });

    $('#show-mobile-date-picker').click(function () {
        instance.open();
        return false;
    });

});